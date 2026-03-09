"use client";


import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL FIXED:", API_URL);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
        const res = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }

      // Guardamos token
      localStorage.setItem("token", data.token);

      // Redirigir
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}