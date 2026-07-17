import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, UserRound } from "lucide-react";

function AuthorDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("yashikaUser");
    sessionStorage.removeItem("yashikaUser");
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
          <UserRound className="h-10 w-10 text-orange-600" />
        </div>

        <h1 className="mt-5 text-3xl font-bold text-[#0B2C66]">
          Author Dashboard
        </h1>

        <p className="mt-3 text-slate-600">
          You are successfully logged in as an author.
        </p>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
        >
          <LogOut size={18} />
          Logout
        </button>
      </motion.div>
    </div>
  );
}

export default AuthorDashboard;