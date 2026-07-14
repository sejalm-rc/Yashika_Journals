import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Cookie,
  Database,
  Eye,
  FileCheck2,
  FileText,
  Globe2,
  KeyRound,
  LockKeyhole,
  Mail,
  MessageSquareText,
  RefreshCw,
  Scale,
  Server,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserCheck,
  UserRoundCheck,
  Users,
  Copyright
} from "lucide-react";

import logo from "../../assets/yashika-publication-logo.webp";
import heroBg from "../../assets/yashika-journal-home-hero-banner.webp";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const privacyPrinciples = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Data Protection",
    description:
      "Personal information is handled responsibly and protected using appropriate administrative and technical safeguards.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Transparency",
    description:
      "We clearly explain what information is collected, why it is required and how it may be used.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "User Control",
    description:
      "Users may contact us to request access, correction or deletion of eligible personal information.",
  },
  {
    number: "04",
    icon: LockKeyhole,
    title: "Limited Access",
    description:
      "Personal information is available only to authorized staff, editors and service providers who require it.",
  },
];

const informationCollected = [
  {
    icon: UserRoundCheck,
    title: "Identity Information",
    description:
      "Names, professional titles, institutional affiliations, ORCID identifiers and account-related details.",
    examples: "Author, reviewer, editor and correspondent information",
  },
  {
    icon: Mail,
    title: "Contact Information",
    description:
      "Email addresses, telephone numbers, country details and other information provided through forms.",
    examples: "Submission, enquiry and communication details",
  },
  {
    icon: FileText,
    title: "Manuscript Information",
    description:
      "Submitted manuscripts, abstracts, supporting documents, declarations and editorial correspondence.",
    examples: "Research papers, figures, tables and supplementary files",
  },
  {
    icon: Server,
    title: "Technical Information",
    description:
      "Browser, device, IP address, access time and website usage information collected automatically.",
    examples: "Log files, security records and analytics data",
  },
];

const dataUses = [
  "Process manuscript submissions and editorial evaluations.",
  "Manage peer review, publication and author communication.",
  "Respond to enquiries, requests and support messages.",
  "Maintain accurate publication and reviewer records.",
  "Improve website performance, security and user experience.",
  "Prevent fraud, misuse, spam and unauthorized activity.",
  "Comply with legal, regulatory and publishing obligations.",
  "Send service-related notices and important policy updates.",
];

const sharingCases = [
  {
    icon: Users,
    title: "Editors and Reviewers",
    description:
      "Relevant manuscript information may be shared with assigned editors and reviewers for editorial evaluation.",
  },
  {
    icon: Database,
    title: "Indexing Services",
    description:
      "Published article metadata may be provided to indexing, archiving, DOI and scholarly discovery services.",
  },
  {
    icon: Server,
    title: "Service Providers",
    description:
      "Trusted providers may process limited information for website hosting, email, storage, security or analytics.",
  },
  {
    icon: Scale,
    title: "Legal Requirements",
    description:
      "Information may be disclosed where required by law, court order or a legitimate regulatory obligation.",
  },
];

const userRights = [
  {
    icon: Eye,
    title: "Access",
    description:
      "Request information about personal data held by Yashika Publications.",
  },
  {
    icon: RefreshCw,
    title: "Correction",
    description:
      "Request correction of inaccurate, outdated or incomplete information.",
  },
  {
    icon: Trash2,
    title: "Deletion",
    description:
      "Request deletion of eligible information, subject to legal and publishing obligations.",
  },
  {
    icon: ClipboardCheck,
    title: "Restriction",
    description:
      "Request that processing be limited in certain applicable circumstances.",
  },
  {
    icon: MessageSquareText,
    title: "Objection",
    description:
      "Object to specific uses of personal information where permitted.",
  },
  {
    icon: FileCheck2,
    title: "Withdrawal",
    description:
      "Withdraw consent where processing depends specifically on consent.",
  },
];

const securityMeasures = [
  {
    icon: LockKeyhole,
    title: "Access Controls",
    description:
      "Internal access is limited according to role and operational necessity.",
  },
  {
    icon: KeyRound,
    title: "Secure Credentials",
    description:
      "Administrative systems use protected credentials and authentication controls.",
  },
  {
    icon: Server,
    title: "Protected Infrastructure",
    description:
      "Hosting and storage services are selected with security and reliability in mind.",
  },
  {
    icon: Clock3,
    title: "Retention Controls",
    description:
      "Information is retained only for legitimate editorial, legal and administrative purposes.",
  },
];

const policySections = [
  {
    number: "01",
    title: "Information We Collect",
    href: "#information-collected",
  },
  {
    number: "02",
    title: "How We Use Information",
    href: "#information-use",
  },
  {
    number: "03",
    title: "Information Sharing",
    href: "#information-sharing",
  },
  {
    number: "04",
    title: "Cookies and Analytics",
    href: "#cookies",
  },
  {
    number: "05",
    title: "Data Security",
    href: "#security",
  },
  {
    number: "06",
    title: "Data Retention",
    href: "#retention",
  },
  {
    number: "07",
    title: "Your Privacy Rights",
    href: "#privacy-rights",
  },
  {
    number: "08",
    title: "Policy Updates",
    href: "#policy-updates",
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

  const section = document.querySelector(selector);

  section?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function PrivacyPolicy() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-hidden bg-white text-[#10213D]"
    >
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative min-h-[410px] overflow-hidden bg-[#071F58] sm:min-h-[440px] lg:min-h-[460px]">
        <div
          className="absolute inset-0 bg-cover bg-[68%_center] bg-no-repeat sm:bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />


        <div className="relative z-10 mx-auto flex min-h-[410px] max-w-[1260px] items-center px-4 py-12 sm:min-h-[440px] sm:px-6 lg:min-h-[460px] lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="w-full max-w-[700px] text-center sm:text-left"
          >
            {/* <motion.img
              variants={fadeUp}
              src={logo}
              alt="Yashika Publications"
              className="mx-auto mb-6 h-9 w-auto object-contain sm:mx-0 sm:h-12"
            /> */}

            <motion.div
              variants={fadeUp}
              className="mb-5 flex flex-wrap items-center justify-center gap-2 text-[12px] font-[500] sm:justify-start sm:text-[13px]"
            >
              <Link
                to="/"
                className="text-white transition-colors duration-300 hover:text-[#ff7600]"
              >
                Home
              </Link>

              <ChevronRight size={13} className="text-white/50" />

              <span className="text-white">Privacy Policy</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-[11px] font-[600] uppercase tracking-[0.18em] text-[#ff7600] sm:text-[13px] sm:tracking-[0.22em]"
            >
              Privacy and Data Protection
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-[400px] text-[34px] font-[600]  tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]"
            >
              Privacy Policy
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#ff7600] sm:mx-0"
            />

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-white/85 sm:mx-0 sm:text-[16px]"
            >
              Explaining how Yashika Publications collects, uses, stores and
              protects information provided by authors, reviewers, editors and
              website visitors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* POLICY OVERVIEW                                                    */}
      {/* ================================================================== */}

      <section className="relative py-8">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1260px] gap-9 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12 lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <Sparkles size={14} />
              Privacy Commitment
            </span>

            <h2 className="mt-4 text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Protecting Information Across the Publishing Process
            </h2>

            <span className="mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Yashika Publications respects the privacy of everyone who
              interacts with our website, journals and editorial services. We
              collect only the information reasonably required to manage
              scholarly communication, manuscript processing, peer review and
              publication.
            </p>

            <div className="mt-6 rounded-[20px] border border-orange-100 bg-orange-50 p-5">
              <div className="flex items-start gap-4">
                <BadgeCheck
                  size={23}
                  className="mt-1 shrink-0 text-[#ff7600]"
                />

                <div>
                  <h3 className="text-[14px] font-[550] text-[#0B2C66]">
                    Responsible Processing
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    Information is used only for legitimate publishing,
                    communication, operational, security and legal purposes.
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
            {privacyPrinciples.map(
              ({ number, icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                  }}
                  className={`group relative overflow-hidden rounded-[24px] border p-5 shadow-[0_12px_34px_rgba(15,54,110,.09)] sm:p-6 ${
                    index === 0
                      ? "border-[#0B2C66] bg-[#0B2C66]"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  <span
                    className={`absolute right-4 top-2 text-[46px] font-[800] ${
                      index === 0 ? "text-white/5" : "text-blue-50"
                    }`}
                  >
                    {number}
                  </span>

                  <div
                    className={`relative z-10 grid h-12 w-12 place-items-center rounded-2xl transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                      index === 0
                        ? "bg-white/10 text-white"
                        : index % 2 === 0
                          ? "bg-orange-50 text-[#F57C20]"
                          : "bg-blue-50 text-[#125FEA]"
                    }`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3
                    className={`relative z-10 mt-5 text-[15px] font-[550] ${
                      index === 0 ? "text-white" : "text-[#0B2C66]"
                    }`}
                  >
                    {title}
                  </h3>

                  <p
                    className={`relative z-10 mt-3 text-[12px] leading-6 ${
                      index === 0 ? "text-blue-100/80" : "text-slate-600"
                    }`}
                  >
                    {description}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* QUICK POLICY NAVIGATION                                            */}
      {/* ================================================================== */}

      <section className="bg-[#F7F9FD] py-8">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_12px_34px_rgba(15,54,110,.08)] sm:grid-cols-2 lg:grid-cols-4"
          >
            {policySections.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                variants={fadeUp}
                whileHover={{
                  backgroundColor: "#F3F7FF",
                }}
                className={`group flex min-h-[88px] items-center gap-3 p-4 transition-colors sm:p-5 ${
                  index !== policySections.length - 1
                    ? "border-b border-slate-200"
                    : ""
                } ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } ${
                  index < 6 ? "lg:border-b" : "lg:border-b-0"
                } ${
                  index % 4 !== 3 ? "lg:border-r" : "lg:border-r-0"
                }`}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-[10px] font-[700] text-[#125FEA] transition duration-300 group-hover:bg-[#125FEA] group-hover:text-white">
                  {item.number}
                </span>

                <span className="text-[12px] font-[550] leading-5 text-[#0B2C66]">
                  {item.title}
                </span>

                <ChevronRight
                  size={15}
                  className="ml-auto shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#125FEA]"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INFORMATION COLLECTED                                              */}
      {/* ================================================================== */}

      <section
        id="information-collected"
        className="scroll-mt-24 py-8"
      >
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[550] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <Database size={14} />
              Data Collection
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Information We May Collect
            </h2>

            <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#ff7600]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Information is collected when users submit manuscripts, apply as
              reviewers, contact the editorial office or interact with our
              website and services.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {informationCollected.map(
              ({ icon: Icon, title, description, examples }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 18px 40px rgba(15,54,110,.13)",
                  }}
                  className="group flex h-full flex-col rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_10px_28px_rgba(15,54,110,.07)] sm:p-6"
                >
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                      index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                    }`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-[15px] font-[550] text-[#0B2C66]">
                    {title}
                  </h3>

                  <p className="mt-3 flex-1 text-[12px] leading-6 text-slate-600">
                    {description}
                  </p>

                  <div className="mt-5 rounded-[14px] bg-slate-50 p-3">
                    <p className="text-[10px] font-[550] uppercase tracking-[0.12em] text-slate-400">
                      Examples
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-slate-600">
                      {examples}
                    </p>
                  </div>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* HOW INFORMATION IS USED                                            */}
      {/* ================================================================== */}

      <section
        id="information-use"
        className="scroll-mt-24 bg-[#F7F9FD] py-8"
      >
        <div className="mx-auto grid max-w-[1260px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:sticky lg:top-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA] shadow-sm sm:text-[12px]">
              <BookOpenCheck size={14} />
              Processing Purposes
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              How We Use Personal Information
            </h2>

            <span className="mt-2 block h-1 w-14 rounded-full bg-[#ff7600]" />

            <p className="mt-5 text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Information is processed only where it supports our publishing
              services, editorial responsibilities, website operation or
              applicable legal requirements.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {dataUses.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                  boxShadow: "0 14px 30px rgba(15,54,110,.11)",
                }}
                className="flex items-start gap-4 rounded-[20px] border border-slate-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,54,110,.06)]"
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-white ${
                    index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                  }`}
                >
                  <Check size={17} strokeWidth={3} />
                </span>

                <p className="text-[12px] leading-6 text-slate-600">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INFORMATION SHARING                                               */}
      {/* ================================================================== */}

      <section
        id="information-sharing"
        className="scroll-mt-24 py-8"
      >
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <Users size={14} />
              Limited Disclosure
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[14px] lg:text-[28px]">
              When Information May Be Shared
            </h2>

            <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Yashika Publications does not sell personal information. Limited
              disclosure may occur where necessary to provide publishing
              services or meet legal obligations.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {sharingCases.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 18px 40px rgba(15,54,110,.13)",
                }}
                className="group rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_10px_28px_rgba(15,54,110,.07)] sm:p-6"
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                    index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                  }`}
                >
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-[15px] font-[550] text-[#0B2C66]">
                  {title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-slate-600">
                  {description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* COOKIES                                                            */}
      {/* ================================================================== */}

      <section
        id="cookies"
        className="scroll-mt-24 bg-[#F7F9FD] py-12 sm:py-14"
      >
        <div className="mx-auto grid max-w-[1260px] gap-6 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[26px] border border-slate-100 bg-white p-5 shadow-[0_14px_38px_rgba(15,54,110,.08)] sm:p-7"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-13 w-13 h-[52px] shrink-0 place-items-center rounded-2xl bg-[#125FEA] text-white">
                <Cookie size={25} />
              </div>

              <div>
                <p className="text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA]">
                  Website Technology
                </p>

                <h2 className="mt-1 text-[22px] font-[550] text-[#0B2C66] sm:text-[26px]">
                  Cookies and Analytics
                </h2>
              </div>
            </div>

            <p className="mt-5 text-[13px] leading-7 text-slate-600">
              Our website may use essential cookies and similar technologies to
              maintain functionality, remember preferences, understand website
              usage and improve security. Analytics information is generally
              reviewed in an aggregated form.
            </p>

            <div className="mt-5 space-y-3">
              {[
                "Essential cookies support core website operation.",
                "Analytics may help identify performance and usability issues.",
                "Browser settings may be used to restrict optional cookies.",
                "Disabling cookies may affect selected website features.",
              ].map((item) => (
                <PolicyPoint key={item}>{item}</PolicyPoint>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-[26px] bg-gradient-to-br from-[#0B2C66] to-[#061B46] p-6 text-white shadow-[0_20px_50px_rgba(11,44,102,.2)] sm:p-8"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10">
              <Globe2 size={28} className="text-[#ff7600]" />
            </div>

            <h3 className="mt-5 text-[22px] font-[550]">
              External Websites
            </h3>

            <span className="mt-2 block h-1 w-14 rounded-full bg-[#ff7600]" />

            <p className="mt-5 text-[13px] leading-7 text-blue-100/80">
              Our website may contain links to external journals, repositories,
              indexing services or third-party platforms. Their privacy
              practices are governed by their own policies, and Yashika
              Publications is not responsible for their content or data
              processing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECURITY AND RETENTION                                             */}
      {/* ================================================================== */}

      <section
        id="security"
        className="scroll-mt-24 py-12 sm:py-14 lg:py-16"
      >
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[600] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <LockKeyhole size={14} />
              Security Measures
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Protecting Stored Information
            </h2>

            <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {securityMeasures.map(
              ({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 18px 40px rgba(15,54,110,.13)",
                  }}
                  className="group rounded-[22px] border border-slate-100 bg-white p-5 text-center shadow-[0_10px_28px_rgba(15,54,110,.07)] sm:p-6"
                >
                  <div
                    className={`mx-auto grid h-13 w-13 h-[52px] place-items-center rounded-full text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                      index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                    }`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-[15px] font-[550] text-[#0B2C66]">
                    {title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-slate-600">
                    {description}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      <section
        id="retention"
        className="scroll-mt-24 bg-[#082D68] py-8 text-white"
      >
        <div className="mx-auto grid max-w-[1260px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-blue-100 sm:text-[12px]">
              <Clock3 size={14} />
              Retention Periods
            </span>

            <h2 className="mt-4 text-[24px] font-[600] sm:text-[24px] lg:text-[28px]">
              How Long Information Is Retained
            </h2>

            <span className="mt-2 block h-1 w-14 rounded-full bg-[#ff7600]" />

            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-blue-100/80 sm:text-[14px]">
              Information is retained for as long as reasonably required to
              manage manuscript records, maintain publication integrity,
              resolve disputes, meet contractual duties and comply with legal or
              scholarly record-keeping requirements.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-[24px] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md sm:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#ff7600] text-white">
                <Database size={23} />
              </div>

              <div>
                <h3 className="text-[17px] font-[550] text-white">
                  Scholarly Records
                </h3>

                <p className="mt-2 text-[12px] leading-6 text-blue-100/75">
                  Some editorial and publication records may need to be
                  preserved permanently to maintain an accurate scholarly record
                  and address publication ethics matters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PRIVACY RIGHTS                                                     */}
      {/* ================================================================== */}

      <section
        id="privacy-rights"
        className="scroll-mt-24 py-8"
      >
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <UserCheck size={14} />
              Individual Rights
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Your Privacy Rights
            </h2>

            <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#ff7600]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Depending on applicable law and the purpose for which information
              is held, users may exercise certain rights regarding their
              personal information.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {userRights.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -7,
                  boxShadow: "0 16px 36px rgba(15,54,110,.12)",
                }}
                className="flex items-start gap-4 rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,54,110,.07)]"
              >
                <div
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white ${
                    index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-[15px] font-[550] text-[#0B2C66]">
                    {title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-[20px] border border-orange-100 bg-orange-50 p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <Scale
                size={24}
                className="mt-1 shrink-0 text-[#ff7600]"
              />

              <div>
                <h3 className="text-[15px] font-[520] text-[#0B2C66]">
                  Rights May Be Subject to Limitations
                </h3>

                <p className="mt-2 text-[12px] leading-6 text-slate-600">
                  Requests may be limited where information must be retained to
                  preserve the scholarly record, investigate misconduct, comply
                  with legal duties or protect the rights of other individuals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CHILDREN AND POLICY UPDATES                                        */}
      {/* ================================================================== */}

      <section className="bg-[#F7F9FD] py-8">
        <div className="mx-auto grid max-w-[1260px] gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <motion.article
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_12px_32px_rgba(15,54,110,.08)] sm:p-7"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#125FEA]">
              <UserRoundCheck size={23} />
            </div>

            <h2 className="mt-5 text-[21px] font-[550] text-[#0B2C66]">
              Children’s Privacy
            </h2>

            <p className="mt-4 text-[13px] leading-7 text-slate-600">
              Yashika Publications provides scholarly publishing services and
              does not knowingly collect personal information directly from
              children. Anyone submitting information on behalf of a minor must
              have appropriate legal authority and consent.
            </p>
          </motion.article>

          <motion.article
            id="policy-updates"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="scroll-mt-24 rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_12px_32px_rgba(15,54,110,.08)] sm:p-7"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-[#ff7600]">
              <RefreshCw size={23} />
            </div>

            <h2 className="mt-5 text-[21px] font-[550] text-[#0B2C66]">
              Updates to This Policy
            </h2>

            <p className="mt-4 text-[13px] leading-7 text-slate-600">
              This Privacy Policy may be revised to reflect changes in our
              services, publishing practices, technology or legal requirements.
              Updated versions will be posted on this page with an appropriate
              effective date.
            </p>
          </motion.article>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CONTACT CTA                                                        */}
      {/* ================================================================== */}

      {/* <section className="bg-white py-8">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0D63E8] via-[#084AB9] to-[#071F58] p-6 text-white shadow-[0_25px_60px_rgba(7,45,115,.22)] sm:p-8 lg:p-10"
          >
            <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(135deg,transparent_42%,#fff_43%,transparent_44%)] [background-size:80px_80px]" />

            <motion.div
              animate={{
                x: [0, 16, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-blue-200/20"
            />

            <div className="relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
              <div className="flex max-w-3xl flex-col items-center gap-5 sm:flex-row sm:text-left">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 sm:h-16 sm:w-16">
                  <ShieldCheck size={30} />
                </div>

                <div>
                  <h2 className="text-[22px] font-[520] sm:text-[27px]">
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[##ff7600] px-5 py-3 text-[12px] font-[600] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35] sm:w-auto"
                >
                  Email Privacy Enquiry
                  <Mail size={17} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/50 px-5 py-3 text-[12px] font-[600] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66] sm:w-auto"
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
      
                  <div className="relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left max-w-[1260px] px-4 sm:px-6 lg:px-10">
                    <div className="flex max-w-3xl flex-col items-center gap-5 sm:flex-row sm:text-left">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 sm:h-16 sm:w-16">
                        <Copyright size={30} />
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
/*                              SMALL COMPONENT                               */
/* -------------------------------------------------------------------------- */

function PolicyPoint({ children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
        <Check size={13} strokeWidth={3} />
      </span>

      <p className="text-[12px] leading-6 text-slate-600">{children}</p>
    </div>
  );
}