function Navbar({ onNavigate }) {
  return (
    <header className="relative z-10 border-b border-white/10 bg-[var(--dark-surface)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-[var(--on-dark)]">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 translate-x-[-90px]">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-lg font-semibold">
            BB
          </span>
          <div>
            <p className="font-display text-xl">Barberly</p>
           
          </div>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-3 text-sm font-semibold">

          {/* ✅ OWNER BUTTON
          <button
            onClick={() => onNavigate("owner-register")}
            className="rounded-full border border-transparent px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Become a Partner
          </button> */}

          <button
            onClick={() => onNavigate("landing")}
            className="rounded-full px-4 py-2 transition hover:text-[var(--accent)]"
          >
            Home
          </button>

          <button
            onClick={() => onNavigate("landing")}
            className="rounded-full px-4 py-2 transition hover:text-[var(--accent)]"
          >
            About
          </button>
                    {/* ✅ OWNER BUTTON */}
          <button
            onClick={() => onNavigate("owner-register")}
            className="rounded-full border border-white/20 px-4 py-2 transition hover:border-[var(--accent)] "
          >
            Become a Partner
          </button>


          <button
            onClick={() => onNavigate("login")}
            className="rounded-full border border-white/20 px-4 py-2 transition hover:border-[var(--accent)]"
          >
            Login
          </button>

          <button
            onClick={() => onNavigate("register")}
            className="rounded-full bg-[var(--accent)] px-4 py-2 shadow-lg"
          >
            Sign Up
          </button>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;