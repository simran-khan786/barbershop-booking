import Footer from "../organisms/Footer.jsx";
import Navbar from "../organisms/Navbar.jsx";

function LandingPage({ onNavigate }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[var(--orb-1)] opacity-45 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-10 h-96 w-96 rounded-full bg-[var(--orb-2)] opacity-25 blur-[120px]" />

      <Navbar onNavigate={onNavigate} />

      <main className="mx-auto flex min-h-screen w-full max-w-none flex-col gap-14 px-0 pb-24 pt-0">
        <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[var(--surface)]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(6,5,4,0.82) 0%, rgba(10,8,6,0.78) 55%, rgba(6,5,4,0.9) 100%), url('https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-[#1a1b1f]" />
          <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]">
              Elite cuts
            </p>
            <h1 className="font-display mt-5 text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Look Sharp.
              <br />
              Feel Confident.
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-white/80 sm:text-base">
              Premium men's grooming services delivered by master barbers in a modern,
              masculine environment. Experience the art of the perfect cut.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                className="rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-[var(--on-dark)] shadow-lg shadow-[var(--accent)]/30 transition hover:-translate-y-0.5"
                onClick={() => onNavigate("register")}
                type="button"
              >
                Sign Up
              </button>
              <button
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                onClick={() => onNavigate("login")}
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#1a1b1f] px-6 py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-sm text-white/70">
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
                  className="rounded-2xl border border-white/10 bg-[#23252b] p-6 text-left shadow-[0_20px_40px_-30px_rgba(0,0,0,0.6)]"
                >
                  <div className="text-2xl text-[var(--accent)]">
                    {service.icon}
                  </div>
                  <p className="mt-4 text-sm font-semibold text-white">
                    {service.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="mt-10 rounded-full border border-[var(--accent)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--on-dark)]"
              type="button"
            >
              View All Services
            </button>
          </div>
        </section>

        <section id="about" className="w-full bg-[#14151a]">
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
              <h3 className="font-display text-2xl text-white">Our Story</h3>
              <p className="mt-4 text-sm text-white/75">
                Founded in 2026, Barbershop was born from a simple vision: to create a
                premium grooming experience that honors traditional barbering while
                embracing modern style and technique.
              </p>
              <p className="mt-4 text-sm text-white/75">
                What started as a single chair operation has grown into a trusted
                destination for men's grooming. Our success comes from attention to
                detail, honest service, and a genuine love for the craft.
              </p>
              <p className="mt-4 text-sm text-white/75">
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
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#1c1d22]"
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

        <section className="w-full bg-[#0f0f12] px-6 py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Our Values
            </h2>
            <p className="mt-3 text-sm text-white/70">
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
                  className="rounded-2xl border border-white/10 bg-[#1c1d22] p-6 text-left shadow-[0_20px_40px_-30px_rgba(0,0,0,0.6)]"
                >
                  <p className="text-sm font-semibold text-white">{value.title}</p>
                  <p className="mt-3 text-sm text-white/70">{value.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-[#111111] px-6 py-20">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <h2 className="font-display text-3xl text-white md:text-4xl">
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
                  className="rounded-2xl border border-white/10 bg-[#1c1d22] p-6 text-left shadow-[0_20px_40px_-30px_rgba(0,0,0,0.6)]"
                >
                  <div className="text-[var(--accent)]">★★★★★</div>
                  <p className="mt-4 text-sm text-white/80">"{review.quote}"</p>
                  <p className="mt-6 text-sm font-semibold text-white">
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-[#1b1c20] px-6 py-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="text-left">
              <h2 className="font-display text-3xl text-white md:text-4xl">
                Visit Us Today
              </h2>
              <div className="mt-6 space-y-6 text-sm text-white/70">
                <div>
                  <p className="font-semibold text-white">Opening Hours</p>
                  <p className="mt-2">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="mt-2">New Mens Hair Saloon</p>
                  <p>Prem Nagar, Kila Gate Road</p>
                  <p>Gwalior, Madhya Pradesh 474002</p>
                </div>
              </div>
              <button
                className="mt-8 rounded-full bg-[var(--accent)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--on-dark)] shadow-lg shadow-[var(--accent)]/30"
                type="button"
              >
                Get Directions
              </button>
            </div>
            <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#23252b] p-2 shadow-[0_24px_60px_-35px_rgba(0,0,0,0.8)]">
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
