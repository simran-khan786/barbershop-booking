import { useMemo, useState, useEffect } from "react";
import {
  ArrowRight,
  Filter,
  MapPin,
  Scissors,
  Search,
  Sparkles,
  Star,
  // ── Profile panel icons ──
  User,
  Settings,
  Bell,
  CreditCard,
  Clock,
  Moon,
  Globe,
  HelpCircle,
  MessageSquare,
  LogOut,
  ChevronRight,
  Globe2,
} from "lucide-react";

const FILTERS = ["All", "Near Me", "Hair Cut", "Beard", "Spa"];

// ════════════════════════════════════════════
// CHANGE 1 — ProfilePanel component
// (paste this ABOVE HomePage function)
// ════════════════════════════════════════════
function ProfilePanel({ onClose, onLogout }) {
  const [darkMode, setDarkMode] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(onClose, 320);
  };

  const logout = () => {
    setVisible(false);
    setTimeout(() => { onClose(); onLogout(); }, 320);
  };

  const menuItems = [
    { Icon: User,         label: "My Profile",    badge: null },
    { Icon: Settings,     label: "Settings",      badge: null },
    { Icon: Bell,         label: "Notifications", badge: 3    },
    { Icon: CreditCard,   label: "Billing",       badge: null },
    { Icon: Clock,        label: "History",       badge: null },
  ];

  const supportItems = [
    { Icon: HelpCircle,    label: "Help Center"   },
    { Icon: MessageSquare, label: "Send Feedback" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      />

      {/* Side Panel — slides in from right */}
      <div
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[#0f1115] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{
          transform: visible ? "translateX(0)" : "translateX(100%)",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.7)",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Globe2 size={15} />
            Visit Store
          </button>
          <div className="flex items-center gap-3">
            <div className="relative cursor-pointer">
              <Bell size={20} className="text-white/70" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                3
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
              alt="avatar"
              className="h-9 w-9 rounded-full object-cover border border-white/15"
            />
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">

          {/* User info */}
          <div className="border-b border-white/8 px-6 py-6">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                alt="Pranav"
                className="h-16 w-16 rounded-full object-cover border-2 border-white/15"
              />
              <div>
                <p className="text-lg font-bold text-white">Pranav</p>
                <p className="text-sm text-white/50">pranav@email.com</p>
              </div>
            </div>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-1.5 text-sm font-medium text-white/80 transition hover:bg-white/10"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
              Online
              <ChevronRight size={14} className="text-white/40" />
            </button>
          </div>

          {/* Main menu */}
          <div className="border-b border-white/8 px-3 py-3">
            {menuItems.map(({ Icon, label, badge }) => (
              <button
                key={label}
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm text-white/75 transition duration-200 hover:bg-white/6 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className="text-white/40" />
                  {label}
                </span>
                <span className="flex items-center gap-2">
                  {badge && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {badge}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-white/25" />
                </span>
              </button>
            ))}
          </div>

          {/* Preferences */}
          <div className="border-b border-white/8 px-3 py-3">
            {/* Dark Mode */}
            <div className="flex items-center justify-between rounded-xl px-4 py-3.5">
              <span className="flex items-center gap-3 text-sm text-white/75">
                <Moon size={18} className="text-white/40" />
                Dark Mode
              </span>
              <button
                onClick={() => setDarkMode((d) => !d)}
                type="button"
                className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
                  darkMode ? "bg-blue-500" : "bg-white/20"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                    darkMode ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            {/* Language */}
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm text-white/75 transition hover:bg-white/6 hover:text-white"
            >
              <span className="flex items-center gap-3">
                <Globe size={18} className="text-white/40" />
                Language
              </span>
              <span className="flex items-center gap-0.5 text-sm text-white/35">
                English <ChevronRight size={16} />
              </span>
            </button>
          </div>

          {/* Support */}
          <div className="border-b border-white/8 px-3 py-3">
            {supportItems.map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm text-white/75 transition hover:bg-white/6 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className="text-white/40" />
                  {label}
                </span>
                <ChevronRight size={16} className="text-white/25" />
              </button>
            ))}
          </div>

          {/* Logout */}
          <div className="px-7 py-5">
            <button
              onClick={logout}
              type="button"
              className="flex items-center gap-3 text-sm font-semibold text-red-400 transition hover:text-red-300"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

// ════════════════════════════════════════════
// HOME PAGE — your original code, 3 spots changed
// ════════════════════════════════════════════
function HomePage({ onNavigate, setSelectedSalon }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [shops, setShops] = useState([]);
  const [radius, setRadius] = useState(5);
  const [nearbyShops, setNearbyShops] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false); // ← CHANGE 2: new state

  const normalizedQuery = query.trim().toLowerCase();

  const mappedShops = shops.map((shop, index) => ({
    id: index,
    name: shop.shopName,
    location: shop.city,
    distance: shop.distance !== undefined
      ? (shop.distance < 1
          ? (shop.distance * 1000).toFixed(0) + " m"
          : shop.distance.toFixed(1) + " km")
      : "N/A",
    rating: 4.5,
    price: "₹499",
    tag: "Popular",
    image: shop.imageUrl && shop.imageUrl !== ""
      ? shop.imageUrl
      : "https://via.placeholder.com/300",
    services: shop.services?.map(s => s.serviceName) || []
  }));

  const mappedNearbyShops = nearbyShops.map((shop, index) => ({
    id: index,
    name: shop.shopName,
    location: shop.city,
    distance: shop.distance !== undefined
      ? (shop.distance < 1
          ? (shop.distance * 1000).toFixed(0) + " m"
          : shop.distance.toFixed(1) + " km")
      : "N/A",
    rating: 4.5,
    priceRange: "₹399 - ₹999",
    image: shop.imageUrl && shop.imageUrl !== ""
      ? shop.imageUrl
      : "https://via.placeholder.com/300",
    services: shop.services?.map(s => s.serviceName) || []
  }));

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:8080/api/shops", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setShops(data);
      } catch (err) {
        console.error("Error fetching shops", err);
      }
    };
    fetchShops();
  }, []);

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(loc);
      },
      () => { alert("Location permission denied ❌"); }
    );
  };

  useEffect(() => {
    if (!userLocation) return;
    const fetchNearby = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `http://localhost:8080/api/shops/nearby?lat=${userLocation.lat}&lng=${userLocation.lng}&radius=${radius}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        setNearbyShops(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNearby();
  }, [userLocation, radius]);

  const matchesFilter = (salon) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Near Me") return salon.distance !== "N/A";
    return salon.services.some((service) =>
      service.toLowerCase().includes(activeFilter.toLowerCase())
    );
  };

  const matchesSearch = (salon) =>
    normalizedQuery.length === 0 ||
    salon.name.toLowerCase().includes(normalizedQuery) ||
    salon.location.toLowerCase().includes(normalizedQuery) ||
    salon.services.some((service) =>
      service.toLowerCase().includes(normalizedQuery)
    );

  const featuredSalons = useMemo(
    () => mappedShops.filter((salon) => matchesFilter(salon) && matchesSearch(salon)),
    [mappedShops, activeFilter, normalizedQuery]
  );

  const nearbySalons = useMemo(() => {
    if (!userLocation) return [];
    return mappedNearbyShops.filter(
      (salon) => matchesFilter(salon) && matchesSearch(salon)
    );
  }, [mappedNearbyShops, activeFilter, normalizedQuery, userLocation]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (onNavigate) onNavigate("landing");
  };

  const handleBookAppointment = (salon) => {
    setSelectedSalon(salon);
    onNavigate("booking");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#2d2217_0%,#17181c_24%,#0c0d10_60%,#090a0c_100%)] text-white">
      <div className="w-full px-0 py-0">
        <div className="min-h-screen w-full overflow-hidden border-x-0 border-y-0 border-white/10 bg-white/5 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.65)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl motion-safe:animate-pulse" />
            <div className="absolute right-10 top-24 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl motion-safe:animate-pulse" />
          </div>

          <div className="space-y-8 p-4 sm:p-6 lg:p-8 xl:p-10">
            <section className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-white/60">Good Morning</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Pranav
                </h1>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    onClick={handleGetLocation}
                    className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition"
                  >
                    <MapPin size={14} />
                    {userLocation ? "📍 Location Enabled" : "Enable Location"}
                  </button>
                  {!userLocation && (
                    <span className="text-xs text-white/50">
                      Turn on location to see nearby shops
                    </span>
                  )}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-300/15 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-200 shadow-[0_10px_30px_-18px_rgba(251,191,36,0.8)] transition duration-300 hover:border-amber-300/25 hover:bg-amber-400/15">
                  <Sparkles size={14} />
                  Premium picks curated for you
                  <span className="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  {/* Notification Bell */}
                  <div className="relative cursor-pointer">
                    <Bell size={22} className="text-white/80 hover:text-white transition" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                      3
                    </span>
                  </div>

                  {/* History Icon */}
                  <Clock size={22} className="text-white/80 cursor-pointer hover:text-white transition" />


                </div>
                {/* CHANGE 3 — onClick added to open panel */}
                <button
                  onClick={() => setProfileOpen(true)}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-amber-400/40 hover:bg-white/15 active:scale-[0.98]"
                  type="button"
                >
                  <img
                    alt="Profile avatar"
                    className="h-12 w-12 rounded-2xl object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                  />
                </button>
              </div>
            </section>

            <section className="flex flex-col gap-3 sm:flex-row">
              <button
                className="inline-flex items-center justify-center rounded-2xl bg-[#111317] px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#171a20] active:scale-[0.98] sm:hidden"
                onClick={handleLogout}
                type="button"
              >
                Logout
              </button>
              <label className="group flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:border-white/15 hover:bg-white/10 focus-within:-translate-y-0.5 focus-within:border-white/20 focus-within:bg-white/10 focus-within:shadow-[0_18px_45px_-28px_rgba(255,255,255,0.2)]">
                <Search
                  size={18}
                  className="text-white/45 transition duration-300 group-hover:scale-110 group-focus-within:text-white/70"
                />
                <input
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search salons, services..."
                  type="text"
                  value={query}
                />
              </label>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#111317] px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#171a20] hover:shadow-[0_20px_50px_-18px_rgba(0,0,0,0.75)] active:scale-[0.98]"
                type="button"
              >
                <Filter size={18} />
                Filters
              </button>
            </section>

            <section className="overflow-x-auto">
              <div className="flex min-w-max gap-3">
                {FILTERS.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      className={`rounded-2xl px-5 py-2.5 text-sm font-medium transition duration-300 active:scale-[0.98] ${
                        isActive
                          ? "bg-[#111317] text-white shadow-[0_12px_30px_-16px_rgba(0,0,0,0.7)]"
                          : "border border-white/12 bg-white/5 text-white/70 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:text-white"
                      }`}
                      onClick={() => setActiveFilter(filter)}
                      type="button"
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">
                    Featured Salons
                  </h2>
                  <p className="mt-1 text-sm text-white/55">
                    Handpicked salons with premium experience
                  </p>
                </div>
                <button className="text-sm font-medium text-white/65 transition hover:text-white">
                  See all
                </button>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {featuredSalons.map((salon) => (
                  <article
                    key={salon.id}
                    className="group min-w-[280px] max-w-[320px] flex-1 rounded-2xl border border-white/10 bg-white/6 shadow-[0_18px_45px_-25px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[0_24px_60px_-25px_rgba(0,0,0,0.8)]"
                  >
                    <div className="relative h-52 overflow-hidden rounded-t-2xl">
                      <img
                        alt={salon.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        src={salon.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md transition duration-300 group-hover:bg-white/20">
                        {salon.tag}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{salon.name}</h3>
                          <p className="mt-1 text-sm text-white/70">{salon.location}</p>
                        </div>
                        <div className="rounded-full bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                          {salon.distance}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 p-4">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-300">
                          <Star size={15} className="fill-amber-300 text-amber-300" />
                          {salon.rating}
                        </div>
                        <button
                          onClick={() => handleBookAppointment(salon)}
                          className="bg-gradient-to-r from-[#f7a23b] to-[#b85a21] px-4 py-1.5 rounded-full text-xs font-semibold text-black hover:scale-105 transition"
                        >
                          Book Now
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {salon.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/70 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}

                {featuredSalons.length === 0 && (
                  <div className="flex min-h-[260px] w-full items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 text-sm text-white/55">
                    No featured salons match your search.
                  </div>
                )}
              </div>

              <div className="mt-5 flex justify-center sm:justify-start">
                <button
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#f7a23b] via-[#de7b2f] to-[#b85a21] px-6 py-3 text-sm font-semibold text-[#111] shadow-[0_18px_40px_-18px_rgba(247,162,59,0.55)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_50px_-18px_rgba(247,162,59,0.65)] active:scale-[0.98]"
                  onClick={handleBookAppointment}
                  type="button"
                >
                  Book Appointment
                </button>
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">Nearby</h2>
                  <p className="mt-1 text-sm text-white/55">Best options around your location</p>
                  <div className="flex gap-2 mb-4">
                    {[5, 10, 15, 20].map((r) => (
                      <button
                        key={r}
                        onClick={() => setRadius(r)}
                        className={`px-3 py-1 rounded-full text-xs ${
                          radius === r ? "bg-white text-black" : "bg-white/10 text-white"
                        }`}
                      >
                        {r} km
                      </button>
                    ))}
                  </div>
                </div>
                <button className="text-sm font-medium text-white/65 transition hover:text-white">
                  See all
                </button>
              </div>

              <div className="space-y-4">
                {nearbySalons.map((salon) => (
                  <article
                    key={salon.id}
                    className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/6 p-4 shadow-[0_18px_45px_-25px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)] sm:flex-row sm:items-center"
                  >
                    <div className="relative h-24 overflow-hidden rounded-2xl sm:h-28 sm:w-32">
                      <img
                        alt={salon.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        src={salon.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="truncate text-lg font-semibold text-white">{salon.name}</h3>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-white/60">
                            <span className="inline-flex items-center gap-1">
                              <MapPin size={14} />
                              {salon.location}
                            </span>
                            <span>• {salon.distance}</span>
                            <span className="inline-flex items-center gap-1 text-amber-300">
                              <Star size={14} className="fill-amber-300 text-amber-300" />
                              {salon.rating}
                            </span>
                            <span>• {salon.priceRange}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="rounded-full bg-white/8 p-2 text-white/70">
                            <ArrowRight size={18} />
                          </div>
                          <button
                            onClick={() => handleBookAppointment(salon)}
                            className="text-xs bg-[#f7a23b] text-black px-3 py-1 rounded-full hover:scale-105 transition"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {salon.services.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#101216] px-3 py-1 text-xs text-white/70 transition duration-300 hover:border-white/20 hover:bg-[#15181d] hover:text-white"
                          >
                            <Scissors size={12} />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookAppointment(salon)}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f7a23b] px-4 py-3 text-sm font-medium text-black sm:hidden"
                    >
                      Book Now
                    </button>
                  </article>
                ))}

                {!userLocation ? (
                  <div className="flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 text-sm text-white/55">
                    Enable location to see nearby salons 📍
                  </div>
                ) : nearbySalons.length === 0 ? (
                  <div className="flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 text-sm text-white/55">
                    No nearby salons found in your area
                  </div>
                ) : null}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CHANGE 4 — ProfilePanel render, just before closing </div> */}
      {profileOpen && (
        <ProfilePanel
          onClose={() => setProfileOpen(false)}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default HomePage;