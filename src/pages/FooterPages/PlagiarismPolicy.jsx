import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Ban,
  BookCheck,
  BookOpen,
  Check,
  ChevronRight,
  ClipboardCheck,
  CopyCheck,
  FileSearch,
  FileText,
  Gavel,
  GraduationCap,
  Mail,
  RefreshCw,
  ScanSearch,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";

import heroBg from "../../assets/yashika-journal-home-hero-banner.webp";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const plagiarismTypes = [
  {
    number: "01",
    icon: CopyCheck,
    title: "Direct Plagiarism",
    description:
      "Copying words, paragraphs, figures or ideas from another source without quotation, permission or proper acknowledgement.",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Self-Plagiarism",
    description:
      "Reusing substantial parts of previously published work without disclosure, citation or editorial permission.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Mosaic Plagiarism",
    description:
      "Combining copied phrases or ideas from multiple sources while making only minor changes to the original wording.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Improper Paraphrasing",
    description:
      "Rewriting another author’s work without sufficient originality or without citing the source.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Idea Plagiarism",
    description:
      "Presenting another researcher’s concepts, methods, arguments or findings as original work.",
  },
  {
    number: "06",
    icon: Users,
    title: "Authorship Misrepresentation",
    description:
      "Using ghostwritten content, purchased manuscripts or uncredited contributions from other individuals.",
  },
];

const screeningStages = [
  {
    number: "01",
    icon: FileSearch,
    title: "Initial Submission Check",
    description:
      "The manuscript is examined for completeness, originality declarations and obvious duplication.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Similarity Screening",
    description:
      "Appropriate similarity-detection tools may be used to identify overlapping or unattributed content.",
  },
  {
    number: "03",
    icon: SearchCheck,
    title: "Editorial Assessment",
    description:
      "Editors review the similarity report and evaluate the context, extent and source of overlap.",
  },
  {
    number: "04",
    icon: Gavel,
    title: "Editorial Decision",
    description:
      "The journal may request revision, reject the manuscript or take further action depending on severity.",
  },
];

const authorResponsibilities = [
  "Submit only original work prepared by the listed authors.",
  "Cite all sources, datasets, ideas, figures and quotations correctly.",
  "Use quotation marks for copied wording where permitted.",
  "Obtain permission for copyrighted third-party material.",
  "Disclose related, overlapping or previously published work.",
  "Avoid submitting the same manuscript to multiple journals.",
  "Review the manuscript carefully before submission.",
  "Respond honestly to editorial questions about originality.",
];

const violationLevels = [
  {
    level: "Level 1",
    title: "Minor Attribution Issue",
    tone: "blue",
    description:
      "Limited missing citations, incorrect quotation formatting or small areas requiring attribution correction.",
    actions: [
      "Request citation correction",
      "Require revised wording",
      "Repeat similarity screening",
    ],
  },
  {
    level: "Level 2",
    title: "Substantial Overlap",
    tone: "orange",
    description:
      "Significant copied or closely paraphrased content that affects the originality of part of the manuscript.",
    actions: [
      "Return for major revision",
      "Request author explanation",
      "Reject when concerns remain",
    ],
  },
  {
    level: "Level 3",
    title: "Serious Misconduct",
    tone: "red",
    description:
      "Extensive plagiarism, duplicate publication, fabricated authorship or deliberate concealment of copied content.",
    actions: [
      "Reject immediately",
      "Notify relevant parties",
      "Consider institutional referral",
    ],
  },
];

const postPublicationActions = [
  {
    icon: AlertTriangle,
    title: "Investigation",
    description:
      "The journal examines the allegation, publication record and supporting evidence.",
  },
  {
    icon: Mail,
    title: "Author Response",
    description:
      "Authors may be asked to provide an explanation, source files and supporting documentation.",
  },
  {
    icon: BookCheck,
    title: "Correction",
    description:
      "Minor confirmed issues may be addressed through a published correction where appropriate.",
  },
  {
    icon: Ban,
    title: "Retraction",
    description:
      "Serious plagiarism may result in article retraction or withdrawal from the journal record.",
  },
];

const acceptableSimilarityNotes = [
  "Reference lists and correctly formatted bibliographic entries.",
  "Common technical phrases that cannot reasonably be rewritten.",
  "Properly quoted and cited material used within reasonable limits.",
  "Standard methodology descriptions where unavoidable overlap exists.",
  "Required legal, ethical or reporting statements.",
];

const unacceptablePractices = [
  "Copying text without citation or quotation.",
  "Changing only a few words from the source material.",
  "Reusing previously published content without disclosure.",
  "Using another person’s figures, tables or data without permission.",
  "Submitting purchased, ghostwritten or AI-generated content as original without disclosure where required.",
  "Manipulating similarity reports or concealing source material.",
];

const navigationItems = [
  {
    number: "01",
    title: "Policy Purpose",
    href: "#policy-purpose",
  },
  {
    number: "02",
    title: "Forms of Plagiarism",
    href: "#plagiarism-types",
  },
  {
    number: "03",
    title: "Screening Process",
    href: "#screening-process",
  },
  {
    number: "04",
    title: "Author Responsibilities",
    href: "#author-responsibilities",
  },
  {
    number: "05",
    title: "Violation Levels",
    href: "#violation-levels",
  },
  {
    number: "06",
    title: "Similarity Guidance",
    href: "#similarity-guidance",
  },
  {
    number: "07",
    title: "Post-Publication Action",
    href: "#post-publication",
  },
  {
    number: "08",
    title: "Report a Concern",
    href: "#report-concern",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ANIMATION                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const scrollToSection = (event, selector) => {
  event.preventDefault();

  document.querySelector(selector)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function PlagiarismPolicy() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-hidden bg-white text-[#10213D]"
    >
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative min-h-[400px] overflow-hidden bg-[#071F58] sm:min-h-[430px] lg:min-h-[460px]">
        <div
          className="absolute inset-0 bg-cover bg-[70%_center] bg-no-repeat sm:bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1260px] items-center px-4 py-10 sm:min-h-[430px] sm:px-6 sm:py-12 lg:min-h-[460px] lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="w-full max-w-[700px] text-center sm:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-[500] sm:justify-start sm:text-[13px]"
            >
              <Link
                to="/"
                className="text-white transition-colors duration-300 hover:text-[#ff7600]"
              >
                Home
              </Link>

              <ChevronRight size={13} className="text-white/50" />

              <span className="text-white">Plagirism Policy</span>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[11px] font-[600] uppercase tracking-[0.18em] text-[#ff7600] sm:text-[13px] sm:tracking-[0.22em]"
            >
              Originality and Research Integrity
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[440px] text-[30px] font-[600] leading-tight tracking-[-0.7px] text-white sm:mx-0 sm:text-[36px] md:text-[38px] lg:text-[40px]"
            >
              Plagiarism Policy
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#ff7600] sm:mx-0"
            />

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-white/85 sm:mx-0 sm:text-[16px]"
            >
              Protecting the originality, credibility and scholarly integrity of
              manuscripts submitted to Yashika Publications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FORMS OF PLAGIARISM                                                */}
      {/* ================================================================== */}

      <section
        id="plagiarism-types"
        className="scroll-mt-24 py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <CopyCheck size={14} />
              Forms of Misconduct
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              What Constitutes Plagiarism?
            </h2>

            <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Plagiarism includes unauthorized or unattributed use of another
              person’s language, ideas, research, data, figures or creative
              contribution.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {plagiarismTypes.map(
              ({ number, icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 18px 40px rgba(15,54,110,.12)",
                  }}
                  className="group relative overflow-hidden rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,54,110,.06)] sm:p-6"
                >
                  <span className="absolute right-4 top-2 text-[24px] font-[500] text-blue-50">
                    {number}
                  </span>

                  <div
                    className={`relative z-10 grid h-12 w-12 place-items-center rounded-2xl text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                      index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                    }`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="relative z-10 mt-5 text-[15px] font-[550] text-[#0B2C66]">
                    {title}
                  </h3>

                  <p className="relative z-10 mt-3 text-[12px] leading-6 text-slate-600">
                    {description}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SCREENING PROCESS                                                  */}
      {/* ================================================================== */}

      <section
        id="screening-process"
        className="scroll-mt-24 bg-[#071F58] py-10 text-white sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-blue-100 sm:text-[12px]">
              <ScanSearch size={14} />
              Editorial Screening
            </span>

            <h2 className="mt-4 text-[240px] font-[600] sm:text-[24px] lg:text-[28px]">
              Plagiarism Screening Process
            </h2>

            <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-blue-100/80 sm:text-[14px]">
              Similarity reports are interpreted by editors. Decisions are not
              based only on a numerical similarity percentage.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-[10%] right-[10%] top-8 hidden border-t-2 border-dashed border-white/20 lg:block" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {screeningStages.map(
                ({ number, icon: Icon, title, description }, index) => (
                  <motion.article
                    key={number}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                      backgroundColor: "rgba(255,255,255,.12)",
                    }}
                    className="relative rounded-[22px] border border-white/15 bg-white/[0.08] px-5 pb-6 pt-12 text-center backdrop-blur-md"
                  >
                    <div
                      className={`absolute left-1/2 top-0 z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-white ring-8 ring-[#071F58] ${
                        index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <span className="text-[10px] font-[500] uppercase tracking-[0.16em] text-[#FFA65C]">
                      Stage {number}
                    </span>

                    <h3 className="mt-3 text-[14px] font-[550] text-white">
                      {title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-6 text-blue-100/75">
                      {description}
                    </p>
                  </motion.article>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* AUTHOR RESPONSIBILITIES                                            */}
      {/* ================================================================== */}

      <section
        id="author-responsibilities"
        className="scroll-mt-24 py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <UserCheck size={14} />
              Before Submission
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Author Responsibilities
            </h2>

            <span className="mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Authors must ensure that the manuscript is original, correctly
              cited and free from unauthorized copying before submission.
            </p>

            <div className="mt-6 rounded-[20px] border border-orange-100 bg-orange-50 p-5">
              <div className="flex items-start gap-4">
                <ShieldAlert
                  size={23}
                  className="mt-1 shrink-0 text-[#F57C20]"
                />

                <div className="min-w-0">
                  <h3 className="text-[14px] font-[550] text-[#0B2C66]">
                    Author Declaration
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    Submission confirms that the manuscript is original and that
                    all borrowed material has been acknowledged.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {authorResponsibilities.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                  boxShadow: "0 14px 30px rgba(15,54,110,.1)",
                }}
                className="flex items-start gap-4 rounded-[18px] border border-slate-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,54,110,.06)]"
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-white ${
                    index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                  }`}
                >
                  <Check size={17} strokeWidth={3} />
                </span>

                <p className="min-w-0 text-[12px] leading-6 text-slate-600">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* VIOLATION LEVELS                                                   */}
      {/* ================================================================== */}

      <section
        id="violation-levels"
        className="scroll-mt-24 bg-[#F6F8FC] py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA] shadow-sm sm:text-[12px]">
              <AlertTriangle size={14} />
              Editorial Assessment
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Levels of Plagiarism Concern
            </h2>

            <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Editorial action depends on the extent, context, intent and
              seriousness of the identified overlap.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {violationLevels.map((item) => (
              <ViolationCard key={item.level} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SIMILARITY GUIDANCE                                                */}
      {/* ================================================================== */}

      <section
        id="similarity-guidance"
        className="scroll-mt-24 py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.article
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[24px] border border-blue-100 bg-white shadow-[0_12px_32px_rgba(15,54,110,.08)]"
            >
              <div className="bg-gradient-to-r from-[#125FEA] to-[#082D68] p-6 text-white sm:p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                  <Check size={23} strokeWidth={3} />
                </div>

                <h2 className="mt-4 text-[21px] font-[550] sm:text-[24px]">
                  Acceptable Similarity
                </h2>

                <p className="mt-2 text-[12px] leading-6 text-blue-100/85">
                  Some legitimate overlap may appear in scholarly manuscripts.
                </p>
              </div>

              <div className="p-5 sm:p-7">
                <div className="space-y-3">
                  {acceptableSimilarityNotes.map((item) => (
                    <PolicyPoint key={item} tone="blue">
                      {item}
                    </PolicyPoint>
                  ))}
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[24px] border border-orange-100 bg-white shadow-[0_12px_32px_rgba(15,54,110,.08)]"
            >
              <div className="bg-gradient-to-r from-[#F57C20] to-[#D95A00] p-6 text-white sm:p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                  <Ban size={23} />
                </div>

                <h2 className="mt-4 text-[21px] font-[550] sm:text-[24px]">
                  Unacceptable Practices
                </h2>

                <p className="mt-2 text-[12px] leading-6 text-orange-50/90">
                  Intentional concealment or unattributed copying is prohibited.
                </p>
              </div>

              <div className="p-5 sm:p-7">
                <div className="space-y-3">
                  {unacceptablePractices.map((item) => (
                    <PolicyPoint key={item} tone="orange">
                      {item}
                    </PolicyPoint>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* POST-PUBLICATION                                                   */}
      {/* ================================================================== */}

      <section
        id="post-publication"
        className="scroll-mt-24 bg-[#071F58] py-10 text-white sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-[600] uppercase tracking-[0.16em] text-blue-100 sm:text-[12px]">
              <Gavel size={14} />
              Published Articles
            </span>

            <h2 className="mt-4 text-[24px] font-[600] sm:text-[28px] lg:text-[32px]">
              Plagiarism Identified After Publication
            </h2>

            <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-blue-100/80 sm:text-[14px]">
              Confirmed concerns may require correction, withdrawal, retraction
              or notification to relevant institutions.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {postPublicationActions.map(
              ({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    backgroundColor: "rgba(255,255,255,.12)",
                  }}
                  className="rounded-[22px] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md sm:p-6"
                >
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl text-white ${
                      index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-[15px] font-[550] text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-blue-100/75">
                    {description}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* REPORT CONCERN                                                     */}
      {/* ================================================================== */}

      {/* <section
        id="report-concern"
        className="scroll-mt-24 bg-white py-10 sm:py-12"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0D63E8] via-[#084AB9] to-[#071F58] p-6 text-white shadow-[0_22px_50px_rgba(7,45,115,.2)] sm:p-8 lg:p-10"
          >
            <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(135deg,transparent_42%,#fff_43%,transparent_44%)] [background-size:80px_80px]" />

            <div className="relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
              <div className="flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:gap-5 sm:text-left">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 sm:h-16 sm:w-16">
                  <ShieldAlert size={29} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-[22px] font-[550] sm:text-[24px]">
                    Report a Plagiarism Concern
                  </h2>

                  <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                    Send the article title, DOI or URL, copied material and
                    supporting evidence to the editorial office.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="mailto:info@yashikapublications.com"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-4 py-3 text-[12px] font-[500] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35] sm:w-auto"
                >
                  Email Editorial Office
                  <Mail size={17} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/50 px-4 py-3 text-[12px] font-[500] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66] sm:w-auto"
                >
                  Contact Us
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="bg-white py-8">
              <div className="mx-auto ">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative overflow-hidden  bg-gradient-to-r from-[#0D63E8] via-[#084AB9] to-[#071F58] p-6 text-white shadow-[0_25px_60px_rgba(7,45,115,.22)] sm:p-8 lg:p-10"
                >
                  <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(135deg,transparent_42%,#fff_43%,transparent_44%)] [background-size:80px_80px]" />
      
                  <div className="relative mx-auto flex w-full max-w-[1260px] flex-col items-center justify-between gap-7 px-4 text-center sm:px-6 lg:flex-row lg:px-10 lg:text-left">
                    <div className="flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:gap-5 sm:text-left">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 sm:h-16 sm:w-16">
                        <ShieldCheck size={30} />
                      </div>
      
                      <div>
                        <h2 className="text-[22px] font-[550] sm:text-[26px]">
                          Have a Privacy Question?
                        </h2>
      
                        <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                          Contact the editorial office to request access, correction
                    or clarification regarding your personal information.
                        </p>
                      </div>
                    </div>
      
                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                      <a
                        href="mailto:info@yashikapublications.com"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-4 py-3 text-[12px] font-[500] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35] sm:w-auto"
                      >
                        Email Privacy Enquiry
                        <Mail size={17} />
                      </a>
      
                      <Link
                        to="/contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/50 px-4 py-3 text-[12px] font-[500] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66] sm:w-auto"
                      >
                        Contact Us
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
    </motion.main>
  );
}

/* -------------------------------------------------------------------------- */
/*                            VIOLATION CARD                                  */
/* -------------------------------------------------------------------------- */

function ViolationCard({ level, title, tone, description, actions }) {
  const styles = {
    blue: {
      header: "from-[#125FEA] to-[#082D68]",
      icon: "bg-blue-50 text-[#125FEA]",
    },
    orange: {
      header: "from-[#F57C20] to-[#D95A00]",
      icon: "bg-orange-50 text-[#F57C20]",
    },
    red: {
      header: "from-[#C92D3C] to-[#821C28]",
      icon: "bg-red-50 text-red-600",
    },
  };

  const current = styles[tone];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{
        y: -8,
        boxShadow: "0 18px 40px rgba(15,54,110,.12)",
      }}
      className="overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_10px_28px_rgba(15,54,110,.07)]"
    >
      <div className={`bg-gradient-to-r ${current.header} p-6 text-white`}>
        <p className="text-[10px] font-[550] uppercase tracking-[0.18em] text-white/70">
          {level}
        </p>

        <h3 className="mt-2 text-[21px] font-[550]">{title}</h3>

        <p className="mt-3 text-[12px] leading-6 text-white/80">
          {description}
        </p>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-[10px] font-[550] uppercase tracking-[0.16em] text-slate-400">
          Possible Actions
        </p>

        <div className="mt-4 space-y-3">
          {actions.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${current.icon}`}
              >
                <Check size={13} strokeWidth={3} />
              </span>

              <p className="text-[12px] leading-6 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*                              POLICY POINT                                  */
/* -------------------------------------------------------------------------- */

function PolicyPoint({ children, tone = "blue" }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
          tone === "orange"
            ? "bg-orange-50 text-[#F57C20]"
            : "bg-blue-50 text-[#125FEA]"
        }`}
      >
        <Check size={13} strokeWidth={3} />
      </span>

      <p className="min-w-0 text-[12px] leading-6 text-slate-600">{children}</p>
    </div>
  );
}
