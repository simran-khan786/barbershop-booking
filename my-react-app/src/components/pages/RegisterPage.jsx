import { useState } from "react";

function RegisterPage({ onNavigate }) {
  const [role, setRole] = useState("User");
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0f12]">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#2a1c12] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-20 h-[28rem] w-[28rem] rounded-full bg-[#1a2130] opacity-35 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#3b2a1a] opacity-35 blur-[140px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-12">
        <div className="flex items-center justify-between">
          <button
            className="text-sm font-semibold text-white/70 transition hover:text-[var(--accent)]"
            onClick={() => onNavigate("landing")}
            type="button"
          >
            &larr; Back to home
          </button>
          <button
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 shadow-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            onClick={() => onNavigate("login")}
            type="button"
          >
            Login instead
          </button>
        </div>

        <div className="mt-12 flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Create account
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight text-white md:text-5xl md:leading-tight">
              Create your account
            </h1>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              Enter your details to get started.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-[#1c1d22] p-6 text-left shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] md:p-8">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                      First name
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 placeholder:text-white/40"
                      placeholder="First name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Last name
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 placeholder:text-white/40"
                      placeholder="Last name"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Email
                  </label>
                  <input
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 placeholder:text-white/40"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Phone number
                  </label>
                  <input
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 placeholder:text-white/40"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Password
                  </label>
                  <input
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 placeholder:text-white/40"
                    placeholder="Create a password"
                    type="password"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Confirm password
                  </label>
                  <input
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 placeholder:text-white/40"
                    placeholder="Repeat password"
                    type="password"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Role
                  </label>
                  <div className="mt-3 flex gap-3">
                    {["User", "Owner"].map((option) => {
                      const selected = role === option;
                      return (
                        <button
                          key={option}
                          className={`flex-1 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                            selected
                              ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                              : "border-white/20 bg-[#111111] text-white/80 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          }`}
                          onClick={() => setRole(option)}
                          type="button"
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <button
                  className="w-full rounded-full bg-gradient-to-r from-[#c24c1a] via-[#e26a2c] to-[#f7a23b] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f7a23b]/30 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7a23b]/40"
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



