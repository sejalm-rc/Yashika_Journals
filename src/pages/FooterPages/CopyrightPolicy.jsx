import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Copyright,
  FileCheck2,
  FileWarning,
  Globe2,
  GraduationCap,
  Library,
  LockKeyhole,
  Mail,
  Scale,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

import logo from "../../assets/yashika-publication-logo.webp";
import heroBg from "../../assets/yashika-journal-home-hero-banner.webp";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const copyrightPrinciples = [
  {
    icon: UserRoundCheck,
    number: "01",
    title: "Author Ownership",
    text: "Authors retain copyright ownership of their original published research unless otherwise stated in a specific publishing agreement.",
  },
  {
    icon: Library,
    number: "02",
    title: "Publication Rights",
    text: "Authors grant Yashika Publications permission to publish, archive, distribute and promote the accepted article.",
  },
  {
    icon: Globe2,
    number: "03",
    title: "Global Distribution",
    text: "Published research may be distributed electronically, in print and through approved indexing and archival services.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Rights Protection",
    text: "Copyrighted research, figures, tables and supporting materials are protected against unauthorized reproduction.",
  },
];

const authorRights = [
  "Share the published article with research colleagues.",
  "Use the article for classroom teaching and academic presentations.",
  "Include the article in a thesis or dissertation.",
  "Deposit the permitted version in an institutional repository.",
  "Reuse original figures and tables with proper acknowledgement.",
  "Present the published findings at conferences and seminars.",
];

const readerRights = [
  "Read and download articles for personal research.",
  "Cite published articles with complete attribution.",
  "Share official article links with other researchers.",
  "Use permitted content for educational purposes.",
  "Request permission for commercial or substantial reuse.",
];

const permissions = [
  {
    icon: FileCheck2,
    title: "Figures and Tables",
    text: "Authors must secure permission before reproducing third-party figures, tables, photographs, maps or illustrations.",
  },
  {
    icon: BookOpen,
    title: "Published Text",
    text: "Substantial extracts from copyrighted books, journals or reports require permission from the copyright holder.",
  },
  {
    icon: GraduationCap,
    title: "Academic Reuse",
    text: "Published content may be reused for teaching, research and scholarly communication with appropriate citation.",
  },
  {
    icon: LockKeyhole,
    title: "Commercial Reuse",
    text: "Commercial reproduction, translation or redistribution requires prior written authorization.",
  },
];

const infringementActions = [
  "Review the reported copyright concern.",
  "Request evidence and clarification from the relevant parties.",
  "Temporarily restrict access where investigation is necessary.",
  "Publish a correction, withdrawal or retraction when required.",
  "Notify affected copyright owners and responsible institutions.",
  "Take additional legal or editorial action where appropriate.",
];

/* -------------------------------------------------------------------------- */
/*                                 ANIMATION                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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
      staggerChildren: 0.09,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function CopyrightPolicy() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-hidden bg-white text-[#10213D]"
    >
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative min-h-[390px] overflow-hidden bg-[#071F58] sm:min-h-[430px] lg:min-h-[440px]">
        <div
          className="absolute inset-0 bg-cover bg-[65%_center] bg-no-repeat sm:bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-[1260px] items-center px-4 py-12 sm:min-h-[430px] sm:px-6 lg:min-h-[440px] lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="w-full max-w-[680px] text-center sm:text-left"
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
                className="text-[#ff7600] transition hover:text-white"
              >
                Home
              </Link>

              <ChevronRight size={13} className="text-white/55" />

              <span className="text-white">Copyright Policy</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[12px] font-[500] uppercase tracking-[0.18em] text-[#ff7600] sm:text-[14px] sm:tracking-[0.22em]"
            >
              Intellectual Property Protection
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-[400px] text-[34px] font-[600]  tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]"
            >
              Copyright Policy
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#ff7600] sm:mx-0"
            />

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-white/85 sm:mx-0 sm:text-[16px]"
            >
              Protecting authors’ intellectual property while supporting the
              responsible publication, sharing and reuse of scholarly research.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INTRODUCTION                                                       */}
      {/* ================================================================== */}

      <section className="relative py-8">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1260px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12 lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[600] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <Sparkles size={14} />
              Policy Overview
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Protecting Research and Supporting Responsible Reuse
            </h2>

            <span className="mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Yashika Publications respects the intellectual property rights of
              authors, readers and third-party copyright holders. This policy
              explains ownership, publishing permissions, reuse conditions and
              the steps followed when copyright concerns are reported.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {copyrightPrinciples.map(
              ({ icon: Icon, number, title, text }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                    scale: 1.01,
                  }}
                  className={`group relative overflow-hidden rounded-[22px] border p-5 shadow-[0_12px_32px_rgba(15,54,110,.09)] sm:p-6 ${
                    index === 0
                      ? "border-[#0B2C66] bg-[#0B2C66] text-white"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  <span
                    className={`absolute right-4 top-2 text-[44px] font-[800] ${
                      index === 0 ? "text-white/5" : "text-blue-50"
                    }`}
                  >
                    {number}
                  </span>

                  <div
                    className={`relative z-10 grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${
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
                    className={`relative z-10 mt-4 text-[15px] font-[600] ${
                      index === 0 ? "text-white" : "text-[#0B2C66]"
                    }`}
                  >
                    {title}
                  </h3>

                  <p
                    className={`relative z-10 mt-2 text-[12px] leading-6 ${
                      index === 0 ? "text-blue-100/80" : "text-slate-600"
                    }`}
                  >
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* OWNERSHIP AND LICENSE                                              */}
      {/* ================================================================== */}

      <section className="bg-[#F7F9FD] py-8">
        <div className="mx-auto grid max-w-[1260px] gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <motion.article
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-[0_14px_38px_rgba(15,54,110,.09)]"
          >
            <div className="bg-gradient-to-r from-[#125FEA] to-[#082D68] p-6 text-white sm:p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Copyright size={24} />
              </div>

              <h2 className="mt-4 text-[20px] font-[550] sm:text-[22px]">
                Copyright Ownership
              </h2>

              <p className="mt-2 text-[12px] leading-6 text-blue-100/85 sm:text-[13px]">
                Authors retain ownership of their original scholarly work.
              </p>
            </div>

            <div className="p-5 sm:p-7">
              <p className="text-[13px] leading-7 text-slate-600">
                By submitting a manuscript, authors confirm that the work is
                original, has not been published elsewhere and does not violate
                the intellectual property rights of another individual or
                organization.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "All listed authors have approved the submission.",
                  "The manuscript is not under consideration elsewhere.",
                  "Required permissions have been obtained.",
                  "Third-party content is properly acknowledged.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <p className="text-[12px] leading-6 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-[0_14px_38px_rgba(15,54,110,.09)]"
          >
            <div className="bg-gradient-to-r from-[#F57C20] to-[#FF9B4D] p-6 text-white sm:p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Scale size={24} />
              </div>

              <h2 className="mt-4 text-[20px] font-[550] sm:text-[22px]">
                Publication License
              </h2>

              <p className="mt-2 text-[12px] leading-6 text-orange-50/90 sm:text-[13px]">
                Authors grant the publisher permission to publish and distribute
                accepted work.
              </p>
            </div>

            <div className="p-5 sm:p-7">
              <p className="text-[13px] leading-7 text-slate-600">
                After acceptance, authors provide Yashika Publications with a
                non-exclusive license to publish, archive, index, distribute and
                promote the article in electronic and print formats.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Publish the article online and in print.",
                  "Archive the article in approved repositories.",
                  "Submit metadata to indexing services.",
                  "Promote the research through scholarly channels.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-50 text-[#F57C20]">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <p className="text-[12px] leading-6 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* ================================================================== */}
      {/* AUTHOR AND READER RIGHTS                                           */}
      {/* ================================================================== */}

      <section className="py-8">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <ShieldCheck size={14} />
              Permitted Use
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Author and Reader Rights
            </h2>

            <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Published research may be used responsibly for academic,
              educational and research purposes with appropriate attribution.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <motion.article
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[24px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-[0_12px_32px_rgba(15,54,110,.08)] sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#125FEA] text-white">
                  <UserRoundCheck size={24} />
                </div>

                <div>
                  <p className="text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA]">
                    For Contributors
                  </p>

                  <h3 className="mt-1 text-[22px] font-[520] text-[#0B2C66]">
                    Author Rights
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {authorRights.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 rounded-[14px] bg-white p-3"
                  >
                    <CheckCircleIcon tone="blue" />

                    <p className="text-[12px] leading-6 text-slate-600">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.article>

            <motion.article
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[24px] border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-5 shadow-[0_12px_32px_rgba(15,54,110,.08)] sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F57C20] text-white">
                  <BookOpen size={24} />
                </div>

                <div>
                  <p className="text-[11px] font-[500] uppercase tracking-[0.16em] text-[#F57C20]">
                    For Research Users
                  </p>

                  <h3 className="mt-1 text-[22px] font-[520] text-[#0B2C66]">
                    Reader Rights
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {readerRights.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 rounded-[14px] bg-white p-3"
                  >
                    <CheckCircleIcon tone="orange" />

                    <p className="text-[12px] leading-6 text-slate-600">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* THIRD-PARTY MATERIAL                                               */}
      {/* ================================================================== */}

      <section className="bg-[#F7F9FD] py-8">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA] shadow-sm sm:text-[12px]">
              <FileCheck2 size={14} />
              Permissions
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Third-Party Material and Reuse
            </h2>

            <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {permissions.map(({ icon: Icon, title, text }, index) => (
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
                  {text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INFRINGEMENT                                                       */}
      {/* ================================================================== */}

      <section className="py-8">
        <div className="mx-auto grid max-w-[1260px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[28px] bg-[#0B2C66] p-6 text-white shadow-[0_25px_60px_rgba(11,44,102,.22)] sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-blue-300/20" />
            <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-blue-500/10" />

            <div className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/10">
                <FileWarning size={28} className="text-[#ff7600]" />
              </div>

              <h2 className="mt-5 text-[22px] font-[550] sm:text-[24px]">
                Copyright Infringement
              </h2>

              <span className="mt-4 block h-1 w-14 rounded-full bg-[#ff7600]" />

              <p className="mt-5 text-[13px] leading-7 text-blue-100/85 sm:text-[14px]">
                Unauthorized copying, republication, translation, distribution
                or commercial reuse may constitute copyright infringement.
                Yashika Publications investigates reported concerns fairly and
                confidentially.
              </p>

              <div className="mt-6 rounded-[18px] border border-white/10 bg-white/[0.07] p-4">
                <p className="text-[12px] leading-6 text-white/80">
                  Published content containing plagiarism, unauthorized
                  third-party material or duplicate publication may be corrected,
                  withdrawn or retracted.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-red-600 sm:text-[12px]">
              <Scale size={14} />
              Editorial Response
            </span>

            <h2 className="mt-4 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              How Copyright Concerns Are Handled
            </h2>

            <span className="mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <div className="mt-7 space-y-3">
              {infringementActions.map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 rounded-[17px] border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,54,110,.07)]"
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-[700] text-white ${
                      index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[12px] leading-6 text-slate-600">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* OPEN ACCESS                                                        */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#082D68] py-8 text-white ">
        <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-blue-300/20" />

        <div className="relative mx-auto grid max-w-[1260px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-blue-100 sm:text-[12px]">
              <Globe2 size={14} />
              Open Access
            </span>

            <h2 className="mt-4 text-[20px] font-[600] sm:text-[24px] lg:text-[28px]">
              Copyright in Open Access Publishing
            </h2>

            <span className="mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-blue-100/80 sm:text-[14px]">
              Open Access articles remain freely available to readers. Authors
              retain copyright while users must follow the applicable license,
              provide attribution and respect any stated reuse restrictions.
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
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F57C20] text-white">
                <Globe2 size={23} />
              </div>

              <div>
                <h3 className="text-[16px] font-[500] text-white">
                  Responsible Sharing
                </h3>

                <p className="mt-2 text-[12px] leading-6 text-blue-100/75">
                  Readers may access, cite and share licensed Open Access
                  articles, provided the original authors and publication source
                  are clearly acknowledged.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA                                                                */}
      {/* ================================================================== */}

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
                    Need Copyright Assistance?
                  </h2>

                  <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                    Contact the editorial office for copyright permissions,
                    licensing requests or infringement concerns.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="mailto:info@yashikapublications.com"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-4 py-3 text-[12px] font-[500] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35] sm:w-auto"
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
      </section>
    </motion.main>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SMALL COMPONENT                               */
/* -------------------------------------------------------------------------- */

function CheckCircleIcon({ tone = "blue" }) {
  return (
    <span
      className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
        tone === "orange"
          ? "bg-orange-50 text-[#F57C20]"
          : "bg-blue-50 text-[#125FEA]"
      }`}
    >
      <Check size={13} strokeWidth={3} />
    </span>
  );
}