function Sidebar({ activeMenu, onMenuClick }) {
  return (
    <aside className="w-72 bg-[#020617] p-5 hidden md:flex flex-col">
      <h1 className="text-xl font-bold mb-6">✂️ BarberShop</h1>

      <nav className="space-y-2">
        {["Dashboard","Add Shop","My Shops","Services","Earnings" , "Bookings","Logout"].map((item) => (
          <button
            key={item}
            onClick={() => onMenuClick(item)}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activeMenu === item ? "bg-green-600" : "hover:bg-white/10"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;