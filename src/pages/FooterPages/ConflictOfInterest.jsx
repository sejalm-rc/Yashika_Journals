import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Eye,
  FileCheck2,
  FileText,
  Gift,
  Gavel,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Mail,
  Scale,
  ScrollText,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import heroBg from "../../assets/yashika-journal-home-hero-banner.webp";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const conflictTypes = [
  {
    icon: CircleDollarSign,
    title: "Financial Interests",
    description:
      "Employment, consulting fees, honoraria, grants, investments, stock ownership or other financial relationships.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Relationships",
    description:
      "Professional competition, institutional responsibilities, advisory positions or business associations.",
  },
  {
    icon: Users,
    title: "Personal Relationships",
    description:
      "Family, friendship, personal disagreement or another relationship that could influence professional judgement.",
  },
  {
    icon: Lightbulb,
    title: "Academic Interests",
    description:
      "Academic rivalry, intellectual commitment, competing research or strong attachment to a particular theory.",
  },
  {
    icon: Building2,
    title: "Institutional Interests",
    description:
      "Institutional affiliations, organizational policies, funding relationships or competing institutional priorities.",
  },
  {
    icon: Gift,
    title: "Non-Financial Benefits",
    description:
      "Gifts, recognition, career advancement, access to resources or another non-monetary advantage.",
  },
];

const authorResponsibilities = [
  "Disclose all relevant financial and non-financial interests.",
  "Identify funding sources and the role of each funder.",
  "Declare employment, consultancy and advisory relationships.",
  "Report patents, stock ownership and commercial interests.",
  "Confirm that all co-authors have reviewed the disclosure.",
  "Update the declaration if circumstances change.",
];

const reviewerResponsibilities = [
  "Decline reviews where impartial assessment may be affected.",
  "Disclose recent collaboration with any manuscript author.",
  "Declare institutional, personal or professional relationships.",
  "Avoid using confidential information for personal benefit.",
  "Inform the editor when a potential conflict becomes apparent.",
  "Provide an objective and evidence-based review.",
];

const editorResponsibilities = [
  "Avoid handling manuscripts where neutrality may be questioned.",
  "Reassign manuscripts when a relevant conflict exists.",
  "Protect confidential author and reviewer information.",
  "Assess disclosures consistently and independently.",
  "Record editorial decisions and relevant management actions.",
  "Publish appropriate declarations with accepted articles.",
];

const disclosureExamples = [
  {
    icon: Banknote,
    label: "Financial",
    examples:
      "Research funding, consultancy fees, honoraria, paid expert testimony, investments or stock ownership.",
  },
  {
    icon: Handshake,
    label: "Professional",
    examples:
      "Recent collaboration, shared projects, supervisory relationships, employment or institutional competition.",
  },
  {
    icon: HeartHandshake,
    label: "Personal",
    examples:
      "Close friendship, family relationship, personal dispute or another relationship affecting impartiality.",
  },
  {
    icon: Lightbulb,
    label: "Intellectual",
    examples:
      "Strong commitment to a theory, competing research interests or direct academic rivalry.",
  },
];

const managementSteps = [
  {
    number: "01",
    title: "Disclosure Submitted",
    description:
      "The author, reviewer or editor provides complete information about the potential conflict.",
  },
  {
    number: "02",
    title: "Editorial Assessment",
    description:
      "The editorial office evaluates the nature, relevance and possible influence of the disclosed interest.",
  },
  {
    number: "03",
    title: "Management Decision",
    description:
      "The journal may record the disclosure, reassign responsibilities or request additional clarification.",
  },
  {
    number: "04",
    title: "Publication Statement",
    description:
      "Relevant declarations are published with the article to ensure transparency for readers.",
  },
];

const noConflictStatements = [
  "The authors declare that they have no competing interests.",
  "The authors report no financial or personal relationships that could influence this work.",
  "The reviewer confirms that no conflict prevents an impartial assessment.",
];

const navigationItems = [
  {
    number: "01",
    title: "Policy Purpose",
    href: "#policy-purpose",
  },
  {
    number: "02",
    title: "Types of Conflicts",
    href: "#conflict-types",
  },
  {
    number: "03",
    title: "Author Duties",
    href: "#author-duties",
  },
  {
    number: "04",
    title: "Reviewer Duties",
    href: "#reviewer-duties",
  },
  {
    number: "05",
    title: "Editor Duties",
    href: "#editor-duties",
  },
  {
    number: "06",
    title: "Disclosure Examples",
    href: "#disclosure-examples",
  },
  {
    number: "07",
    title: "Management Process",
    href: "#management-process",
  },
  {
    number: "08",
    title: "Failure to Disclose",
    href: "#failure-to-disclose",
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

export default function ConflictOfInterest() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-hidden bg-[#F6F8FC] text-[#10213D]"
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

              <span className="text-white">Conflict of Interest</span>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[11px] font-[600] uppercase tracking-[0.18em] text-[#ff7600] sm:text-[13px] sm:tracking-[0.22em]"
            >
              Transparency and Editorial Independence
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[440px] text-[30px] font-[600] leading-tight tracking-[-0.7px] text-white sm:mx-0 sm:text-[36px] md:text-[38px] lg:text-[40px]"
            >
              Conflict of Interest Policy
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#ff7600] sm:mx-0"
            />

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-white/85 sm:mx-0 sm:text-[16px]"
            >
              Ensuring that authors, reviewers and editors disclose interests
              that could influence—or reasonably appear to influence—the
              publication process.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* POLICY STATEMENT                                                   */}
      {/* ================================================================== */}

      <section
        id="policy-purpose"
        className="scroll-mt-24 border-b border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-[1320px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-10">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#125FEA]">
            <ShieldCheck size={23} />
          </div>

          <div className="min-w-0">
            <h2 className="text-[16px] font-[600] text-[#0B2C66]">
              Policy Statement
            </h2>

            <p className="mt-1 text-[12px] leading-6 text-slate-600">
              All participants in the publication process must disclose any
              interest that could affect impartiality, objectivity or public
              confidence.
            </p>
          </div>

          <a
            href="#disclosure-examples"
            onClick={(event) => scrollToSection(event, "#disclosure-examples")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B2C66] px-5 py-3 text-[12px] font-[600] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#125FEA] sm:w-auto"
          >
            View Disclosure Examples
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ================================================================== */}
      {/* NAVIGATION                                                         */}
      {/* ================================================================== */}

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,54,110,.06)] sm:grid-cols-2 lg:grid-cols-4"
          >
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                variants={fadeUp}
                whileHover={{
                  backgroundColor: "#F3F7FF",
                }}
                className={`group flex min-h-[82px] items-center gap-3 border-slate-200 p-4 transition ${
                  index !== navigationItems.length - 1 ? "border-b" : ""
                } ${index % 2 === 0 ? "sm:border-r" : ""} ${
                  index < 6 ? "lg:border-b" : "lg:border-b-0"
                } ${index % 4 !== 3 ? "lg:border-r" : "lg:border-r-0"}`}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-[10px] font-[700] text-[#125FEA] transition group-hover:bg-[#125FEA] group-hover:text-white">
                  {item.number}
                </span>

                <span className="min-w-0 text-[12px] font-[600] leading-5 text-[#0B2C66]">
                  {item.title}
                </span>

                <ChevronRight
                  size={15}
                  className="ml-auto shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#125FEA]"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CONFLICT TYPES                                                     */}
      {/* ================================================================== */}

      <section
        id="conflict-types"
        className="scroll-mt-24 py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[600] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <AlertCircle size={14} />
              Potential Conflicts
            </span>

            <h2 className="mt-4 text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[32px]">
              Types of Conflict of Interest
            </h2>

            <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Conflicts may be actual, potential or perceived. Every relevant
              relationship should be disclosed so that the journal can assess it
              transparently.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {conflictTypes.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 18px 40px rgba(15,54,110,.12)",
                }}
                className="group relative overflow-hidden rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,54,110,.06)] sm:p-6"
              >
                <span className="absolute right-4 top-2 text-[48px] font-[800] text-blue-50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative z-10 grid h-12 w-12 place-items-center rounded-2xl text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                    index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                  }`}
                >
                  <Icon size={23} />
                </div>

                <h3 className="relative z-10 mt-5 text-[15px] font-[600] text-[#0B2C66]">
                  {title}
                </h3>

                <p className="relative z-10 mt-3 text-[12px] leading-6 text-slate-600">
                  {description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* RESPONSIBILITIES                                                   */}
      {/* ================================================================== */}

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-3">
            <ResponsibilityPanel
              id="author-duties"
              number="01"
              title="Authors"
              subtitle="Disclosure at submission"
              icon={FileText}
              tone="blue"
              items={authorResponsibilities}
            />

            <ResponsibilityPanel
              id="reviewer-duties"
              number="02"
              title="Reviewers"
              subtitle="Independent assessment"
              icon={ClipboardCheck}
              tone="orange"
              items={reviewerResponsibilities}
            />

            <ResponsibilityPanel
              id="editor-duties"
              number="03"
              title="Editors"
              subtitle="Editorial impartiality"
              icon={Gavel}
              tone="navy"
              items={editorResponsibilities}
            />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DISCLOSURE EXAMPLES                                                */}
      {/* ================================================================== */}

      <section
        id="disclosure-examples"
        className="scroll-mt-24 bg-[#F1F5FB] py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-[600] uppercase tracking-[0.16em] text-[#125FEA] shadow-sm sm:text-[12px]">
              <ScrollText size={14} />
              Disclosure Guidance
            </span>

            <h2 className="mt-4 text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[31px]">
              What Should Be Disclosed?
            </h2>

            <span className="mt-3 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Disclosure should be specific enough for editors and readers to
              understand the nature of the relationship and its possible
              relevance to the work.
            </p>

            <div className="mt-6 rounded-[20px] border border-orange-100 bg-orange-50 p-5">
              <div className="flex items-start gap-4">
                <ShieldAlert
                  size={23}
                  className="mt-1 shrink-0 text-[#F57C20]"
                />

                <div className="min-w-0">
                  <h3 className="text-[14px] font-[600] text-[#0B2C66]">
                    When in Doubt, Disclose
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    The editorial office will determine whether a declared
                    interest requires additional management.
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
            {disclosureExamples.map(
              ({ icon: Icon, label, examples }, index) => (
                <motion.article
                  key={label}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 14px 30px rgba(15,54,110,.1)",
                  }}
                  className="rounded-[20px] border border-slate-100 bg-white p-5"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white ${
                        index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="text-[15px] font-[600] text-[#0B2C66]">
                      {label} Interests
                    </h3>
                  </div>

                  <p className="mt-4 text-[12px] leading-6 text-slate-600">
                    {examples}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MANAGEMENT PROCESS                                                 */}
      {/* ================================================================== */}

      <section
        id="management-process"
        className="scroll-mt-24 py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-[600] uppercase tracking-[0.16em] text-[#125FEA] sm:text-[12px]">
              <ClipboardCheck size={14} />
              Editorial Management
            </span>

            <h2 className="mt-4 text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[32px]">
              How Disclosures Are Managed
            </h2>

            <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-[#F57C20]" />
          </div>

          <div className="relative mt-12">
            <div className="absolute left-[10%] right-[10%] top-8 hidden border-t-2 border-dashed border-blue-200 lg:block" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {managementSteps.map(({ number, title, description }, index) => (
                <motion.article
                  key={number}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 16px 34px rgba(15,54,110,.12)",
                  }}
                  className="relative rounded-[22px] border border-slate-100 bg-white px-5 pb-6 pt-12 text-center shadow-[0_8px_24px_rgba(15,54,110,.06)]"
                >
                  <div
                    className={`absolute left-1/2 top-0 z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[12px] font-[700] text-white ring-8 ring-[#F6F8FC] ${
                      index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                    }`}
                  >
                    {number}
                  </div>

                  <h3 className="text-[14px] font-[600] text-[#0B2C66]">
                    {title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-slate-600">
                    {description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAILURE TO DISCLOSE                                                */}
      {/* ================================================================== */}

      <section
        id="failure-to-disclose"
        className="scroll-mt-24 bg-[#071F58] py-10 text-white sm:py-12 lg:py-14"
      >
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10">
              <ShieldAlert size={27} className="text-[#FFA65C]" />
            </div>

            <h2 className="mt-5 text-[25px] font-[600] sm:text-[29px]">
              Failure to Disclose
            </h2>

            <span className="mt-3 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 text-[13px] leading-7 text-blue-100/80 sm:text-[14px]">
              Failure to disclose a relevant interest may undermine the
              integrity of editorial decisions and reader confidence.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {[
              "Request a corrected disclosure statement.",
              "Reassign the reviewer or handling editor.",
              "Pause editorial evaluation while concerns are reviewed.",
              "Publish a correction or expression of concern.",
              "Withdraw or retract the article where necessary.",
              "Notify relevant institutions in serious cases.",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{
                  x: 5,
                  backgroundColor: "rgba(255,255,255,.12)",
                }}
                className="flex items-start gap-3 rounded-[16px] border border-white/10 bg-white/[0.07] p-4"
              >
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-[700] text-white ${
                    index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                  }`}
                >
                  {index + 1}
                </span>

                <p className="text-[12px] leading-6 text-blue-100/80">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DECLARATION WORDING                                                */}
      {/* ================================================================== */}

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_14px_36px_rgba(15,54,110,.08)] lg:grid-cols-[0.72fr_1.28fr]"
          >
            <div className="bg-gradient-to-br from-[#125FEA] to-[#071F58] p-6 text-white sm:p-8">
              <FileCheck2 size={30} />

              <h2 className="mt-5 text-[23px] font-[600]">
                Suggested Declaration
              </h2>

              <p className="mt-3 text-[12px] leading-6 text-blue-100/80">
                Authors should include an appropriate conflict-of-interest
                statement in the manuscript.
              </p>
            </div>

            <div className="p-5 sm:p-7">
              <div className="space-y-3">
                {noConflictStatements.map((statement) => (
                  <motion.div
                    key={statement}
                    whileHover={{
                      x: 4,
                      backgroundColor: "#F5F8FE",
                    }}
                    className="flex items-start gap-3 rounded-[14px] border border-slate-100 p-4 transition-colors"
                  >
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="mt-1 shrink-0 text-[#125FEA]"
                    />

                    <p className="text-[12px] leading-6 text-slate-600">
                      “{statement}”
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CONTACT CTA                                                        */}
      {/* ================================================================== */}

      <section className="bg-[#F6F8FC] py-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-[#0D63E8] via-[#084AB9] to-[#071F58] py-9 text-white shadow-[0_22px_50px_rgba(7,45,115,.2)]"
        >
          <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(135deg,transparent_42%,#fff_43%,transparent_44%)] [background-size:80px_80px]" />

          <div className="relative mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-7 px-4 text-center sm:px-6 lg:flex-row lg:px-10 lg:text-left">
            <div className="flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:gap-5 sm:text-left">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 sm:h-16 sm:w-16">
                <Scale size={29} />
              </div>

              <div className="min-w-0">
                <h2 className="text-[22px] font-[600] sm:text-[26px]">
                  Need Disclosure Guidance?
                </h2>

                <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                  Contact the editorial office before submission or review if
                  you are uncertain whether an interest should be disclosed.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="mailto:info@yashikapublications.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-5 py-3 text-[12px] font-[600] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35] sm:w-auto"
              >
                Email Editorial Office
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
      </section>
    </motion.main>
  );
}

/* -------------------------------------------------------------------------- */
/*                         RESPONSIBILITY PANEL                               */
/* -------------------------------------------------------------------------- */

function ResponsibilityPanel({
  id,
  number,
  title,
  subtitle,
  icon: Icon,
  items,
  tone,
}) {
  const styles = {
    blue: {
      header: "from-[#125FEA] to-[#082D68]",
      icon: "bg-white/15",
      marker: "bg-blue-50 text-[#125FEA]",
    },
    orange: {
      header: "from-[#F57C20] to-[#D95A00]",
      icon: "bg-white/15",
      marker: "bg-orange-50 text-[#F57C20]",
    },
    navy: {
      header: "from-[#0B2C66] to-[#061B46]",
      icon: "bg-white/15",
      marker: "bg-slate-100 text-[#0B2C66]",
    },
  };

  const currentStyle = styles[tone];

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{
        y: -7,
        boxShadow: "0 18px 40px rgba(15,54,110,.12)",
      }}
      className="scroll-mt-24 overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_10px_28px_rgba(15,54,110,.07)]"
    >
      <div className={`bg-gradient-to-r ${currentStyle.header} p-6 text-white`}>
        <div className="flex items-start justify-between gap-4">
          <div
            className={`grid h-12 w-12 place-items-center rounded-2xl ${currentStyle.icon}`}
          >
            <Icon size={23} />
          </div>

          <span className="text-[32px] font-[800] text-white/10">{number}</span>
        </div>

        <h2 className="mt-5 text-[22px] font-[600]">{title}</h2>

        <p className="mt-2 text-[12px] text-white/75">{subtitle}</p>
      </div>

      <div className="p-5 sm:p-6">
        <div className="space-y-3">
          {items.map((item) => (
            <motion.div
              key={item}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3"
            >
              <span
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${currentStyle.marker}`}
              >
                <Check size={13} strokeWidth={3} />
              </span>

              <p className="text-[12px] leading-6 text-slate-600">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
