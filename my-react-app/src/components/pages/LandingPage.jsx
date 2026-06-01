import Footer from "../organisms/Footer.jsx";
import Navbar from "../organisms/Navbar.jsx";

function LandingPage({ onNavigate, theme, setTheme }) {
  return (
    <div className="relative overflow-hidden bg-[#FFFFFF]">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#EEF4FF] opacity-45 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-10 h-96 w-96 rounded-full bg-[#D6E4FF] opacity-25 blur-[120px]" />

      <Navbar onNavigate={onNavigate} />

      <main className="mx-auto flex min-h-screen w-full max-w-none flex-col gap-14 px-0 pb-24 pt-0">

        {/* ── HERO ── */}
        <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#F5F7FA]">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full bg-[#1E3A5F] text-white text-xs shadow"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(6,5,4,0.82) 0%, rgba(10,8,6,0.78) 55%, rgba(6,5,4,0.9) 100%), url('https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-[#F5F7FA]" />

          <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 text-center">
            <h1 className="font-display mt-5 text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Look Sharp.
              <br />
              Feel Confident.
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-white/80 sm:text-base">
              Premium men's grooming services delivered by master barbers in a modern,
              masculine environment. Experience the art of the perfect cut.
            </p>

            {/* Scrolling cards */}
            <div className="mt-10 w-full overflow-x-auto">
              <div className="flex gap-6 animate-scroll whitespace-nowrap">
                {[
                  {
                    name: "Men's Waxing Services",
                    location: "City Center, Gwalior",
                    price: "₹699",
                    img: "https://tse1.explicit.bing.net/th/id/OIP.T6cWZ_fiZOZkQlMbOwH90wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                  },
                  {
                    name: "Hair Cutting & Styling",
                    location: "Prem Nagar, Gwalior",
                    rating: "⭐ 4.5",
                    img: "https://thumbs.dreamstime.com/b/barber-shop-men-hair-cut-barber-doing-men-fashion-hairstyle-barber-shop-men-hair-cut-barber-doing-men-fashion-hairstyle-cutting-121116869.jpg"
                  },
                  {
                    name: "Razor Shave",
                    location: "DD Nagar, Gwalior",
                    rating: "⭐ 4.5",
                    img: "https://tse4.mm.bing.net/th/id/OIP._Lg-zIjodxNc8FPOFecx0gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
                  },
                  {
                    name: "Facial Treatment",
                    location: "Thatipur, Gwalior",
                    rating: "4.5",
                    price: "₹299",
                    img: "https://image.shutterstock.com/z/stock-photo-barber-applying-purifying-mask-on-his-client-face-583807252.jpg"
                  },
                  {
                    name: "Hair Coloring & Highlights",
                    location: "Thatipur, Gwalior",
                    rating: "⭐ 4.5",
                    img: "https://www.apetogentleman.com/wp-content/uploads/2022/03/hair-dye-men-salon-800x534.jpg",
                  },
                  {
                    name: "Hair Wash & Scalp Massage",
                    location: "DD Nagar, Gwalior",
                    rating: "⭐ 4.5",
                    img: "https://images.squarespace-cdn.com/content/v1/5db8681c68eae7671fe4cc2e/9d71f2ee-3a3a-40eb-87f1-d4a6420d6d41/Gentleman's+Barber+Spa+NYC+wash.jpeg?format=1500w"
                  },
                  {
                    name: "Hair Spa",
                    location: "DD Nagar, Gwalior",
                    rating: "⭐ 4.5",
                    img: "https://mensroomspa.com/wp-content/uploads/2022/11/the-mens-room-barber-lounge-and-spa-in-rochester-ny.jpg"
                  },
                  {
                    name: "Hair Spa",
                    location: "DD Nagar, Gwalior",
                    rating: "⭐ 4.5",
                    img: "https://mensroomspa.com/wp-content/uploads/2022/11/the-mens-room-barber-lounge-and-spa-in-rochester-ny.jpg"
                  },
                  {
                    name: "Hair Spa",
                    location: "DD Nagar, Gwalior",
                    rating: "⭐ 4.5",
                    img: "https://mensroomspa.com/wp-content/uploads/2022/11/the-mens-room-barber-lounge-and-spa-in-rochester-ny.jpg"
                  },
                  {
                    name: "Hair Spa",
                    location: "DD Nagar, Gwalior",
                    rating: "⭐ 4.5",
                    img: "https://mensroomspa.com/wp-content/uploads/2022/11/the-mens-room-barber-lounge-and-spa-in-rochester-ny.jpg"
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="min-w-[280px] max-w-[280px] rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-[0_8px_24px_-10px_rgba(0,0,0,0.1)] p-4"
                  >
                    <img src={card.img} className="h-36 w-full object-cover rounded-xl" />
                    <p className="text-[#1A1A1A] font-semibold text-sm mt-3">
                      {card.name}
                    </p>
                    <p className="text-[#6B7280] text-xs mt-1">
                      📍 {card.location}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[#1E3A5F]">⭐⭐⭐⭐</span>
                      <span className="text-[#1E3A5F] text-sm font-semibold">
                        {card.rating || "4.0"}
                      </span>
                      <span className="text-[#6B7280] text-xs">(84 reviews)</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-[#1E3A5F] font-bold text-lg">
                        {card.price || "₹699"}
                      </p>
                      <button
                        onClick={() => onNavigate("register")}
                        className="bg-[#1E3A5F] text-white text-xs px-4 py-2 rounded-full font-semibold hover:bg-[#16324F] hover:scale-105 transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR SERVICES ── */}
        <section className="w-full bg-[#F5F7FA] px-6 py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <h2 className="font-display text-3xl text-[#1A1A1A] md:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-sm text-[#6B7280]">
              Expert grooming services tailored to the modern gentleman
            </p>
            <div className="mt-12 grid w-full gap-6 md:grid-cols-4">
              {[
                { title: "Premium Haircut", price: "$35", icon: "✂️" },
                { title: "Beard Trim & Style", price: "$25", icon: "✨" },
                { title: "Skin Fade", price: "$40", icon: "🎖️" },
                { title: "Hot Towel Shave", price: "$30", icon: "🪒" },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-left shadow-[0_8px_24px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_-10px_rgba(30,58,95,0.12)] hover:-translate-y-1 transition duration-300"
                >
                  <div className="text-2xl">{service.icon}</div>
                  <p className="mt-4 text-sm font-semibold text-[#1A1A1A]">
                    {service.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#1E3A5F]">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="mt-10 rounded-full border border-[#1E3A5F] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A5F] transition hover:bg-[#1E3A5F] hover:text-white"
              type="button"
            >
              View All Services
            </button>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="w-full bg-[#FFFFFF]">
          <div
            className="relative h-56 w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(6,5,4,0.7) 0%, rgba(6,5,4,0.9) 100%), url('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-6 text-center">
              <h2 className="font-display text-3xl text-white md:text-4xl">
                About Barbershop
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Where tradition meets modern style
              </p>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr]">
            <div>
              <h3 className="font-display text-2xl text-[#1A1A1A]">Our Story</h3>
              <p className="mt-4 text-sm text-[#6B7280]">
                Founded in 2026, Barbershop was born from a simple vision: to create a
                premium grooming experience that honors traditional barbering while
                embracing modern style and technique.
              </p>
              <p className="mt-4 text-sm text-[#6B7280]">
                What started as a single chair operation has grown into a trusted
                destination for men's grooming. Our success comes from attention to
                detail, honest service, and a genuine love for the craft.
              </p>
              <p className="mt-4 text-sm text-[#6B7280]">
                Every cut is tailored, every visit is personal, and every client is
                treated with care and respect.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=600&q=80",
              ].map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA]"
                >
                  <img
                    alt="Barbershop"
                    className="h-full w-full object-cover"
                    src={src}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR VALUES ── */}
        <section className="w-full bg-[#F5F7FA] px-6 py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <h2 className="font-display text-3xl text-[#1A1A1A] md:text-4xl">
              Our Values
            </h2>
            <p className="mt-3 text-sm text-[#6B7280]">
              The principles that guide everything we do
            </p>
            <div className="mt-12 grid w-full gap-6 md:grid-cols-4">
              {[
                {
                  title: "Excellence",
                  copy: "We pursue perfection in every cut, delivering premium results.",
                },
                {
                  title: "Community",
                  copy: "More than a barbershop, we are a place for connection.",
                },
                {
                  title: "Dedication",
                  copy: "We master the craft and keep evolving with modern trends.",
                },
                {
                  title: "Passion",
                  copy: "Our love for barbering shows in every detail of our work.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-left shadow-[0_8px_24px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_-10px_rgba(30,58,95,0.12)] hover:-translate-y-1 transition duration-300"
                >
                  <p className="text-sm font-semibold text-[#1A1A1A]">{value.title}</p>
                  <p className="mt-3 text-sm text-[#6B7280]">{value.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="w-full bg-[#FFFFFF] px-6 py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <h2 className="font-display text-3xl text-[#1A1A1A] md:text-4xl">
              What Our Clients Say
            </h2>
            <div className="mt-12 grid w-full gap-6 md:grid-cols-3">
              {[
                {
                  name: "Marcus Johnson",
                  quote:
                    "Best fade I've ever had. These guys are true professionals who take their time to get it perfect.",
                },
                {
                  name: "David Chen",
                  quote:
                    "Clean environment, skilled barbers, and great conversation. My go-to spot for the past 2 years.",
                },
                {
                  name: "James Wilson",
                  quote:
                    "Elite Cuts lives up to its name. The attention to detail is unmatched. Highly recommend!",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-left shadow-[0_8px_24px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_-10px_rgba(30,58,95,0.12)] hover:-translate-y-1 transition duration-300"
                >
                  <div className="text-[#1E3A5F] text-lg">★★★★★</div>
                  <p className="mt-4 text-sm text-[#6B7280]">"{review.quote}"</p>
                  <p className="mt-6 text-sm font-semibold text-[#1A1A1A]">
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISIT US ── */}
        <section className="w-full bg-[#F5F7FA] px-6 py-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="text-left">
              <h2 className="font-display text-3xl text-[#1A1A1A] md:text-4xl">
                Visit Us Today
              </h2>
              <div className="mt-6 space-y-6 text-sm text-[#6B7280]">
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Opening Hours</p>
                  <p className="mt-2">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Location</p>
                  <p className="mt-2">New Mens Hair Saloon</p>
                  <p>Prem Nagar, Kila Gate Road</p>
                  <p>Gwalior, Madhya Pradesh 474002</p>
                </div>
              </div>
              <button
                className="mt-8 rounded-full bg-[#1E3A5F] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#1E3A5F]/20 hover:bg-[#16324F] transition"
                type="button"
              >
                Get Directions
              </button>
            </div>
            <div className="w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-[0_24px_60px_-35px_rgba(0,0,0,0.15)]">
              <iframe
                title="Elite Cuts Location"
                className="h-[280px] w-full rounded-xl md:h-[320px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=New%20Mens%20Hair%20Saloon%2C%20Prem%20Nagar%2C%20Kila%20Gate%20Road%2C%20Gwalior%2C%20Madhya%20Pradesh%20474002&z=16&output=embed"
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;