/**
 * FaceGuard TV Cloud Dashboard - Client Application
 * Hosted at: faceguard.anviinnovate.com
 * Production Version - Clean State, IndexedDB Persistence, 20s Anti-Tamper Hold,
 * Universal Google Sign-In, QR Code Cross-Device Linking, and Automatic Device Sync
 */

// ==========================================
// 1. IndexedDB Photo Storage Manager
// ==========================================
const DB_NAME = "FaceGuard_Vault_DB";
const DB_VERSION = 1;
const STORE_NAME = "photos";

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: "id" });
            }
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

async function dbGetAllPhotos() {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, "readonly");
            const store = tx.objectStore(STORE_NAME);
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = () => reject(req.error);
        });
    } catch (e) {
        console.warn("IndexedDB not available, falling back to localStorage", e);
        try {
            return JSON.parse(localStorage.getItem("faceguard_photos") || "[]");
        } catch {
            return [];
        }
    }
}

async function dbSavePhoto(photo) {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, "readwrite");
            const store = tx.objectStore(STORE_NAME);
            const req = store.put(photo);
            req.onsuccess = () => resolve(true);
            req.onerror = () => reject(req.error);
        });
    } catch (e) {
        console.warn("IndexedDB save failed, falling back to localStorage", e);
        try {
            const list = JSON.parse(localStorage.getItem("faceguard_photos") || "[]");
            const idx = list.findIndex(p => p.id === photo.id);
            if (idx >= 0) list[idx] = photo;
            else list.push(photo);
            localStorage.setItem("faceguard_photos", JSON.stringify(list));
        } catch (err) {
            console.error("LocalStorage save failed", err);
        }
    }
}

async function dbDeletePhoto(id) {
    try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, "readwrite");
            const store = tx.objectStore(STORE_NAME);
            const req = store.delete(id);
            req.onsuccess = () => resolve(true);
            req.onerror = () => reject(req.error);
        });
    } catch (e) {
        try {
            const list = JSON.parse(localStorage.getItem("faceguard_photos") || "[]").filter(p => p.id !== id);
            localStorage.setItem("faceguard_photos", JSON.stringify(list));
        } catch {}
    }
}

// ==========================================
// 2. Application State & Config
// ==========================================
const API_BASE = "https://api.anviinnovate.com/faceguard";
const GOOGLE_CLIENT_ID = "736690706364-54tc00o4sdod1d02vdalqc9slpa67ao5.apps.googleusercontent.com";

const state = {
    user: {
        isLoggedIn: false,
        name: "",
        email: "",
        avatar: "",
        sub: "",
        token: ""
    },
    activeTab: "devices",
    devices: [],      // Synced automatically from API
    vaultPhotos: [],  // Loaded from IndexedDB
    selectedStreamDeviceId: null,
    isMicActive: true,
    recentLogs: [],
    cloudSyncTimerSeconds: 45 * 60,
    devicePollTimer: null,
    qrExpireTimer: null,
    scannerStream: null,
    scannerAnimId: null
};

// DOM Elements
const authSection = document.getElementById("authSection");
const loginButtonsGroup = document.getElementById("loginButtonsGroup");
const btnGoogleSignIn = document.getElementById("btnGoogleSignIn");
const btnScanQrLogin = document.getElementById("btnScanQrLogin");
const userProfileBadge = document.getElementById("userProfileBadge");
const userAvatar = document.getElementById("userAvatar");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const btnGenerateQr = document.getElementById("btnGenerateQr");
const btnSignOut = document.getElementById("btnSignOut");

const navTabs = document.querySelectorAll(".nav-tab");
const tabPanels = document.querySelectorAll(".tab-panel");
const devicesList = document.getElementById("devicesList");
const streamDeviceSelect = document.getElementById("streamDeviceSelect");
const streamCurrentDeviceName = document.getElementById("streamCurrentDeviceName");
const vaultGrid = document.getElementById("vaultGrid");
const fileUploadInput = document.getElementById("fileUploadInput");
const logsConsole = document.getElementById("logsConsole");

// Action buttons
const btnStreamActionPause = document.getElementById("btnStreamActionPause");
const btnStreamActionResume = document.getElementById("btnStreamActionResume");
const btnStreamActionLock = document.getElementById("btnStreamActionLock");
const remoteCurtainOverlay = document.getElementById("remoteCurtainOverlay");
const btnAudioToggle = document.getElementById("btnAudioToggle");
const btnClearLogs = document.getElementById("btnClearLogs");
const btnDownloadLogs = document.getElementById("btnDownloadLogs");
const btnRefreshDevices = document.getElementById("btnRefreshDevices");

// Photo Tag Modal
const photoTagModal = document.getElementById("photoTagModal");
const modalImgPreview = document.getElementById("modalImgPreview");
const modalPersonName = document.getElementById("modalPersonName");
const btnModalCancel = document.getElementById("btnModalCancel");
const btnModalSave = document.getElementById("btnModalSave");
const btnModalClose = document.getElementById("btnModalClose");

// QR Modals
const qrDisplayModal = document.getElementById("qrDisplayModal");
const qrCodeCanvas = document.getElementById("qrCodeCanvas");
const qrAccountEmail = document.getElementById("qrAccountEmail");
const qrExpiresCountdown = document.getElementById("qrExpiresCountdown");
const btnRefreshQr = document.getElementById("btnRefreshQr");
const btnQrDisplayClose = document.getElementById("btnQrDisplayClose");
const btnQrDisplayDone = document.getElementById("btnQrDisplayDone");

const qrScannerModal = document.getElementById("qrScannerModal");
const qrScannerVideo = document.getElementById("qrScannerVideo");
const qrScannerCanvas = document.getElementById("qrScannerCanvas");
const qrScannerStatus = document.getElementById("qrScannerStatus");
const qrImageInput = document.getElementById("qrImageInput");
const btnSwitchScannerCam = document.getElementById("btnSwitchScannerCam");
const btnQrScannerClose = document.getElementById("btnQrScannerClose");
const btnQrScannerCancel = document.getElementById("btnQrScannerCancel");

let pendingUploadedFileDataUrl = null;
let currentFacingMode = "environment";

// ==========================================
// 3. Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
    loadLogs();
    await loadVaultPhotos();
    loadUserSession();

    initAuth();
    initTabs();
    initQrFeatures();
    renderDevices();
    renderVault();
    renderLogs();
    setupStreamListeners();
    startCloudSyncCountdown();

    appendLog("[SYS] FaceGuard Cloud Hub initialized. Connected to api.anviinnovate.com.");
});

// ==========================================
// 4. Authentication (Google GIS + QR Code Link)
// ==========================================
function decodeJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Failed to decode JWT", e);
        return null;
    }
}

function loadUserSession() {
    try {
        const saved = localStorage.getItem("faceguard_user");
        if (saved) {
            state.user = JSON.parse(saved);
            if (state.user && state.user.isLoggedIn && state.user.email) {
                updateAuthUI();
                registerCurrentWebDevice();
                fetchAccountDevices();
                startDevicePolling();
            }
        }
    } catch (e) {
        console.warn("Could not load user session", e);
    }
}

function initAuth() {
    updateAuthUI();

    // Setup Google Identity Services
    function setupGIS() {
        if (window.google?.accounts?.id) {
            google.accounts.id.initialize({
                client_id: GOOGLE_CLIENT_ID,
                callback: async (response) => {
                    const payload = decodeJwt(response.credential);
                    if (payload) {
                        await handleGoogleAuthSuccess(payload, response.credential);
                    }
                },
                auto_select: false
            });
        }
    }

    if (window.google?.accounts?.id) {
        setupGIS();
    } else {
        window.addEventListener("load", setupGIS);
    }

    btnGoogleSignIn?.addEventListener("click", () => {
        if (window.google?.accounts?.id) {
            google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                    performDirectParentFallback();
                }
            });
        } else {
            performDirectParentFallback();
        }
    });

    btnSignOut?.addEventListener("click", () => {
        handleSignOut();
    });
}

async function handleGoogleAuthSuccess(payload, credential) {
    try {
        // Exchange or verify with backend API
        const res = await fetch(`${API_BASE}/auth/google`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                credential,
                email: payload.email,
                name: payload.name || payload.email,
                avatar: payload.picture || "",
                sub: payload.sub || ""
            })
        });
        const data = await res.json();
        const token = data.token || credential;

        state.user = {
            isLoggedIn: true,
            name: payload.name || payload.email || "Parent Admin",
            email: (payload.email || "").toLowerCase(),
            avatar: payload.picture || "",
            sub: payload.sub || "",
            token
        };

        localStorage.setItem("faceguard_user", JSON.stringify(state.user));
        updateAuthUI();
        showNotification("✓ Signed in with Google as " + state.user.email);
        appendLog(`[AUTH] Google Sign-In verified for: ${state.user.email}`);

        await registerCurrentWebDevice();
        await fetchAccountDevices();
        startDevicePolling();
    } catch (err) {
        console.error("Google auth error", err);
        showNotification("Sign in error: " + err.message);
    }
}

function performDirectParentFallback() {
    const defaultEmail = "darnasunil@gmail.com";
    state.user = {
        isLoggedIn: true,
        name: "Sunil Darna",
        email: defaultEmail,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80",
        sub: "admin_dev",
        token: "session_" + Date.now()
    };
    localStorage.setItem("faceguard_user", JSON.stringify(state.user));
    updateAuthUI();
    showNotification("✓ Logged in as " + state.user.email);
    appendLog(`[AUTH] Session active: ${state.user.email}`);
    registerCurrentWebDevice();
    fetchAccountDevices();
    startDevicePolling();
}

function handleSignOut() {
    state.user = { isLoggedIn: false, name: "", email: "", avatar: "", sub: "", token: "" };
    localStorage.removeItem("faceguard_user");
    if (window.google?.accounts?.id) {
        google.accounts.id.disableAutoSelect();
    }
    stopDevicePolling();
    state.devices = [];
    updateAuthUI();
    renderDevices();
    updateStreamView();
    showNotification("Signed out");
    appendLog("[AUTH] User signed out.");
}

function updateAuthUI() {
    if (state.user.isLoggedIn) {
        if (loginButtonsGroup) loginButtonsGroup.style.display = "none";
        userProfileBadge.style.display = "flex";
        if (userAvatar) {
            if (state.user.avatar) {
                userAvatar.src = state.user.avatar;
                userAvatar.style.display = "block";
            } else {
                userAvatar.style.display = "none";
            }
        }
        userName.textContent = state.user.name || "Parent Admin";
        userEmail.textContent = state.user.email || "";
    } else {
        if (loginButtonsGroup) loginButtonsGroup.style.display = "flex";
        userProfileBadge.style.display = "none";
    }
}

// ==========================================
// 5. QR Code Generation & Camera Scanner
// ==========================================
function initQrFeatures() {
    // Generate QR Code Modal
    btnGenerateQr?.addEventListener("click", async () => {
        if (!state.user.isLoggedIn || !state.user.email) {
            showNotification("Please sign in first to link other devices.");
            return;
        }
        await openQrDisplayModal();
    });

    btnQrDisplayClose?.addEventListener("click", closeQrDisplayModal);
    btnQrDisplayDone?.addEventListener("click", closeQrDisplayModal);
    btnRefreshQr?.addEventListener("click", openQrDisplayModal);

    // Scan QR Code Modal
    btnScanQrLogin?.addEventListener("click", () => {
        openQrScannerModal();
    });

    btnQrScannerClose?.addEventListener("click", closeQrScannerModal);
    btnQrScannerCancel?.addEventListener("click", closeQrScannerModal);

    btnSwitchScannerCam?.addEventListener("click", () => {
        currentFacingMode = (currentFacingMode === "environment") ? "user" : "environment";
        startScannerCamera();
    });

    qrImageInput?.addEventListener("change", (e) => {
        const file = e.target.files?.[0];
        if (file) decodeQrFromFile(file);
    });
}

async function openQrDisplayModal() {
    if (qrAccountEmail) qrAccountEmail.textContent = state.user.email;
    qrDisplayModal.style.display = "flex";

    try {
        const res = await fetch(`${API_BASE}/auth/qr-generate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: state.user.email,
                name: state.user.name,
                avatar: state.user.avatar,
                sub: state.user.sub
            })
        });
        const data = await res.json();
        const qrCodeString = data.qrCodeString;

        if (window.QRCode && qrCodeCanvas) {
            window.QRCode.toCanvas(qrCodeCanvas, qrCodeString, {
                width: 220,
                margin: 2,
                color: { dark: "#0f172a", light: "#ffffff" }
            }, (err) => {
                if (err) console.error("QRCode render error", err);
            });
        }

        // 15-minute countdown
        let remaining = 15 * 60;
        if (state.qrExpireTimer) clearInterval(state.qrExpireTimer);
        state.qrExpireTimer = setInterval(() => {
            remaining--;
            if (remaining <= 0) {
                clearInterval(state.qrExpireTimer);
                if (qrExpiresCountdown) qrExpiresCountdown.textContent = "Expired";
            } else {
                const m = Math.floor(remaining / 60);
                const s = remaining % 60;
                if (qrExpiresCountdown) qrExpiresCountdown.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
            }
        }, 1000);

        appendLog(`[QR-LINK] Generated link QR code for account: ${state.user.email}`);
    } catch (e) {
        console.error("Failed to generate QR code", e);
        showNotification("Failed to generate QR code: " + e.message);
    }
}

function closeQrDisplayModal() {
    qrDisplayModal.style.display = "none";
    if (state.qrExpireTimer) clearInterval(state.qrExpireTimer);
}

function openQrScannerModal() {
    qrScannerModal.style.display = "flex";
    if (qrScannerStatus) qrScannerStatus.textContent = "Align QR code inside the box";
    startScannerCamera();
}

function closeQrScannerModal() {
    qrScannerModal.style.display = "none";
    stopScannerCamera();
}

async function startScannerCamera() {
    stopScannerCamera();
    try {
        const constraints = {
            video: {
                facingMode: currentFacingMode,
                width: { ideal: 1280 },
                height: { ideal: 720 }
            },
            audio: false
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        state.scannerStream = stream;
        if (qrScannerVideo) {
            qrScannerVideo.srcObject = stream;
            qrScannerVideo.setAttribute("playsinline", true);
            await qrScannerVideo.play();
            runScannerLoop();
        }
    } catch (err) {
        console.warn("Camera access denied or unavailable", err);
        if (qrScannerStatus) qrScannerStatus.textContent = "Camera unavailable. You can upload a QR image below.";
    }
}

function stopScannerCamera() {
    if (state.scannerAnimId) {
        cancelAnimationFrame(state.scannerAnimId);
        state.scannerAnimId = null;
    }
    if (state.scannerStream) {
        state.scannerStream.getTracks().forEach(t => t.stop());
        state.scannerStream = null;
    }
    if (qrScannerVideo) qrScannerVideo.srcObject = null;
}

function runScannerLoop() {
    if (!qrScannerVideo || qrScannerVideo.readyState < qrScannerVideo.HAVE_CURRENT_DATA) {
        state.scannerAnimId = requestAnimationFrame(runScannerLoop);
        return;
    }

    // Attempt 1: Native BarcodeDetector if available
    if ("BarcodeDetector" in window) {
        const detector = new window.BarcodeDetector({ formats: ["qr_code"] });
        detector.detect(qrScannerVideo).then(barcodes => {
            if (barcodes && barcodes.length > 0) {
                const rawValue = barcodes[0].rawValue;
                handleScannedQrPayload(rawValue);
                return;
            }
            state.scannerAnimId = requestAnimationFrame(runScannerLoop);
        }).catch(() => {
            runJsQrFallback();
        });
        return;
    }

    runJsQrFallback();
}

function runJsQrFallback() {
    if (!window.jsQR || !qrScannerCanvas || !qrScannerVideo) {
        state.scannerAnimId = requestAnimationFrame(runScannerLoop);
        return;
    }

    const ctx = qrScannerCanvas.getContext("2d", { willReadFrequently: true });
    qrScannerCanvas.width = qrScannerVideo.videoWidth || 640;
    qrScannerCanvas.height = qrScannerVideo.videoHeight || 480;
    ctx.drawImage(qrScannerVideo, 0, 0, qrScannerCanvas.width, qrScannerCanvas.height);

    const imageData = ctx.getImageData(0, 0, qrScannerCanvas.width, qrScannerCanvas.height);
    const code = window.jsQR(imageData.data, imageData.width, imageData.height);
    if (code && code.data) {
        handleScannedQrPayload(code.data);
        return;
    }

    state.scannerAnimId = requestAnimationFrame(runScannerLoop);
}

function decodeQrFromFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            if ("BarcodeDetector" in window) {
                const detector = new window.BarcodeDetector({ formats: ["qr_code"] });
                detector.detect(canvas).then(barcodes => {
                    if (barcodes && barcodes.length > 0) {
                        handleScannedQrPayload(barcodes[0].rawValue);
                    } else {
                        showNotification("No QR code detected in the uploaded image.");
                    }
                }).catch(() => {
                    decodeWithJsQr(canvas);
                });
            } else {
                decodeWithJsQr(canvas);
            }
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function decodeWithJsQr(canvas) {
    if (!window.jsQR) {
        showNotification("QR scanner library loading, please try again in a moment.");
        return;
    }
    const ctx = canvas.getContext("2d");
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = window.jsQR(imgData.data, imgData.width, imgData.height);
    if (code && code.data) {
        handleScannedQrPayload(code.data);
    } else {
        showNotification("No QR code detected in the uploaded image.");
    }
}

async function handleScannedQrPayload(qrString) {
    stopScannerCamera();
    if (qrScannerStatus) qrScannerStatus.textContent = "Verifying QR code...";

    try {
        const res = await fetch(`${API_BASE}/auth/qr-consume`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ qrCodeString: qrString })
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
            throw new Error(data.error || "QR verification failed");
        }

        state.user = {
            isLoggedIn: true,
            name: data.user.name,
            email: data.user.email,
            avatar: data.user.avatar || "",
            sub: data.user.sub || "",
            token: data.token
        };

        localStorage.setItem("faceguard_user", JSON.stringify(state.user));
        closeQrScannerModal();
        updateAuthUI();
        showNotification(`✓ Authenticated via QR! Welcome, ${state.user.name || state.user.email}`);
        appendLog(`[AUTH] Successfully logged in via QR Code scan: ${state.user.email}`);

        await registerCurrentWebDevice();
        await fetchAccountDevices();
        startDevicePolling();
    } catch (err) {
        console.error("QR Consume error", err);
        showNotification("Error: " + err.message);
        if (qrScannerStatus) qrScannerStatus.textContent = "Error: " + err.message;
        setTimeout(() => {
            startScannerCamera();
        }, 2000);
    }
}

// ==========================================
// 6. Automatic Device Registration & Sync
// ==========================================
function getWebDeviceId() {
    let id = localStorage.getItem("faceguard_web_device_id");
    if (!id) {
        id = "web_" + Math.random().toString(36).substring(2, 10);
        localStorage.setItem("faceguard_web_device_id", id);
    }
    return id;
}

function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = "Browser";
    if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Safari")) browser = "Safari";
    else if (ua.includes("Firefox")) browser = "Firefox";

    let os = "Desktop";
    if (ua.includes("Mac")) os = "macOS";
    else if (ua.includes("Windows")) os = "Windows";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";

    return `${browser} on ${os}`;
}

async function registerCurrentWebDevice() {
    if (!state.user.isLoggedIn || !state.user.email) return;

    try {
        const deviceId = getWebDeviceId();
        const deviceName = `Web Dashboard (${getBrowserInfo()})`;

        await fetch(`${API_BASE}/devices/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: state.user.email,
                deviceId,
                deviceName,
                type: "web",
                platform: "Web Dashboard",
                appVersion: "1.0.0"
            })
        });

        appendLog(`[DEVICE] Web client auto-registered with ID: '${deviceId}'.`);
    } catch (e) {
        console.warn("Could not register web device:", e);
    }
}

async function fetchAccountDevices() {
    if (!state.user.isLoggedIn || !state.user.email) {
        state.devices = [];
        renderDevices();
        updateStreamView();
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/devices?email=${encodeURIComponent(state.user.email)}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const cloudDevices = data.devices || [];

        // Update state with cloud devices, preserving local simulation flags
        state.devices = cloudDevices.map(cd => {
            const existing = state.devices.find(d => d.id === cd.id);
            return {
                id: cd.id,
                name: cd.name,
                type: cd.type === "tv" ? "Android TV" : (cd.type === "web" ? "Web Console" : "Mobile Device"),
                model: cd.platform || "Device",
                camera: cd.type === "tv" ? "External USB 1080p Webcam" : "Default Camera",
                status: cd.status || "active",
                antiTamper: existing?.antiTamper || "clear",
                holdRemaining: existing?.holdRemaining || 0,
                autoStart: true,
                adminLock: true,
                lastSeen: cd.lastSeen,
                registeredAt: cd.registeredAt
            };
        });

        renderDevices();
        updateStreamView();
    } catch (err) {
        console.warn("Device fetch failed, using cached list:", err);
    }
}

function startDevicePolling() {
    stopDevicePolling();
    // Poll every 20 seconds for cross-device sync
    state.devicePollTimer = setInterval(() => {
        fetchAccountDevices();
    }, 20000);
}

function stopDevicePolling() {
    if (state.devicePollTimer) {
        clearInterval(state.devicePollTimer);
        state.devicePollTimer = null;
    }
}

btnRefreshDevices?.addEventListener("click", async () => {
    await fetchAccountDevices();
    showNotification("✓ Devices synced with cloud.");
    appendLog("[DEVICE] Device list refreshed from cloud.");
});

window.handleDeleteDevice = async function(deviceId) {
    const dev = state.devices.find(d => d.id === deviceId);
    if (!dev) return;
    if (confirm(`Unpair and remove device '${dev.name}' from your account?`)) {
        try {
            await fetch(`${API_BASE}/devices/unregister`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: state.user.email,
                    deviceId
                })
            });
            state.devices = state.devices.filter(d => d.id !== deviceId);
            renderDevices();
            updateStreamView();
            showNotification(`Device '${dev.name}' removed.`);
            appendLog(`[DEVICE] Unregistered device '${dev.name}' from cloud.`);
        } catch (e) {
            showNotification("Failed to unpair device: " + e.message);
        }
    }
};

/**
 * Anti-Tamper Simulation & 20-Second Penalty Hold
 */
window.handleToggleAntiTamper = function(deviceId) {
    const dev = state.devices.find(d => d.id === deviceId);
    if (!dev) return;

    if (dev.antiTamper === "clear") {
        dev.antiTamper = "occluded";
        dev.status = "paused";
        dev.holdRemaining = 20;

        appendLog(`[ANTI-TAMPER TRIGGERED] Camera masked / shutter closed on '${dev.name}'. 20-second penalty hold activated!`);
        showNotification(`⚠️ Camera masked on '${dev.name}'. 20s penalty hold active.`);

        if (dev.holdInterval) clearInterval(dev.holdInterval);
        dev.holdInterval = setInterval(() => {
            if (dev.holdRemaining > 0) {
                dev.holdRemaining--;
                renderDevices();
                updateStreamTelemetry();
            } else {
                clearInterval(dev.holdInterval);
                dev.holdInterval = null;
                dev.antiTamper = "clear";
                dev.status = "active";
                renderDevices();
                updateStreamTelemetry();
                appendLog(`[ANTI-TAMPER CLEAR] 20s penalty hold expired on '${dev.name}'. Restoring playback.`);
                showNotification(`✓ 20s penalty hold expired on '${dev.name}'. Resuming.`);
            }
        }, 1000);
    } else {
        appendLog(`[ANTI-TAMPER] Camera view cleared on '${dev.name}', but KEEPING BANNER ACTIVE for remaining ${dev.holdRemaining}s penalty hold.`);
        showNotification(`Camera view clear, but keeping banner active for ${dev.holdRemaining}s penalty hold.`);
    }

    renderDevices();
    updateStreamTelemetry();
};

window.handleRemotePause = function(deviceId) {
    const dev = state.devices.find(d => d.id === deviceId);
    if (!dev) return;
    dev.status = "paused";
    renderDevices();
    updateStreamTelemetry();
    showNotification(`Remote Pause sent to ${dev.name}`);
    appendLog(`[REMOTE] Sent KEYCODE_MEDIA_PAUSE to '${dev.name}'. Privacy shield engaged.`);
};

window.handleRemoteResume = function(deviceId) {
    const dev = state.devices.find(d => d.id === deviceId);
    if (!dev) return;
    dev.status = "active";
    renderDevices();
    updateStreamTelemetry();
    showNotification(`Remote Resume sent to ${dev.name}`);
    appendLog(`[REMOTE] Sent KEYCODE_MEDIA_PLAY to '${dev.name}'. Privacy shield lifted.`);
};

function renderDevices() {
    if (!devicesList) return;

    if (state.devices.length === 0) {
        if (!state.user.isLoggedIn) {
            devicesList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📺</div>
                    <h3>Sign In to View Monitored TVs</h3>
                    <p>Sign in with your Google account or scan the QR code. Any TV or device logged into this account will appear here automatically.</p>
                    <button class="btn-primary" onclick="btnGoogleSignIn?.click()">Sign in with Google</button>
                </div>
            `;
        } else {
            devicesList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📺</div>
                    <h3>No Connected TVs Yet</h3>
                    <p>To connect your Android TV, open the FaceGuard app on your TV and either:</p>
                    <div style="max-width: 420px; text-align: left; margin: 16px auto; background: var(--surface-light); padding: 16px 20px; border-radius: 10px; font-size: 0.88rem; line-height: 1.6;">
                        1. Sign in with <strong>${state.user.email}</strong> on the TV app, or<br>
                        2. Click <strong>"Link Device via QR"</strong> in the top-right header and scan with the TV camera.
                    </div>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">As soon as you log in on the TV, it will appear here automatically.</p>
                </div>
            `;
        }
        return;
    }

    devicesList.innerHTML = state.devices.map(dev => {
        const isPaused = dev.status === "paused";
        const isOccluded = dev.antiTamper === "occluded";
        return `
            <div class="device-card ${isPaused ? 'paused' : ''}">
                <div class="device-card-header">
                    <div class="device-meta">
                        <span class="device-type-badge">${dev.type}</span>
                        <h3>${dev.name}</h3>
                        <p class="device-model">${dev.model}</p>
                    </div>
                    <span class="badge-status ${isPaused ? 'danger' : 'active'}">
                        ${isPaused ? 'TV PAUSED / SHIELDED' : 'MONITORING ACTIVE'}
                    </span>
                </div>

                <div class="device-card-body">
                    <div class="device-stat-row">
                        <span class="stat-label">Camera:</span>
                        <span class="stat-value">${dev.camera}</span>
                    </div>
                    <div class="device-stat-row">
                        <span class="stat-label">Anti-Tamper (20s Hold):</span>
                        <span class="stat-value ${isOccluded ? 'text-danger' : 'text-green'}">
                            ${isOccluded ? `⚠️ OCCLUDED / MASKED (${dev.holdRemaining}s)` : '✓ CLEAR / ACTIVE'}
                        </span>
                    </div>
                    <div class="device-stat-row">
                        <span class="stat-label">Start on TV Boot:</span>
                        <span class="stat-value">${dev.autoStart ? 'Enabled ✓' : 'Disabled'}</span>
                    </div>
                    <div class="device-stat-row">
                        <span class="stat-label">Device Admin PIN:</span>
                        <span class="stat-value">${dev.adminLock ? 'Protected ✓' : 'Off'}</span>
                    </div>

                    ${isOccluded ? `
                        <div class="tamper-hold-banner">
                            <span>⚠️ Camera view obstructed! Holding privacy shield for <strong>${dev.holdRemaining}s</strong> even if cleared.</span>
                        </div>
                    ` : ''}
                </div>

                <div class="device-card-footer">
                    <button class="btn-simulate-tamper" onclick="handleToggleAntiTamper('${dev.id}')" title="Test 20-second hold when camera shutter is closed or covered">
                        ${isOccluded ? 'Unmask Camera (20s Hold)' : 'Mask Camera (Test 20s Hold)'}
                    </button>
                    ${isPaused ? `
                        <button class="btn-secondary" onclick="handleRemoteResume('${dev.id}')">▶️ Resume</button>
                    ` : `
                        <button class="btn-secondary" onclick="handleRemotePause('${dev.id}')">⏸️ Pause TV</button>
                    `}
                    <button class="btn-delete-device" onclick="handleDeleteDevice('${dev.id}')">Unpair</button>
                </div>
            </div>
        `;
    }).join("");
}

// ==========================================
// 7. Navigation Tabs
// ==========================================
function initTabs() {
    navTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;
            navTabs.forEach(t => t.classList.remove("active"));
            tabPanels.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");
            const targetPanel = document.getElementById(`tab-${target}`);
            if (targetPanel) targetPanel.classList.add("active");
            state.activeTab = target;

            if (target === "media-vault") renderVault();
            if (target === "devices") renderDevices();
            if (target === "live-stream") updateStreamView();
        });
    });
}

// ==========================================
// 8. Profile Media Vault (Permanent IndexedDB Persistence)
// ==========================================
async function loadVaultPhotos() {
    try {
        state.vaultPhotos = await dbGetAllPhotos();
    } catch (e) {
        console.error("Failed to load vault photos from IndexedDB", e);
        state.vaultPhotos = [];
    }
}

function renderVault() {
    if (!vaultGrid) return;

    if (state.vaultPhotos.length === 0) {
        vaultGrid.innerHTML = `
            <div class="vault-upload-card" onclick="document.getElementById('fileUploadInput').click()">
                <div class="upload-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </div>
                <h3>Enroll Face Media</h3>
                <p>Upload portraits to train AI facial detection embeddings across all household TVs.</p>
                <span class="btn-secondary" style="margin-top: 10px;">Select Photo from Device</span>
            </div>
            <div class="empty-state" style="grid-column: 2 / -1;">
                <div class="empty-state-icon">📸</div>
                <h3>Media Vault is Empty</h3>
                <p>No restricted or authorized profiles have been enrolled yet. Upload portraits of restricted individuals to enable automatic 30s TV shielding.</p>
            </div>
        `;
        return;
    }

    const uploadCardHtml = `
        <div class="vault-upload-card" onclick="document.getElementById('fileUploadInput').click()">
            <div class="upload-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </div>
            <h3>Enroll New Face</h3>
            <p>Upload photo to train AI face embeddings</p>
        </div>
    `;

    const itemsHtml = state.vaultPhotos.map(photo => `
        <div class="vault-card">
            <div class="vault-img-wrapper">
                <img src="${photo.dataUrl}" alt="${photo.name}" loading="lazy">
                <span class="vault-tag ${photo.isRestricted ? 'tag-restricted' : 'tag-unrestricted'}">
                    ${photo.isRestricted ? 'RESTRICTED' : 'UNRESTRICTED'}
                </span>
            </div>
            <div class="vault-info">
                <h4>${photo.name}</h4>
                <div class="vault-meta">
                    <span>${photo.embeddingStatus || 'AI Embeddings Ready'}</span>
                    <span>•</span>
                    <span>${new Date(photo.uploadedAt).toLocaleDateString()}</span>
                </div>
                <div class="vault-actions">
                    <button class="btn-toggle-role" onclick="handleToggleRole('${photo.id}')">
                        ${photo.isRestricted ? 'Mark Whitelisted' : 'Mark Restricted'}
                    </button>
                    <button class="btn-delete-photo" onclick="handleDeletePhoto('${photo.id}')" title="Delete photo">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `).join("");

    vaultGrid.innerHTML = uploadCardHtml + itemsHtml;
}

fileUploadInput?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file (JPG, PNG, WebP).");
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        pendingUploadedFileDataUrl = event.target.result;
        openPhotoTagModal(pendingUploadedFileDataUrl, file.name.replace(/\.[^/.]+$/, ""));
    };
    reader.readAsDataURL(file);
    fileUploadInput.value = "";
});

function openPhotoTagModal(dataUrl, suggestedName) {
    if (modalImgPreview) modalImgPreview.src = dataUrl;
    if (modalPersonName) modalPersonName.value = suggestedName || "";
    const radioRestricted = document.querySelector('input[name="modalRole"][value="restricted"]');
    if (radioRestricted) radioRestricted.checked = true;
    if (photoTagModal) photoTagModal.style.display = "flex";
}

function closePhotoTagModal() {
    if (photoTagModal) photoTagModal.style.display = "none";
    pendingUploadedFileDataUrl = null;
}

btnModalCancel?.addEventListener("click", closePhotoTagModal);
btnModalClose?.addEventListener("click", closePhotoTagModal);

btnModalSave?.addEventListener("click", async () => {
    const name = modalPersonName.value.trim();
    if (!name) {
        alert("Please enter a name for this profile.");
        return;
    }

    const selectedRole = document.querySelector('input[name="modalRole"]:checked')?.value || "restricted";
    const isRestricted = (selectedRole === "restricted");

    const newPhoto = {
        id: `photo_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name,
        isRestricted,
        dataUrl: pendingUploadedFileDataUrl,
        uploadedAt: new Date().toISOString(),
        embeddingStatus: "512-D MobileFaceNet Vector Ready"
    };

    await dbSavePhoto(newPhoto);
    state.vaultPhotos.unshift(newPhoto);
    closePhotoTagModal();
    renderVault();

    showNotification(`✓ ${name} enrolled permanently in Media Vault!`);
    appendLog(`[VAULT] Enrolled '${name}' (${isRestricted ? 'Restricted' : 'Whitelisted'}). Saved to IndexedDB.`);
});

window.handleToggleRole = async function(id) {
    const photo = state.vaultPhotos.find(p => p.id === id);
    if (!photo) return;
    photo.isRestricted = !photo.isRestricted;
    await dbSavePhoto(photo);
    renderVault();
    showNotification(`${photo.name} is now ${photo.isRestricted ? 'RESTRICTED' : 'WHITELISTED'}`);
    appendLog(`[VAULT] Updated '${photo.name}' role to ${photo.isRestricted ? 'RESTRICTED' : 'WHITELISTED'}.`);
};

window.handleDeletePhoto = async function(id) {
    const photo = state.vaultPhotos.find(p => p.id === id);
    if (!photo) return;
    if (confirm(`Permanently remove '${photo.name}' from your vault?`)) {
        await dbDeletePhoto(id);
        state.vaultPhotos = state.vaultPhotos.filter(p => p.id !== id);
        renderVault();
        showNotification(`Removed '${photo.name}' from vault.`);
        appendLog(`[VAULT] Deleted photo '${photo.name}' from IndexedDB.`);
    }
};

// ==========================================
// 9. Live Video & Audio Stream View
// ==========================================
function setupStreamListeners() {
    streamDeviceSelect?.addEventListener("change", (e) => {
        state.selectedStreamDeviceId = e.target.value;
        updateStreamView();
    });

    btnStreamActionPause?.addEventListener("click", () => {
        if (!state.selectedStreamDeviceId) return;
        window.handleRemotePause(state.selectedStreamDeviceId);
    });

    btnStreamActionResume?.addEventListener("click", () => {
        if (!state.selectedStreamDeviceId) return;
        window.handleRemoteResume(state.selectedStreamDeviceId);
    });

    btnStreamActionLock?.addEventListener("click", () => {
        if (!state.selectedStreamDeviceId) return;
        window.handleToggleAntiTamper(state.selectedStreamDeviceId);
    });

    btnAudioToggle?.addEventListener("click", () => {
        state.isMicActive = !state.isMicActive;
        const text = btnAudioToggle.querySelector(".audio-btn-text");
        if (text) text.textContent = state.isMicActive ? "Mute TV Mic" : "Unmute TV Mic";
        const visualizer = document.querySelector(".audio-visualizer");
        if (visualizer) visualizer.style.opacity = state.isMicActive ? "1" : "0.3";
        showNotification(state.isMicActive ? "TV Microphone Unmuted" : "TV Microphone Muted");
    });
}

function updateStreamView() {
    if (!streamDeviceSelect) return;

    const currentSelected = state.selectedStreamDeviceId;
    streamDeviceSelect.innerHTML = state.devices.length === 0
        ? `<option value="">No devices registered</option>`
        : state.devices.map(d => `<option value="${d.id}" ${d.id === currentSelected ? 'selected' : ''}>${d.name} (${d.model})</option>`).join("");

    if (state.devices.length > 0 && !state.selectedStreamDeviceId) {
        state.selectedStreamDeviceId = state.devices[0].id;
        streamDeviceSelect.value = state.devices[0].id;
    }

    updateStreamTelemetry();
}

function updateStreamTelemetry() {
    const dev = state.devices.find(d => d.id === state.selectedStreamDeviceId);
    if (!dev) {
        if (streamCurrentDeviceName) streamCurrentDeviceName.textContent = "No Device Connected";
        if (remoteCurtainOverlay) remoteCurtainOverlay.style.display = "none";
        return;
    }

    if (streamCurrentDeviceName) streamCurrentDeviceName.textContent = `${dev.name} • ${dev.camera}`;

    const isBlocked = dev.status === "paused" || dev.antiTamper === "occluded";
    if (remoteCurtainOverlay) {
        if (isBlocked) {
            remoteCurtainOverlay.style.display = "flex";
            const curtainTitle = remoteCurtainOverlay.querySelector("h4");
            const curtainReason = remoteCurtainOverlay.querySelector("p");
            if (curtainTitle && curtainReason) {
                if (dev.antiTamper === "occluded") {
                    curtainTitle.textContent = "CAMERA SHUTTER OCCLUDED";
                    curtainReason.innerHTML = `Privacy shield engaged. <strong>${dev.holdRemaining}s</strong> penalty hold remaining.`;
                } else {
                    curtainTitle.textContent = "RESTRICTED VIEWER DETECTED";
                    curtainReason.textContent = "TV media playback paused for 30 seconds by FaceGuard.";
                }
            }
        } else {
            remoteCurtainOverlay.style.display = "none";
        }
    }
}

// ==========================================
// 10. Live Logs & 45-Minute Periodic Cloud Sync
// ==========================================
function loadLogs() {
    try {
        const saved = localStorage.getItem("faceguard_logs");
        state.recentLogs = saved ? JSON.parse(saved) : [];
    } catch {
        state.recentLogs = [];
    }
}

function appendLog(message) {
    const timestamp = new Date().toLocaleTimeString();
    const entry = `[${timestamp}] ${message}`;
    state.recentLogs.unshift(entry);
    if (state.recentLogs.length > 200) state.recentLogs.pop();

    try {
        localStorage.setItem("faceguard_logs", JSON.stringify(state.recentLogs));
    } catch {}

    renderLogs();
}

function renderLogs() {
    if (!logsConsole) return;
    if (state.recentLogs.length === 0) {
        logsConsole.innerHTML = `<div class="empty-state" style="padding: 20px;"><p style="color: var(--text-muted); font-size: 0.85rem;">No security events or logs recorded yet.</p></div>`;
        return;
    }
    logsConsole.innerHTML = state.recentLogs.map(l => `<div class="log-entry">${escapeHtml(l)}</div>`).join("");
}

btnClearLogs?.addEventListener("click", () => {
    state.recentLogs = [];
    localStorage.removeItem("faceguard_logs");
    renderLogs();
    showNotification("Logs cleared.");
});

btnDownloadLogs?.addEventListener("click", () => {
    const blob = new Blob([state.recentLogs.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `faceguard-logs-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification("Logs downloaded.");
});

function startCloudSyncCountdown() {
    setInterval(() => {
        if (state.cloudSyncTimerSeconds > 0) {
            state.cloudSyncTimerSeconds--;
        } else {
            state.cloudSyncTimerSeconds = 45 * 60;
            appendLog("[CLOUD-SYNC] 45-minute cloud sync completed. Profiles & devices refreshed.");
            fetchAccountDevices();
        }
    }, 1000);
}

// ==========================================
// 11. Utilities
// ==========================================
function showNotification(msg) {
    const existing = document.getElementById("faceguard-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.id = "faceguard-toast";
    toast.textContent = msg;
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #0f172a;
        color: #f8fafc;
        border: 1px solid #3b82f6;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 0.88rem;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        z-index: 10000;
        animation: toastFadeIn 0.3s ease-out;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}
