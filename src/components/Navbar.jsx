import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { ChevronDown } from "lucide-react";
import logo from "../assets/yashika-publication-logo.webp";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About ", path: "/about" },
  { name: " Services", path: "/services" },
  { name: " Journals", path: "/journals" },
  { name: " Authors", path: "/authors",  },
  { name: " Reviewers", path: "/reviewers", },
  { name: " Archives", path: "/archives", },

  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <nav className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-5 lg:px-12">
          <NavLink to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Yashika Publications"
              className="sm:h-[40px] h-[36px] w-auto object-contain"
            />
          </NavLink>

          <div className="hidden items-center gap-[32px] lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative flex items-center gap-1 pb-[7px] text-[14px] font-[600] transition-all duration-300 ${
                    isActive
                      ? "text-[#005da8]"
                      : "text-[#111827] hover:text-[#005da8]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown size={13} strokeWidth={2.4} />}
                    <span
                      className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#005da8] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

        

          <button
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#005da8] text-white lg:hidden"
            aria-label="Open menu"
          >
            <HiMenu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/45 lg:hidden"
            />

            <motion.aside
              initial={{ x: 260 }}
              animate={{ x: 0 }}
              exit={{ x: 260 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed right-0 top-0 z-[70] h-screen w-[250px] bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-[70px] items-center justify-between border-b border-gray-200 px-4">
                <img
                  src={logo}
                  alt="Yashika Publications"
                  className="h-[30px] w-auto object-contain"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-[#005da8] text-white"
                  aria-label="Close menu"
                >
                  <HiX size={20} />
                </button>
              </div>

              <div className="flex flex-col px-3 py-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className={({ isActive }) =>
                        `mb-1 flex items-center justify-between rounded-md px-4 py-3 text-[14px] font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-[#005da8] text-white"
                            : "text-[#111827] hover:bg-[#eaf4ff] hover:text-[#005da8]"
                        }`
                      }
                    >
                      <span>{item.name}</span>
                      {item.dropdown && <ChevronDown size={14} />}
                    </NavLink>
                  </motion.div>
                ))}

               
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;