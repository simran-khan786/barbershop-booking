function LoginPage({ onNavigate }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-28 h-64 w-64 rounded-full bg-[#f1c5a4] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-0 h-96 w-96 rounded-full bg-[#b08c72] opacity-30 blur-[140px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10">
        <div className="flex items-center justify-between">
          <button
            className="text-sm font-semibold text-[#6a5b4d] transition hover:text-[#a8562a]"
            onClick={() => onNavigate("landing")}
            type="button"
          >
            ← Back to home
          </button>
          <button
            className="rounded-full border border-[#c9b6a5] px-4 py-2 text-xs font-semibold text-[#3b3127] transition hover:border-[#a8562a] hover:text-[#a8562a]"
            onClick={() => onNavigate("register")}
            type="button"
          >
            Create account
          </button>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#a8562a]">
              Welcome back
            </p>
            <h1 className="font-display mt-4 text-4xl text-[#231f1a] md:text-5xl">
              Log in to your studio dashboard
            </h1>
            <p className="mt-4 text-sm text-[#5d4f44] md:text-base">
              Manage upcoming appointments, refine your services, and keep your
              team in sync.
            </p>
            <div className="mt-8 rounded-[28px] border border-[#e6d9ca] bg-[#fdf9f4] p-6 shadow-[0_24px_60px_-30px_rgba(35,31,26,0.45)] md:p-8">
              <form className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6a5b4d]">
                    Email address
                  </label>
                  <input
                    className="mt-2 w-full rounded-xl border border-[#e0d2c2] bg-white px-4 py-3 text-sm text-[#231f1a] outline-none transition focus:border-[#a8562a] focus:ring-2 focus:ring-[#a8562a]/20"
                    placeholder="you@barberbook.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6a5b4d]">
                    Password
                  </label>
                  <input
                    className="mt-2 w-full rounded-xl border border-[#e0d2c2] bg-white px-4 py-3 text-sm text-[#231f1a] outline-none transition focus:border-[#a8562a] focus:ring-2 focus:ring-[#a8562a]/20"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-[#6a5b4d]">
                  <label className="flex items-center gap-2">
                    <input className="h-4 w-4 accent-[#a8562a]" type="checkbox" />
                    Remember this device
                  </label>
                  <button
                    className="font-semibold text-[#a8562a] transition hover:text-[#8f471f]"
                    type="button"
                  >
                    Need help?
                  </button>
                </div>
                <button
                  className="w-full rounded-full bg-[#231f1a] px-5 py-3 text-sm font-semibold text-[#f7f2ec] shadow-lg shadow-[#231f1a]/20 transition hover:-translate-y-0.5"
                  type="button"
                >
                  Log In
                </button>
                <p className="text-center text-[11px] text-[#6a5b4d]">
                  By continuing, you agree to our studio terms and privacy
                  policy.
                </p>
              </form>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#eadfd3] bg-white/70 p-8 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a8562a]">
              Today’s snapshot
            </p>
            <h3 className="font-display mt-4 text-2xl text-[#231f1a]">
              18 appointments already confirmed
            </h3>
            <p className="mt-4 text-sm text-[#6a5b4d]">
              Check cancellations, update services, and keep chairs filled in
              real time.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#6a5b4d]">
              <div className="flex items-center justify-between rounded-2xl border border-[#efe5da] bg-white px-4 py-3">
                <span>Walk-in slots left</span>
                <span className="font-semibold text-[#231f1a]">5</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-[#efe5da] bg-white px-4 py-3">
                <span>Next client</span>
                <span className="font-semibold text-[#231f1a]">11:30 AM</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-[#efe5da] bg-white px-4 py-3">
                <span>Team members active</span>
                <span className="font-semibold text-[#231f1a]">7</span>
              </div>
            </div>
            <button
              className="mt-8 rounded-full bg-[#a8562a] px-5 py-2 text-xs font-semibold text-[#fdf9f4] shadow-lg shadow-[#a8562a]/30"
              onClick={() => onNavigate("register")}
              type="button"
            >
              Start a new studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
