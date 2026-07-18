import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";

import AuthorSidebar from "./AuthorSidebar";
import AuthorHeader from "./AuthorHeader";

function AuthorLayout() {
  const navigate = useNavigate();

  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  const handleLogout = () => {
    localStorage.removeItem("yashikaUser");
    sessionStorage.removeItem("yashikaUser");

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F9FD] text-slate-800">
      <AuthorSidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
        onLogout={handleLogout}
      />

      <motion.div
        animate={{
          marginLeft: sidebarCollapsed ? 88 : 250,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="min-h-screen lg:ml-[250px]"
      >
        <AuthorHeader
          onDesktopToggle={() =>
            setSidebarCollapsed((previous) => !previous)
          }
          onMobileOpen={() => setMobileSidebarOpen(true)}
          onLogout={handleLogout}
        />

        <main className="px-4 py-5 sm:px-6 sm:py-6 xl:px-7">
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
}

export default AuthorLayout;