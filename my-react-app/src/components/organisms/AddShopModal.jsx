import { useState , useEffect } from "react";

function AddShopModal({ isOpen, onClose, onSave }) {

  
  const [formData, setFormData] = useState({
    
    shopName: "",
    ownerName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    openingTime: "",
    closingTime: "",
    breakStart: "",
    breakEnd: "",
    images: [],
    services: []
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData({
        shopName: "",
        ownerName: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
        openingTime: "",
        closingTime: "",
        breakStart: "",
        breakEnd: "",
        images: [],
        services: []
      });
    }
  }, [isOpen]);

  // ✅ validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.shopName) newErrors.shopName = "Required";
    if (!formData.ownerName) newErrors.ownerName = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    if (!formData.city) newErrors.city = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const addService = (name = "") => {
    setFormData((prev) => ({
      ...prev,
      services: [...prev.services, { name, price: "", duration: "" }]
    }));
  };

  const removeService = (index) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const handleServiceChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev.services];
      updated[index][field] = value;
      return { ...prev, services: updated };
    });
  };

  const handleSubmit = async () => {

    
  try {
    // ✅ VALIDATION
    if (!validate()) {
      alert("Please fill required fields ❌");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Login required ❌");
      return;
    }

    const services = formData.services.map(s => ({
      serviceName: s.name,
      price: Number(s.price),
      duration: Number(s.duration)
    }));

    const imageSamples = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c"
];

const imageUrl =
  formData.images.length > 0
    ? imageSamples[Math.floor(Math.random() * imageSamples.length)]
    : "";

    
    const payload = {
      shopName: formData.shopName,
      ownerName: formData.ownerName,
      phoneNumber: formData.phone,
      address: formData.address,
      city: formData.city,
      state: "MP",
      pincode: formData.pincode,
      openingTime: formData.openingTime,
      closingTime: formData.closingTime,
      breakStart: formData.breakStart,
      breakEnd: formData.breakEnd,
      imageUrl,
      services
    };

    try {
      const res = await fetch("http://localhost:8080/api/shops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.text();

      if (res.ok) {
            alert("Shop added successfully ✅");
            onClose();
          } else {
            alert(data || "Failed ❌");
          }

        setFormData({
          shopName: "",
          ownerName: "",
          phone: "",
          address: "",
          city: "",
          pincode: "",
          openingTime: "",
          closingTime: "",
          breakStart: "",
          breakEnd: "",
          images: [],
          services: []
        });

        } catch (err) {
          console.error(err);
          alert("Server error ❌");
        }
       

  } catch (err) {
    console.error(err);
    alert("Server error ❌");
  }
};


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-stone-200/40 animate-in fade-in duration-300">
      
      <div className="bg-[#fffdfa] text-stone-800 w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl border border-stone-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-stone-100 flex justify-between items-center bg-[#f9f7f2]">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-stone-900">List Your Shop</h2>
            <p className="text-sm text-stone-500 italic">Create a premium profile for your business</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-200 transition-colors text-stone-400">✕</button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-light-scrollbar bg-[#fffdfa]">
          
          {/* Section: Basic Info */}
          <section className="space-y-5">
            <h3 className="text-[10px] tracking-[0.2em] text-stone-400 font-bold uppercase border-b border-stone-100 pb-2">Store Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-600 ml-1">Business Name</label>
                <input name="shopName" placeholder="e.g. The Golden Shear" className="inputCreamy" onChange={handleChange} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-stone-600 ml-1">Proprietor</label>
                <input name="ownerName" placeholder="Full Name" className="inputCreamy" onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-stone-600 ml-1">Contact Details</label>
              <input name="phone" placeholder="+91 00000 00000" className="inputCreamy" onChange={handleChange} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-stone-600 ml-1">Location Address</label>
              <textarea name="address" rows="2" placeholder="Suite, Floor, Street..." className="inputCreamy resize-none" onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input name="city" placeholder="City" className="inputCreamy" onChange={handleChange} />
              <input name="pincode" placeholder="Pincode" className="inputCreamy" onChange={handleChange} />
            </div>
          </section>

          {/* Section: Images */}
          <section className="space-y-4">
             <h3 className="text-[10px] tracking-[0.2em] text-stone-400 font-bold uppercase border-b border-stone-100 pb-2">Visual Gallery</h3>
             <div className="group relative border-2 border-dashed border-stone-200 hover:border-stone-400 transition-all rounded-2xl p-10 text-center bg-stone-50/50">
                <input type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer">
                   <div className="text-3xl mb-3 opacity-60">📁</div>
                   <p className="text-sm font-medium text-stone-700">Upload Shop Atmosphere</p>
                   <p className="text-xs text-stone-400 mt-1">High-quality photos improve booking rates</p>
                </label>
             </div>

            {formData.images.length > 0 && (
              <div className="flex gap-4 mt-4 flex-wrap">
                {formData.images.map((img, i) => (
                  <div key={i} className="group relative w-24 h-24 rounded-xl overflow-hidden shadow-sm border border-white ring-1 ring-stone-100">
                    <img src={URL.createObjectURL(img)} className="w-full h-full object-cover" alt="Preview" />
                    <button onClick={() => removeImage(i)} className="absolute top-1 right-1 bg-stone-900/70 hover:bg-red-500 text-white text-[8px] w-5 h-5 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Section: Timing */}
          <section className="space-y-5">
            <h3 className="text-[10px] tracking-[0.2em] text-stone-400 font-bold uppercase border-b border-stone-100 pb-2">Business Hours</h3>
            <div className="grid grid-cols-2 gap-8 bg-[#fdfbf7] p-6 rounded-2xl border border-stone-100">
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Open From</span>
                  <input type="time" name="openingTime" className="inputCreamy bg-white" onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Break Start</span>
                  <input type="time" name="breakStart" className="inputCreamy bg-white" onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Close At</span>
                  <input type="time" name="closingTime" className="inputCreamy bg-white" onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Break End</span>
                  <input type="time" name="breakEnd" className="inputCreamy bg-white" onChange={handleChange} />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Services */}
          <section className="space-y-5">
            <div className="flex justify-between items-center border-b border-stone-100 pb-2">
              <h3 className="text-[10px] tracking-[0.2em] text-stone-400 font-bold uppercase">Menu & Services</h3>
              <button onClick={() => addService()} className="text-[10px] font-bold text-stone-600 hover:text-stone-900 uppercase tracking-tighter">
                + New Service
              </button>
            </div>

            <div className="space-y-4">
              {formData.services.map((service, i) => (
                <div key={i} className="group bg-white border border-stone-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex gap-4 items-center mb-4">
                    <input
                      placeholder="Service Name"
                      value={service.name}
                      onChange={(e) => handleServiceChange(i, "name", e.target.value)}
                      className="inputCreamy flex-1 !bg-stone-50/30"
                    />
                    <button onClick={() => removeService(i)} className="text-stone-300 hover:text-red-400 transition-colors">
                      ✕
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                       <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm">₹</span>
                       <input
                        placeholder="Price"
                        value={service.price}
                        onChange={(e) => handleServiceChange(i, "price", e.target.value)}
                        className="inputCreamy !pl-8 !bg-stone-50/30"
                      />
                    </div>
                    <div className="relative">
                       <input
                        placeholder="Mins"
                        value={service.duration}
                        onChange={(e) => handleServiceChange(i, "duration", e.target.value)}
                        className="inputCreamy !bg-stone-50/30"
                      />
                       <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-stone-400 font-bold uppercase">Min</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap pt-2">
              {["Haircut", "Shave", "Facial", "Massage"].map((tag, i) => (
                <button key={i} onClick={() => addService(tag)} className="bg-stone-100 hover:bg-stone-200 text-stone-600 text-[10px] font-semibold px-4 py-2 rounded-full transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Buttons */}
        <div className="p-8 border-t border-stone-100 bg-[#f9f7f2] flex gap-4">
          <button onClick={onClose} className="flex-1 px-6 py-4 rounded-2xl border border-stone-200 text-stone-600 font-bold text-sm hover:bg-white transition-all">
            Cancel
          </button>
          <button onClick={handleSubmit} className="flex-[2] px-6 py-4 rounded-2xl bg-stone-900 text-[#fffdfa] font-bold text-sm hover:bg-stone-800 transition-all shadow-lg shadow-stone-200 active:scale-[0.98]">
            Publish Shop
          </button>
        </div>

      </div>

      <style>{`
        .inputCreamy {
          width: 100%;
          background: #fdfbf7;
          border: 1px solid #e7e5e4;
          padding: 12px 16px;
          border-radius: 12px;
          color: #1c1917;
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .inputCreamy:focus {
          border-color: #a8a29e;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .custom-light-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-light-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-light-scrollbar::-webkit-scrollbar-thumb {
          background: #e7e5e4;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}

export default AddShopModal;