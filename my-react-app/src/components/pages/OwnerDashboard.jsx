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
  Legend,
  CartesianGrid
} from "recharts";

function OwnerDashboard({ onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showShopModal, setShowShopModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [shops, setShops] = useState([]);
  const [services, setServices] = useState([]);
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

  const earningsData = [
    { month: "Jan", cash: 8000, online: 4000 },
    { month: "Feb", cash: 9000, online: 5000 },
    { month: "Mar", cash: 7000, online: 4000 },
    { month: "Apr", cash: 11000, online: 6000 },
    { month: "May", cash: 13000, online: 7000 },
    { month: "Jun", cash: 10000, online: 6000 },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    onNavigate?.("login");
  };

  const handleMenuClick = (item) => {
  if (item === "Logout") return handleLogout();

  if (item === "Add Shop") {
    setShowShopModal(true);
    return; // ❗ IMPORTANT: activeMenu change mat karo
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
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      
      {/* Sidebar - Clean White Glass */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 hidden md:flex flex-col shadow-sm">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">✂️</div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">Trim<span className="text-indigo-600">Master</span></h1>
        </div>

        <nav className="space-y-1 flex-1">
          {["Dashboard", "Add Shop", "My Shops", "Services", "Earnings", "Bookings"].map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 font-medium ${
                activeMenu === item 
                ? "bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeMenu === item ? "bg-indigo-600 scale-100" : "bg-transparent scale-0"}`}></div>
              {item}
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-500 font-medium transition-colors"
        >
          <span>🚪 Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-h-screen overflow-y-auto">
        
        {/* Top Header */}
        <header className="flex justify-between items-center px-8 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome, Raj</h1>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Dashboard Overview</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-slate-600">
              <span className="text-lg">🔔</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-2 p-1 pr-4 rounded-full bg-slate-100 border border-slate-200 hover:border-indigo-300 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white shadow-md">R</div>
                <span className="text-sm font-bold text-slate-700 hidden sm:inline">Settings</span>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden ring-4 ring-slate-950/5 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-4 bg-slate-50 border-b border-slate-200">
                    <p className="text-sm font-bold text-slate-900">Raj Barber</p>
                    <p className="text-xs text-slate-500">owner@trimms.com</p>
                  </div>
                  <button className="block w-full text-left px-4 py-3 text-sm font-medium hover:bg-slate-50">Profile Settings</button>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50">Logout</button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          
          {/* Stats Cards */}
          {activeMenu === "Dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Total Shops", value: shops.length, grow: "+1 this month", color: "text-emerald-600", bg: "bg-emerald-50", icon: "🏢" },
                { label: "Total Bookings", value: "128", grow: "+12 today", color: "text-indigo-600", bg: "bg-indigo-50", icon: "🗓️" },
                { label: "Revenue", value: "₹24,500", grow: "+8.4%", color: "text-amber-600", bg: "bg-amber-50", icon: "💰" },
                { label: "Customers", value: "342", grow: "+24 new", color: "text-purple-600", bg: "bg-purple-50", icon: "👥" }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all group relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</h3>
                        <p className="text-3xl font-black text-slate-900 mb-2">{stat.value}</p>
                        <span className={`text-[11px] font-bold ${stat.color} ${stat.bg} px-2 py-0.5 rounded-md`}>{stat.grow}</span>
                    </div>
                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{stat.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Earnings View */}
          {activeMenu === "Earnings" && (
            <div className="grid lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="lg:col-span-2 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="font-bold text-slate-900 text-xl">Financial Growth</h3>
                  <div className="flex gap-2">
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Cash</span>
                      <span className="flex items-center gap-1 text-xs font-bold text-indigo-600"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Online</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{fill: '#F1F5F9'}} contentStyle={{backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                    <Bar dataKey="cash" fill="#10B981" radius={[6, 6, 0, 0]} barSize={16} />
                    <Bar dataKey="online" fill="#6366F1" radius={[6, 6, 0, 0]} barSize={16} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                <div className="bg-indigo-600 p-8 rounded-3xl shadow-xl shadow-indigo-200 text-white relative overflow-hidden">
                    <p className="text-indigo-100 text-sm font-medium mb-1 uppercase tracking-tighter">Total Earnings</p>
                    <h3 className="text-4xl font-black mb-4">₹1,24,500</h3>
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold inline-block">Lifetime Revenue</div>
                    <div className="absolute -bottom-4 -right-4 text-7xl opacity-10">📈</div>
                </div>
                {[{t:"Today", v:"₹8,200", c:"text-emerald-600"}, {t:"This Week", v:"₹24,500", c:"text-amber-600"}].map((x, i) => (
                    <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl">
                        <p className="text-slate-400 text-sm font-bold">{x.t}</p>
                        <h3 className={`text-2xl font-black ${x.c}`}>{x.v}</h3>
                    </div>
                ))}
              </div>
            </div>
          )}

          {/* Bookings View */}
          {activeMenu === "Bookings" && (
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm animate-in fade-in duration-500">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h3 className="text-xl font-black text-slate-900">Appointment Ledger</h3>
                <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                  {["All", "Confirmed", "Pending", "Cancelled"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setBookingFilter(status)}
                      className={`px-6 py-2 text-xs font-black rounded-xl transition-all ${
                        bookingFilter === status ? "bg-white text-indigo-600 shadow-md" : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {filteredBookings.length === 0 ? (
                  <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-medium italic">No matches found.</p>
                  </div>
                ) : (
                  filteredBookings.map((b, i) => (
                    <div key={i} className="flex justify-between items-center bg-white border border-slate-100 p-5 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center font-bold text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">{b.name[0]}</div>
                        <div>
                          <p className="font-bold text-slate-900">{b.name}</p>
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{b.service} • {b.time}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] uppercase font-black px-4 py-2 rounded-xl ${
                        b.status === "Confirmed" ? "bg-emerald-100 text-emerald-700" :
                        b.status === "Pending" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                      }`}>
                        {b.status}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* My Shops View */}
          {activeMenu === "My Shops" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
              {shops.length === 0 ? (
                 <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 shadow-sm">
                   <p className="text-slate-400 font-bold text-xl mb-4">No registered shops yet.</p>
                   <button onClick={() => setShowShopModal(true)} className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-100">Setup Your Shop</button>
                 </div>
              ) : (
                shops.map((shop, i) => (
                  <div key={i} className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all group">
                    <div className="relative h-48 overflow-hidden">
                        {shop.image ? (
                        <img src={URL.createObjectURL(shop.image)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={shop.shopName} />
                        ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-5xl">🏪</div>
                        )}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm rounded-lg px-3 py-1 text-[10px] font-bold uppercase text-slate-900 tracking-tighter">Verified</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-black text-slate-900 mb-1">{shop.shopName}</h3>
                      <p className="text-sm font-semibold text-slate-400 mb-6">📍 {shop.city}</p>
                      <div className="flex gap-2">
                          <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors">Analytics</button>
                          <button onClick={() => handleDelete(i)} className="bg-red-50 text-red-600 px-4 py-3 rounded-xl hover:bg-red-100 transition-colors font-bold">🗑️</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </main>
      </div>

      {/* Keep Modals logic same */}
      <AddShopModal isOpen={showShopModal} onClose={() => setShowShopModal(false)} onSave={(newShop) => { setShops([...shops, newShop]); setActiveMenu("My Shops"); }} />
      <AddServiceModal isOpen={showServiceModal} onClose={() => setShowServiceModal(false)} onSave={(newService) => { setServices([...services, newService]); setActiveMenu("Services"); }} />
    </div>
  );
}

export default OwnerDashboard;