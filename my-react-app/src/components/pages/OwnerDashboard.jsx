import { useState } from "react";
import AddShopModal from "../organisms/AddShopModal";
import AddServiceModal from "../organisms/AddServiceModal";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";


function OwnerDashboard({ onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard"); 
  const [showShopModal, setShowShopModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [shops, setShops] = useState([]);
  const [services, setServices] = useState([]);
  
  // ✅ Bookings State (FIXED POSITION)
  const [bookingFilter, setBookingFilter] = useState("All");

  const bookingsData = [
    { name: "Rahul", service: "Hair Cut", time: "10:00 AM", status: "Confirmed" },
    { name: "Amit", service: "Beard", time: "11:30 AM", status: "Pending" },
    { name: "Vikas", service: "Spa", time: "1:00 PM", status: "Cancelled" },
    { name: "Rohit", service: "Hair Cut", time: "3:00 PM", status: "Confirmed" }
  ];

  const filteredBookings =
    bookingFilter === "All"
      ? bookingsData
      : bookingsData.filter((b) => b.status === bookingFilter);


  // ✅ Earnings Data
  const earningsData = [
    { month: "Jan", cash: 8000, online: 4000 },
    { month: "Feb", cash: 9000, online: 5000 },
    { month: "Mar", cash: 7000, online: 4000 },
    { month: "Apr", cash: 11000, online: 6000 },
    { month: "May", cash: 13000, online: 7000 },
    { month: "Jun", cash: 10000, online: 6000 },
    { month: "Jul", cash: 12000, online: 6500 },
    { month: "Aug", cash: 14000, online: 8000 },
    { month: "Sep", cash: 10000, online: 5500 },
    { month: "Oct", cash: 11500, online: 7000 },
    { month: "Nov", cash: 13000, online: 8200 },
    { month: "Dec", cash: 15000, online: 9000 }
  ];

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
          {["Dashboard","Add Shop","My Shops","Services","Earnings", "Bookings","Logout"].map((item) => (
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
        <div className="flex justify-between items-center p-5 bg-[#020617] border-b border-gray-700 relative">
          
          <h2 className="text-lg font-semibold">Hello, Raj Barber</h2>

          <div className="flex items-center gap-4 relative">

            <span className="cursor-pointer text-xl">🔔</span>

            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="bg-gray-700 px-3 py-1 rounded-full"
              >
                👤
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-[#1e293b] rounded-lg shadow-lg z-50">
                  <p className="px-4 py-2 border-b text-sm">Raj Barber</p>

                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                    Profile Settings
                  </button>

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-red-400"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Dashboard */}
          {activeMenu === "Dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

              <div className="bg-[#1e293b] p-5 rounded-xl">
                <h3>Total Shops</h3>
                <p className="text-2xl font-bold">{shops.length}</p>
                <p className="text-green-400 text-sm">+1 this month</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl">
                <h3>Total Bookings</h3>
                <p className="text-2xl font-bold">128</p>
                <p className="text-blue-400 text-sm">+12 today</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl">
                <h3>Monthly Earnings</h3>
                <p className="text-2xl font-bold">₹24,500</p>
                <p className="text-yellow-400 text-sm">+8% vs last month</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl">
                <h3>Total Customers</h3>
                <p className="text-2xl font-bold">342</p>
                <p className="text-purple-400 text-sm">+24 this week</p>
              </div>

            </div>
          )}

          {/* ================= EARNINGS ================= */}
          {activeMenu === "Earnings" && (
            <div className="grid lg:grid-cols-3 gap-6">

              {/* GRAPH */}
              <div className="lg:col-span-2 bg-[#020617] p-5 rounded-xl">
                <h3 className="mb-4 font-semibold">Earnings graph</h3>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={earningsData}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="cash" fill="#22c55e" radius={[5,5,0,0]} />
                    <Bar dataKey="online" fill="#3b82f6" radius={[5,5,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-4">

                <div className="bg-[#020617] p-5 rounded-xl">
                  <p>Total earning</p>
                  <h3 className="text-2xl font-bold">₹1,24,500</h3>
                  <p className="text-green-400 text-sm">All time</p>
                </div>
                 <div className="bg-[#020617] p-5 rounded-xl">
                  <p>Today's earning</p>
                  <h3 className="text-2xl font-bold">₹8,200</h3>
                  <p className="text-yellow-400 text-sm">+12% vs yesterday</p>
                  
                </div>


                <div className="bg-[#020617] p-5 rounded-xl">
                  <p>This week</p>
                  <h3 className="text-2xl font-bold">₹3,200</h3>
                  <p className="text-blue-400 text-sm">Mon - Sun</p>
                </div>

                <div className="bg-[#020617] p-5 rounded-xl">
                  <p>Monthly earning</p>
                  <h3 className="text-2xl font-bold">₹24,500</h3>
                  <p className="text-yellow-400 text-sm">+8% vs last month</p>
                </div>

                {/* <div className="bg-[#020617] p-5 rounded-xl">
                  <p className="mb-3">Payment mode</p>

                  <div className="flex gap-3 mb-3">
                    <button className="flex-1 bg-green-500 py-2 rounded-lg">
                      Cash
                    </button>
                    <button className="flex-1 bg-gray-700 py-2 rounded-lg">
                      Online
                    </button>
                  </div>

                  <div className="text-sm space-y-1">
                    <p className="flex justify-between">
                      <span>Cash</span>
                      <span className="text-green-400">₹14,200</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Online</span>
                      <span className="text-blue-400">₹10,300</span>
                    </p>
                  </div>
                </div> */}

              </div>

            </div>
          )}

          {/* My Shops */}
          {activeMenu === "My Shops" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {shops.length === 0 ? (
                <p>No shops added yet</p>
              ) : (
                shops.map((shop, i) => (
                  <div key={i} className="bg-[#1e293b] rounded-xl overflow-hidden">
                    {shop.image && (
                      <img
                        src={URL.createObjectURL(shop.image)}
                        className="w-full h-40 object-cover"
                      />
                    )}

                    <div className="p-4">
                      <h3 className="font-semibold">{shop.shopName}</h3>
                      <p className="text-sm text-gray-400">{shop.city}</p>

                      <button
                        onClick={() => handleDelete(i)}
                        className="mt-2 bg-red-500 px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}

            </div>
          )}

          {/* Services */}
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
                  </div>
                ))
              )}

            </div>
          )}

        </div>
        
    {/* ================= BOOKINGS ================= */}
{activeMenu === "Bookings" && (
  <div className="bg-[#020617] p-5 rounded-xl">

    <h3 className="mb-4 font-semibold">Today's Bookings</h3>

    {/* FILTER BUTTONS */}
    <div className="flex gap-3 mb-4">
      {["All", "Confirmed", "Pending", "Cancelled"].map((status) => (
        <button
          key={status}
          onClick={() => setBookingFilter(status)}
          className={`px-4 py-1 rounded-lg ${
            bookingFilter === status
              ? "bg-green-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {status}
        </button>
      ))}
    </div>

    {/* BOOKINGS LIST */}
    {filteredBookings.length === 0 ? (
      <p>No bookings found</p>
    ) : (
      <div className="space-y-3">
        {filteredBookings.map((b, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#1e293b] p-3 rounded-lg"
          >
            <div>
              <p className="font-semibold">{b.name}</p>
              <p className="text-sm text-gray-400">
                {b.service} • {b.time}
              </p>
            </div>

            <span
              className={`text-sm px-3 py-1 rounded-full ${
                b.status === "Confirmed"
                  ? "bg-green-600"
                  : b.status === "Pending"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {b.status}
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
)}
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
  
)};

export default OwnerDashboard;