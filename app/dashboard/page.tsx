"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;


interface Service {
  id: string;
  name: string;
}

interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  startAt: string;
  endAt: string;
  status: string;
  service: Service;
}

interface Metrics {
  attended: number;
  noShow: number;
  noShowRate: number;
}

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

export default function DashboardPage() {
    console.log("✅ DASHBOARD NUEVO EJECUTÁNDOSE");
    useEffect(() => {
  console.log("🌍 CLIENTE: useEffect vacío ejecutado");
}, []);
    if (typeof window !== "undefined") {
  console.log("🌍 Estoy en el CLIENTE");
} else {
  console.log("🖥️ Estoy en el SERVIDOR");
}
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [salesDemos, setSalesDemos] = useState<SalesDemo[]>([]);
  const [loading, setLoading] = useState(false);
  const [notificationsActive, setNotificationsActive] = useState<boolean>(true);
  const [adminPhone, setAdminPhone] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const [status, setStatus] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const [metrics, setMetrics] = useState<Metrics>({
    attended: 0,
    noShow: 0,
    noShowRate: 0,
  });

  const totalPages = Math.ceil(total / pageSize);

  const fetchAppointments = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);

    try {
      const params = new URLSearchParams();

      if (status) params.append("status", status);
      if (from) params.append("from", from);
      if (to) params.append("to", to);

      params.append("page", String(page));
      params.append("pageSize", String(pageSize));

      const res = await fetch(
        `${API_URL}/admin/appointments?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return;
      }

      const data = await res.json();

      setAppointments(data.data);
      setTotal(data.count);

      if (data.metrics) {
        setMetrics(data.metrics);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

    const fetchClinicStatus = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(`${API_URL}/admin/health`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = await res.json();
      if (data.clinic?.notificationsActive !== undefined) {
        setNotificationsActive(data.clinic.notificationsActive);
      }
      if (data.clinic?.adminPhone !== undefined) {  
      setAdminPhone(data.clinic.adminPhone);
    }
    } catch (error) {
      console.error("Error fetching clinic status:", error);
    }
  };

  const fetchSalesDemos = async () => {
    console.log("Fetching sales demos...");
    const token = localStorage.getItem("token");
    if (!token) return;

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
    }
  };

  useEffect(() => {
    fetchAppointments();
    fetchSalesDemos();
    fetchClinicStatus();
  }, [page, status, from, to]);

    const handleApplyFilters = () => {
      setPage(1);
    };

  const handleStatusChange = async (
    appointmentId: string,
    newStatus: string
  ) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(
        `${API_URL}/admin/appointments/${appointmentId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (res.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return;
      }

      fetchAppointments();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

    const handleToggleNotifications = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(`${API_URL}/admin/clinic/notifications-toggle`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) {
        alert("Error actualizando notificaciones");
        return;
      }

      const data = await res.json();
      setNotificationsActive(data.notificationsActive);

    } catch (error) {
      console.error("Error toggling notifications:", error);
    }
  };

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

  const handleSendManualMessage = async (
    phone: string,
    patientName: string
  ) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const link = prompt(
      `Enviar mensaje a ${patientName}\n\nPega aquí el enlace o mensaje:`
    );

    if (!link) return;

    try {
      const res = await fetch(
        `${API_URL}/admin/send-manual-message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            to: phone,
            message: link,
          }),
        }
      );

      if (!res.ok) {
        alert("Error enviando mensaje");
        return;
      }

      alert("Mensaje enviado ✅");
    } catch (error) {
      console.error("Error sending manual message:", error);
      alert("Error enviando mensaje");
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

  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard de Citas</h1>

        <div className="flex items-center gap-3">
            {adminPhone && (
              <button
                onClick={handleToggleNotifications}
                className={`px-4 py-2 rounded text-sm transition font-medium ${
                  notificationsActive
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-600 hover:bg-gray-500 text-white"
                }`}
              >
                {notificationsActive ? "🔔 Notificaciones ON" : "🔕 Notificaciones OFF"}
              </button>
            )}

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 border border-gray-700 rounded p-4 shadow-sm">
          <p className="text-sm text-gray-400">No‑Show Rate</p>
          <p className="text-2xl font-bold text-red-500">
            {metrics.noShowRate}%
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-4 shadow-sm">
          <p className="text-sm text-gray-400">Asistidas</p>
          <p className="text-2xl font-bold text-green-500">
            {metrics.attended}
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-4 shadow-sm">
          <p className="text-sm text-gray-400">No asistieron</p>
          <p className="text-2xl font-bold text-yellow-400">
            {metrics.noShow}
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div>
          <label className="block text-sm mb-1">Estado</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
          >
            <option value="">Todos</option>
            <option value="scheduled">Scheduled</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="attended">Attended</option>
            <option value="no_show">No Show</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Desde</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Hasta</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
          />
        </div>

        <button
          onClick={handleApplyFilters}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Aplicar filtros
        </button>
      </div>

      {/* Tabla */}
      <div className="border border-gray-700 rounded overflow-hidden bg-gray-900">
        <table className="w-full text-sm">
          <thead className="bg-gray-800 text-gray-200">
            <tr>
              <th className="p-3 text-left">Paciente</th>
              <th className="p-3 text-left">Teléfono</th>
              <th className="p-3 text-left">Servicio</th>
              <th className="p-3 text-left">Fecha</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-t border-gray-700">
                <td className="p-3">{appt.patientName}</td>
                <td className="p-3 text-gray-300">{appt.patientPhone}</td>
                <td className="p-3">{appt.service?.name}</td>
                <td className="p-3">
                  {new Date(appt.startAt).toLocaleString()}
                </td>
                <td className="p-3">{appt.status}</td>

                <td className="p-3 text-center">
                  {(() => {
                    const now = new Date();
                    const appointmentDate = new Date(appt.startAt);
                    const isPast = appointmentDate <= now;

                    const isFinalized =
                      appt.status === "attended" ||
                      appt.status === "no_show" ||
                      appt.status === "cancelled";

                    if (isFinalized) {
                      return (
                        <span className="text-gray-500 text-sm italic">
                          Finalizada
                        </span>
                      );
                    }

                    if (!isPast) {
                      return (
                        <div className="flex justify-center gap-2">
                          {appt.status === "scheduled" && (
                            <button
                              onClick={() =>
                                handleStatusChange(appt.id, "confirmed")
                              }
                              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                            >
                              Confirmar
                            </button>
                          )}

                          {appt.status !== "cancelled" && (
                            <button
                              onClick={() =>
                                handleStatusChange(appt.id, "cancelled")
                              }
                              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                            >
                              Cancelar
                            </button>
                          )}

                          <button
                            onClick={() =>
                              handleSendManualMessage(
                                appt.patientPhone,
                                appt.patientName
                              )
                            }
                            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                          >
                            Mensaje
                          </button>
                        </div>
                      );
                    }

                    return (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            handleStatusChange(appt.id, "attended")
                          }
                          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                        >
                          Asistió
                        </button>

                        <button
                          onClick={() =>
                            handleStatusChange(appt.id, "no_show")
                          }
                          className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition text-sm"
                        >
                          No asistió
                        </button>

                        <button
                          onClick={() =>
                            handleSendManualMessage(
                              appt.patientPhone,
                              appt.patientName
                            )
                          }
                          className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                        >
                          Mensaje
                        </button>
                      </div>
                    );
                  })()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

{/* Sales Demos */}
<div className="mt-12">
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
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
          >
            ← Anterior
          </button>

          <span className="text-sm font-medium">
            Página {page} de {totalPages}
          </span>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page >= totalPages}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-40"
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );

  
}