import { useState } from "react";

function OwnerDashboard({ onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    onNavigate?.("login");
  };

  const handleMenuClick = (item) => {
    if (item === "Logout") {
      handleLogout();
      return;
    }

    setActiveMenu(item);
  };

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-72 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-5 hidden md:flex flex-col">
        
        <h1 className="text-xl font-bold mb-6">✂️ BarberShop Booking</h1>

        {/* Profile */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://i.pravatar.cc/100"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">Elite Cuts</p>
            <p className="text-xs text-green-400">✔ Verified • ⭐ 4.8</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {[
            "Dashboard",
            "Add Shop",
            "My Shops",
            "Services",
            "Bookings",
            "Earnings",
            "Reviews",
            "Profile Settings",
            "Help & Support",
            "Logout"
          ].map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item)}
              className={`w-full text-left px-4 py-2 rounded-lg text-sm transition ${
                activeMenu === item
                  ? "bg-green-600"
                  : "hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 text-gray-800">

        {/* ===== HEADER ===== */}
        <div className="flex justify-between items-center p-5 bg-white shadow-sm">
          <div>
            <h2 className="text-lg font-semibold">
              👋 Welcome, Raj Barber (Owner)
            </h2>
            <p className="text-sm text-gray-500">Elite Cuts — Bhopal</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              🔔
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                3
              </span>
            </div>
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full"
            />
            <button
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm"
              onClick={handleLogout}
              type="button"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">

          {/* ===== STATS ===== */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: "Total Shops", value: "2", color: "from-blue-500 to-blue-700" },
              { title: "Today's Bookings", value: "18", color: "from-green-500 to-green-700" },
              { title: "Monthly Earnings", value: "₹45,230", color: "from-orange-500 to-orange-700" },
              { title: "Pending Requests", value: "7", color: "from-red-500 to-red-700" }
            ].map((card) => (
              <div
                key={card.title}
                className={`p-4 rounded-xl text-white bg-gradient-to-r ${card.color}`}
              >
                <p className="text-sm">{card.title}</p>
                <h3 className="text-2xl font-bold">{card.value}</h3>
              </div>
            ))}
          </div>

          {/* ===== ADD SHOP + MY SHOPS ===== */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Add Shop */}
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-4 text-gray-900">Add New Shop</h3>

              <div className="space-y-3">
                <input placeholder="Shop Name" className="input" />
                <input placeholder="Address" className="input" />

                <div className="flex gap-2">
                  <input placeholder="City" className="input flex-1" />
                  <input placeholder="Pincode" className="input flex-1" />
                </div>

                <input placeholder="Phone (+91)" className="input" />

                <textarea placeholder="Description" className="input h-20" />

                <button className="w-full bg-green-600 text-white py-2 rounded-lg">
                  + Add Shop
                </button>
              </div>
            </div>

            {/* My Shops */}
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-4">My Shops</h3>

              {[1, 2].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b py-3"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://picsum.photos/60"
                      className="w-14 h-14 rounded-lg"
                    />
                    <div>
                      <p className="font-medium">Elite Cuts</p>
                      <p className="text-sm text-gray-500">
                        Bhopal • 5 Services
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 text-xs">
                    <button className="btn">View</button>
                    <button className="btn">Edit</button>
                    <button className="btn">Bookings</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== BOOKINGS ===== */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Recent Bookings</h3>

            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b py-3"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src="https://i.pravatar.cc/50"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">User Name</p>
                    <p className="text-sm text-gray-500">
                      Hair Cut + Beard • 10:00 AM
                    </p>
                  </div>
                </div>

                <span className="text-green-600 text-sm font-medium">
                  Confirmed
                </span>
              </div>
            ))}
          </div>

          {/* ===== QUICK ACTIONS ===== */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Quick Actions</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Add Shop",
                "Manage Services",
                "View Bookings",
                "Earnings",
                "Reviews",
                "Settings"
              ].map((btn) => (
                <button
                  key={btn}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ===== COMMON INPUT STYLE ===== */}
      <style>
        {`
          .input {
            width: 100%;
            border: 1px solid #e5e7eb;
            padding: 10px;
            border-radius: 10px;
            outline: none;
          }
          .input:focus {
            border-color: #22c55e;
          }
          .btn {
            background: #f3f4f6;
            padding: 6px 10px;
            border-radius: 8px;
          }
        `}
      </style>
    </div>
  );
}

export default OwnerDashboard;
