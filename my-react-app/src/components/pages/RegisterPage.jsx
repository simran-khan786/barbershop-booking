function RegisterPage({ onNavigate }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7f0] via-[#fef6ff] to-[#f3f8ff]">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#ffb47a] opacity-45 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-20 h-[28rem] w-[28rem] rounded-full bg-[#8aa7ff] opacity-35 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ffd66b] opacity-35 blur-[140px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-12">
        <div className="flex items-center justify-between">
          <button
            className="text-sm font-semibold text-[#5a4a40] transition hover:text-[#c24c1a]"
            onClick={() => onNavigate("landing")}
            type="button"
          >
            &larr; Back to home
          </button>
          <button
            className="rounded-full border border-[#d9c6b3] bg-white/80 px-4 py-2 text-xs font-semibold text-[#2e241d] shadow-sm transition hover:border-[#c24c1a] hover:text-[#c24c1a] hover:shadow-md"
            onClick={() => onNavigate("login")}
            type="button"
          >
            Login instead
          </button>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c24c1a]">
              Create account
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight text-[#231f1a] md:text-5xl md:leading-tight">
              Launch your studio with confidence
            </h1>
            <p className="mt-4 text-sm text-[#5d4f44] md:text-base">
              Build your booking page, manage services, and keep every chair
              filled with a professional-grade system.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_30px_80px_-40px_rgba(34,24,16,0.45)] backdrop-blur transition-transform duration-300 ease-out hover:-translate-y-1 md:p-8">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6a5b4d]">
                      Studio name
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-[#efe1d3] bg-white/90 px-4 py-3 text-sm text-[#231f1a] shadow-sm outline-none transition focus:border-[#c24c1a] focus:ring-2 focus:ring-[#ff9b6a]/30 placeholder:text-[#b9a798]"
                      placeholder="Northside Studio"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6a5b4d]">
                      Owner name
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-[#efe1d3] bg-white/90 px-4 py-3 text-sm text-[#231f1a] shadow-sm outline-none transition focus:border-[#c24c1a] focus:ring-2 focus:ring-[#ff9b6a]/30 placeholder:text-[#b9a798]"
                      placeholder="Jordan Miles"
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6a5b4d]">
                      Owner email
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-[#efe1d3] bg-white/90 px-4 py-3 text-sm text-[#231f1a] shadow-sm outline-none transition focus:border-[#c24c1a] focus:ring-2 focus:ring-[#ff9b6a]/30 placeholder:text-[#b9a798]"
                      placeholder="owner@studio.com"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6a5b4d]">
                      Phone
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-[#efe1d3] bg-white/90 px-4 py-3 text-sm text-[#231f1a] shadow-sm outline-none transition focus:border-[#c24c1a] focus:ring-2 focus:ring-[#ff9b6a]/30 placeholder:text-[#b9a798]"
                      placeholder="+1 (555) 210-4455"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6a5b4d]">
                      Password
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-[#efe1d3] bg-white/90 px-4 py-3 text-sm text-[#231f1a] shadow-sm outline-none transition focus:border-[#c24c1a] focus:ring-2 focus:ring-[#ff9b6a]/30 placeholder:text-[#b9a798]"
                      placeholder="Create a password"
                      type="password"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6a5b4d]">
                      Confirm password
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-[#efe1d3] bg-white/90 px-4 py-3 text-sm text-[#231f1a] shadow-sm outline-none transition focus:border-[#c24c1a] focus:ring-2 focus:ring-[#ff9b6a]/30 placeholder:text-[#b9a798]"
                      placeholder="Repeat password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-[#f1e6db] bg-[#fff8f2] px-4 py-3 text-xs text-[#5d4f44]">
                  <input className="mt-1 h-4 w-4 accent-[#c24c1a]" type="checkbox" />
                  <p>
                    I agree to the studio terms and privacy policy, and I want
                    product updates.
                  </p>
                </div>
                <button
                  className="w-full rounded-full bg-gradient-to-r from-[#c24c1a] via-[#e26a2c] to-[#f7a23b] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f7a23b]/30 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7a23b]/40"
                  type="button"
                >
                  Create account
                </button>
                <p className="text-center text-[11px] text-[#6a5b4d]">
                  No credit card required. You can invite your team after setup.
                </p>
              </form>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/80 bg-white/70 p-8 shadow-[0_24px_70px_-40px_rgba(26,30,44,0.5)] backdrop-blur transition-transform duration-300 ease-out hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c24c1a]">
              Studio setup
            </p>
            <h3 className="font-display mt-4 text-2xl leading-snug text-[#231f1a]">
              Everything you need on day one
            </h3>
            <p className="mt-4 text-sm text-[#6a5b4d]">
              Launch your studio with templates, reminders, and pro-grade
              branding in minutes.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#6a5b4d]">
              {[
                {
                  label: "Service menu templates",
                  value: "6",
                },
                {
                  label: "Automated reminders",
                  value: "Included",
                },
                {
                  label: "Custom booking page",
                  value: "Live",
                },
                {
                  label: "Team scheduling",
                  value: "Unlimited",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/80 bg-gradient-to-r from-white via-[#fff5ec] to-white px-4 py-3 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span>{item.label}</span>
                  <span className="rounded-full bg-[#231f1a] px-3 py-1 text-xs font-semibold text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#1f1b16] via-[#2a231d] to-[#3b2d24] px-6 py-5 text-[#f7f2ec] shadow-[0_18px_40px_-28px_rgba(0,0,0,0.65)] transition-transform duration-300 ease-out hover:-translate-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[#e0c7ad]">
                Trusted by
              </p>
              <p className="font-display mt-3 text-2xl">120+ studios</p>
              <p className="mt-2 text-xs text-[#d8c7b4]">
                Avg. booking lift: 18% in the first 60 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;



