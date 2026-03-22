import { useState } from "react";

function AddServiceModal({ isOpen, onClose, onSave }) {
  const [data, setData] = useState({
    name: "",
    price: "",
    duration: "",
    description: ""
  });

  const serviceOptions = [
    "Haircut",
    "Beard Cut",
    "Hair Color",
    "Hair Spa"
  ];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(data);
    alert("Service Added ✅");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">

      <div className="bg-[#0f172a] text-white p-6 rounded-xl w-full max-w-md">

        <h2 className="mb-4 font-semibold">Add Service</h2>

        <div className="space-y-3">

          {/* ✅ Service Name with dropdown INSIDE */}
          <input
            name="name"
            list="services"
            value={data.name}
            placeholder="Select or type service (Haircut, Beard...)"
            className="inputDark"
            onChange={handleChange}
          />

          <datalist id="services">
            {serviceOptions.map((s, i) => (
              <option key={i} value={s} />
            ))}
          </datalist>

          <input
            name="price"
            placeholder="Price (₹)"
            className="inputDark"
            onChange={handleChange}
          />

          <input
            name="duration"
            placeholder="Duration (e.g. 30 min)"
            className="inputDark"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description (optional)"
            className="inputDark"
            onChange={handleChange}
          />

          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-green-600 py-2 rounded"
            >
              Save
            </button>

            <button
              onClick={onClose}
              className="flex-1 bg-gray-600 py-2 rounded"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>

      <style>
        {`
          .inputDark {
            width: 100%;
            background: #1e293b;
            border: 1px solid #334155;
            padding: 8px;
            border-radius: 8px;
            color: white;
          }
        `}
      </style>

    </div>
  );
}

export default AddServiceModal;