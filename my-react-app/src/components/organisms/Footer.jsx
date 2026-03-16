function Footer() {
  return (
    <footer
      className="border-t border-white/5"
      style={{ background: "var(--footer-bg)" }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-[var(--on-dark)]">
            BarberBook
          </p>
          <p className="mt-3 text-sm text-[var(--footer-text)]">
            A premium booking experience for barbershops that want to grow
            without chaos.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-[var(--footer-text)]">
            {["Clean", "Modern", "Reliable"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-sm text-[var(--footer-text)]">
          <p className="font-semibold uppercase tracking-[0.2em] text-[var(--on-dark)]">
            Explore
          </p>
          <div className="mt-4 space-y-2">
            <p>Featured shops</p>
            <p>Top barbers</p>
            <p>Client reviews</p>
          </div>
        </div>
        <div className="text-sm text-[var(--footer-text)]">
          <p className="font-semibold uppercase tracking-[0.2em] text-[var(--on-dark)]">
            For Shops
          </p>
          <div className="mt-4 space-y-2">
            <p>Owner dashboard</p>
            <p>Team scheduling</p>
            <p>Pricing plans</p>
          </div>
        </div>
        <div className="text-sm text-[var(--footer-text)]">
          <p className="font-semibold uppercase tracking-[0.2em] text-[var(--on-dark)]">
            Support
          </p>
          <div className="mt-4 space-y-2">
            <p>Help center</p>
            <p>Contact support</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[var(--footer-text)]">
        &copy; 2026 BarberBook. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
