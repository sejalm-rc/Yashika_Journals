import React from "react";
import { motion } from "framer-motion";
import {
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardList,
  Eye,
  Globe2,
  Info,
  Mail,
  Search,
  ShieldCheck,
  SquarePen,
  Star,
} from "lucide-react";

import heroImg from "../assets/yashika-journal-home-hero-banner.webp";
import logo1 from "../assets/scopus-indexed-journal.webp";
import logo2 from "../assets/crossref-doi-registration.webp";
import logo3 from "../assets/doaj-indexed-journal.webp";
import logo4 from "../assets/dimensions-indexed-journal.webp";
import logo5 from "../assets/google-scholar-indexing.webp";
import logo6 from "../assets/yashika-publication-publication-process.webp";

/*
Place logo images inside:

public/indexing-logos/

Example:
public/indexing-logos/scopus.webp
public/indexing-logos/web-of-science.webp
*/

const visibilityFeatures = [
  {
    icon: Eye,
    title: "Global Visibility",
    description:
      "Increased exposure and discoverability of published research.",
    circle: true,
  },
  {
    icon: ChartNoAxesCombined,
    title: "Research Impact",
    description: "Enhanced citations and academic recognition worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Indexed in reputed sources that follow strict selection criteria.",
  },
  {
    icon: Globe2,
    title: "Wide Reach",
    description:
      "Content made available to researchers, institutions and professionals globally.",
  },
  {
    icon: Search,
    title: "Easy Discovery",
    description:
      "Ensures your research is easily found through trusted platforms.",
  },
];

const indexedDatabases = [
  {
    name: "Scopus",
    logo: logo1,
    alt: "Scopus",
  },
  {
    name: "Web of Science\n(Core Collection)",
    logo: logo2,
    alt: "Clarivate Web of Science",
  },
  {
    name: "Directory of\nOpen Access Journals",
    logo: logo3,
    alt: "DOAJ",
  },
  {
    name: "EBSCO Discovery Service",
    logo: logo4,
    alt: "EBSCOhost",
  },
  {
    name: "ProQuest Central",
    logo: logo5,
    alt: "ProQuest",
  },
  {
    name: "Dimensions",
    logo: logo6,
    alt: "Dimensions",
  },
  {
    name: "Crossref\n(doi®)",
    logo: logo2,
    alt: "Crossref",
  },
  {
    name: "Google Scholar",
    logo: logo5,
    alt: "Google Scholar",
  },
  {
    name: "Microsoft Academic",
    logo: logo3,
    alt: "Microsoft Academic",
  },
  {
    name: "Directory of Open Access\nScholarly Resources",
    logo: logo4,
    alt: "ROAD",
  },
];

const abstractingDatabases = [
  {
    name: "Inspec",
    logo: "/indexing-logos/inspec.webp",
    alt: "Inspec",
  },
  {
    name: "Engineering Village\n(Compendex)",
    logo: "/indexing-logos/compendex.webp",
    alt: "Engineering Village Compendex",
  },
  {
    name: "Embase",
    logo: "/indexing-logos/embase.webp",
    alt: "Embase",
  },
  {
    name: "CAS Source Index\n(Chemical Abstracts Service)",
    logo: "/indexing-logos/cas.webp",
    alt: "CAS",
  },
  {
    name: "CINAHL Complete",
    logo: "/indexing-logos/cinahl.webp",
    alt: "CINAHL",
  },
  {
    name: "CAB Abstracts",
    logo: "/indexing-logos/cab-abstracts.webp",
    alt: "CAB Abstracts",
  },
  {
    name: "PubMed Central",
    logo: "/indexing-logos/pubmed.webp",
    alt: "PubMed Central",
  },
  {
    name: "Index Copernicus\nInternational",
    logo: "/indexing-logos/index-copernicus.webp",
    alt: "Index Copernicus",
  },
  {
    name: "BASE (Bielefeld Academic\nSearch Engine)",
    logo: "/indexing-logos/base.webp",
    alt: "BASE",
  },
  {
    name: "WorldCat",
    logo: "/indexing-logos/worldcat.webp",
    alt: "WorldCat",
  },
];

const selectionCriteria = [
  "Peer-reviewed content",
  "Timely publication",
  "Editorial quality and ethics",
  "International diversity of authorship",
  "Citation analysis and impact",
];

const indexingBenefits = [
  "Higher visibility and reach",
  "Increased citations and impact",
  "Greater credibility and reputation",
  "Improved academic and institutional rankings",
  "Long-term preservation and accessibility",
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
      duration: 0.62,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
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
        <div className="relative z-10 mx-auto flex min-h-[490px] max-w-[1400px] items-center px-5 py-10 sm:min-h-[490px] sm:px-8 lg:min-h-[500px] lg:px-14 xl:px-14">
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
                href="/"
                className="text-[#ff7600] transition hover:text-white"
              >
                Home
              </a>

              <span className="text-white/80">›</span>

              <span className="text-white">Indexing & Abstracting</span>
            </motion.div>

            <h1 className="max-w-[600px] text-[34px] font-[600]  tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]">
              Indexing &amp; Abstracting
            </h1>

            <div className="mt-2 h-[3px] w-[46px] rounded-full bg-[#ff7900]" />

            <p className="mt-4 max-w-[400px] text-[14px] font-medium leading-[1.8] text-white sm:text-[14px] lg:text-[18px]">
              Artificial Intelligence Education Research
              <br className="hidden sm:block" /> and Review (AIERRR)
            </p>

            <p className="mt-6 max-w-[500px] text-[14px] font-medium leading-[1.9] text-white/90 sm:text-[14px]">
              Yashika Publications is committed to ensuring the global
              visibility and discoverability of research. Our journals are
              indexed and abstracted in leading international databases and
              directories.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-[1px] left-0 h-[34px] w-full bg-white [clip-path:ellipse(62%_38%_at_50%_100%)] sm:h-[46px]" />
    </section>
  );
}

function VisibilityStrip() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -5,
        boxShadow: "0 15px 32px rgba(8,66,145,0.12)",
      }}
      className="grid overflow-hidden rounded-[8px] border border-[#dbe6f2] bg-[#f4f8ff] shadow-[0_4px_16px_rgba(8,66,145,0.06)] sm:grid-cols-2 lg:grid-cols-5"
    >
      {visibilityFeatures.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 16,
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
              delay: index * 0.07,
            }}
            whileHover={{
              y: -5,
              backgroundColor: "#eaf3ff",
            }}
            className="group flex min-h-[130px] items-start gap-4 border-b border-[#d9e4f0] px-4 py-4 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            {item.circle ? (
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[#074fbc] shadow-[0_5px_16px_rgba(8,66,145,0.12)]"
              >
                <Icon className="h-[25px] w-[25px]" strokeWidth={1.8} />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                className="flex h-[48px] w-[48px] shrink-0 items-center justify-center text-[#074fbc]"
              >
                <Icon className="h-[31px] w-[31px]" strokeWidth={1.7} />
              </motion.div>
            )}

            <div className="min-w-0">
              <h3 className="text-[13px] font-semibold leading-[1.4] text-[#072d74] sm:text-[14px]">
                {item.title}
              </h3>

              <p className="mt-2 text-[11px] font-medium leading-[1.6] text-[#394c67] sm:text-[12px]">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.section>
  );
}

function DatabaseCard({ database }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 16px 32px rgba(8,66,145,0.14)",
      }}
      transition={{
        duration: 0.25,
      }}
      className="group flex min-h-[145px] flex-col items-center justify-between rounded-[7px] border border-[#dce5ef] bg-white px-4 py-5 text-center shadow-[0_3px_13px_rgba(8,66,145,0.05)] sm:min-h-[155px]"
    >
      <motion.div
        whileHover={{
          scale: 1.06,
        }}
        transition={{
          duration: 0.25,
        }}
        className="flex h-[75px] w-full items-center justify-center"
      >
        <img
          src={database.logo}
          alt={database.alt}
          loading="lazy"
          className="max-h-[58px] max-w-[165px] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </motion.div>

      <p className="mt-3 whitespace-pre-line text-[12px] font-semibold leading-[1.5] text-[#0c2860] sm:text-[13px]">
        {database.name}
      </p>
    </motion.article>
  );
}

function DatabaseSection({ title, databases }) {
  return (
    <section>
      <SectionHeading>{title}</SectionHeading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        {indexedDatabases.map((database) => (
          <DatabaseCard key={database.name} database={database} />
        ))}
      </motion.div>
    </section>
  );
}

function ContinuousIndexingNotice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 26px rgba(8,66,145,0.11)",
      }}
      className="flex items-start gap-4 rounded-[7px] border border-[#dbe6f2] bg-[#f1f6ff] px-5 py-4 shadow-[0_3px_12px_rgba(8,66,145,0.04)]"
    >
      <Info
        className="mt-[1px] h-[22px] w-[22px] shrink-0 text-[#075bc7]"
        strokeWidth={1.8}
      />

      <p className="text-[12px] font-medium leading-[1.65] text-[#273b5b] sm:text-[13px]">
        The journal is continuously working to be indexed in additional reputed
        databases to maximize the visibility and impact of published research.
      </p>
    </motion.div>
  );
}

function SelectionCriteriaCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -7,
        boxShadow: "0 16px 32px rgba(8,66,145,0.12)",
      }}
      className="flex gap-5 rounded-[8px] border border-[#dbe6f2] bg-[#f7faff] px-5 py-5 shadow-[0_3px_13px_rgba(8,66,145,0.05)]"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 4,
        }}
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#07347d] text-white"
      >
        <ClipboardList className="h-[27px] w-[27px]" strokeWidth={1.7} />
      </motion.div>

      <div>
        <h3 className="text-[15px] font-[580] text-[#063b87]">
          Selection Criteria
        </h3>

        <p className="mt-2 text-[12px] font-medium leading-[1.55] text-[#354861]">
          We follow rigorous selection criteria of indexing services, including:
        </p>

        <ul className="mt-3 space-y-2">
          {selectionCriteria.map((item) => (
            <motion.li
              key={item}
              whileHover={{ x: 4 }}
              className="flex items-start gap-2"
            >
              <CheckCircle2
                className="mt-[1px] h-[13px] w-[13px] shrink-0 text-[#075bc7]"
                strokeWidth={2}
              />

              <span className="text-[13px] font-medium leading-[1.4] text-[#263b5c]">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function BenefitsCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -7,
        boxShadow: "0 16px 32px rgba(8,66,145,0.12)",
      }}
      className="flex gap-5 rounded-[8px] border border-[#dbe6f2] bg-[#f7faff] px-5 py-5 shadow-[0_3px_13px_rgba(8,66,145,0.05)]"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 4,
        }}
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#07347d] text-white"
      >
        <Star className="h-[27px] w-[27px]" strokeWidth={1.7} />
      </motion.div>

      <div>
        <h3 className="text-[15px] font-[580] text-[#063b87]">
          Benefits of Indexing
        </h3>

        <ul className="mt-4 space-y-3">
          {indexingBenefits.map((item) => (
            <motion.li
              key={item}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3"
            >
              <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#07347d]" />

              <span className="text-[13px] font-medium leading-[1.5] text-[#263b5c]">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function AuthorsCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -7,
        boxShadow: "0 16px 32px rgba(8,66,145,0.12)",
      }}
      className="flex gap-5 rounded-[8px] border border-[#dbe6f2] bg-[#f7faff] px-5 py-5 shadow-[0_3px_13px_rgba(8,66,145,0.05)]"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 4,
        }}
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#07347d] text-white"
      >
        <SquarePen className="h-[27px] w-[27px]" strokeWidth={1.7} />
      </motion.div>

      <div>
        <h3 className="text-[15px] font-[580] text-[#063b87]">For Authors</h3>

        <p className="mt-3 text-[12px] font-medium leading-[1.7] text-[#263b5c] sm:text-[13px]">
          Publishing in an indexed journal ensures that your research reaches a
          wider audience and contributes to the advancement of knowledge
          globally.
        </p>

        <p className="mt-5 text-[13px] font-[520] leading-[1.65] text-[#063b87]">
          Choose Yashika Publications for impactful and globally recognized
          research.
        </p>
      </div>
    </motion.article>
  );
}

function ContactInformation() {
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
      className="grid overflow-hidden rounded-[8px] border border-[#dbe6f2] bg-[#edf4ff] shadow-[0_3px_13px_rgba(8,66,145,0.05)] md:grid-cols-[1.35fr_0.65fr]"
    >
      <div className="flex items-center gap-5 border-b border-[#d6e2ef] px-6 py-4 md:border-b-0 md:border-r">
        <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#07347d] text-white">
          <Mail className="h-[25px] w-[25px]" strokeWidth={1.7} />
        </div>

        <p className="text-[12px] font-medium leading-[1.7] text-[#263b5c] sm:text-[13px]">
          For any queries related to indexing and abstracting, please contact us
          at:
          <br />
          <a
            href="mailto:editor.aierrr@yashikapublications.com"
            className="font-[550] text-[#075bc7] hover:underline"
          >
            editor.aierrr@yashikapublications.com
          </a>
        </p>
      </div>

      <div className="flex items-center gap-5 px-6 py-5">
        <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#07347d] text-white">
          <Globe2 className="h-[25px] w-[25px]" strokeWidth={1.7} />
        </div>

        <p className="text-[12px] font-medium leading-[1.7] text-[#263b5c] sm:text-[13px]">
          Visit our website:
          <br />
          <a
            href="https://www.yashikapublications.com/aierrr"
            target="_blank"
            rel="noreferrer"
            className="font-[550] text-[#075bc7] hover:underline"
          >
            www.yashikapublications.com/aierrr
          </a>
        </p>
      </div>
    </motion.section>
  );
}

export default function IndexingAbstracting() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#102651]">
      <HeroSection />

      <section className="px-4 pb-10 pt-6 m:pb-16 sm:px-8 lg:px-14 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <VisibilityStrip />

          <div className="mt-6">
            <DatabaseSection title="Indexed In" databases={indexedDatabases} />
          </div>

          <div className="mt-6">
            <DatabaseSection
              title="Abstracted In"
              databases={abstractingDatabases}
            />
          </div>

          <div className="mt-5">
            <ContinuousIndexingNotice />
          </div>

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-5 grid gap-4 lg:grid-cols-3"
          >
            <SelectionCriteriaCard />
            <BenefitsCard />
            <AuthorsCard />
          </motion.section>

          <div className="mt-5">
            <ContactInformation />
          </div>
        </div>
      </section>
    </main>
  );
}
