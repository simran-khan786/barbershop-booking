function Navbar({ onNavigate, theme, onToggleTheme }) {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--dark-surface)] text-lg font-semibold text-[var(--on-dark)]">
            BB
          </span>
          <div>
            <p className="font-display text-xl text-[var(--ink)]">BarberBook</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-2)]">
              Studio System
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--muted-2)] md:flex" />

        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            onClick={onToggleTheme}
            type="button"
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
          <button
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            onClick={() => onNavigate("login")}
            type="button"
          >
            Login
          </button>
          <button
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--on-dark)] shadow-lg shadow-[var(--accent)]/30 transition hover:-translate-y-0.5"
            onClick={() => onNavigate("register")}
            type="button"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
