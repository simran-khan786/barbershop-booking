import { useState } from "react";

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
    images: [],       // ✅ multiple images
    services: []      // ✅ services
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ MULTIPLE IMAGE HANDLER
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const removeImage = (index) => {
    const updated = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updated });
  };

  // ✅ SERVICES
  const addService = (name = "") => {
    setFormData({
      ...formData,
      services: [...formData.services, { name, price: "", duration: "" }]
    });
  };

  const removeService = (index) => {
    const updated = formData.services.filter((_, i) => i !== index);
    setFormData({ ...formData, services: updated });
  };

  const handleServiceChange = (index, field, value) => {
    const updated = [...formData.services];
    updated[index][field] = value;
    setFormData({ ...formData, services: updated });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center overflow-y-auto">

      <div className="bg-[#020617] text-white w-full max-w-xl p-6 rounded-xl">

        <h2 className="mb-4 font-semibold">Add Shop</h2>

        <div className="space-y-3">

          {/* BASIC */}
          <input name="shopName" placeholder="Shop Name" className="inputDark" onChange={handleChange} />
          <input name="ownerName" placeholder="Owner Name" className="inputDark" onChange={handleChange} />
          <input name="phone" placeholder="Phone" className="inputDark" onChange={handleChange} />

          <textarea name="address" placeholder="Address" className="inputDark" onChange={handleChange} />

          <div className="flex gap-2">
            <input name="city" placeholder="City" className="inputDark flex-1" onChange={handleChange} />
            <input name="pincode" placeholder="Pincode" className="inputDark flex-1" onChange={handleChange} />
          </div>

          {/* ================= IMAGES ================= */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Shop Images
            </label>

            <label className="cursor-pointer bg-gray-700 px-4 py-2 rounded text-center block hover:bg-gray-600">
              📷 Add Images
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            {/* Preview */}
            <div className="flex gap-2 mt-2 flex-wrap">
              {formData.images.map((img, i) => (
                <div key={i} className="relative">
                  <img
                    src={URL.createObjectURL(img)}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ================= TIMINGS ================= */}
          <h3 className="text-sm text-gray-400 mt-2">Timings</h3>

          <div className="flex gap-2">
            <div className="flex-1">
              <p className="text-xs text-gray-400">Opening Time</p>
              <input type="time" name="openingTime" className="inputDark" onChange={handleChange} />
            </div>

            <div className="flex-1">
              <p className="text-xs text-gray-400">Closing Time</p>
              <input type="time" name="closingTime" className="inputDark" onChange={handleChange} />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <p className="text-xs text-gray-400">Break Start</p>
              <input type="time" name="breakStart" className="inputDark" onChange={handleChange} />
            </div>

            <div className="flex-1">
              <p className="text-xs text-gray-400">Break End</p>
              <input type="time" name="breakEnd" className="inputDark" onChange={handleChange} />
            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Services</span>
              <button
                onClick={() => addService()}
                className="bg-green-600 px-3 py-1 rounded text-sm"
              >
                + Add Service
              </button>
            </div>

            {formData.services.map((service, i) => (
              <div key={i} className="bg-[#1e293b] p-3 rounded mt-2">

                <div className="flex gap-2 mb-2">
                  <input
                    placeholder="Service Name"
                    value={service.name}
                    onChange={(e) =>
                      handleServiceChange(i, "name", e.target.value)
                    }
                    className="inputDark flex-1"
                  />

                  <button
                    onClick={() => removeService(i)}
                    className="bg-red-500 px-2 rounded"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex gap-2">
                  <input
                    placeholder="₹ Price"
                    value={service.price}
                    onChange={(e) =>
                      handleServiceChange(i, "price", e.target.value)
                    }
                    className="inputDark flex-1"
                  />

                  <input
                    placeholder="Duration (min)"
                    value={service.duration}
                    onChange={(e) =>
                      handleServiceChange(i, "duration", e.target.value)
                    }
                    className="inputDark flex-1"
                  />
                </div>
              </div>
            ))}

            {/* Quick Add */}
            <div className="flex gap-2 flex-wrap mt-3">
              {["Haircut", "Shave", "Facial", "Massage", "Hair Color"].map((tag, i) => (
                <button
                  key={i}
                  onClick={() => addService(tag)}
                  className="bg-gray-700 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2 mt-3">
            <button onClick={handleSubmit} className="flex-1 bg-green-600 py-2 rounded">
              Save
            </button>

            <button onClick={onClose} className="flex-1 bg-gray-600 py-2 rounded">
              Cancel
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .inputDark {
          width: 100%;
          background: #1e293b;
          border: 1px solid #334155;
          padding: 8px;
          border-radius: 8px;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default AddShopModal;