import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaChevronRight,
  FaSearch,
  FaCalendarAlt,
  FaFileAlt,
  FaBookOpen,
  FaPenNib,
  FaFlask,
  FaCommentAlt,
  FaNewspaper,
  FaRegFile,
  FaChevronLeft,
  FaChevronDown,
} from "react-icons/fa";

import PageTransition from "../components/PageTransition";

import heroBg from "../assets/yashika-journal-home-hero-banner.webp";


const archiveYears = [
  { year: "2025", count: 4 },
  { year: "2024", count: 4 },
  { year: "2023", count: 4 },
  { year: "2022", count: 4 },
  { year: "2021", count: 4 },
  { year: "2020", count: 4 },
  { year: "2019", count: 4 },
  { year: "2018", count: 4 },
  { year: "2017", count: 4 },
];

const articleTypes = [
  {
    name: "Research Articles",
    count: 162,
    icon: <FaPenNib />,
  },
  {
    name: "Review Articles",
    count: 48,
    icon: <FaBookOpen />,
  },
  {
    name: "Case Studies",
    count: 35,
    icon: <FaFlask />,
  },
  {
    name: "Short Communications",
    count: 22,
    icon: <FaCommentAlt />,
  },
  {
    name: "Editorials",
    count: 18,
    icon: <FaNewspaper />,
  },
  {
    name: "Others",
    count: 15,
    icon: <FaRegFile />,
  },
];

const archiveIssues = [
  {
    id: 1,
    year: "2025",
    title: "2025 - Volume 3, Issue 2 (May 2025)",
    published: "Published: May 30, 2025",
    articles: 12,
    type: "All Article Types",
  },
  {
    id: 2,
    year: "2025",
    title: "2025 - Volume 3, Issue 1 (February 2025)",
    published: "Published: February 28, 2025",
    articles: 11,
    type: "Research Articles",
  },
  {
    id: 3,
    year: "2024",
    title: "2024 - Volume 2, Issue 4 (November 2024)",
    published: "Published: November 30, 2024",
    articles: 10,
    type: "Review Articles",
  },
  {
    id: 4,
    year: "2024",
    title: "2024 - Volume 2, Issue 3 (August 2024)",
    published: "Published: August 31, 2024",
    articles: 9,
    type: "Case Studies",
  },
  {
    id: 5,
    year: "2024",
    title: "2024 - Volume 2, Issue 2 (May 2024)",
    published: "Published: May 31, 2024",
    articles: 11,
    type: "Short Communications",
  },
  {
    id: 6,
    year: "2024",
    title: "2024 - Volume 2, Issue 1 (February 2024)",
    published: "Published: February 29, 2024",
    articles: 10,
    type: "Editorials",
  },
  {
    id: 7,
    year: "2023",
    title: "2023 - Volume 1, Issue 4 (November 2023)",
    published: "Published: November 30, 2023",
    articles: 8,
    type: "Research Articles",
  },
  {
    id: 8,
    year: "2023",
    title: "2023 - Volume 1, Issue 3 (August 2023)",
    published: "Published: August 31, 2023",
    articles: 9,
    type: "Review Articles",
  },
  {
    id: 9,
    year: "2023",
    title: "2023 - Volume 1, Issue 2 (May 2023)",
    published: "Published: May 31, 2023",
    articles: 8,
    type: "Case Studies",
  },
//   {
//     id: 10,
//     year: "2023",
//     title: "2023 - Volume 1, Issue 1 (February 2023)",
//     published: "Published: February 28, 2023",
//     articles: 7,
//     type: "Others",
//   },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Archives = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedIssue, setSelectedIssue] = useState("All Issues");
  const [selectedType, setSelectedType] = useState("All Article Types");
  const [activeYear, setActiveYear] = useState("");
  const [activeType, setActiveType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredIssues = useMemo(() => {
    return archiveIssues.filter((issue) => {
      const matchesSearch =
        issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.published.toLowerCase().includes(searchTerm.toLowerCase());

      const yearFilter =
        selectedYear === "All Years" || issue.year === selectedYear;

      const sidebarYearFilter =
        !activeYear || issue.year === activeYear;

      const typeFilter =
        selectedType === "All Article Types" ||
        issue.type === selectedType;

      const sidebarTypeFilter =
        !activeType || issue.type === activeType;

      const issueFilter =
        selectedIssue === "All Issues" ||
        issue.title.includes(selectedIssue);

      return (
        matchesSearch &&
        yearFilter &&
        sidebarYearFilter &&
        typeFilter &&
        sidebarTypeFilter &&
        issueFilter
      );
    });
  }, [
    searchTerm,
    selectedYear,
    selectedIssue,
    selectedType,
    activeYear,
    activeType,
  ]);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedYear("All Years");
    setSelectedIssue("All Issues");
    setSelectedType("All Article Types");
    setActiveYear("");
    setActiveType("");
    setCurrentPage(1);
  };

  return (
    <PageTransition>
      <main className="overflow-hidden bg-white">
        {/* Hero */}
       

          <section className="relative overflow-hidden ">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${heroBg})`,
                    }}
                  />
        
                  
                  <div className="relative mx-auto min-h-[500px] max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    <div className="grid min-h-[500px] items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
                      {/* Hero content */}
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          duration: 0.65,
                          ease: "easeOut",
                        }}
                        className="relative z-10 max-w-[600px] py-14 lg:py-10"
                      >
                        <div className="mb-7 flex flex-wrap items-center gap-2 text-[13px] font-[500]">
                          <Link
                            to="/"
                            className="text-[#ff7800] transition-colors duration-300 hover:text-white"
                          >
                            Home
                          </Link>
        
                          <FaChevronRight className="text-[8px] text-white/70" />
        
                          <span className="text-white">    Archives</span>
                        </div>
        
                        <h1 className="text-[36px] font-[600] leading-[1.1] tracking-[-1px] text-white sm:text-[40px] lg:text-[42px]">
                              Archives
                        </h1>
        
                        <div className="mt-3 h-[3px] w-[42px] bg-[#ff6b00] rounded-full" />
        
                        <p className="mt-6 max-w-[520px] text-[17px] font-[400] leading-[1.55] text-white sm:text-[17px]">
                          Artificial Intelligence Education Research
                          <br className="hidden sm:block" />
                          and Review (AIERRR)
                        </p>
                          <p className="mt-5 max-w-[420px] text-[12px] leading-[1.8] text-white/80 sm:text-[13px]">
                  Explore our past issues and published articles. All content is
                  freely accessible and available for download.
                </p>
                      </motion.div>
        
                      {/* Journal book */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: 70,
                          rotateY: -12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          rotateY: 0,
                        }}
                        transition={{
                          duration: 0.85,
                          ease: "easeOut",
                        }}
                        className="relative hidden h-full items-end justify-center lg:flex"
                      >
                      
        
                        <div className="absolute bottom-[9px] h-7 w-[250px] rounded-full bg-black/35 blur-xl" />
                      </motion.div>
                    </div>
                  </div>
                </section>

        {/* Search filters */}
        <section className="px-4 pt-7 sm:px-6 lg:px-10 xl:px-14">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="mx-auto max-w-[1380px] rounded-[6px] border border-[#dce4ee] bg-white p-4 shadow-[0_7px_22px_rgba(0,37,85,0.08)]"
          >
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[2.1fr_0.85fr_0.85fr_0.95fr_0.65fr]">
              <div className="relative">
                <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[13px] text-[#7082a0]" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Search articles by title, author or keyword..."
                  className="h-[46px] w-full rounded-[5px] border border-[#ccd6e4] bg-white pl-11 pr-4 text-[12px] text-[#27364b] outline-none transition-all duration-300 placeholder:text-[#68778c] focus:border-[#1456a1] focus:shadow-[0_0_0_3px_rgba(20,86,161,0.1)]"
                />
              </div>

              <SelectBox
                value={selectedYear}
                onChange={(value) => {
                  setSelectedYear(value);
                  setCurrentPage(1);
                }}
                options={[
                  "All Years",
                  ...archiveYears.map((item) => item.year),
                ]}
              />

              <SelectBox
                value={selectedIssue}
                onChange={(value) => {
                  setSelectedIssue(value);
                  setCurrentPage(1);
                }}
                options={[
                  "All Issues",
                  "Volume 3",
                  "Volume 2",
                  "Volume 1",
                ]}
              />

              <SelectBox
                value={selectedType}
                onChange={(value) => {
                  setSelectedType(value);
                  setCurrentPage(1);
                }}
                options={[
                  "All Article Types",
                  ...articleTypes.map((item) => item.name),
                ]}
              />

              <motion.button
                whileHover={{
                  y: -2,
                  boxShadow: "0 7px 18px rgba(7,57,130,0.25)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="button"
                onClick={handleSearch}
                className="h-[46px] rounded-[5px] bg-[#082e69] px-5 text-[12px] font-[600] text-white transition-colors duration-300 hover:bg-[#0d438d]"
              >
                Search
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Main archive section */}
        <section className="px-4 py-8 sm:px-6 lg:px-10 xl:px-14">
          <div className="mx-auto grid max-w-[1380px] gap-7 lg:grid-cols-[270px_1fr] xl:grid-cols-[290px_1fr]">
            {/* Sidebar */}
            <aside className="space-y-7">
              <SidebarCard title="ARCHIVE BY YEAR">
                <div className="space-y-[3px]">
                  {archiveYears.map((item) => {
                    const isActive = activeYear === item.year;

                    return (
                      <motion.button
                        key={item.year}
                        whileHover={{
                          x: 3,
                        }}
                        type="button"
                        onClick={() => {
                          setActiveYear(isActive ? "" : item.year);
                          setSelectedYear("All Years");
                          setCurrentPage(1);
                        }}
                        className={`flex w-full items-center justify-between rounded-[4px] px-1 py-[7px] text-left transition-all duration-300 ${
                          isActive
                            ? "bg-[#eaf3ff] text-[#0b4f9f]"
                            : "text-[#18365f] hover:bg-[#f3f7fc]"
                        }`}
                      >
                        <span className="text-[12px] font-[600]">
                          {item.year}
                        </span>

                        <span className="rounded-[3px] bg-[#eaf3ff] px-[7px] py-[4px] text-[9px] font-[600] text-[#1761ad]">
                          {item.count} Issues
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </SidebarCard>

              <SidebarCard title="ARTICLE TYPES">
                <div className="space-y-1">
                  {articleTypes.map((item) => {
                    const isActive = activeType === item.name;

                    return (
                      <motion.button
                        key={item.name}
                        whileHover={{
                          x: 3,
                        }}
                        type="button"
                        onClick={() => {
                          setActiveType(isActive ? "" : item.name);
                          setSelectedType("All Article Types");
                          setCurrentPage(1);
                        }}
                        className={`grid w-full grid-cols-[22px_1fr_auto] items-center rounded-[4px] px-1 py-[8px] text-left transition-all duration-300 ${
                          isActive
                            ? "bg-[#eaf3ff] text-[#0b4f9f]"
                            : "text-[#18365f] hover:bg-[#f3f7fc]"
                        }`}
                      >
                        <span className="text-[12px] text-[#2658a1]">
                          {item.icon}
                        </span>

                        <span className="text-[11px] font-[600]">
                          {item.name}
                        </span>

                        <span className="rounded-[3px] bg-[#eaf3ff] px-[7px] py-[4px] text-[9px] font-[600] text-[#1761ad]">
                          {item.count}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </SidebarCard>
            </aside>

            {/* Issues */}
            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.08,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-[23px] font-[600] tracking-[-0.3px] text-[#0b3473]">
                    Archive by Issue
                  </h2>

                  <div className="mt-1 h-[3px] w-[38px]  bg-[#ff6b00] rounded-full" />
                </div>

                {(activeYear ||
                  activeType ||
                  selectedYear !== "All Years" ||
                  selectedType !== "All Article Types" ||
                  searchTerm) && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="self-start text-[11px] font-[600] text-[#12549f] transition-colors duration-300 hover:text-[#ff6b00] hover:underline sm:self-auto"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {filteredIssues.length > 0 ? (
                  filteredIssues.map((issue, index) => (
                    <motion.article
                      key={issue.id}
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.035,
                      }}
                      whileHover={{
                        y: -3,
                        boxShadow: "0 12px 30px rgba(10, 57, 115, 0.12)",
                      }}
                      className="grid items-center gap-4 rounded-[5px] border border-[#dce4ee] bg-white p-3 shadow-[0_3px_13px_rgba(0,43,92,0.06)] sm:grid-cols-[42px_1fr_55px_105px] sm:p-4"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 2,
                        }}
                        className="flex h-[40px] w-[40px] items-center justify-center rounded-[5px] bg-[#e8f2ff] text-[15px] text-[#2566b5]"
                      >
                        <FaFileAlt />
                      </motion.div>

                      <div className="min-w-0">
                        <Link
                          to={`/archives/${issue.id}`}
                          className="block text-[11px] font-[600] leading-[1.45] text-[#173c79] transition-colors duration-300 hover:text-[#ff6b00] sm:text-[12px]"
                        >
                          {issue.title}
                        </Link>

                        <p className="mt-[4px] text-[9px] font-[500] text-[#66758b] sm:text-[10px]">
                          {issue.published}
                        </p>
                      </div>

                      <div className="text-left sm:text-center">
                        <p className="text-[14px] font-[600] text-[#1a417d]">
                          {String(issue.articles).padStart(2, "0")}
                        </p>

                        <p className="text-[8px] font-[500] text-[#66758b]">
                          Articles
                        </p>
                      </div>

                      <Link
                        to={`/archives/${issue.id}`}
                        className="inline-flex h-[32px] items-center justify-center rounded-[4px] border border-[#bed0e7] px-4 text-[9px] font-[600] text-[#14549f] transition-all duration-300 hover:border-[#0b4f9f] hover:bg-[#0b4f9f] hover:text-white"
                      >
                        View Issue
                      </Link>
                    </motion.article>
                  ))
                ) : (
                  <div className="rounded-[6px] border border-[#dce4ee] bg-[#f8fbff] px-6 py-12 text-center">
                    <FaSearch className="mx-auto text-[25px] text-[#2a5fa9]" />

                    <h3 className="mt-4 text-[15px] font-[600] text-[#173c79]">
                      No archive issues found
                    </h3>

                    <p className="mt-2 text-[12px] text-[#66758b]">
                      Try changing the search term or selected filters.
                    </p>

                    <button
                      type="button"
                      onClick={resetFilters}
                      className="mt-5 rounded-[4px] bg-[#0b4f9f] px-5 py-2 text-[11px] font-[600] text-white transition-colors duration-300 hover:bg-[#ff6b00]"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {filteredIssues.length > 0 && (
                <div className="mt-6 flex items-center justify-center gap-2">
                  <PaginationButton
                    ariaLabel="Previous page"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) => Math.max(1, page - 1))
                    }
                  >
                    <FaChevronLeft />
                  </PaginationButton>

                  {[1, 2, 3, 4, 5].map((page) => (
                    <PaginationButton
                      key={page}
                      active={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationButton>
                  ))}

                  <PaginationButton
                    ariaLabel="Next page"
                    disabled={currentPage === 5}
                    onClick={() =>
                      setCurrentPage((page) => Math.min(5, page + 1))
                    }
                  >
                    <FaChevronRight />
                  </PaginationButton>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

const SelectBox = ({ value, onChange, options }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-[46px] w-full appearance-none rounded-[5px] border border-[#ccd6e4] bg-white px-4 pr-10 text-[11px] font-[600] text-[#27364b] outline-none transition-all duration-300 focus:border-[#1456a1] focus:shadow-[0_0_0_3px_rgba(20,86,161,0.1)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[9px] text-[#50627a]" />
    </div>
  );
};

const SidebarCard = ({ title, children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -3,
        boxShadow: "0 12px 28px rgba(8, 47, 102, 0.1)",
      }}
      className="rounded-[5px] border border-[#dce4ee] bg-white p-4 shadow-[0_4px_16px_rgba(0,43,92,0.06)]"
    >
      <h3 className="text-[14px] font-[600] text-[#153b79]">
        {title}
      </h3>

      <div className="mb-4 mt-2 h-[2px] w-[28px] bg-[#ff6b00] rounded-full" />

      {children}
    </motion.div>
  );
};

const PaginationButton = ({
  children,
  active = false,
  disabled = false,
  onClick,
  ariaLabel,
}) => {
  return (
    <motion.button
      whileHover={
        disabled
          ? {}
          : {
              y: -2,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.94,
            }
      }
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-[31px] min-w-[31px] items-center justify-center rounded-[4px] border px-2 text-[10px] font-[600] transition-all duration-300 ${
        active
          ? "border-[#0c4e9b] bg-[#0c4e9b] text-white"
          : disabled
          ? "cursor-not-allowed border-[#d9e1ec] bg-[#f5f7fa] text-[#a8b3c1]"
          : "border-[#ced8e6] bg-white text-[#36557e] hover:border-[#0c4e9b] hover:bg-[#edf5ff] hover:text-[#0c4e9b]"
      }`}
    >
      {children}
    </motion.button>
  );
};

export default Archives;
