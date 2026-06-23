// "Continue with Google" island. Uses GIS code model (authorization code + PKCE).
// On success it posts the code to /auth/google, which sets the session cookie.
import { useEffect, useRef, useState } from "react";
import { api } from "../lib/api.js";

const CLIENT_ID = import.meta.env.PUBLIC_GOOGLE_CLIENT_ID;

export default function GoogleLogin({ redirectTo = "/account" }) {
  const [status, setStatus] = useState("idle");
  const clientRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      clientRef.current = window.google.accounts.oauth2.initCodeClient({
        client_id: CLIENT_ID,
        scope: "openid email profile",
        ux_mode: "popup",
        callback: async (resp) => {
          if (!resp.code) { setStatus("error"); return; }
          setStatus("verifying");
          const { ok } = await api("/auth/google", { method: "POST", body: { code: resp.code } });
          if (ok) window.location.href = redirectTo;
          else setStatus("error");
        },
      });
    };
    document.head.appendChild(script);
    return () => script.remove();
  }, [redirectTo]);

  return (
    <div>
      <button
        onClick={() => { setStatus("opening"); clientRef.current?.requestCode(); }}
        disabled={status === "verifying"}
        style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          padding: "12px 20px", fontSize: "16px", fontWeight: 600,
          color: "#0F172A", background: "#FFFFFF", border: "1px solid #475569",
          borderRadius: "8px", cursor: "pointer",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.6 2.4 30.2 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.9 6.1C12.3 13.3 17.7 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 3-2.2 5.5-4.7 7.2l7.3 5.7c4.3-3.9 6.7-9.7 6.7-17.4z"/>
          <path fill="#FBBC05" d="M10.4 28.6c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-7.9-6.1C.9 16.5 0 20.1 0 24s.9 7.5 2.5 10.7l7.9-6.1z"/>
          <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.3-5.7c-2 1.4-4.7 2.3-7.9 2.3-6.3 0-11.7-3.8-13.6-9.1l-7.9 6.1C6.4 42.6 14.6 48 24 48z"/>
        </svg>
        {status === "verifying" ? "Signing you in…" : "Continue with Google"}
      </button>
      {status === "error" && (
        <p style={{ color: "#DC2626", marginTop: "8px" }}>Sign-in failed. Please try again.</p>
      )}
    </div>
  );
}
