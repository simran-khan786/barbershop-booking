function Navbar({ onNavigate }) {
  return (
    <header className="relative z-10 border-b border-[#E5E7EB] bg-[#FFFFFF]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-[#1A1A1A]">

        {/* LOGO */}
        <div className="flex items-center gap-3 translate-x-[-90px]">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1E3A5F] text-lg font-semibold text-white">
            BB
          </span>
          <div>
            <p className="font-display text-xl text-[#1A1A1A]">Barberly</p>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-3 text-sm font-semibold">

          <button
            onClick={() => onNavigate("landing")}
            className="rounded-full px-4 py-2 text-[#6B7280] transition hover:text-[#1E3A5F]"
          >
            Home
          </button>

          <button
            onClick={() => onNavigate("landing")}
            className="rounded-full px-4 py-2 text-[#6B7280] transition hover:text-[#1E3A5F]"
          >
            About
          </button>

          <button
            onClick={() => onNavigate("owner-register")}
            className="rounded-full border border-[#E5E7EB] px-4 py-2 text-[#6B7280] transition hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
          >
            Become a Partner
          </button>

          <button
            onClick={() => onNavigate("login")}
            className="rounded-full border border-[#E5E7EB] px-4 py-2 text-[#6B7280] transition hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
          >
            Login
          </button>

          <button
            onClick={() => onNavigate("register")}
            className="rounded-full bg-[#1E3A5F] px-4 py-2 text-white shadow-lg hover:bg-[#16324F] transition"
          >
            Sign Up
          </button>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;