// Header auth widget: signed-out shows "Sign in"; signed-in shows the avatar +
// name as a dropdown with account/profile access and sign out.
import { useEffect, useRef, useState } from "react";
import { api } from "../lib/api.js";

export default function AuthStatus() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    api("/auth/me").then(({ ok, data }) => { if (ok) setUser(data.user); setLoading(false); });
  }, []);
  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  async function logout() {
    await api("/auth/logout", { method: "POST" });
    window.location.href = "/";
  }

  // Invisible placeholder until /auth/me resolves — no header shift, no stray "…".
  if (loading) return <span aria-hidden="true" style={{ display: "inline-block", width: "1px" }} />;
  if (!user) return <a href="/login">Sign in</a>;

  const name = user.displayName || user.name || user.email;
  return (
    <span ref={ref} style={{ position: "relative", display: "inline-flex" }}>
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-haspopup="menu"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "none", border: "1px solid var(--border)",
          borderRadius: 999, padding: "4px 10px 4px 4px", cursor: "pointer", font: "inherit", color: "var(--ink)" }}>
        {user.picture
          ? <img src={user.picture} alt="" width="28" height="28" style={{ borderRadius: "50%" }} />
          : <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--ink)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 13 }}>{(name || "?")[0].toUpperCase()}</span>}
        <span style={{ fontWeight: 600, fontSize: 14, maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9" /></svg>
      </button>
      {open && (
        <div role="menu" style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, minWidth: 180, background: "#fff",
          border: "1px solid var(--border)", borderRadius: 10, boxShadow: "var(--shadow)", padding: 6, zIndex: 60 }}>
          <a role="menuitem" href="/account" style={menuItem}>My account</a>
          <a role="menuitem" href="/account" style={menuItem}>Profile &amp; settings</a>
          <button role="menuitem" onClick={logout} style={{ ...menuItem, width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", font: "inherit", color: "var(--error)" }}>Sign out</button>
        </div>
      )}
    </span>
  );
}

const menuItem = { display: "block", padding: "9px 12px", borderRadius: 8, textDecoration: "none", color: "var(--ink)", fontSize: 14 };
