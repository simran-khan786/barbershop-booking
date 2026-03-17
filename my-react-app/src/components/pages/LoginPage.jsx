function LoginPage({ onNavigate }) {
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
              <form className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Email address
                  </label>
                  <input
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
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 placeholder:text-white/40"
                    placeholder="********"
                    type="password"
                  />
                </div>
                <div className="text-right">
                  <a
                    className="text-xs font-semibold text-[var(--accent)] transition hover:text-[#f7a23b]"
                    href="https://accounts.google.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <label className="flex items-center gap-2">
                    <input className="h-4 w-4 accent-[var(--accent)]" type="checkbox" />
                    Remember this device
                  </label>
                  <button
                    className="font-semibold text-[var(--accent)] transition hover:text-[#f7a23b]"
                    type="button"
                  >
                    Need help?
                  </button>
                </div>
                <button
                  className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--on-dark)] shadow-lg shadow-[var(--accent)]/30 transition hover:-translate-y-0.5"
                  type="button"
                >
                  Log In
                </button>
                <p className="text-center text-[11px] text-white/60">
                  By continuing, you agree to our studio terms and privacy policy.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    href="https://accounts.google.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm">
                      G
                    </span>
                    Continue with Google
                  </a>
                  <a
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    href="https://www.facebook.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm">
                      f
                    </span>
                    Continue with Facebook
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
