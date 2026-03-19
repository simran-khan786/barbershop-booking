import { useMemo, useState } from "react";
import {
  ArrowRight,
  Filter,
  MapPin,
  Scissors,
  Search,
  Sparkles,
  Star,
} from "lucide-react";

const FILTERS = ["All", "Near Me", "Hair Cut", "Beard", "Spa"];

const FEATURED_SALONS = [
  {
    id: 1,
    name: "Velvet Cut Studio",
    location: "City Center, Gwalior",
    distance: "1.2 km",
    rating: 4.9,
    price: "₹699",
    tag: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
    services: ["Hair Cut", "Beard", "Spa"],
  },
  {
    id: 2,
    name: "House of Fade",
    location: "Prem Nagar, Gwalior",
    distance: "2.0 km",
    rating: 4.8,
    price: "₹549",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80",
    services: ["Hair Cut", "Facial", "Beard"],
  },
  {
    id: 3,
    name: "Amber Grooming Club",
    location: "DD Nagar, Gwalior",
    distance: "3.4 km",
    rating: 4.7,
    price: "₹799",
    tag: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
    services: ["Spa", "Hair Cut", "Head Massage"],
  },
];

const NEARBY_SALONS = [
  {
    id: 11,
    name: "The Modern Barber",
    location: "Morar, Gwalior",
    distance: "0.9 km",
    rating: 4.8,
    priceRange: "₹399 - ₹899",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    services: ["Hair Cut", "Facial", "Beard Trim"],
  },
  {
    id: 12,
    name: "Trim & Tone Lounge",
    location: "Thatipur, Gwalior",
    distance: "1.5 km",
    rating: 4.6,
    priceRange: "₹349 - ₹749",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    services: ["Hair Cut", "Spa", "Cleanup"],
  },
  {
    id: 13,
    name: "Royal Blade Salon",
    location: "Lashkar, Gwalior",
    distance: "2.3 km",
    rating: 4.9,
    priceRange: "₹499 - ₹1,099",
    image:
      "https://images.unsplash.com/photo-1512690459411-b0fd1c2d4d1f?auto=format&fit=crop&w=900&q=80",
    services: ["Beard", "Hair Cut", "Keratin"],
  },
  {
    id: 14,
    name: "Glow & Groom",
    location: "Kila Gate Road, Gwalior",
    distance: "2.8 km",
    rating: 4.7,
    priceRange: "₹299 - ₹699",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    services: ["Spa", "Facial", "Hair Cut"],
  },
];

function HomePage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const matchesFilter = (salon) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Near Me") return parseFloat(salon.distance) <= 2;
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
    () =>
      FEATURED_SALONS.filter(
        (salon) => matchesFilter(salon) && matchesSearch(salon)
      ),
    [activeFilter, normalizedQuery]
  );

  const nearbySalons = useMemo(
    () =>
      NEARBY_SALONS.filter((salon) => matchesFilter(salon) && matchesSearch(salon)),
    [activeFilter, normalizedQuery]
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (onNavigate) {
      onNavigate("landing");
    }
  };

  const handleBookAppointment = () => {
    alert("Book appointment flow started.");
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
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-300/15 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-200 shadow-[0_10px_30px_-18px_rgba(251,191,36,0.8)] transition duration-300 hover:border-amber-300/25 hover:bg-amber-400/15">
                  <Sparkles size={14} />
                  Premium picks curated for you
                  <span className="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="hidden rounded-2xl border border-white/10 bg-[#111317] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-22px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#171a20] active:scale-[0.98] sm:inline-flex"
                  onClick={handleLogout}
                  type="button"
                >
                  Logout
                </button>
                <button
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-white/20 hover:bg-white/15 active:scale-[0.98]"
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
                          <h3 className="text-lg font-semibold text-white">
                            {salon.name}
                          </h3>
                          <p className="mt-1 text-sm text-white/70">
                            {salon.location}
                          </p>
                        </div>
                        <div className="rounded-full bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                          {salon.distance}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 p-4">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-300 transition duration-300 group-hover:translate-x-0.5">
                          <Star size={15} className="fill-amber-300 text-amber-300" />
                          {salon.rating}
                        </div>
                        <p className="text-base font-semibold text-white">
                          {salon.price}
                        </p>
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
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">
                    Nearby
                  </h2>
                  <p className="mt-1 text-sm text-white/55">
                    Best options around your location
                  </p>
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
                          <h3 className="truncate text-lg font-semibold text-white">
                            {salon.name}
                          </h3>
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

                        <div className="hidden rounded-full bg-white/8 p-2 text-white/70 transition duration-300 group-hover:translate-x-1 group-hover:bg-white/12 group-hover:text-white sm:flex">
                          <ArrowRight size={18} />
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
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#111317] px-4 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#171a20] active:scale-[0.98] sm:hidden"
                      type="button"
                    >
                      View
                      <ArrowRight size={16} />
                    </button>
                  </article>
                ))}

                {nearbySalons.length === 0 && (
                  <div className="flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 text-sm text-white/55">
                    No nearby salons found for this filter.
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
