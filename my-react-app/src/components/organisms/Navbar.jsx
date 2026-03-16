function Navbar({ onNavigate }) {
  return (
    <header className="relative z-10 border-b border-white/10 bg-[var(--dark-surface)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-[var(--on-dark)]">
        <div className="flex items-center gap-3 -ml-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-lg font-semibold text-[var(--on-dark)]">
            BB
          </span>
          <div>
            <p className="font-display text-xl text-[var(--on-dark)]">BarberBook</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Studio System
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-3 text-sm font-semibold text-[var(--on-dark)]">
          <a
            className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[var(--on-dark)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            href="#home"
          >
            Home
          </a>
          <a
            className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[var(--on-dark)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            href="#about"
          >
            About
          </a>
          <button
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-[var(--on-dark)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
