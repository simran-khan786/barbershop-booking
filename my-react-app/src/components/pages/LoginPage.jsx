import { useState } from "react";

function LoginPage({ onNavigate }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ LOGIN
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields ❌");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
  alert("Login Successful ✅");

  if (data?.token) {
    localStorage.setItem("token", data.token);
  }

  // ✅ SAVE ROLE
  if (data?.role) {
    localStorage.setItem("role", data.role);
  }

  // ✅ ROLE BASED REDIRECT
  if (data.role === "OWNER") {
    onNavigate("owner");
  } else {
    onNavigate("home");
  }

        

      } else {
        alert(data?.message || data || "Login failed ❌");
      }

    } catch (err) {
      console.error(err);
      alert("Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  // 🔐 FORGOT PASSWORD
  const handleForgotPassword = async () => {

  const userEmail = prompt("Enter your registered email 📧");

  if (!userEmail) {
    alert("Email is required ❌");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("http://localhost:8080/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: userEmail })
    });

    const data = await res.text();

    if (res.ok) {
      alert("Reset link sent to your email 📩");
    } else {
      alert(data || "Something went wrong ❌");
    }

  } catch (err) {
    console.error(err);
    alert("Server Error ❌");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0f12]">
      <div className="pointer-events-none absolute -left-16 top-28 h-64 w-64 rounded-full bg-[#2a1c12] opacity-45 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-0 h-96 w-96 rounded-full bg-[#1a2130] opacity-35 blur-[140px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10">
        <div className="flex items-center justify-between">
          <button
            className="text-sm font-semibold text-white/70 transition hover:text-[var(--accent)]"
            onClick={() => onNavigate("landing")}
            type="button"
          >
            &larr; Back to home
          </button>
          <button
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            onClick={() => onNavigate("register")}
            type="button"
          >
            Create account
          </button>
        </div>

        <div className="mt-12 flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Welcome back
            </p>
            <h1 className="font-display mt-4 text-4xl text-white md:text-5xl">
              Log in to your account
            </h1>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              Enter your email and password to continue.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-[#1c1d22] p-6 text-left shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)] md:p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 placeholder:text-white/40"
                    placeholder="you@barberbook.com"
                    type="email"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 placeholder:text-white/40"
                    placeholder="********"
                    type="password"
                  />
                </div>

                {/* 🔐 CONNECTED FORGOT PASSWORD */}
                <div className="text-right">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-xs font-semibold text-[var(--accent)] transition hover:text-[#f7a23b]"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-white/60">
                  <label className="flex items-center gap-2">
                    <input className="h-4 w-4 accent-[var(--accent)]" type="checkbox" />
                    Remember this device
                  </label>
                </div>

                <button
                  onClick={handleLogin}
                  className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--on-dark)] shadow-lg shadow-[var(--accent)]/30 transition hover:-translate-y-0.5"
                  type="button"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Log In"}
                </button>

                <p className="text-center text-[11px] text-white/60">
                  By continuing, you agree to our studio terms and privacy policy.
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;