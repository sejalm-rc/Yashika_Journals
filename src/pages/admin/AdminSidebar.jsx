import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  UploadCloud,
  Users,
  MessageSquare,
  LogOut,
  X,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import logo from "../../assets/yashika-publication-footer-logo.webp";
import { Link } from "react-router-dom";
const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    id: "journals",
    label: "Journals",
    icon: BookOpen,
    path: "/admin/journals",
  },
  {
    id: "articles",
    label: "Articles",
    icon: FileText,
    path: "/admin/articles",
  },
   {
    id: "create-issue",
    label: "Create Issue",
    icon: FileText,
    path: "/admin/create-issue",
  },
//   {
//     id: "bulk-upload",
//     label: "Bulk Article Upload",
//     icon: UploadCloud,
//     path: "/admin/bulk-upload",
//   },
   {
    id: "xml-export",
    label: "XML Export",
    icon: UploadCloud,
    path: "/admin/crossref-export",
  },
  {
    id: "manuscript-details",
    label: "Manuscript Details",
    icon: FileText,
    path: "/admin/submissions/:manuscriptId",
  },
//   {
//     id: "authors",
//     label: "Authors",
//     icon: Users,
//     path: "/admin/authors",
//   },
//   {
//     id: "messages",
//     label: "Messages",
//     icon: MessageSquare,
//     path: "/admin/messages",
//   },
];

function SidebarContent({
  collapsed,
  mobile = false,
  onClose,
  onLogout,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    navigate(item.path);

    if (mobile && onClose) {
      onClose();
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div
        className={`flex h-[76px] items-center border-b border-white/10 ${
          collapsed ? "justify-center px-3" : "justify-between px-5"
        }`}
      >
        <Link to="/">
        <div className="flex min-w-0 items-center gap-3">
         

        <img src={logo} alt="Yashika Publications" className="h-12"/>
        </div></Link>

        {mobile && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-5">
     

        <nav className="space-y-1.5">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            const active =
              location.pathname === item.path ||
              (item.path !== "/admin/dashboard" &&
                location.pathname.startsWith(item.path));

            return (
              <button
                key={item.id}
                type="button"
                title={collapsed ? item.label : undefined}
                onClick={() => handleNavigation(item)}
                className={`group flex min-h-11 w-full items-center rounded-xl transition-all duration-300 ${
                  collapsed
                    ? "justify-center px-2"
                    : "justify-between px-3"
                } ${
                  active
                    ? "bg-white text-[#0B2C66] shadow-lg"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Icon
                    size={20}
                    className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                      active ? "text-blue-700" : ""
                    }`}
                  />

                  {!collapsed && (
                    <span className="truncate text-sm font-medium">
                      {item.label}
                    </span>
                  )}
                </span>

                {!collapsed && active && (
                  <ChevronRight size={16} className="text-blue-600" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-white/10 p-3">
        <button
          type="button"
          onClick={onLogout}
          title={collapsed ? "Logout" : undefined}
          className={`flex min-h-11 w-full items-center rounded-xl text-red-200 transition-all duration-300 hover:bg-red-500/15 hover:text-white ${
            collapsed ? "justify-center px-2" : "gap-3 px-3"
          }`}
        >
          <LogOut size={20} className="shrink-0" />

          {!collapsed && (
            <span className="text-sm font-semibold">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
}

function AdminSidebar({
  collapsed,
  mobileOpen,
  onMobileClose,
  onLogout,
}) {
  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close sidebar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onMobileClose}
              className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 28,
              }}
              className="fixed inset-y-0 left-0 z-50 flex w-[285px] max-w-[86vw] flex-col bg-[#0B2C66] shadow-2xl lg:hidden"
            >
              <SidebarContent
                collapsed={false}
                mobile
                onClose={onMobileClose}
                onLogout={onLogout}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <motion.aside
        animate={{
          width: collapsed ? 88 : 270,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="fixed inset-y-0 left-0 z-40 hidden overflow-hidden bg-[#0B2C66] shadow-xl lg:flex lg:flex-col"
      >
        <SidebarContent
          collapsed={collapsed}
          onLogout={onLogout}
        />
      </motion.aside>
    </>
  );
}

export default AdminSidebar;