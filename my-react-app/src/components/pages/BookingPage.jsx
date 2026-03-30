import { useState } from "react";
import { ArrowLeft, Clock, MapPin, Star, Calendar, CheckCircle2, IndianRupee } from "lucide-react";

function BookingPage({ salon, onNavigate }) {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  if (!salon) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c0d10] text-white">
        <div className="animate-bounce text-4xl mb-4">🏠</div>
        <p className="text-xl font-light tracking-wide opacity-60">No salon selected</p>
      </div>
    );
  }

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", 
    "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  return (
    <div className="min-h-screen bg-[#0c0d10] text-slate-100 selection:bg-amber-500/30">
      {/* Background Decorative Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-amber-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-orange-900/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-5 py-8">
        
        {/* 🔙 Premium Header */}
        <header className="flex items-center justify-between mb-8">
          <button
            onClick={() => onNavigate("home")}
            className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-white/80 group-hover:-translate-x-1 transition-transform" />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Book Appointment
          </h1>
          <div className="w-12" /> {/* Spacer for symmetry */}
        </header>

        {/* 🏪 Salon Hero Card */}
        <div className="relative overflow-hidden bg-white/5 rounded-[2.5rem] p-5 mb-10 border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="relative group">
            <img
              src={salon.image}
              alt={salon.name}
              className="w-full h-56 object-cover rounded-[2rem] shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-1.5">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-amber-50">{salon.rating}</span>
            </div>
          </div>

          <div className="mt-6 px-2">
            <h2 className="text-2xl font-bold tracking-tight">{salon.name}</h2>
            <div className="flex items-center gap-2 text-sm text-white/50 mt-2">
              <div className="p-1.5 rounded-lg bg-white/5">
                <MapPin size={16} className="text-amber-500/70" />
              </div>
              {salon.location}
            </div>
          </div>
        </div>

        {/* ✂️ Section: Services */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 rounded-full bg-amber-500" />
            <h3 className="text-lg font-medium text-white/90">Select Service</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {salon.services.map((service, index) => {
              const isActive = selectedService === service;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className={`relative overflow-hidden px-4 py-4 rounded-2xl text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? "bg-amber-500 border-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {service}
                  {isActive && <CheckCircle2 size={14} className="absolute top-2 right-2 opacity-60" />}
                </button>
              );
            })}
          </div>
        </section>

        {/* 📅 Section: Date Picker */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 rounded-full bg-amber-500" />
            <h3 className="text-lg font-medium text-white/90">Choose Date</h3>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Calendar size={18} className="text-amber-500" />
            </div>
            <input
              type="date"
              className="w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl text-white outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 transition-all appearance-none"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </section>

        {/* ⏰ Section: Time Slots */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 rounded-full bg-amber-500" />
            <h3 className="text-lg font-medium text-white/90">Available Slots</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {timeSlots.map((time, index) => {
              const isActive = selectedTime === time;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-white text-black shadow-xl scale-[1.02]"
                      : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"
                  }`}
                >
                  <Clock size={14} className={isActive ? "text-amber-600" : "text-white/30"} />
                  {time}
                </button>
              );
            })}
          </div>
        </section>

        {/* 💰 Summary & CTA */}
        <div className="sticky bottom-6 left-0 right-0 z-50">
          <div className="bg-[#16171d]/90 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between mb-6 px-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">Estimated Cost</p>
                <div className="flex items-center text-2xl font-bold text-white">
                   <IndianRupee size={20} className="text-amber-500" />
                   <span>499</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">Booking For</p>
                <p className="text-sm font-medium text-amber-500/90 truncate max-w-[120px]">
                  {selectedService || "No service"}
                </p>
              </div>
            </div>

            <button
              disabled={!selectedService || !selectedTime || !selectedDate}
              className={`group relative w-full py-5 rounded-[1.5rem] font-bold tracking-wider overflow-hidden transition-all duration-500 ${
                selectedService && selectedTime && selectedDate
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-[0_10px_25px_rgba(245,158,11,0.4)] active:scale-[0.98]"
                  : "bg-white/5 text-white/20 cursor-not-allowed grayscale"
              }`}
              onClick={() => {
                alert("Booking Confirmed 🎉");
                onNavigate("home");
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                CONFIRM APPOINTMENT
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default BookingPage;