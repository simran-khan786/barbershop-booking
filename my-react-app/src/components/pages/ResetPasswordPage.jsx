import { useState } from "react";

function ResetPasswordPage() {

  const [password, setPassword] = useState("");

  const token = new URLSearchParams(window.location.search).get("token");

  const handleReset = async () => {

    if (!password) {
      alert("Enter new password ❌");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token,
          newPassword: password
        })
      });

      const data = await res.text();

      if (res.ok) {
        alert("Password reset successful ✅");
        window.location.href = "/login";
      } else {
        alert(data || "Error ❌");
      }

    } catch (err) {
      console.error(err);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-6 bg-[#1c1d22] rounded-xl">
        <h2 className="text-xl mb-4">Reset Password</h2>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 w-full mb-4 bg-black border border-gray-600"
        />

        <button
          onClick={handleReset}
          className="bg-yellow-500 px-4 py-2 rounded"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ResetPasswordPage;