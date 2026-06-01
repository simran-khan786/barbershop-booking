import { useState } from "react";
import toast from "react-hot-toast";

function LoginPage({ onNavigate }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields ❌");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);
      if (res.ok) {
        toast.success("Login Successful ✅");
        if (data?.token) localStorage.setItem("token", data.token);
        if (data?.role) localStorage.setItem("role", data.role);
        setTimeout(() => {
          if (data.role === "OWNER") onNavigate("owner");
          else onNavigate("home");
        }, 2500);
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

  const handleForgotPassword = async () => {
    const userEmail = prompt("Enter your registered email 📧");
    if (!userEmail) { alert("Email is required ❌"); return; }
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail })
      });
      const data = await res.text();
      if (res.ok) alert("Reset link sent to your email 📩");
      else alert(data || "Something went wrong ❌");
    } catch (err) {
      console.error(err);
      alert("Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F7FA]">
      {/* Orbs */}
      <div className="pointer-events-none absolute -left-16 top-28 h-64 w-64 rounded-full bg-[#EEF4FF] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-0 h-96 w-96 rounded-full bg-[#D6E4FF] opacity-40 blur-[140px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10">

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <button
            className="text-sm font-semibold text-[#6B7280] transition hover:text-[#1E3A5F]"
            onClick={() => onNavigate("landing")}
            type="button"
          >
            &larr; Back to home
          </button>
          <button
            className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-semibold text-[#6B7280] transition hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
            onClick={() => onNavigate("register")}
            type="button"
          >
            Create account
          </button>
        </div>

        <div className="mt-12 flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl text-center">

            <p className="text-xs uppercase tracking-[0.3em] text-[#1E3A5F]">
              Welcome back
            </p>
            <h1 className="font-display mt-4 text-4xl text-[#1A1A1A] md:text-5xl">
              Log in to your account
            </h1>
            <p className="mt-4 text-sm text-[#6B7280] md:text-base">
              Enter your email and password to continue.
            </p>

            {/* Card */}
            <div className="mt-8 rounded-[28px] border border-[#E5E7EB] bg-white p-6 text-left shadow-[0_24px_60px_-30px_rgba(0,0,0,0.1)] md:p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-sm text-[#1A1A1A] outline-none transition focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 placeholder:text-[#6B7280]"
                    placeholder="you@barberbook.com"
                    type="email"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-sm text-[#1A1A1A] outline-none transition focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 placeholder:text-[#6B7280]"
                    placeholder="********"
                    type="password"
                  />
                </div>

                {/* Forgot password */}
                <div className="text-right">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-xs font-semibold text-[#1E3A5F] transition hover:text-[#16324F]"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-[#6B7280]">
                  <label className="flex items-center gap-2">
                    <input className="h-4 w-4 accent-[#1E3A5F]" type="checkbox" />
                    Remember this device
                  </label>
                </div>

                <button
                  onClick={handleLogin}
                  className="w-full rounded-full bg-[#1E3A5F] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1E3A5F]/20 transition hover:bg-[#16324F] hover:-translate-y-0.5"
                  type="button"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Log In"}
                </button>

                <p className="text-center text-[11px] text-[#6B7280]">
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