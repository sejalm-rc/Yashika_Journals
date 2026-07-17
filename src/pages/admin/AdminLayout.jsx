import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

function AdminLayout() {
  const navigate = useNavigate();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("yashikaUser");
    sessionStorage.removeItem("yashikaUser");

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-slate-800">
      <AdminSidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
        onLogout={handleLogout}
      />

      <motion.div
        animate={{
          marginLeft: sidebarCollapsed ? 88 : 270,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="min-h-screen lg:ml-[270px]"
      >
        <AdminHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onDesktopToggle={() =>
            setSidebarCollapsed((previous) => !previous)
          }
          onMobileOpen={() => setMobileSidebarOpen(true)}
          onLogout={handleLogout}
        />

        <main className="px-4 py-5 sm:px-6 sm:py-7 xl:px-8">
          <Outlet context={{ searchTerm }} />
        </main>
      </motion.div>
    </div>
  );
}

export default AdminLayout;