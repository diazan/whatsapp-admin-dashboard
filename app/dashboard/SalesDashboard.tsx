"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

interface SalesDemo {
  id: string;
  name: string;
  phone: string;
  preferredAt: string;
  status: string;
  createdAt: string;
  meetLink: string | null;
  meetLinkSentAt: string | null;
}

export default function SalesDashboard() {
  const [salesDemos, setSalesDemos] = useState<SalesDemo[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // Métricas de ventas
  const salesMetrics = {
    total: salesDemos.length,
    conversion: salesDemos.length > 0
      ? Math.round((salesDemos.filter(d => d.status === "accepted").length / salesDemos.length) * 100)
      : 0,
    pending: salesDemos.filter(d => d.status === "pending").length
  };

  const fetchSalesDemos = async () => {
    console.log("Fetching sales demos...");
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/admin/sales-demos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return;
      }

      const data = await res.json();
      setSalesDemos(data);
    } catch (error) {
      console.error("Error fetching sales demos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesDemos();
  }, []);

  const handleSendMeetLink = async (demoId: string, demoName: string) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const template = 
      `Hola ${demoName} 👋\n\n` +
      `Te comparto el enlace para nuestra demo:\n` +
      `🔗 https://meet.google.com/\n\n` +
      `Cualquier duda estoy aquí. ¡Nos vemos pronto! 🚀`;

    const meetLink = prompt(
      `Mensaje para ${demoName}\n\nPodés editar o reemplazar el mensaje:`,
      template
    );

    if (!meetLink) return;

    try {
      const res = await fetch(
        `${API_URL}/admin/sales-demos/${demoId}/send-meet-link`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ meetLink }),
        }
      );

      if (!res.ok) {
        alert("Error enviando el mensaje");
        return;
      }

      alert("Mensaje enviado ✅");
      fetchSalesDemos();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error enviando el mensaje");
    }
  };

  const handleSalesDemoStatusChange = async (demoId: string, newStatus: string) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(
        `${API_URL}/admin/sales-demos/${demoId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!res.ok) {
        alert("Error actualizando estado");
        return;
      }

      fetchSalesDemos();
    } catch (error) {
      console.error("Error updating demo status:", error);
    }
  };

  if (loading) {
    return (
      <div className="p-8 max-w-6xl mx-auto text-white">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard de Ventas</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition"
        >
          Logout
        </button>
      </div>

      {/* KPI de Ventas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 border border-gray-700 rounded p-4 shadow-sm">
          <p className="text-sm text-gray-400">Total Solicitudes</p>
          <p className="text-2xl font-bold text-blue-400">
            {salesMetrics.total}
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-4 shadow-sm">
          <p className="text-sm text-gray-400">Tasa de Conversión</p>
          <p className="text-2xl font-bold text-green-500">
            {salesMetrics.conversion}%
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-4 shadow-sm">
          <p className="text-sm text-gray-400">Pendientes</p>
          <p className="text-2xl font-bold text-yellow-400">
            {salesMetrics.pending}
          </p>
        </div>
      </div>

      {/* Tabla de Solicitudes de Demo */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Solicitudes de Demo</h2>

        <div className="border border-gray-700 rounded overflow-hidden bg-gray-900">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Teléfono</th>
                <th className="p-3 text-left">Fecha Preferida</th>
                <th className="p-3 text-left">Estado</th>
                <th className="p-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {salesDemos.map((demo) => (
                <tr key={demo.id} className="border-t border-gray-700">
                  <td className="p-3">{demo.name}</td>
                  <td className="p-3 text-gray-300">{demo.phone}</td>
                  <td className="p-3">
                    {new Date(demo.preferredAt).toLocaleString()}
                  </td>
                  <td className="p-3">
                    <select
                      value={demo.status}
                      onChange={(e) => handleSalesDemoStatusChange(demo.id, e.target.value)}
                      className="bg-gray-800 border border-gray-700 px-2 py-1 rounded text-white text-sm"
                    >
                      <option value="pending">🕐 Pendiente</option>
                      <option value="attended">✅ Asistió</option>
                      <option value="not_attended">❌ No asistió</option>
                      <option value="accepted">🎉 Aceptado</option>
                      <option value="rejected">🚫 Rechazado</option>
                    </select>
                  </td>
                  <td className="p-3 text-center">
                    {demo.meetLinkSentAt ? (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-green-400 text-xs">
                          ✅ Link enviado
                        </span>
                        <button
                          onClick={() => handleSendMeetLink(demo.id, demo.name)}
                          className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-xs"
                        >
                          Reenviar link
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleSendMeetLink(demo.id, demo.name)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                      >
                        📎 Enviar link Meet
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {salesDemos.length === 0 && (
            <div className="p-4 text-gray-400 text-sm">
              No hay solicitudes de demo.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}