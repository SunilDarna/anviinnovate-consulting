// Shows the signed-in user (from /auth/me) with a logout button.
import { useEffect, useState } from "react";
import { api } from "../lib/api.js";

export default function AuthStatus() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api("/auth/me").then(({ ok, data }) => {
      if (ok) setUser(data.user);
      setLoading(false);
    });
  }, []);

  async function logout() {
    await api("/auth/logout", { method: "POST" });
    window.location.href = "/";
  }

  if (loading) return <span>…</span>;
  if (!user) return <a href="/login">Sign in</a>;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      {user.picture && <img src={user.picture} alt="" width="28" height="28" style={{ borderRadius: "50%" }} />}
      <span>{user.name}</span>
      <button onClick={logout} style={{ cursor: "pointer" }}>Sign out</button>
    </span>
  );
}
