// app/admin-login/page.js
"use client";
import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // We send the password to an API route to set a secure cookie
    const res = await fetch("/api/admin-auth", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/admin"; // Redirect on success
    } else {
      alert("Unauthorized");
    }
  };

  return (
    // <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'red' }}>
    //   <form onSubmit={handleSubmit} style={{ textAlign: 'center', border: '1px solid red', padding: '2rem' }}>
    //     <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>ADMIN ACCESS</h1>
    //     <input 
    //       type="password" 
    //       value={password} 
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Enter Secret Key"
    //       style={{ padding: '10px', background: '#222', color: '#fff', border: 'none', marginRight: '10px' }}
    //     />
    //     <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'red', color: '#fff', border: 'none', cursor: 'pointer' }}>
    //       ENTER
    //     </button>
    //   </form>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
      <form
        onSubmit={handleSubmit}
        className="text-center border border-red-500 p-8"
      >
        <h1 className="text-2xl mb-4 font-semibold">
          ADMIN ACCESS
        </h1>

        <div className="flex items-center justify-center gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Secret Key"
            className="px-3 py-2 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="px-5 py-2 bg-red-500 text-white font-medium hover:bg-red-600 transition cursor-pointer"
          >
            ENTER
          </button>
        </div>
      </form>
    </div>

  );
}