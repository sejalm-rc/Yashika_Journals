import React from "react";
import { motion } from "framer-motion";

import {
  BookOpen,
  Printer,
  CalendarDays,
  Languages,
  Landmark,
  Link2,
  Layers3,
  FileText,
  SearchCheck,
  Award,
  Send,
  Percent,
  ArrowRight,
} from "lucide-react";

import heroImg from "../assets/yashika-journal-home-hero-banner.webp";
// import aboutImg from "../assets/yashika-publication-about-company.webp";
import { BadgeCheck, BrainCircuit, ChartNoAxesCombined, CloudCog, FilePenLine, LockKeyhole, Monitor, Network, PencilLine, ShieldCheck, UsersRound } from "lucide-react";

const journalInfo = [
  { icon: BookOpen, label: "ISSN (Online)", value: "XXXX-XXXX" },
  { icon: Printer, label: "ISSN (Print)", value: "XXXX-XXXX" },
  { icon: CalendarDays, label: "Frequency", value: "Quarterly (4 Issues per Year)" },
  { icon: Languages, label: "Language", value: "English" },
  { icon: Landmark, label: "Publisher", value: "Yashika Publications" },
  {
    icon: Link2,
    label: "Journal Website",
    value: "www.yashikapublications.com/aierrr",
    link: "https://www.yashikapublications.com/aierrr",
  },
  {
    icon: Layers3,
    label: "Indexed In",
    value: "Google Scholar, Crossref (DOI)\n(More Indexing on Progress)",
  },
];

const metrics = [
  { icon: CalendarDays, value: "5", suffix: "days", text: "Submission to\nfirst decision" },
  { icon: SearchCheck, value: "62", suffix: "days", text: "Submission to\ndecision after review" },
  { icon: Award, value: "147", suffix: "days", text: "Submission to\nacceptance" },
  { icon: Send, value: "7", suffix: "days", text: "Acceptance to\nonline publication" },
  { icon: Percent, value: "37%", suffix: "", text: "Acceptance\nRatio" },
];

const articles = [
  {
    title: "AI-Powered Adaptive Learning Systems: A Review of Recent Trends and Applications",
    meta: "R. Sharma, P. K. Singh   |   Vol. 1   |   Issue 2   |   May 2025",
  },
  {
    title: "Chatbots in Higher Education: Enhancing Student Engagement and Learning Outcomes",
    meta: "A. Verma, S. Patel   |   Vol. 1   |   Issue 2   |   May 2025",
  },
  {
    title: "Ethical Considerations of Artificial Intelligence in Educational Settings",
    meta: "M. Khan, L. D'Souza   |   Vol. 1   |   Issue 2   |   May 2025",
  },
  {
    title: "Predictive Analytics for Student Performance: A Systematic Review",
    meta: "T. Reddy, K. Bansal   |   Vol. 1   |   Issue 2   |   May 2025",
  },
  {
    title: "AI in Assessment: Automated Grading and Feedback Mechanisms",
    meta: "J. Matthew, R. Joseph   |   Vol. 1   |   Issue 2   |   May 2025",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};




function Home() {
  return (
    <div className="w-full overflow-hidden bg-white text-[#09224a]">
      {/* HERO */}
     <section className="relative overflow-hidden bg-[#061f45]">
      <div
        className="relative min-h-[480px] bg-cover bg-center bg-no-repeat sm:min-h-[490px] lg:min-h-[500px]"
        style={{ backgroundImage: `url(${heroImg})` }}
      >

        <div className="relative z-10 mx-auto flex min-h-[490px] max-w-[1400px] items-center px-5 py-10 sm:min-h-[490px] sm:px-8 lg:min-h-[500px] lg:px-14 xl:px-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[640px]"
          >
            <motion.p
              whileHover={{ x: 5 }}
              className="mb-4 text-[14px] font-[500] text-[#ff8a00]"
            >
              Peer Review Journal
            </motion.p>

            <h1 className="max-w-[400px] text-[34px] font-[600] leading-[1.12] tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]">
              Artificial Intelligence Education Research and Review
            </h1>

            <p className="mt-4 max-w-[470px] text-[14px] font-medium leading-[1.8] text-white/85 sm:text-[14px] lg:text-[15px]">
              Advance knowledge and innovation at the intersection of Artificial Intelligence and Education.
            </p>

            {/* <div className="mt-6 grid max-w-[650px] grid-cols-2 gap-2 sm:grid-cols-4">
              {heroFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group flex items-center gap-2 border-r border-white/25 pr-3 last:border-r-0"
                >
                  <div className="text-[30px] text-[#4aa2ea] transition duration-300 group-hover:scale-110 group-hover:text-[#18b9ff]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-medium leading-tight text-white sm:text-[11px]">
                      {item.title}
                    </h4>
                    <p className="text-[9px] font-medium leading-tight text-white/75 sm:text-[10px]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div> */}

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,119,217,0.7)",
                }}
                whileTap={{ scale: 0.96 }}
                href="/journals"
                className="inline-flex h-[44px] items-center justify-center gap-3 rounded-[6px] bg-[#ff8a00] px-7 text-[14px] font-semibold text-white shadow-lg transition duration-300 hover:bg-[##FF6B00]"
              >
                Submit ManuScript <ArrowRight />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 22px rgba(255,255,255,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                href="/authors"
                className="inline-flex h-[44px] items-center justify-center gap-3 rounded-[6px] border-2 border-white/45 bg-transparent px-8 text-[14px] font-semibold text-white transition duration-300 hover:bg-white hover:text-[#061f45]"
              >
                View Current Issue <ArrowRight />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      <section className="w-full bg-[#fbfdff] px-5 py-4 sm:px-8 lg:min-h-[500px] lg:px-14 xl:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          {/* ABOUT THE JOURNAL */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="rounded-[9px] border border-[#e4eaf2] bg-white px-5 py-5 shadow-[0_4px_14px_rgba(15,44,88,0.08)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(15,44,88,0.14)] sm:px-6 sm:py-6"
          >
            <h2 className="text-[16px] font-[600] uppercase tracking-[0.02em] text-[#075bc7] sm:text-[18px]">
              About the Journal
            </h2>
            <div className="mt-1 h-[2px] w-[28px] rounded-full bg-[#1876e8]" />

            <p className="mt-5 text-[14px] font-medium leading-[1.9] text-[#26374c] sm:text-[14px]">
              Artificial Intelligence Education Research and Review (AIERRR) is a
              peer-reviewed, open access journal dedicated to advancing the
              theory, research, and practice of artificial intelligence in
              education. The journal aims to provide a platform for researchers,
              educators, practitioners, and policymakers to share innovative
              ideas, empirical studies, and practical applications that explore
              the role of AI in teaching, learning, assessment, and educational
              administration.
            </p>

            <p className="mt-5 text-[14px] font-medium leading-[1.9] text-[#26374c] sm:text-[14px]">
              We welcome high-quality original research, reviews, case studies,
              and theoretical papers that contribute to the ethical, effective,
              and inclusive integration of AI technologies in education across
              all disciplines and levels.
            </p>
          </motion.article>

          {/* JOURNAL INFORMATION */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-[9px] border border-[#e4eaf2] bg-white px-5 py-5 shadow-[0_4px_14px_rgba(15,44,88,0.08)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(15,44,88,0.14)] sm:px-6 sm:py-6"
          >
            <h2 className="text-[16px] font-[600] uppercase tracking-[0.02em] text-[#075bc7] sm:text-[18px]">
              Journal Information
            </h2>
            <div className="mt-1 h-[2px] w-[28px] rounded-full bg-[#1876e8]" />

            <div className="mt-3">
              {journalInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    whileHover={{ x: 5, backgroundColor: "#f7fbff" }}
                    className="group grid grid-cols-[34px_1fr] gap-3 border-b border-[#e8edf3] px-1 py-[9px] last:border-b-0"
                  >
                    <Icon className="mt-[2px] h-[25px] w-[25px] text-[#183968] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#0868d5]" />
                    <div>
                      <p className="text-[14px] font-medium leading-none text-[#53657a]">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 block break-all text-[12px] font-semibold leading-[1.45] text-[#14273f] hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 whitespace-pre-line text-[12px] font-semibold leading-[1.45] text-[#14273f]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.article>
        </div>

        {/* METRICS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-5 grid overflow-hidden rounded-[9px] border border-[#e4eaf2] bg-white shadow-[0_4px_14px_rgba(15,44,88,0.08)] sm:grid-cols-2 lg:grid-cols-5"
        >
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${item.value}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                whileHover={{ y: -7, backgroundColor: "#f7fbff" }}
                className="group flex min-h-[195px] flex-col items-center justify-center border-b border-[#e5eaf1] px-4 py-5 text-center sm:min-h-[170px] sm:[&:nth-child(odd)]:border-r lg:min-h-[190px] lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <Icon className="h-[36px] w-[36px] text-[#075dc6] transition-all duration-300 group-hover:scale-110 group-hover:text-[#004ca8]" strokeWidth={1.7} />
                <div className="mt-3 flex items-baseline justify-center gap-1 text-[#17243a]">
                  <span className="text-[24px] font-[500] leading-none sm:text-[26px]">
                    {item.value}
                  </span>
                  {item.suffix && (
                    <span className="text-[16px] font-medium">{item.suffix}</span>
                  )}
                </div>
                <p className="mt-3 whitespace-pre-line text-[12px] font-medium leading-[1.55] text-[#28384d]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* RECENT ARTICLES */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mt-5 overflow-hidden rounded-[9px] border border-[#e4eaf2] bg-white shadow-[0_4px_14px_rgba(15,44,88,0.08)]"
        >
          <div className="flex flex-col gap-3 border-b border-[#e7ecf2] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <h2 className="text-[16px] font-[600] uppercase tracking-[0.02em] text-[#075bc7] sm:text-[18px]">
              Recently Published Articles
            </h2>
            <motion.a
              whileHover={{ x: 4 }}
              href="/articles"
              className="inline-flex items-center gap-1 self-start text-[13px] font-semibold text-[#0568cf] sm:self-auto"
            >
              View All Articles <ArrowRight className="h-[14px] w-[14px]" />
            </motion.a>
          </div>

          <div className="px-4 pb-3 sm:px-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ x: 5, backgroundColor: "#f8fbff" }}
                className="group grid gap-3 border-b border-[#e8edf3] py-3 last:border-b-0 sm:grid-cols-[48px_1fr_auto] sm:items-center"
              >
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[5px] bg-[#eef6ff] text-[#0868d5] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#e3f0ff]">
                  <FileText className="h-[23px] w-[23px]" strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[12px] font-semibold leading-[1.5] text-[#17243a] sm:text-[14px]">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-[12px] font-medium leading-[1.5] text-[#637188] sm:text-[12px]">
                    {article.meta}
                  </p>
                </div>

                <motion.a
                  whileHover={{ x: 4 }}
                  href="/articles"
                  className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#0568cf] sm:justify-self-end sm:text-[11px]"
                >
                  Read More <ArrowRight className="h-[13px] w-[13px]" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
    </div>
  );
}

export default Home;