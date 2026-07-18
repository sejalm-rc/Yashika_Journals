import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  LoaderCircle,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";

const STATIC_USERS = {
  admin: {
    email: "admin@yashikapublication.com",
    password: "12345",
    role: "admin",
    name: "Administrator",
    redirectPath: "/admin/dashboard",
  },

  author: {
    email: "author@yashikapublication.com",
    password: "12345",
    role: "author",
    name: "Author",
    redirectPath: "/author/dashboard",
  },
};

function Login() {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("admin");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedUser =
      localStorage.getItem("yashikaUser") ||
      sessionStorage.getItem("yashikaUser");

    if (!savedUser) return;

    try {
      const user = JSON.parse(savedUser);

      if (!user?.isAuthenticated) return;

      if (user.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      }

      if (user.role === "author") {
        navigate("/author/dashboard", { replace: true });
      }
    } catch {
      localStorage.removeItem("yashikaUser");
      sessionStorage.removeItem("yashikaUser");
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setShowPassword(false);
    setError("");

    setFormData({
      email: "",
      password: "",
      rememberMe: false,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    if (!email || !password) {
      setError("Please enter your email address and password.");
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 700));

    const selectedUser = STATIC_USERS[selectedRole];

    const credentialsAreValid =
      email === selectedUser.email.toLowerCase() &&
      password === selectedUser.password;

    if (!credentialsAreValid) {
      setError(
        `Invalid ${selectedRole} email address or password. Please check the credentials and try again.`
      );
      setIsSubmitting(false);
      return;
    }

    const authenticatedUser = {
      name: selectedUser.name,
      email: selectedUser.email,
      role: selectedUser.role,
      isAuthenticated: true,
      loginTime: new Date().toISOString(),
    };

    localStorage.removeItem("yashikaUser");
    sessionStorage.removeItem("yashikaUser");

    const selectedStorage = formData.rememberMe
      ? localStorage
      : sessionStorage;

    selectedStorage.setItem(
      "yashikaUser",
      JSON.stringify(authenticatedUser)
    );

    navigate(selectedUser.redirectPath, {
      replace: true,
    });
  };

  const currentCredentials = STATIC_USERS[selectedRole];

  return (
    <main className="relative flex min-h-screen  w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-white to-[#E6F0FF] px-4 py-6 sm:px-6 sm:py-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl sm:h-75 sm:w-75" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl sm:h-75 sm:w-75" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl" />

      <motion.section
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-[450px] rounded-[24px] border border-white/80 bg-white/95 p-5 shadow-[0_25px_70px_rgba(15,43,102,0.16)] backdrop-blur-xl sm:rounded-[28px] sm:p-8"
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8 sm:gap-4">
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 180,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg sm:h-16 sm:w-16"
          >
            <UserRound
              className="h-7 w-7 text-[#125FEA] sm:h-8 sm:w-8"
              strokeWidth={2}
            />
          </motion.div>

          <div className="min-w-0 text-left">
            <h1 className="text-lg font-bold leading-tight text-[#0B2C66] min-[360px]:text-xl sm:text-2xl">
              Sign in to continue
            </h1>

            <p className="mt-1 max-w-[250px] text-[11px] leading-4 text-slate-500 min-[360px]:text-xs sm:text-[12px] sm:leading-2">
              Access your Yashika Publications 
            </p>
          </div>
        </div>

        {/* Role selection */}
        <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-slate-100 p-1.5">
          {["admin", "author"].map((role) => {
            const isActive = selectedRole === role;

            return (
              <button
                key={role}
                type="button"
                onClick={() => handleRoleChange(role)}
                aria-pressed={isActive}
                className={`relative min-h-11 overflow-hidden rounded-lg px-2 py-2.5 text-xs font-semibold capitalize transition-colors duration-300 sm:text-sm ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:bg-white hover:text-blue-700"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-login-role"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#103DC2] to-[#0868EE] shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {role === "admin" ? "Admin Login" : "Author Login"}
                </span>
              </button>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-4 space-y-4 sm:mt-5 sm:space-y-4"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-[#102A5C]"
            >
              Email Address <span className="text-red-500">*</span>
            </label>

            <div className="group relative">
              <Mail
                size={19}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="Enter your email address"
                disabled={isSubmitting}
                className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-50"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-[#102A5C]"
            >
              Password <span className="text-red-500">*</span>
            </label>

            <div className="group relative">
              <LockKeyhole
                size={19}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                placeholder="Enter your password"
                disabled={isSubmitting}
                className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-12 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-50"
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={isSubmitting}
                className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-md p-1 text-slate-400 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label className="flex w-fit cursor-pointer items-center gap-2.5 text-sm text-slate-600">
            <input
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleChange}
              disabled={isSubmitting}
              className="h-4 w-4 cursor-pointer rounded border-slate-300 accent-blue-700 disabled:cursor-not-allowed"
            />

            <span>Remember me</span>
          </label>

          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  height: 0,
                }}
                role="alert"
                className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-600"
              >
                <AlertCircle
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={
              isSubmitting
                ? {}
                : {
                    y: -2,
                    scale: 1.01,
                  }
            }
            whileTap={
              isSubmitting
                ? {}
                : {
                    scale: 0.98,
                  }
            }
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#123FC3] to-[#0868EE] px-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/35 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle
                  size={19}
                  className="animate-spin"
                />

                <span>Signing in...</span>
              </>
            ) : (
              <>
                <LockKeyhole size={18} />

                <span>
                  Login as{" "}
                  {selectedRole === "admin" ? "Admin" : "Author"}
                </span>
              </>
            )}
          </motion.button>
        </form>
        {/* Back link */}
        <div className="mt-3 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:bg-blue-50 hover:text-[#0B2C66]"
          >
            <ArrowLeft size={16} />
            Back to Public Site
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

export default Login;