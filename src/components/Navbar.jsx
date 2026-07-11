import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { ChevronDown } from "lucide-react";
import logo from "../assets/yashika-publication-logo.webp";

const navItems = [
  { name: "Home", path: "/" },

  {
    name: "About",
    path: "/about",
    dropdown: [
      { name: "About the Journal", path: "/about" },
     
      { name: "Aims and Scope", path: "/aims-and-scope" },
      { name: "Indexing & Abstracting", path: "/indexing-and-abstracting" },
      { name: "Open Access Policy", path: "/open-access-policy" },
    ],
  },

  {
    name: "For Authors",
    path: "/author-guidelines",
    dropdown: [
      { name: "Author Guidelines", path: "/author-guidelines" },
      { name: "Submit Manuscript", path: "/submit-manuscript" },
      { name: "Publication Ethics", path: "/publication-ethics" },
      { name: "Peer Review Process", path: "/peer-review-process" },
      { name: "Copyright Policy", path: "/copyright-policy" },
      {
        name: "Article Processing Charges",
        path: "/article-processing-charges",
      },
    ],
  },
 { name: "Editorial Board", path: "/editorial-board" },
  { name: "Current Issue", path: "/current-issue" },
  { name: "Archives", path: "/archives" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 useEffect(() => {
  setIsOpen(false);
  setDesktopDropdown(null);
  setMobileDropdown(null);
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
  {navItems.map((item) => {
    const hasDropdown = Boolean(item.dropdown?.length);
    const isDropdownOpen = desktopDropdown === item.name;

    return (
      <div
        key={item.name}
        className="relative"
        onMouseEnter={() => {
          if (hasDropdown) {
            setDesktopDropdown(item.name);
          }
        }}
        onMouseLeave={() => setDesktopDropdown(null)}
      >
        <NavLink
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `group relative flex items-center gap-1 pb-[7px] text-[14px] font-[600] transition-all duration-300 ${
              isActive
                ? "text-[#005da8]"
                : "text-[#111827] hover:text-[#005da8]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span>{item.name}</span>

              {hasDropdown && (
                <ChevronDown
                  size={14}
                  strokeWidth={2.4}
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              )}

              <span
                className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#005da8] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </>
          )}
        </NavLink>

        <AnimatePresence>
          {hasDropdown && isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full z-50 mt-2 min-w-[235px] overflow-hidden rounded-[7px] border border-[#dce5ef] bg-white p-2 shadow-[0_15px_35px_rgba(0,0,0,0.16)]"
            >
              {item.dropdown.map((dropdownItem) => (
                <NavLink
                  key={dropdownItem.path}
                  to={dropdownItem.path}
                  className={({ isActive }) =>
                    `block rounded-[5px] px-4 py-[11px] text-[13px] font-[500] transition-all duration-300 ${
                      isActive
                        ? "bg-[#005da8] text-white"
                        : "text-[#1f2937] hover:translate-x-1 hover:bg-[#eaf4ff] hover:text-[#005da8]"
                    }`
                  }
                >
                  {dropdownItem.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  })}
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
             {navItems.map((item, index) => {
  const hasDropdown = Boolean(item.dropdown?.length);
  const isDropdownOpen = mobileDropdown === item.name;

  return (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
      className="mb-1"
    >
      {hasDropdown ? (
        <>
          <div className="flex overflow-hidden rounded-md">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex flex-1 items-center px-4 py-3 text-[14px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#005da8] text-white"
                    : "text-[#111827] hover:bg-[#eaf4ff] hover:text-[#005da8]"
                }`
              }
            >
              {item.name}
            </NavLink>

            <button
              type="button"
              onClick={() =>
                setMobileDropdown(
                  isDropdownOpen ? null : item.name
                )
              }
              className={`flex w-12 items-center justify-center transition-colors duration-300 ${
                isDropdownOpen
                  ? "bg-[#005da8] text-white"
                  : "bg-[#f3f7fb] text-[#005da8]"
              }`}
              aria-label={`Toggle ${item.name} dropdown`}
            >
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden"
              >
                <div className="ml-4 mt-1 border-l-2 border-[#d8e8f7] pl-3">
                  {item.dropdown.map((dropdownItem) => (
                    <NavLink
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className={({ isActive }) =>
                        `mb-1 block rounded-md px-3 py-2 text-[13px] font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-[#005da8] text-white"
                            : "text-[#374151] hover:translate-x-1 hover:bg-[#eaf4ff] hover:text-[#005da8]"
                        }`
                      }
                    >
                      {dropdownItem.name}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <NavLink
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `flex items-center rounded-md px-4 py-3 text-[14px] font-semibold transition-all duration-300 ${
              isActive
                ? "bg-[#005da8] text-white"
                : "text-[#111827] hover:bg-[#eaf4ff] hover:text-[#005da8]"
            }`
          }
        >
          {item.name}
        </NavLink>
      )}
    </motion.div>
  );
})}

               
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;