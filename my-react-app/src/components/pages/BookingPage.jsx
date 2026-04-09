import { useState } from "react";
import { ArrowLeft, Star, CheckCircle } from "lucide-react";

const services = [
  { name: "Haircut", icon: "✂️", duration: "30 min", price: 499, popular: true },
  { name: "Massage", icon: "🕸️", duration: "45 min", price: 799, popular: false },
  { name: "Shave",   icon: "🪒", duration: "20 min", price: 199, popular: false },
  { name: "Facial",  icon: "🧖", duration: "45 min", price: 649, popular: false },
];

const steps = ["Service", "Date", "Time", "Barber", "Confirm", "Review"];

const dates = [
  { day: "Mon", date: 31, dots: ["blue","blue","blue"] },
  { day: "Tue", date: 1,  dots: ["blue","green"] },
  { day: "Tue", date: 1,  dots: ["blue","blue"], isToday: true },
  { day: "Wed", date: 2,  dots: ["blue","gray"] },
  { day: "Thu", date: 3,  dots: ["pink","red"] },
  { day: "Fri", date: 4,  dots: ["pink","red"] },
  { day: "Sat", date: 5,  dots: ["pink","red"] },
];

const dotColors = {
  blue:  "#1E3A5F", // ✅ changed from #3b82f6
  green: "#22c55e",
  gray:  "#9ca3af",
  pink:  "#f9a8d4",
  red:   "#f87171",
};

const morningSlots   = ["10:00 AM","11:00 AM","12:00 PM","3:00 PM"];
const afternoonSlots = [
  { time: "12:00 PM", available: true  },
  { time: "1:00 PM",  available: true  },
  { time: "3:00 PM",  available: true  },
  { time: "4:00 PM",  available: false },
];

function BookingPage({ salon, onNavigate }) {
  const [selectedService,  setSelectedService]  = useState(services[0]);
  const [selectedDateIdx,  setSelectedDateIdx]  = useState(2);
  const [selectedTime,     setSelectedTime]     = useState("12:00 PM");
  const [currentStep]                           = useState(0);
  const [btnHover,         setBtnHover]         = useState(false); // ✅ for hover effect

  const salonName   = salon?.name     || "GoldenCut";
  const salonRating = salon?.rating   || "4.5";
  const salonSub    = salon?.subtitle || "Premium Grooming Studio";
  const salonImage  = salon?.image    || null;

  return (
   <div className="min-h-screen bg-[#F5F7FA] font-sans"> {/* ✅ #F5F7FA */}
      <div className="max-w-lg mx-auto bg-white min-h-screen flex flex-col relative">

        {/* ── Hero Header ── */}
       <div className="bg-white px-4 pt-5 pb-4 border-b border-gray-100 shadow-sm relative">

         <button
           onClick={() => onNavigate && onNavigate("home")}
           className="absolute left-4 top-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
         >
           <ArrowLeft size={18} className="text-gray-700" />
         </button>

         <div className="flex flex-col items-center text-center gap-1">
           <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
             ✂
           </div>

           <h1 className="text-xl font-bold text-[#1A1A1A]">{salonName}</h1> {/* ✅ #1A1A1A */}
           <p className="text-sm text-[#6B7280]">{salonSub}</p> {/* ✅ #6B7280 */}

           <div className="flex items-center gap-2 text-sm mt-1">
             <Star size={14} className="fill-yellow-400 text-yellow-400" />
             <span className="font-semibold text-gray-800">{salonRating}</span>
             <span className="text-[#6B7280]">(120 reviews)</span> {/* ✅ */}

             <span className="text-gray-300">•</span>

             <span className="flex items-center gap-1 text-green-500 text-xs font-medium">
               <span className="w-2 h-2 bg-green-500 rounded-full" />
               Open Now
             </span>
           </div>
         </div>
       </div>


        {/* ── Step Progress ── */}
        <div className="px-4 pt-3 pb-2 border-b border-gray-100 overflow-x-auto">
          <div className="flex items-center min-w-max">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <span
                  className={`text-sm pb-1 whitespace-nowrap transition-all ${
                    i === currentStep
                      ? "font-bold text-[#1A1A1A] border-b-2 border-[#1E3A5F]" // ✅
                      : i < currentStep
                      ? "font-medium text-[#1E3A5F]" // ✅
                      : "font-normal text-gray-400"
                  }`}
                >
                  {step}
                </span>
                {i < steps.length - 1 && (
                  <div className="w-5 h-px bg-gray-200 mx-1.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="flex-1 overflow-y-auto px-4 pb-56">

          {/* ── Services ── */}
          <section className="mt-5 mb-6">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-4"> {/* ✅ */}
              Select the service{" "}
              <span className="font-normal text-[#6B7280] text-base">you need</span> {/* ✅ */}
            </h2>
          <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1"
               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {services.map((svc) => {
                const active = selectedService.name === svc.name;
                return (
                  <button
                    key={svc.name}
                    onClick={() => setSelectedService(svc)}
                    className={`flex-shrink-0 w-40 rounded-2xl p-3 text-left transition-all duration-200 active:scale-95 ${
                      active
                        ? "bg-white shadow-md"
                        : "bg-white hover:shadow-sm"
                    }`}
                    style={{
                      border: active ? "2px solid #1E3A5F" : "1.5px solid #E5E7EB", // ✅
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl leading-none">{svc.icon}</span>
                      {svc.popular && (
                        <span
                          className="text-[9px] font-semibold leading-tight rounded-lg px-1.5 py-1 text-center"
                          style={{ background: "#fef3c7", color: "#92400e" }}
                        >
                          Popular<br />Choice
                        </span>
                      )}
                    </div>
                    <p className="font-bold text-[#1A1A1A] text-[15px] mt-1">{svc.name}</p> {/* ✅ */}
                    <p className="text-xs text-[#6B7280] mt-0.5"> {/* ✅ */}
                      {svc.duration} · ₹{svc.price}
                    </p>
                    <div
                      className={`mt-3 w-full py-2 rounded-xl text-sm font-bold text-center transition-all ${
                        active
                          ? "text-white"
                          : "bg-white text-gray-700"
                      }`}
                      style={
                        active
                          ? { background: "#1E3A5F" }           // ✅
                          : { border: "1.5px solid #E5E7EB" }   // ✅
                      }
                    >
                      ₹{svc.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── Pick a Date ── */}
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-[#1A1A1A]">Pick a date</h2> {/* ✅ */}
              <span className="flex items-center gap-1 text-sm text-[#1E3A5F] font-medium"> {/* ✅ */}
                <CheckCircle size={13} /> Today
              </span>
            </div>

            <div
              className="rounded-2xl p-3"
              style={{ border: "1.5px solid #E5E7EB", background: "#fff" }} // ✅
            >
              <div className="flex gap-1 overflow-x-auto pb-1">
                {dates.map((d, i) => {
                  const active = selectedDateIdx === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedDateIdx(i)}
                      className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl transition-all ${
                        active ? "bg-[#EEF2F7]" : "hover:bg-gray-50" // ✅
                      }`}
                      style={
                        active
                          ? { border: "1.5px solid #1E3A5F" }         // ✅
                          : { border: "1.5px solid transparent" }
                      }
                    >
                      <span className={`text-xs mb-0.5 ${active ? "text-[#1E3A5F] font-semibold" : "text-gray-400"}`}> {/* ✅ */}
                        {d.day}
                      </span>
                      <span className={`text-base font-bold ${active ? "text-[#1E3A5F]" : "text-gray-800"}`}> {/* ✅ */}
                        {d.date}
                      </span>
                      <div className="flex gap-0.5 mt-1">
                        {d.dots.map((c, j) => (
                          <span
                            key={j}
                            className="w-1.5 h-1.5 rounded-full inline-block"
                            style={{ background: dotColors[c] }}
                          />
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-5 mt-3 px-1">
                {[
                  { color: "#1E3A5F", label: "Available" }, // ✅
                  { color: "#9ca3af", label: "Limited"   },
                  { color: "#d1d5db", label: "Full"      },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-xs text-[#6B7280]"> {/* ✅ */}
                    <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Time Slots ── */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-[#1A1A1A] mb-0.5">Choose a time slot</h2> {/* ✅ */}
            <p className="text-sm text-[#6B7280] mb-4"> {/* ✅ */}
              Next Available ·{" "}
              <span className="text-[#1E3A5F] font-semibold">12:00 PM</span> {/* ✅ */}
            </p>

            <div
              className="rounded-2xl px-4 py-4"
              style={{ border: "1.5px solid #E5E7EB", background: "#fff" }} // ✅
            >
              {/* Morning */}
              <p className="text-sm font-semibold text-[#6B7280] mb-3">Morning</p> {/* ✅ */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {morningSlots.map((time) => {
                  const active = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                        active
                          ? "text-white shadow-sm"
                          : "bg-white text-gray-700"
                      }`}
                      style={
                        active
                          ? { background: "#1E3A5F", border: "1.5px solid #1E3A5F" }   // ✅
                          : { border: "1.5px solid #E5E7EB" }                           // ✅
                      }
                    >
                      {active && "✓ "}
                      {time}
                    </button>
                  );
                })}
              </div>

              {/* Afternoon */}
              <p className="text-sm font-semibold text-[#6B7280] mb-3">Afternoon</p> {/* ✅ */}
              <div className="grid grid-cols-4 gap-2">
                {afternoonSlots.map(({ time, available }) => {
                  const active = selectedTime === time && available;
                  return (
                    <button
                      key={time + "af"}
                      disabled={!available}
                      onClick={() => available && setSelectedTime(time)}
                      className={`py-3 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                        !available
                          ? "text-gray-300 cursor-not-allowed bg-gray-50"
                          : active
                          ? "text-white shadow-sm"
                          : "bg-white text-gray-700"
                      }`}
                      style={
                        !available
                          ? { border: "1.5px solid #f3f4f6" }
                          : active
                          ? { background: "#1E3A5F", border: "1.5px solid #1E3A5F" }  // ✅
                          : { border: "1.5px solid #E5E7EB" }                          // ✅
                      }
                    >
                      {!available ? `→ ${time}` : time}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

        </div>

        {/* ── Sticky Bottom CTA ── */}
        <div className="w-full flex justify-center mt-6">
          <div
            className="w-full max-w-lg bg-white px-4 pt-4 pb-8"
            style={{
              borderTop: "1.5px solid #E5E7EB",               // ✅
              boxShadow: "0 -6px 24px rgba(0,0,0,0.07)",
            }}
          >
            {/* Mini Summary */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-gray-700"
                  style={{ background: "linear-gradient(135deg,#d1d5db,#9ca3af)" }}
                >
                  RK
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]"> {/* ✅ */}
                    {selectedService.name} · Raj Kumar
                  </p>
                  <p className="text-xs text-[#6B7280]">Apr 1, {selectedTime}</p> {/* ✅ */}
                </div>
              </div>
              <span className="text-lg font-bold text-[#1A1A1A]">₹{selectedService.price}</span> {/* ✅ */}
            </div>

            {/* Confirm Button */}
            <button
              onMouseEnter={() => setBtnHover(true)}   // ✅ hover effect
              onMouseLeave={() => setBtnHover(false)}  // ✅ hover effect
              onClick={() => {
                alert(`Booking confirmed! ✅\n${selectedService.name} at ${selectedTime}`);
                onNavigate && onNavigate("home");
              }}
              className="w-full py-4 rounded-2xl text-base font-semibold text-white tracking-wide transition-all active:scale-[0.98]"
              style={{
                background: btnHover ? "#16324F" : "#1E3A5F",      // ✅ hover darker
                boxShadow: "0 4px 18px rgba(30,58,95,0.35)",       // ✅
                transition: "background 0.2s ease",
              }}
            >
              Confirm Booking
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BookingPage;