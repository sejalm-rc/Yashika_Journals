import React from "react";
import { motion } from "framer-motion";
import {
  ChartNoAxesCombined,
  Check,
  CheckCircle2,
  FileCheck2,
  FileUp,
  Globe2,
  Lightbulb,
  LockKeyhole,
  LockOpen,
  Mail,
  UsersRound,
} from "lucide-react";

import heroImg from "../../assets/yashika-journal-home-hero-banner.webp";
import ccByImg from "../../assets/crossref-doi-registration.webp";

const benefits = [
  {
    icon: Globe2,
    title: "Global Visibility",
    description:
      "Increases the visibility and impact of research by reaching a global audience.",
  },
  {
    icon: UsersRound,
    title: "Wider Accessibility",
    description:
      "Ensures that researchers, educators, students, policymakers, and the public can access research without subscription barriers.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Higher Citations",
    description:
      "Open access articles receive more citations and greater scholarly impact.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge Sharing",
    description:
      "Promotes the free flow of knowledge and accelerates innovation and collaboration.",
  },
  {
    icon: LockKeyhole,
    title: "Equitable Access",
    description:
      "Supports equitable access to research, especially in developing countries and institutions with limited resources.",
  },
  {
    icon: FileCheck2,
    title: "Compliance",
    description:
      "Helps authors comply with funder and institutional open access mandates.",
  },
];

const policyLeft = [
  <>
    All articles are published under the{" "}
    <strong>Creative Commons Attribution License (CC BY 4.0)</strong>, allowing
    others to share and adapt the work with proper credit.
  </>,
  <>
    There are no embargo periods – articles are freely available from the date
    of publication.
  </>,
  <>Authors retain the copyright of their work without any restrictions.</>,
];

const policyRight = [
  <>
    Articles are deposited in trusted repositories and indexed in major
    databases to ensure long-term preservation and discoverability.
  </>,
  <>
    We do not charge any additional fee for making articles open access, except
    the standard Article Processing Charge (APC) (if applicable), which covers
    publication and archiving costs.
  </>,
];

const processSteps = [
  {
    number: "1",
    icon: FileUp,
    title: "Submission",
    description:
      "Author submits the manuscript through our online system.",
  },
  {
    number: "2",
    icon: UsersRound,
    title: "Peer Review",
    description:
      "Manuscript undergoes rigorous peer review and editorial evaluation.",
  },
  {
    number: "3",
    icon: CheckCircle2,
    title: "Acceptance",
    description:
      "Once accepted, the article is prepared for publication.",
  },
  {
    number: "4",
    icon: LockOpen,
    title: "Open Access Publication",
    description:
      "Article is published online immediately with open access.",
  },
  {
    number: "5",
    icon: Globe2,
    title: "Global Dissemination",
    description:
      "The article is freely available to read, download, share and cite worldwide.",
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
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function SectionHeading({ children }) {
  return (
    <div className="mb-4">
      <h2 className="text-[16px] font-[600] uppercase tracking-[0.02em] text-[#075bc7] sm:text-[18px]">
        {children}
      </h2>

      <div className="mt-2 h-[2px] w-[42px] rounded-full bg-[#ff7200]" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="relative min-h-[480px] bg-cover bg-center bg-no-repeat sm:min-h-[490px] lg:min-h-[500px]"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-[1400px] items-center px-5 py-10 sm:min-h-[490px] sm:px-8 lg:min-h-[500px] lg:px-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[520px]"
          >
            <motion.div
              whileHover={{ x: 4 }}
              className="mb-6 flex flex-wrap items-center gap-2 text-[13px] font-semibold"
            >
              <a
                href="/about"
                className="text-[#ff7600] transition hover:text-white"
              >
                About
              </a>

              <span className="text-white/80">›</span>

              <span className="text-white">Open Access Policy</span>
            </motion.div>

            <h1 className="max-w-[560px] text-[34px] font-[600] leading-[1.12] tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]">
              Open Access Policy
            </h1>

            <div className="mt-4 h-[3px] w-[46px] rounded-full bg-[#ff7900]" />

            <p className="mt-4 max-w-[400px] text-[14px] font-medium leading-[1.8] text-white sm:text-[14px] lg:text-[18px]">
              Yashika Publications
            </p>

            <p className="mt-6 max-w-[500px] text-[14px] font-medium leading-[1.9] text-white/90 sm:text-[14px]">
              We are committed to the global dissemination of knowledge by
              providing immediate, free, and unrestricted access to high-quality
              research.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-[1px] left-0 h-[34px] w-full bg-white [clip-path:ellipse(62%_38%_at_50%_100%)] sm:h-[46px]" />
    </section>
  );
}

function CommitmentSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -5,
        boxShadow: "0 16px 34px rgba(8,66,145,0.13)",
      }}
      className="flex flex-col gap-5 rounded-[8px] border border-[#dbe6f2] bg-[#f1f6ff] px-5 py-5 shadow-[0_4px_16px_rgba(8,66,145,0.06)] sm:flex-row sm:items-center"
    >
      <motion.div
        whileHover={{
          rotate: 5,
          scale: 1.06,
        }}
        className="flex h-[72px] w-[72px] shrink-0 items-center justify-center self-center rounded-full bg-white text-[#ff7200] shadow-[0_6px_20px_rgba(8,66,145,0.14)] sm:self-auto"
      >
        <LockOpen className="h-[32px] w-[32px]" strokeWidth={1.8} />
      </motion.div>

      <div>
        <h2 className="text-[18px] font-[600] text-[#063b87]">
          Our Commitment
        </h2>

        <p className="mt-2 text-[13px] font-medium leading-[1.7] text-[#263b5c] sm:text-[14px]">
          Yashika Publications is a strong advocate of Open Access (OA) and
          believes that research should be freely available to everyone for
          reading, downloading, sharing, and using, provided appropriate credit
          is given to the original author(s) and source.
        </p>

        <p className="mt-3 text-[13px] font-[550] text-[#063b87] sm:text-[14px]">
          All our journals follow a Gold Open Access policy.
        </p>
      </div>
    </motion.section>
  );
}

function BenefitsSection() {
  return (
    <section>
      <SectionHeading>Benefits of Open Access</SectionHeading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
      >
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.015,
                boxShadow: "0 16px 30px rgba(8,66,145,0.13)",
              }}
              className="group flex min-h-[245px] flex-col items-center rounded-[7px] border border-[#dce5ef] bg-white px-5 py-6 text-center shadow-[0_3px_13px_rgba(8,66,145,0.05)]"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 4,
                }}
                className="flex h-[58px] w-[58px] items-center justify-center text-[#075bc7]"
              >
                <Icon className="h-[38px] w-[38px]" strokeWidth={1.6} />
              </motion.div>

              <h3 className="mt-4 text-[14px] font-[600] text-[#092b68]">
                {item.title}
              </h3>

              <p className="mt-4 text-[13px] font-medium leading-[1.75] text-[#344861] sm:text-[11px]">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

function PolicyList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={index}
          whileHover={{ x: 4 }}
          className="flex items-start gap-3"
        >
          <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#ff7200]" />

          <p className="text-[12px] font-medium leading-[1.65] text-[#263b5c] sm:text-[13px]">
            {item}
          </p>
        </motion.li>
      ))}
    </ul>
  );
}

function PolicySection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <SectionHeading>Our Open Access Policy</SectionHeading>

      <p className="text-[12x] font-medium leading-[1.7] text-[#263b5c] sm:text-[13px]">
        Yashika Publications provides immediate and permanent open access to all
        articles published in our journals.
      </p>

      <div className="mt-4 grid gap-6 lg:grid-cols-2">
        <PolicyList items={policyLeft} />
        <PolicyList items={policyRight} />
      </div>
    </motion.section>
  );
}

function LicenseSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className="border-t border-[#e0e6ee] pt-3"
    >
      <SectionHeading>License</SectionHeading>

      <div className="grid gap-6 md:grid-cols-[240px_minmax(0,1fr)] md:items-center">
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -4,
          }}
          className="flex min-h-[115px] items-center justify-center rounded-[5px] bg-white"
        >
          <img
            src={ccByImg}
            alt="Creative Commons Attribution 4.0 International License"
            className="max-h-[95px] w-full max-w-[230px] object-contain"
          />
        </motion.div>

        <div>
          <p className="text-[12px] font-medium leading-[1.65] text-[#263b5c] sm:text-[13px]">
            All articles published by Yashika Publications are licensed under
            the{" "}
            <strong>
              Creative Commons Attribution 4.0 International License (CC BY
              4.0).
            </strong>{" "}
            Under this license, you are free to:
          </p>

          <div className="mt-3 space-y-2">
            <motion.div whileHover={{ x: 4 }} className="flex gap-2">
              <CheckCircle2 className="mt-[1px] h-[16px] w-[16px] shrink-0 text-[#0a9c55]" />

              <p className="text-[12px] font-medium text-[#263b5c] sm:text-[13px]">
                <strong>Share</strong> — copy and redistribute the material in
                any medium or format.
              </p>
            </motion.div>

            <motion.div whileHover={{ x: 4 }} className="flex gap-2">
              <CheckCircle2 className="mt-[1px] h-[16px] w-[16px] shrink-0 text-[#0a9c55]" />

              <p className="text-[12px] font-medium text-[#263b5c] sm:text-[13px]">
                <strong>Adapt</strong> — remix, transform, and build upon the
                material for any purpose, even commercially.
              </p>
            </motion.div>
          </div>

          <p className="mt-3 text-[13px] font-medium leading-[1.6] text-[#263b5c]">
            as long as you give appropriate credit to the original author(s)
            and the source, provide a link to the license, and indicate if
            changes were made.
          </p>

          <p className="mt-2 break-all text-[13px] font-[550] text-[#063b87]">
            License link:{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
              className="text-[#075bc7] hover:underline"
            >
              https://creativecommons.org/licenses/by/4.0/
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function ProcessSection() {
  return (
    <section>
      <SectionHeading>How Open Access Works</SectionHeading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.article
              key={step.title}
              variants={fadeUp}
              whileHover={{
                y: -7,
                boxShadow: "0 14px 28px rgba(8,66,145,0.12)",
              }}
              className="group relative flex min-h-[190px] flex-col items-center border-r border-[#dfe6ef] px-4 py-2 text-center last:border-r-0"
            >
              <div className="relative flex w-full items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#07347d] text-[13px] font-[550] text-white"
                >
                  {step.number}
                </motion.div>

                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-1/2 hidden h-px w-full border-t border-dashed border-[#8fb3de] lg:block" />
                )}
              </div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                }}
                className="mt-4 text-[#075bc7]"
              >
                <Icon className="h-[36px] w-[36px]" strokeWidth={1.6} />
              </motion.div>

              <h3 className="mt-3 text-[14px] font-[600] text-[#092b68]">
                {step.title}
              </h3>

              <p className="mt-2 text-[13px] font-medium leading-[1.55] text-[#344861]">
                {step.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

function ContactStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      whileHover={{
        y: -4,
        boxShadow: "0 14px 28px rgba(8,66,145,0.11)",
      }}
      className="flex flex-col items-center justify-center gap-4 rounded-[7px] border border-[#dbe6f2] bg-[#edf4ff] px-5 py-4 text-center shadow-[0_3px_13px_rgba(8,66,145,0.05)] sm:flex-row"
    >
      <Mail className="h-[23px] w-[23px] shrink-0 text-[#075bc7]" />

      <p className="text-[12px] font-medium leading-[1.7] text-[#263b5c] sm:text-[13px]">
        For any queries related to our Open Access policy, please contact us at:{" "}
        <a
          href="mailto:editor.aierrr@yashikapublications.com"
          className="font-[550] text-[#075bc7] hover:underline"
        >
          editor.aierrr@yashikapublications.com
        </a>
      </p>
    </motion.section>
  );
}

export default function OpenAccessPolicy() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#102651]">
      <HeroSection />

      <section className="px-4 pb-10 pt-6 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <CommitmentSection />

          <div className="mt-7">
            <BenefitsSection />
          </div>

          <div className="mt-7">
            <PolicySection />
          </div>

          <div className="mt-6">
            <LicenseSection />
          </div>

          <div className="mt-7">
            <ProcessSection />
          </div>

          <div className="mt-6">
            <ContactStrip />
          </div>
        </div>
      </section>
    </main>
  );
}