import { useState } from "react";
import toast from "react-hot-toast";

function RegisterPage({ onNavigate }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/api/auth/register/owner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password, role: "OWNER" })
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Owner Registered Successfully ✅");
        setTimeout(() => { onNavigate("login"); }, 2500);
      } else {
        alert(data);
      }
    } catch (err) {
      console.error(err);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F7FA]">
      {/* Orbs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#EEF4FF] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-20 h-[28rem] w-[28rem] rounded-full bg-[#D6E4FF] opacity-40 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#EEF4FF] opacity-40 blur-[140px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-12">

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
            className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-semibold text-[#6B7280] shadow-sm transition hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
            onClick={() => onNavigate("login")}
            type="button"
          >
            Login instead
          </button>
        </div>

        <div className="mt-12 flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl text-center">

            <p className="text-xs uppercase tracking-[0.3em] text-[#1E3A5F]">
              Create account
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight text-[#1A1A1A] md:text-5xl md:leading-tight">
              Create your account
            </h1>
            <p className="mt-4 text-sm text-[#6B7280] md:text-base">
              Enter your details to get started.
            </p>

            {/* Card */}
            <div className="mt-8 rounded-[28px] border border-[#E5E7EB] bg-white p-6 text-left shadow-[0_30px_80px_-40px_rgba(0,0,0,0.1)] md:p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                      First name
                    </label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-sm text-[#1A1A1A] shadow-sm outline-none transition focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 placeholder:text-[#6B7280]"
                      placeholder="First name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                      Last name
                    </label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-sm text-[#1A1A1A] shadow-sm outline-none transition focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 placeholder:text-[#6B7280]"
                      placeholder="Last name"
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-sm text-[#1A1A1A] shadow-sm outline-none transition focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 placeholder:text-[#6B7280]"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                    Phone number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-sm text-[#1A1A1A] shadow-sm outline-none transition focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 placeholder:text-[#6B7280]"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-sm text-[#1A1A1A] shadow-sm outline-none transition focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 placeholder:text-[#6B7280]"
                    placeholder="Create a password"
                    type="password"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                    Confirm password
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-sm text-[#1A1A1A] shadow-sm outline-none transition focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 placeholder:text-[#6B7280]"
                    placeholder="Repeat password"
                    type="password"
                  />
                </div>

                <button
                  onClick={handleRegister}
                  className="w-full rounded-full bg-[#1E3A5F] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1E3A5F]/20 transition-transform duration-300 ease-out hover:bg-[#16324F] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F]/40"
                  type="button"
                >
                  Create account
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;