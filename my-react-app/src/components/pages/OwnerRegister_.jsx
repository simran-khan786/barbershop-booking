import { useState } from "react";
import toast from "react-hot-toast";

function RegisterPage({ onNavigate }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    // ✅ validation
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill all required fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/auth/register/owner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          password,
          role: "OWNER"
        })
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Registered Successfully ✅");

        setTimeout(() => {
          onNavigate("login");
        }, 2000);

      } else {
        toast.error(data || "Registration failed ❌");
      }

    } catch (err) {
      console.error(err);
      toast.error("Server Error ❌");
    }
  };

  return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="w-full max-w-md space-y-4 rounded-xl bg-gray-900 p-6">

          <h2 className="text-2xl font-bold">Register</h2>

          <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 rounded bg-gray-800"
          />

          <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 rounded bg-gray-800"
          />

          <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-800"
          />

          <input
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded bg-gray-800"
          />

          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-800"
          />

          <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-800"
          />

          <button
              onClick={handleRegister}
              className="w-full bg-orange-500 p-2 rounded font-semibold"
          >
            Register
          </button>

        </div>
      </div>
  );
}

export default RegisterPage;