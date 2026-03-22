import { useState } from "react";
import AddShopModal from "../organisms/AddShopModal";
import AddServiceModal from "../organisms/AddServiceModal";

function OwnerDashboard({ onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showShopModal, setShowShopModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);

  const [shops, setShops] = useState([]);
  const [services, setServices] = useState([]);

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

    if (item === "Add Shop") {
      setShowShopModal(true);
    }

    if (item === "Services") {
      setShowServiceModal(true);
    }

    setActiveMenu(item);
  };

  // ✅ Delete Shop
  const handleDelete = (index) => {
    const updated = shops.filter((_, i) => i !== index);
    setShops(updated);
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">

      {/* Sidebar */}
      <aside className="w-72 bg-[#020617] p-5 hidden md:flex flex-col">
        <h1 className="text-xl font-bold mb-6">✂️ BarberShop</h1>

        <nav className="space-y-2">
          {["Dashboard","Add Shop","My Shops","Services","Logout"].map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item)}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeMenu === item ? "bg-green-600" : "hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1">

        {/* Header */}
        <div className="flex justify-between items-center p-5 bg-[#020617] border-b border-gray-700">
          <h2 className="text-lg font-semibold">👋 Welcome, Raj Barber</h2>
          <button onClick={handleLogout} className="bg-gray-700 px-3 py-1 rounded">
            Logout
          </button>
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Add Shop Button */}
          <button
            onClick={() => setShowShopModal(true)}
            className="bg-green-600 px-4 py-2 rounded-lg mb-6"
          >
            + Add Shop
          </button>

          {/* ================= MY SHOPS ================= */}
          {activeMenu === "My Shops" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {shops.length === 0 ? (
                <p>No shops added yet</p>
              ) : (
                shops.map((shop, i) => (
                  <div
                    key={i}
                    className="bg-[#1e293b] rounded-xl shadow hover:shadow-lg overflow-hidden"
                  >
                    {shop.image && (
                      <img
                        src={URL.createObjectURL(shop.image)}
                        className="w-full h-40 object-cover"
                      />
                    )}

                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-lg">{shop.shopName}</h3>

                      <p className="text-sm text-gray-400">
                        📍 {shop.address}, {shop.city}
                      </p>

                      <p className="text-sm text-gray-400">
                        📞 {shop.phone}
                      </p>

                      <div className="text-xs text-gray-400">
                        <p>⏰ {shop.openingTime} - {shop.closingTime}</p>
                        <p>☕ Break: {shop.breakStart} - {shop.breakEnd}</p>
                      </div>

                      <button
                        onClick={() => handleDelete(i)}
                        className="w-full mt-2 bg-red-500 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}

            </div>
          )}

          {/* ================= SERVICES ================= */}
          {activeMenu === "Services" && (
            <div className="bg-[#1e293b] p-5 rounded-xl">

              <h3 className="mb-4 font-semibold">My Services</h3>

              <button
                onClick={() => setShowServiceModal(true)}
                className="bg-green-600 px-4 py-2 rounded mb-4"
              >
                + Add Service
              </button>

              {services.length === 0 ? (
                <p>No services added</p>
              ) : (
                services.map((s, i) => (
                  <div key={i} className="border-b border-gray-600 py-2">
                    <p>{s.name} - ₹{s.price}</p>
                    <p className="text-sm text-gray-400">{s.duration}</p>
                  </div>
                ))
              )}

            </div>
          )}

        </div>
      </div>

      {/* Modals */}
      <AddShopModal
        isOpen={showShopModal}
        onClose={() => setShowShopModal(false)}
        onSave={(newShop) => {
          setShops([...shops, newShop]);
          setActiveMenu("My Shops");
        }}
      />

      <AddServiceModal
        isOpen={showServiceModal}
        onClose={() => setShowServiceModal(false)}
        onSave={(newService) => {
          setServices([...services, newService]);
          setActiveMenu("Services");
        }}
      />

    </div>
  );
}

export default OwnerDashboard;