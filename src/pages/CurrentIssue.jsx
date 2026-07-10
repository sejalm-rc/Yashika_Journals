import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaChevronRight,
  FaCalendarAlt,
  FaFileAlt,

  FaExternalLinkAlt,
  FaSearch,
 FaDownload,
  FaChevronDown,
  FaRegCalendarAlt,
} from "react-icons/fa";

import PageTransition from "../components/PageTransition";

import heroBg from "../assets/yashika-journal-home-hero-banner.webp";
// import journalBook from "../assets/aierr-journal-book.webp";
import issueCover from "../assets/artificial-intelligence-education-research-review-journal-cover.webp";
import { Calendar, Download, FileText,   ExternalLink, } from "lucide-react";

const issueStats = [
  {
    icon: Calendar,
    label: "Published",
    value: "May 30, 2025",
  },
  {
    icon: FileText,
    label: "Articles",
    value: "12",
  },
  {
    icon: FileText,
    label: "Total Pages",
    value: "145",
  },
  {
    icon: Download,
    label: "Downloads",
    value: "1,245",
  },
];

const articles = [
  {
    id: 1,
    title:
      "AI-Powered Adaptive Learning Systems: A Review of Recent Trends and Applications",
    authors: "R. Sharma, P. K. Singh",
    pages: "1–15",
  },
  {
    id: 2,
    title:
      "Chatbots in Higher Education: Enhancing Student Engagement and Learning Outcomes",
    authors: "A. Verma, S. Patel",
    pages: "16–28",
  },
  {
    id: 3,
    title:
      "Ethical Considerations of Artificial Intelligence in Educational Settings",
    authors: "M. Khan, L. D'Souza",
    pages: "29–42",
  },
  {
    id: 4,
    title:
      "Predictive Analytics for Student Performance: A Systematic Review",
    authors: "T. Reddy, K. Bansal",
    pages: "43–58",
  },
  {
    id: 5,
    title:
      "AI in Assessment: Automated Grading and Feedback Mechanisms",
    authors: "J. Matthew, R. Joseph",
    pages: "59–72",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CurrentIssue = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return articles;
    }

    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(search) ||
        article.authors.toLowerCase().includes(search)
    );
  }, [searchTerm]);

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
              
                                <span className="text-white"> Current Issue</span>
                              </div>
              
                              <h1 className="text-[36px] font-[600] leading-[1.1] tracking-[-1px] text-white sm:text-[40px] lg:text-[42px]">
                                    Current Issue
                              </h1>
              
                              <div className="mt-3 h-[3px] w-[42px] bg-[#ff6b00] rounded-full" />
              
                              <p className="mt-6 max-w-[520px] text-[17px] font-[400] leading-[1.55] text-white sm:text-[17px]">
                                Artificial Intelligence Education Research
                                <br className="hidden sm:block" />
                                and Review (AIERRR)
                              </p>
                                <p className="mt-5 max-w-[340px] text-[12px] leading-[1.8] text-white/80 sm:text-[13px]">
                     Stay up to date with our latest published research  and scholarly contributions.
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

        {/* Issue overview card */}
      <section className="px-4 pt-8 sm:px-6 lg:px-8 xl:px-10">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{
      y: -3,
      boxShadow: "0 18px 44px rgba(10, 49, 102, 0.12)",
    }}
    className="mx-auto w-full max-w-[1380px] overflow-hidden rounded-[9px] border border-[#dde5ef] bg-white shadow-[0_5px_22px_rgba(14,50,95,0.07)]"
  >
    <div className="grid items-stretch lg:grid-cols-[210px_minmax(0,1fr)_285px]">
      {/* Journal cover */}
      <div className="flex items-center justify-center border-b border-[#e3e9f1] px-6 py-3 lg:border-b-0 lg:border-r">
        <motion.div
          whileHover={{
            y: -6,
            scale: 1.025,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 16,
          }}
          className="relative"
        >
          <img
            src={issueCover}
            alt="Artificial Intelligence Education Research and Review, Volume 3 Issue 2 journal cover"
            className="h-[225px] w-[150px] rounded-[2px] object-cover shadow-[0_14px_24px_rgba(0,0,0,0.18)] sm:h-[235px] sm:w-[158px]"
          />

          <div className="absolute -bottom-3 left-1/2 h-4 w-[125px] -translate-x-1/2 rounded-full bg-black/15 blur-md" />
        </motion.div>
      </div>

      {/* Title and statistics */}
      <div className="flex min-w-0 flex-col justify-center px-5 py-7 sm:px-7 lg:px-9">
        <motion.h2
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center text-[19px] font-[600] leading-[1.35] tracking-[-0.25px] text-[#123570] sm:text-[22px] lg:text-left lg:text-[22px]"
        >
          Volume 3, Issue 2 (May 2025)
        </motion.h2>

        <div className="mt-8 grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-y-0">
          {issueStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`group relative flex min-h-[130px] flex-col items-center justify-center px-3 text-center ${
                  index !== issueStats.length - 1
                    ? "sm:border-r sm:border-[#dfe6ef]"
                    : ""
                }`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: index === 3 ? -4 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 15,
                  }}
                  className="mb-4 flex h-[42px] items-center justify-center text-[#075bb4]"
                >
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    className="transition-colors duration-300 group-hover:text-[#004b99]"
                  />
                </motion.div>

                <p className="text-[13px] font-[500] leading-none text-[#67758c]">
                  {item.label}
                </p>

                <p className="mt-3 text-[14px] font-[600] leading-none text-[#102e63]">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center border-t border-[#e3e9f1] px-5 py-7 sm:px-7 lg:border-l lg:border-t-0">
        <div className="flex w-full flex-col gap-5">
          <motion.a
            href="/documents/volume-3-issue-2.pdf"
            download
            whileHover={{
              y: -3,
              scale: 1.015,
              boxShadow: "0 10px 25px rgba(4, 89, 181, 0.28)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[5px] bg-[#0665c2] px-3 text-[15px] font-[500] text-white shadow-[0_5px_13px_rgba(6,101,194,0.2)] transition-colors duration-300 hover:bg-[#0456a7]"
          >
            <span>Download Issue (PDF)</span>

            <Download
              size={21}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-y-[2px]"
            />
          </motion.a>

          <motion.button
            type="button"
            onClick={() => window.open(issueCover, "_blank")}
            whileHover={{
              y: -3,
              scale: 1.015,
              backgroundColor: "#f2f7ff",
              borderColor: "#075bb4",
            }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex h-[50px] w-full items-center justify-center gap-3 rounded-[5px] border-[1.5px] border-[#9eb9dc] bg-white px-3 text-[15px] font-[500] text-[#124993] transition-all duration-300"
          >
            <span>View Cover</span>

            <ExternalLink
              size={19}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
</section>

        {/* About issue */}
        <section className="px-4 pt-8 sm:px-6 lg:px-10 xl:px-14">
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
            className="mx-auto max-w-[1380px]"
          >
            <SectionHeading title="About This Issue" />

            <p className="mt-3 max-w-[780px] text-[12px] leading-[1.9] text-[#465268] sm:text-[13px]">
              This issue explores innovative research and applications of
              artificial intelligence in education, focusing on learning.
              technologies, intelligent tutoring systems, data-driven decision
              making, and the impact of AI on teaching and learning. The
              articles provide insights into current trends, challenges, and
              future directions in the field.
            </p>
          </motion.div>
        </section>

        {/* Articles */}
        <section className="px-4 pb-14 pt-8 sm:px-6 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[1380px]">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading title="Articles in This Issue" />

              <div className="relative w-full sm:w-[320px]">
                <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[12px] text-[#718098]" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search within this issue..."
                  className="h-[40px] w-full rounded-[4px] border border-[#ccd7e4] bg-white pl-10 pr-4 text-[11px] text-[#27364b] outline-none transition-all duration-300 placeholder:text-[#7c899a] focus:border-[#1456a1] focus:shadow-[0_0_0_3px_rgba(20,86,161,0.1)]"
                />
              </div>
            </div>

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
                amount: 0.08,
              }}
              transition={{
                duration: 0.55,
              }}
              className="overflow-hidden rounded-[6px] border border-[#dce4ee] bg-white"
            >
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <ArticleRow
                    key={article.id}
                    article={article}
                    index={index}
                    isLast={index === filteredArticles.length - 1}
                  />
                ))
              ) : (
                <div className="px-6 py-14 text-center">
                  <FaSearch className="mx-auto text-[25px] text-[#2a5fa9]" />

                  <h3 className="mt-4 text-[14px] font-[600] text-[#173d7b]">
                    No articles found
                  </h3>

                  <p className="mt-2 text-[11px] text-[#6b788b]">
                    Try searching with another title, keyword, or author.
                  </p>
                </div>
              )}
            </motion.div>

            {/* <div className="mt-6 flex justify-center">
              <motion.button
                type="button"
                whileHover={{
                  y: -2,
                  boxShadow: "0 7px 18px rgba(14, 72, 142, 0.13)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex h-[38px] min-w-[190px] items-center justify-center gap-3 rounded-[4px] border border-[#cbd7e5] bg-white px-5 text-[12px] font-[600] text-[#173e7c] transition-all duration-300 hover:border-[#0e5aaa] hover:bg-[#f3f8ff]"
              >
                View All Articles (12)
                <FaChevronDown className="text-[9px]" />
              </motion.button>
            </div> */}
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

const ArticleRow = ({ article, index, isLast }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: -18,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
      }}
      whileHover={{
        backgroundColor: "#f7faff",
      }}
      className={`grid gap-4 p-4 transition-colors duration-300 sm:grid-cols-[48px_1fr_65px_130px] sm:items-center ${
        !isLast ? "border-b border-[#dce4ee]" : ""
      }`}
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 2,
        }}
        className="flex h-[42px] w-[42px] items-center justify-center rounded-[5px] bg-[#e7f1ff] text-[13px] font-[600] text-[#2161ac]"
      >
        {article.id}
      </motion.div>

      <div className="min-w-0">
        <Link
          to={`/article/${article.id}`}
          className="block text-[12px] font-[600] leading-[1.55] text-[#143d7b] transition-colors duration-300 hover:text-[#ff6b00] sm:text-[13px]"
        >
          {article.title}
        </Link>

        <p className="mt-2 text-[10px] font-[500] text-[#738095] sm:text-[11px]">
          {article.authors}
        </p>
      </div>

      <div>
        <p className="text-[11px] font-[500] uppercase text-[#78869a]">
          Pages
        </p>

        <p className="mt-1 text-[11px] font-[600] text-[#173e7c]">
          {article.pages}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
        <Link
          to={`/article/${article.id}`}
          className="inline-flex h-[31px] items-center justify-center gap-2 rounded-[4px] border border-[#bdcde1] bg-white px-3 text-[11px] font-[600] text-[#15549d] transition-all duration-300 hover:border-[#0a5bad] hover:bg-[#0a5bad] hover:text-white"
        >
          View Article
          <FaExternalLinkAlt className="text-[8px]" />
        </Link>

        <a
          href={`/documents/article-${article.id}.pdf`}
          download
          className="inline-flex h-[31px] items-center justify-center gap-2 rounded-[4px] border border-[#d1dbe7] bg-white px-3 text-[11px] font-[600] text-[#415a7b] transition-all duration-300 hover:border-[#ff6b00] hover:bg-[#fff5ec] hover:text-[#ff6b00]"
        >
          PDF
          <FaDownload className="text-[8px]" />
        </a>
      </div>
    </motion.article>
  );
};

const SectionHeading = ({ title }) => {
  return (
    <div>
      <h2 className="text-[20px] font-[600] tracking-[-0.2px] text-[#113b79] sm:text-[24px]">
        {title}
      </h2>

      <div className="mt-2 h-[3px] w-[36px]  bg-[#ff6b00] rounded-full" />
    </div>
  );
};

export default CurrentIssue;