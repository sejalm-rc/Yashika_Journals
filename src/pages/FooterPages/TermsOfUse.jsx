import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Ban,
  BookOpen,
  Check,
  ChevronRight,
  Copyright,
  FileCheck2,
  FileText,
  Gavel,
  Globe2,
  Handshake,
  KeyRound,
  Link2,
  LockKeyhole,
  Mail,
  Scale,
  ScrollText,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import heroBg from "../../assets/yashika-journal-home-hero-banner.webp";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const clauseNavigation = [
  {
    number: "01",
    title: "Acceptance",
    href: "#acceptance",
  },
  {
    number: "02",
    title: "Website Use",
    href: "#website-use",
  },
  {
    number: "03",
    title: "User Conduct",
    href: "#user-conduct",
  },
  {
    number: "04",
    title: "Submissions",
    href: "#submissions",
  },
  {
    number: "05",
    title: "Intellectual Property",
    href: "#intellectual-property",
  },
  {
    number: "06",
    title: "Third-Party Services",
    href: "#third-party-services",
  },
  {
    number: "07",
    title: "Disclaimers",
    href: "#disclaimers",
  },
  {
    number: "08",
    title: "Termination",
    href: "#termination",
  },
  {
    number: "09",
    title: "Changes",
    href: "#changes",
  },
  {
    number: "10",
    title: "Contact",
    href: "#contact",
  },
];

const permittedUses = [
  "Browse journal information, policies and editorial resources.",
  "Read and download content where permission is expressly provided.",
  "Submit manuscripts through authorized submission channels.",
  "Contact the editorial office for publishing-related assistance.",
  "Use published content for lawful research and education.",
  "Share official links with correct attribution.",
];

const prohibitedUses = [
  "Upload malicious code, harmful files or deceptive content.",
  "Attempt unauthorized access to restricted website areas.",
  "Copy or republish protected material without permission.",
  "Misrepresent identity, authorship, affiliation or credentials.",
  "Submit plagiarized, fabricated or unlawful material.",
  "Use automated tools to scrape website data without approval.",
  "Interfere with website performance, security or availability.",
  "Use the website for fraud, spam or unlawful commercial activity.",
];

const submissionConditions = [
  {
    icon: FileCheck2,
    title: "Original Work",
    description:
      "Submitted manuscripts must be original and must not be under consideration by another publication.",
  },
  {
    icon: Users,
    title: "Author Approval",
    description:
      "All authors must approve the submitted manuscript, authorship order and corresponding author.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Compliance",
    description:
      "Authors must comply with applicable research ethics, consent and institutional approval requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Editorial Authority",
    description:
      "Submission does not guarantee review, acceptance, publication, DOI assignment or indexing.",
  },
];

const responsibilityCards = [
  {
    icon: UserCheck,
    title: "Accurate Information",
    text: "Users must provide accurate personal, professional and manuscript information.",
  },
  {
    icon: KeyRound,
    title: "Account Security",
    text: "Users are responsible for safeguarding any credentials or access details provided to them.",
  },
  {
    icon: FileText,
    title: "Submitted Content",
    text: "Users remain responsible for all documents, statements and declarations they submit.",
  },
  {
    icon: Handshake,
    title: "Lawful Cooperation",
    text: "Users must cooperate with reasonable editorial and verification requests.",
  },
];

const disclaimerCards = [
  {
    icon: BookOpen,
    title: "Information Only",
    text: "Website content is provided for general scholarly and informational purposes.",
  },
  {
    icon: Globe2,
    title: "External Websites",
    text: "Third-party websites operate under their own terms, policies and security practices.",
  },
  {
    icon: AlertTriangle,
    title: "Service Availability",
    text: "Website features may be modified, suspended or unavailable without prior notice.",
  },
  {
    icon: Gavel,
    title: "No Publication Guarantee",
    text: "Submission does not create a contractual right to review, acceptance or publication.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ANIMATION                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
      duration: 0.6,
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
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

export default function TermsOfUse() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-hidden bg-[#F4F7FB] text-[#10213D]"
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

              <span className="text-white">Terms of Use</span>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[11px] font-[600] uppercase tracking-[0.18em] text-[#ff7600] sm:text-[13px] sm:tracking-[0.22em]"
            >
              Website Access and User Responsibilities
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[440px] text-[30px] font-[600] leading-tight tracking-[-0.7px] text-white sm:mx-0 sm:text-[36px] md:text-[38px] lg:text-[40px]"
            >
              Terms of Use
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#ff7600] sm:mx-0"
            />

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-white/85 sm:mx-0 sm:text-[16px]"
            >
              These terms govern access to the Yashika Publications website,
              journal services, manuscript submission facilities and published
              scholarly content.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* AGREEMENT STRIP                                                    */}
      {/* ================================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#125FEA]">
              <BadgeCheck size={20} />
            </div>

            <div>
              <h2 className="text-[14px] font-[600] text-[#0B2C66]">
                Effective Agreement
              </h2>

              <p className="mt-1 text-[12px] leading-5 text-slate-600">
                Accessing or using this website confirms that you accept these
                Terms of Use.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B2C66] px-5 py-3 text-[12px] font-[600] text-white transition hover:-translate-y-1 hover:bg-[#125FEA] sm:w-auto"
          >
            Ask a Legal Question
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MAIN LEGAL LAYOUT                                                  */}
      {/* ================================================================== */}

      <section className="py-8">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:px-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:px-10 xl:grid-cols-[280px_minmax(0,1fr)]">
          {/* SIDEBAR */}

          <aside className="hidden self-start lg:sticky lg:top-6 lg:block">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,54,110,.07)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B2C66] text-white">
                  <ScrollText size={20} />
                </div>

                <div>
                  <p className="text-[11px] font-[500] uppercase tracking-[0.15em] text-[#125FEA]">
                    Legal Index
                  </p>

                  <h2 className="text-[15px] font-[550] text-[#0B2C66]">
                    Terms Sections
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-1">
                {clauseNavigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => scrollToSection(event, item.href)}
                    className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-blue-50"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-slate-100 text-[11px] font-[550] text-[#125FEA] transition group-hover:bg-[#125FEA] group-hover:text-white">
                      {item.number}
                    </span>

                    <span className="text-[12px] font-[500] text-slate-600 transition group-hover:text-[#0B2C66]">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="mt-5 rounded-[20px] bg-gradient-to-br from-[#F57C20] to-[#D95A00] p-5 text-white shadow-[0_16px_35px_rgba(245,124,32,.24)]"
            >
              <Gavel size={28} />

              <h3 className="mt-4 text-[16px] font-[550]">Important Notice</h3>

              <p className="mt-3 text-[11px] leading-6 text-orange-50/90">
                These terms should be read together with the Privacy Policy,
                Copyright Policy and Publication Ethics Policy.
              </p>
            </motion.div>
          </aside>

          {/* CONTENT */}

          <div className="min-w-0 space-y-7">
            {/* ACCEPTANCE */}

            <LegalSection
              id="acceptance"
              number="01"
              title="Acceptance of Terms"
              icon={Handshake}
            >
              <p>
                By accessing, browsing or using the Yashika Publications
                website, you confirm that you have read, understood and agreed
                to these Terms of Use.
              </p>

              <p>
                These terms apply to website visitors, authors, reviewers,
                editors, institutions and all users of our online publishing
                services.
              </p>

              <NoticeBox tone="blue">
                If you do not agree with these terms, you should stop using the
                website and related services.
              </NoticeBox>
            </LegalSection>

            {/* WEBSITE USE */}

            <LegalSection
              id="website-use"
              number="02"
              title="Permitted Website Use"
              icon={Globe2}
            >
              <p>
                The website may be used only for lawful academic, scholarly,
                editorial and informational purposes.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {permittedUses.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 rounded-[14px] border border-blue-100 bg-blue-50/60 p-4"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#125FEA] text-white">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <p className="text-[12px] leading-6 text-slate-600">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </LegalSection>

            {/* USER CONDUCT */}

            <LegalSection
              id="user-conduct"
              number="03"
              title="Prohibited Conduct"
              icon={Ban}
            >
              <p>
                Users must not misuse the website, compromise security or use
                publishing services for unlawful or deceptive purposes.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {prohibitedUses.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 rounded-[14px] border border-orange-100 bg-orange-50/70 p-4"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#F57C20] text-white">
                      <AlertTriangle size={13} />
                    </span>

                    <p className="text-[12px] leading-6 text-slate-600">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </LegalSection>

            {/* SUBMISSIONS */}

            <LegalSection
              id="submissions"
              number="04"
              title="Manuscript Submission Conditions"
              icon={FileText}
            >
              <p>
                Authors remain responsible for the originality, accuracy,
                legality and ethical compliance of every submitted manuscript.
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {submissionConditions.map(
                  ({ icon: Icon, title, description }, index) => (
                    <motion.article
                      key={title}
                      variants={fadeUp}
                      whileHover={{
                        y: -6,
                        boxShadow: "0 14px 30px rgba(15,54,110,.11)",
                      }}
                      className="rounded-[18px] border border-slate-100 bg-[#F8FAFD] p-5"
                    >
                      <div
                        className={`grid h-11 w-11 place-items-center rounded-xl text-white ${
                          index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-4 text-[14px] font-[550] text-[#0B2C66]">
                        {title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-slate-600">
                        {description}
                      </p>
                    </motion.article>
                  ),
                )}
              </motion.div>
            </LegalSection>

            {/* USER RESPONSIBILITIES */}

            <LegalSection
              id="user-responsibilities"
              number="05"
              title="User Responsibilities"
              icon={UserCheck}
            >
              <p>
                Users are responsible for all information, documents and
                activities associated with their use of the website.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {responsibilityCards.map(
                  ({ icon: Icon, title, text }, index) => (
                    <motion.article
                      key={title}
                      whileHover={{ y: -7 }}
                      className="rounded-[18px] border border-slate-100 bg-white p-4 text-center shadow-[0_8px_22px_rgba(15,54,110,.06)]"
                    >
                      <div
                        className={`mx-auto grid h-11 w-11 place-items-center rounded-full text-white ${
                          index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                        }`}
                      >
                        <Icon size={19} />
                      </div>

                      <h3 className="mt-4 text-[13px] font-[550] text-[#0B2C66]">
                        {title}
                      </h3>

                      <p className="mt-2 text-[11px] leading-5 text-slate-600">
                        {text}
                      </p>
                    </motion.article>
                  ),
                )}
              </div>
            </LegalSection>

            {/* INTELLECTUAL PROPERTY */}

            <LegalSection
              id="intellectual-property"
              number="06"
              title="Intellectual Property Rights"
              icon={Copyright}
            >
              <p>
                The website, journal names, branding, layouts, graphics and
                publisher-created materials are protected by applicable
                intellectual property laws.
              </p>

              <div className="rounded-[18px] bg-[#0B2C66] p-5 text-white sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
                    <Copyright size={21} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[15px] font-[600]">
                      Content Ownership
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-blue-100/80">
                      Authors retain rights according to the applicable
                      publication agreement. Readers may reuse content only in
                      accordance with the stated article licence.
                    </p>
                  </div>
                </div>
              </div>

              <NoticeBox tone="orange">
                Yashika Publications names, logos and journal branding may not
                be reproduced or used without written permission.
              </NoticeBox>
            </LegalSection>

            {/* THIRD-PARTY */}

            <LegalSection
              id="third-party-services"
              number="07"
              title="Third-Party Links and Services"
              icon={Link2}
            >
              <p>
                The website may contain links to indexing platforms,
                repositories, payment services, databases and other external
                websites.
              </p>

              <p>
                Yashika Publications does not control and is not responsible for
                the content, security, availability or privacy practices of
                third-party services.
              </p>

              <div className="flex items-start gap-4 rounded-[18px] border border-slate-200 bg-slate-50 p-5">
                <Globe2 size={22} className="mt-1 shrink-0 text-[#125FEA]" />

                <p className="text-[12px] leading-6 text-slate-600">
                  Users should review the terms and policies of third-party
                  services before providing personal or financial information.
                </p>
              </div>
            </LegalSection>

            {/* DISCLAIMERS */}

            <LegalSection
              id="disclaimers"
              number="08"
              title="Disclaimers and Limitations"
              icon={AlertTriangle}
            >
              <p>
                The website and its services are provided on an available basis.
                We do not guarantee uninterrupted access, error-free operation
                or permanent availability of all features.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {disclaimerCards.map(({ icon: Icon, title, text }, index) => (
                  <motion.article
                    key={title}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 14px 30px rgba(15,54,110,.1)",
                    }}
                    className="rounded-[18px] border border-slate-100 bg-white p-5 shadow-[0_8px_22px_rgba(15,54,110,.06)]"
                  >
                    <div
                      className={`grid h-10 w-10 place-items-center rounded-xl text-white ${
                        index % 2 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                      }`}
                    >
                      <Icon size={19} />
                    </div>

                    <h3 className="mt-4 text-[14px] font-[550] text-[#0B2C66]">
                      {title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-slate-600">
                      {text}
                    </p>
                  </motion.article>
                ))}
              </div>

              <NoticeBox tone="orange">
                To the extent permitted by law, Yashika Publications is not
                liable for indirect or consequential losses resulting from use
                of the website or its services.
              </NoticeBox>
            </LegalSection>

            {/* TERMINATION */}

            <LegalSection
              id="termination"
              number="09"
              title="Suspension and Termination"
              icon={LockKeyhole}
            >
              <p>
                Access may be restricted, suspended or terminated where a user
                violates these terms, compromises security, submits unlawful
                content or misuses publishing services.
              </p>

              <div className="rounded-[18px] border border-red-100 bg-red-50 p-5">
                <div className="flex items-start gap-4">
                  <Ban size={22} className="mt-1 shrink-0 text-red-600" />

                  <div>
                    <h3 className="text-[14px] font-[550] text-[#0B2C66]">
                      Enforcement
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-slate-600">
                      Yashika Publications may remove content, block access,
                      reject submissions or take further action where necessary.
                    </p>
                  </div>
                </div>
              </div>
            </LegalSection>

            {/* CHANGES */}

            <LegalSection
              id="changes"
              number="10"
              title="Changes to These Terms"
              icon={Scale}
            >
              <p>
                These Terms of Use may be revised to reflect changes in the
                website, publication services, technology, policies or legal
                requirements.
              </p>

              <p>
                Updated terms become effective when published on this page.
                Continued use of the website indicates acceptance of the revised
                terms.
              </p>
            </LegalSection>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FINAL CONTACT                                                      */}
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

            <div className="relative mx-auto flex w-full max-w-[1260px] flex-col items-center justify-between gap-7 px-4 text-center sm:px-6 lg:flex-row lg:px-10 lg:text-left">
              <div className="flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:gap-5 sm:text-left">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10">
                  <Gavel size={27} />
                </div>

                <div>
                  <h2 className="text-[23px] font-550] sm:text-[27px]">
                    Need Clarification?
                  </h2>

                  <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/80 sm:text-[14px]">
                    Contact the editorial office for questions concerning
                    website use, manuscript submissions or intellectual
                    property.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="mailto:info@yashikapublications.com"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-5 py-3 text-[12px] font-[600] text-white transition hover:-translate-y-1 hover:bg-[#FF8D35] sm:w-auto"
                >
                  Email Editorial Office
                  <Mail size={17} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/50 px-5 py-3 text-[12px] font-[600] text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66] sm:w-auto"
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
/*                              LEGAL SECTION                                 */
/* -------------------------------------------------------------------------- */

function LegalSection({ id, number, title, icon: Icon, children }) {
  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      whileHover={{
        y: -3,
        boxShadow: "0 18px 42px rgba(15,54,110,.09)",
      }}
      className="scroll-mt-24 rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_10px_28px_rgba(15,54,110,.05)] sm:p-7"
    >
      <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0B2C66] text-white">
          <Icon size={22} />
        </div>

        <div className="min-w-0">
          <p className="text-[12px] font-[500] uppercase tracking-[0.18em] text-[#F57C20]">
            Clause {number}
          </p>

          <h2 className="mt-1 text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[23px]">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-[13px] leading-7 text-slate-600">
        {children}
      </div>
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                NOTICE BOX                                  */
/* -------------------------------------------------------------------------- */

function NoticeBox({ children, tone = "blue" }) {
  return (
    <div
      className={`rounded-[16px] border p-4 ${
        tone === "orange"
          ? "border-orange-100 bg-orange-50"
          : "border-blue-100 bg-blue-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <ShieldCheck
          size={19}
          className={`mt-1 shrink-0 ${
            tone === "orange" ? "text-[#F57C20]" : "text-[#125FEA]"
          }`}
        />

        <p className="text-[12px] leading-6 text-slate-600">{children}</p>
      </div>
    </div>
  );
}
