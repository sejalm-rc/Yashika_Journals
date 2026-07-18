import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  LockKeyhole,
  LogOut,
  Menu,
  UserRound,
} from "lucide-react";

function AuthorHeader({
  onDesktopToggle,
  onMobileOpen,
  onLogout,
}) {
  const navigate = useNavigate();

  const [notificationOpen, setNotificationOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="flex min-h-[82px] items-center justify-between gap-3 px-4 sm:px-6 xl:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 lg:hidden"
          >
            <Menu size={21} />
          </button>

          <button
            type="button"
            onClick={onDesktopToggle}
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 lg:flex"
          >
            <Menu size={21} />
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-[#0A2257] sm:text-2xl">
              Author Dashboard
            </h1>

            <p className="mt-1 hidden text-xs text-slate-500 sm:block">
              Author Submission Panel
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setNotificationOpen((previous) => !previous);
                setProfileOpen(false);
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-[#0A2257] transition hover:bg-blue-50"
            >
              <Bell size={21} />

              <span className="absolute right-1.5 top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                2
              </span>
            </button>

            <AnimatePresence>
              {notificationOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  className="absolute right-0 top-14 w-[300px] max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                >
                  <div className="border-b border-slate-100 px-4 py-3">
                    <h3 className="font-bold text-[#0A2257]">
                      Notifications
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="w-full px-4 py-3 text-left transition hover:bg-slate-50"
                  >
                    <p className="text-sm font-semibold text-slate-700">
                      Manuscript status updated
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Your manuscript is now under review.
                    </p>
                  </button>

                  <button
                    type="button"
                    className="w-full border-t border-slate-100 px-4 py-3 text-left transition hover:bg-slate-50"
                  >
                    <p className="text-sm font-semibold text-slate-700">
                      Revision requested
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Please review the editor comments.
                    </p>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setProfileOpen((previous) => !previous);
                setNotificationOpen(false);
              }}
              className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-100 sm:pr-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0B4ECC] to-[#1742A4] text-sm font-bold text-white">
                AR
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-[#0A2257]">
                  Dr. Arjun Verma
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Author
                </p>
              </div>

              <ChevronDown
                size={16}
                className={`hidden text-slate-500 transition-transform sm:block ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  className="absolute right-0 top-14 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
                >
                  <button
                    type="button"
                    onClick={() => navigate("/author/profile")}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    <UserRound size={17} />
                    My Profile
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/author/change-password")
                    }
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    <LockKeyhole size={17} />
                    Change Password
                  </button>

                  <div className="my-2 border-t border-slate-100" />

                  <button
                    type="button"
                    onClick={onLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut size={17} />
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AuthorHeader;