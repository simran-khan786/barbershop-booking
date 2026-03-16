import Footer from "../organisms/Footer.jsx";
import Navbar from "../organisms/Navbar.jsx";

function LandingPage({ onNavigate, theme, onToggleTheme }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[var(--orb-1)] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-10 h-96 w-96 rounded-full bg-[var(--orb-2)] opacity-30 blur-[120px]" />

      <Navbar
        onNavigate={onNavigate}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />

      <main className="mx-auto flex min-h-screen w-full max-w-none flex-col gap-16 px-6 pb-24 pt-8">
        <section className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]">
              Appointments, elevated
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              A premium booking experience for barbershops that value craft.
            </h1>
            <p className="mt-6 text-base text-[var(--muted)]">
              Replace messy spreadsheets with a refined, real-time system that
              makes clients feel cared for and owners feel in control.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="rounded-full bg-[var(--dark-surface)] px-6 py-3 text-sm font-semibold text-[var(--on-dark)] shadow-lg shadow-[#231f1a]/20 transition hover:-translate-y-0.5"
                onClick={() => onNavigate("register")}
                type="button"
              >
                Start Free Setup
              </button>
              <button
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                onClick={() => onNavigate("login")}
                type="button"
              >
                Existing Account
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(35,31,26,0.45)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                    Today
                  </p>
                  <p className="font-display text-2xl text-[var(--ink)]">
                    Saturday Schedule
                  </p>
                </div>
                <span className="rounded-full bg-[var(--dark-surface)] px-3 py-1 text-xs text-[var(--on-dark)]">
                  14 slots
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  {
                    time: "09:00 AM",
                    name: "Line-up & beard shape",
                    status: "Confirmed",
                  },
                  {
                    time: "11:30 AM",
                    name: "Skin fade + design",
                    status: "Pending",
                  },
                  {
                    time: "03:15 PM",
                    name: "Executive cut",
                    status: "Walk-in",
                  },
                ].map((slot) => (
                  <div
                    key={slot.time}
                    className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">
                        {slot.time}
                      </p>
                      <p className="text-xs text-[var(--muted-2)]">{slot.name}</p>
                    </div>
                    <span className="rounded-full bg-[var(--chip-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--chip-text)]">
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-8 -left-6 rounded-3xl bg-[var(--dark-surface)] px-6 py-4 text-[var(--on-dark)] shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8c7b4]">
                Conversion
              </p>
              <p className="font-display text-3xl">+28%</p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-[var(--border)] bg-gradient-to-br from-[#1f1b16] via-[#251f19] to-[#2f261e] px-8 py-10 text-[var(--on-dark)] md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e0c7ad]">
              Precision booking
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight md:text-4xl">
              Precision grooming, powered by intelligence.
            </h2>
            <p className="mt-4 text-sm text-[#d8c7b4]">
              Discover the right chair, the right service, and the right moment
              with curated recommendations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#d8c7b4]">
              {["MANICAVE", "URBAN_CUT", "PRESTIGE", "GENTLEMEN", "ROYAL_BLADE"].map(
                (label) => (
                  <span key={label} className="rounded-full border border-white/10 px-3 py-1">
                    {label}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8c7b4]">
              Search a service
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <input
                className="w-full rounded-2xl border border-white/10 bg-[#1a1511] px-4 py-3 text-sm text-[var(--on-dark)] outline-none placeholder:text-[#8f7d6b] focus:border-[#f7a23b] focus:ring-2 focus:ring-[#f7a23b]/30"
                placeholder="Service or style"
                type="text"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-[#1a1511] px-4 py-3 text-sm text-[var(--on-dark)] outline-none placeholder:text-[#8f7d6b] focus:border-[#f7a23b] focus:ring-2 focus:ring-[#f7a23b]/30"
                placeholder="Zip code"
                type="text"
              />
              <button
                className="rounded-2xl bg-gradient-to-r from-[#c24c1a] via-[#e26a2c] to-[#f7a23b] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f7a23b]/30 transition hover:-translate-y-0.5"
                type="button"
              >
                Search now
              </button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "AI service layouts",
                  copy: "Menu intelligence that boosts conversion and upsells.",
                },
                {
                  title: "Dynamic staff scheduling",
                  copy: "Balance chairs with real-time demand signals.",
                },
                {
                  title: "Owner analytics",
                  copy: "Revenue trends and return visits at a glance.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold">{feature.title}</p>
                  <p className="mt-2 text-xs text-[#d8c7b4]">{feature.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Discover nearby
              </p>
              <h2 className="font-display mt-3 text-3xl text-[var(--ink)]">
                Find your next premium cut
              </h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Browse categories, featured shops, and top-rated barbers in your
                area.
              </p>
            </div>
            <button
              className="rounded-full border border-[var(--border)] px-5 py-2 text-xs font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              type="button"
            >
              View all shops
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Haircut",
              "Beard trim",
              "Hot shave",
              "Fade",
              "Coloring",
            ].map((category) => (
              <button
                key={category}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm font-semibold text-[var(--ink)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "The Crew’s Loft",
                location: "Downtown · 0.7 mi",
                rating: "4.9",
              },
              {
                name: "Heritage Barbers",
                location: "Old Market · 1.1 mi",
                rating: "4.8",
              },
              {
                name: "Urban Edge",
                location: "Arts District · 1.4 mi",
                rating: "4.7",
              },
            ].map((shop) => (
              <div
                key={shop.name}
                className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-2)] p-5 shadow-[0_16px_50px_-30px_rgba(35,31,26,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    {shop.name}
                  </p>
                  <span className="rounded-full bg-[var(--dark-surface)] px-3 py-1 text-xs font-semibold text-white">
                    {shop.rating}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[var(--muted-2)]">{shop.location}</p>
                <button
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] transition hover:text-[#8f471f]"
                  type="button"
                >
                  Book now
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="grid gap-6 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Top-rated
              </p>
              <h3 className="font-display mt-3 text-2xl text-[var(--ink)]">
                Barbers clients love
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Miles H.", "Avery C.", "Dominic L.", "Renee G.", "Malik T."].map(
                  (name) => (
                    <span
                      key={name}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-xs font-semibold text-[var(--ink)]"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-2)]">
                Recent reviews
              </p>
              <div className="mt-4 space-y-4">
                {[
                  {
                    name: "James D.",
                    review:
                      "Clean studio, precise fade, and the booking flow was effortless.",
                  },
                  {
                    name: "Marisol A.",
                    review:
                      "Great vibe and my stylist remembered every detail from last visit.",
                  },
                ].map((review) => (
                  <div key={review.name} className="rounded-2xl bg-[#fdf3ea] p-4">
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      {review.name}
                    </p>
                    <p className="mt-2 text-xs text-[var(--muted-2)]">
                      {review.review}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Book as a Client",
              copy: "Pick a service, select your barber, and lock in a time in under 60 seconds.",
              cta: "Book Appointment",
              action: () => onNavigate("login"),
            },
            {
              title: "Manage as an Owner",
              copy: "See your entire day at a glance, balance walk-ins, and keep the team aligned.",
              cta: "Owner Dashboard",
              action: () => onNavigate("register"),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group rounded-[28px] border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] via-[var(--surface-2)] to-[var(--surface)] p-8 shadow-[0_20px_60px_-30px_rgba(35,31,26,0.45)] transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Option
              </p>
              <h3 className="font-display mt-4 text-2xl text-[var(--ink)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{card.copy}</p>
              <button
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--dark-surface)] px-5 py-2 text-sm font-semibold text-[var(--on-dark)] transition group-hover:translate-x-1"
                onClick={card.action}
                type="button"
              >
                {card.cta}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          ))}
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Signature Services",
              copy: "Curated menus, add-ons, and timing rules that keep your calendar profitable.",
            },
            {
              title: "Smart Reminders",
              copy: "SMS and email nudges cut no-shows and keep your shop running smooth.",
            },
            {
              title: "Team Visibility",
              copy: "Assign chairs, rotate walk-ins, and keep every stylist in sync.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-6 backdrop-blur"
            >
              <h4 className="font-display text-xl text-[var(--ink)]">
                {item.title}
              </h4>
              <p className="mt-3 text-sm text-[var(--muted-2)]">{item.copy}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 rounded-[32px] bg-[var(--dark-surface)] px-8 py-12 text-[var(--on-dark)] md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8c7b4]">
              Client love
            </p>
            <h3 className="font-display mt-4 text-3xl">
              “We look like a premium studio now.”
            </h3>
            <p className="mt-4 text-sm text-[#d8c7b4]">
              The team at Studio North saw booking revenue grow 22% in three
              months after switching to BarberBook.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8c7b4]">
              Avg. rating
            </p>
            <p className="mt-3 text-4xl font-semibold">4.9</p>
            <p className="mt-4 text-xs text-[#d8c7b4]">
              Based on 1,284 client reviews
            </p>
            <button
              className="mt-6 rounded-full bg-[#f7f2ec] px-4 py-2 text-xs font-semibold text-[var(--ink)]"
              onClick={() => onNavigate("register")}
              type="button"
            >
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;



