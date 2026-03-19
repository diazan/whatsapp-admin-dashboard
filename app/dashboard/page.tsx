"use client";

import { useEffect, useState } from "react";
import SalesDashboard from "./SalesDashboard";
import ClinicDashboard from "./ClinicDashboard";

export default function DashboardPage() {
  const [isSalesUser, setIsSalesUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener información de la clínica desde localStorage
    const clinic = JSON.parse(localStorage.getItem("clinic") || "{}");
    
    // Detectar si es usuario de ventas por email
    if (clinic.email === 'sales@demo.com') {
      setIsSalesUser(true);
    }
    
    setLoading(false);
  }, []);

  // Mostrar loading mientras se determina el tipo de usuario
  if (loading) {
    return (
      <div className="p-8 max-w-6xl mx-auto text-white">
        <div className="flex items-center justify-center">
          <p>Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  // Renderizar dashboard apropiado según el tipo de usuario
  if (isSalesUser) {
    return <SalesDashboard />;
  } else {
    return <ClinicDashboard />;
  }
}