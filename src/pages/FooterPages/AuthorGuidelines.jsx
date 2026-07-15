import React from "react";
import { motion } from "framer-motion";
import {
  AlignLeft,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Download,
  File,
  FileCheck2,
  FileText,
  Hash,
  Image,
  Info,
  Languages,
  ListChecks,
  LockKeyhole,
  PanelTop,
  Pilcrow,
  Ruler,
  Search,
  Send,
  ShieldCheck,
  Type,
} from "lucide-react";

import heroImg from "../../assets/yashika-journal-home-hero-banner.webp";

const quickLinks = [
  {
    icon: FileCheck2,
    title: "Before Submission",
    subtitle: "Preparation & policies",
    href: "#before-submission",
  },
  {
    icon: FileText,
    title: "Manuscript Structure",
    subtitle: "Organize your paper",
    href: "#manuscript-structure",
  },
  {
    icon: AlignLeft,
    title: "Formatting",
    subtitle: "Style & layout",
    href: "#formatting",
  },
  {
    icon: BookOpen,
    title: "References",
    subtitle: "Citation guidelines",
    href: "#references",
  },
  {
    icon: Image,
    title: "Figures & Tables",
    subtitle: "Presentation rules",
    href: "#figures",
  },
  {
    icon: Send,
    title: "Submission",
    subtitle: "How to submit",
    href: "#submission",
  },
];

const sidebarItems = [
  "Before Submission",
  "Manuscript Categories",
  "Manuscript Structure",
  "Formatting Requirements",
  "Figures and Tables",
  "References and Citations",
  "Ethical Considerations",
  "Use of AI in Writing",
  "Copyright and Licensing",
  "Submission Process",
  "After Acceptance",
];

const beforeSubmission = [
  {
    icon: Search,
    title: "Originality",
    description:
      "Manuscripts must be original, unpublished and not under consideration elsewhere.",
  },
  {
    icon: Languages,
    title: "Language",
    description:
      "All submissions must be in English with clear, concise and grammatically correct language.",
  },
  {
    icon: File,
    title: "File Format",
    description:
      "Submit your manuscript in Microsoft Word (.doc or .docx) format only.",
  },
  {
    icon: ListChecks,
    title: "Length",
    description:
      "Follow the word limits specified for each manuscript category (see section 2).",
  },
  {
    icon: ShieldCheck,
    title: "Plagiarism",
    description:
      "Manuscripts are screened using iThenticate. Similarity above 20% may be rejected.",
  },
  {
    icon: FileText,
    title: "Permissions",
    description:
      "Obtain permission for any copyrighted material, figures or data used.",
  },
];

const categories = [
  {
    category: "Research Paper",
    description: "Original research with significant findings.",
    words: "3500",
    abstract: "250 words",
    references: "Max 50",
  },
  {
    category: "Review Paper",
    description: "Comprehensive reviews on current topics.",
    words: "6000",
    abstract: "250 words",
    references: "Max 80",
  },
  {
    category: "Short Communication",
    description: "Brief reports of novel findings.",
    words: "2000",
    abstract: "150 words",
    references: "Max 25",
  },
  {
    category: "Technical Note",
    description: "Descriptions of technical methods or tools.",
    words: "2500",
    abstract: "150 words",
    references: "Max 30",
  },
  {
    category: "Case Study",
    description: "Detailed analysis of specific cases.",
    words: "3000",
    abstract: "200 words",
    references: "Max 40",
  },
  {
    category: "Editorial / Perspective",
    description: "Invited opinion or viewpoint articles.",
    words: "1500",
    abstract: "Not required",
    references: "Max 20",
  },
];

const manuscriptStructure = [
  ["Title", "Concise and informative."],
  [
    "Authors & Affiliations",
    "Full names, affiliations, and correspondence email.",
  ],
  ["Abstract", "Structured abstract (Aim, Methods, Results, Conclusion)."],
  ["Keywords", "3–6 relevant keywords."],
  ["Introduction", "Background, problem statement, and objectives."],
  ["Methods", "Detailed methodology to allow replication."],
  ["Results", "Clear presentation of findings."],
  ["Discussion", "Interpretation, implications, and comparison."],
  ["Conclusion", "Summary and future directions."],
  ["Acknowledgments", "Funding and other acknowledgements."],
  ["References", "Follow the citation style (see section 6)."],
];

const formattingRequirements = [
  {
    icon: Type,
    label: "Font",
    value: "Times New Roman",
  },
  {
    icon: Type,
    label: "Font Size",
    value: "12 pt",
  },
  {
    icon: ListChecks,
    label: "Line Spacing",
    value: "1.5",
  },
  {
    icon: AlignLeft,
    label: "Alignment",
    value: "Justified",
  },
  {
    icon: PanelTop,
    label: "Margins",
    value: "1 inch (2.54 cm) on all sides",
  },
  {
    icon: Hash,
    label: "Page Numbering",
    value: "Bottom center",
  },
  {
    icon: Pilcrow,
    label: "Headings",
    value: "Use standard heading styles (Heading 1, 2, 3...)",
  },
  {
    icon: Ruler,
    label: "Units",
    value: "Use SI units only",
  },
  {
    icon: BadgeCheck,
    label: "Abbreviations",
    value: "Define at first use",
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
      duration: 0.62,
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

function SectionHeading({ number, title }) {
  return (
    <div className="mb-5">
      <h2 className="text-[16px] font-[600] uppercase tracking-[0.02em] text-[#075bc7] sm:text-[18px]">
        {number}. {title}
      </h2>

      <div className="mt-1 h-[2px] w-[33px] bg-[#ff7200]" />
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
              whileHover={{
                x: 4,
              }}
              className="mb-6 flex flex-wrap items-center gap-2 text-[13px] font-semibold"
            >
              <a href="/" className="text-[#ff7600] hover:text-white">
                Home
              </a>

              <span className="text-white/80">›</span>

              <a
                href="/authors"
                className="text-white transition hover:text-[#ff7600]"
              >
                For Authors
              </a>

              <span className="text-white/80">›</span>

              <span className="text-white">Author Guidelines</span>
            </motion.div>

            <h1 className="max-w-[400px] text-[34px] font-[600]  tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]">
              Author Guidelines
            </h1>

            <div className="mt-2 h-[3px] w-[48px] rounded-full bg-[#ff7900]" />

            <p className="mt-4 max-w-[400px] text-[14px] font-medium leading-[1.8] text-white sm:text-[14px] lg:text-[18px]">
              Artificial Intelligence Education Research
              <br className="hidden sm:block" /> and Review (AIERRR)
            </p>

            <p className="mt-6 max-w-[500px] text-[14px] font-medium leading-[1.9] text-white/90 sm:text-[14px]">
              These guidelines are designed to help authors prepare and submit
              manuscripts that meet the high standards of AIERRR. Please read
              them carefully before submission.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-[1px] left-0 h-[34px] w-full bg-white [clip-path:ellipse(62%_38%_at_50%_100%)] sm:h-[46px]" />
    </section>
  );
}

function QuickNavigation() {
  return (
    <motion.section
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
      }}
      className="mx-auto mt-6 max-w-[1400px] px-5 m:pb-16 sm:px-8 lg:px-14 xl:px-14"
    >
      <div className="grid overflow-hidden rounded-[7px] border border-[#dfe7f0] bg-white shadow-[0_4px_17px_rgba(7,50,101,0.08)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {quickLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{
                opacity: 0,
                y: 15,
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
                delay: index * 0.06,
              }}
              whileHover={{
                y: -5,
                backgroundColor: "#f6faff",
              }}
              className="group flex min-h-[94px] items-center gap-4 border-b border-[#e3e9f1] px-5 py-5 transition lg:border-r xl:border-b-0 xl:last:border-r-0"
            >
              <Icon
                className="h-[30px] w-[30px] shrink-0 text-[#075ec7] transition duration-300 group-hover:scale-110"
                strokeWidth={1.7}
              />

              <div>
                <h3 className="text-[14px] font-[600] leading-[1.4] text-[#082b67]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[12px] font-medium leading-[1.45] text-[#53647a]">
                  {item.subtitle}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}

function Sidebar() {
  return (
    <motion.aside
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="self-start rounded-[7px] border border-[#dfe7ef] bg-white p-5 shadow-[0_4px_16px_rgba(7,50,101,0.07)] lg:sticky lg:top-6"
    >
      <h2 className="text-[16px] font-[600] uppercase text-[#063b87]">
        Guidelines Sections
      </h2>

      <div className="mt-2 h-[2px] w-[28px] bg-[#ff7200]" />

      <div className="mt-5 space-y-1">
        {sidebarItems.map((item, index) => (
          <motion.a
            key={item}
            href={`#section-${index + 1}`}
            whileHover={{
              x: 5,
              backgroundColor: "#f4f8ff",
            }}
            className="group flex items-center gap-3 rounded-[5px] px-1 py-[7px]"
          >
            <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[4px] bg-[#edf5ff] text-[13px] font-[600] text-[#0762c8] transition group-hover:bg-[#0762c8] group-hover:text-white">
              {index + 1}
            </span>

            <span className="text-[13px] font-semibold text-[#18315e]">
              {item}
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div
        whileHover={{
          y: -5,
          boxShadow: "0 13px 30px rgba(7,75,161,0.14)",
        }}
        className="mt-5 rounded-[7px] bg-[#f0f6ff] px-5 py-6 text-center"
      >
        <div className="mx-auto flex h-[55px] w-[55px] items-center justify-center rounded-[10px] bg-[#dbeaff] text-[#075dc5]">
          <Download className="h-[31px] w-[31px]" strokeWidth={1.7} />
        </div>

        <h3 className="mt-4 text-[16px] font-[600] text-[#063b87]">
          Download Templates
        </h3>

        <p className="mt-4 text-[12px] font-medium leading-[1.7] text-[#34465f]">
          Use our template to format your manuscript correctly.
        </p>

        <motion.a
          whileHover={{
            scale: 1.03,
            backgroundColor: "#075dc5",
            color: "#ffffff",
          }}
          whileTap={{
            scale: 0.97,
          }}
          href="/documents/aierrr-manuscript-template.docx"
          download
          className="mt-5 inline-flex h-[40px] w-full items-center justify-center rounded-[5px] border border-[#075dc5] px-3 text-[11px] font-[600] text-[#075dc5] transition"
        >
          Download Template (DOCX)
        </motion.a>
      </motion.div>
    </motion.aside>
  );
}

function BeforeSubmissionSection() {
  return (
    <section id="section-1">
      <SectionHeading number="1" title="Before Submission" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {beforeSubmission.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{
                y: -7,
                scale: 1.015,
                boxShadow: "0 14px 30px rgba(6,58,131,0.13)",
              }}
              className="group flex min-h-[135px] gap-4 rounded-[7px] border border-[#dfe7ef] bg-white p-5 shadow-[0_3px_13px_rgba(7,50,101,0.05)]"
            >
              <Icon
                className="mt-1 h-[28px] w-[28px] shrink-0 text-[#075ec7] transition duration-300 group-hover:scale-110"
                strokeWidth={1.7}
              />

              <div>
                <h3 className="text-[12px] font-[600] text-[#07377f]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] font-medium leading-[1.65] text-[#34455f] sm:text-[11px]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section id="section-2" className="mt-8">
      <SectionHeading number="2" title="Manuscript Categories" />

      <motion.div
        initial={{
          opacity: 0,
          y: 22,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.55,
        }}
        className="overflow-hidden rounded-[5px] border border-[#dce5ee] bg-white shadow-[0_3px_14px_rgba(5,47,100,0.06)]"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="bg-[#073b82] text-left text-white">
                <th className="border-r border-white/25 px-4 py-3 text-[12px] font-semibold">
                  Category
                </th>

                <th className="border-r border-white/25 px-4 py-3 text-[12px] font-semibold">
                  Description
                </th>

                <th className="border-r border-white/25 px-4 py-3 text-center text-[12px] font-semibold">
                  Maximum Word Limit*
                </th>

                <th className="border-r border-white/25 px-4 py-3 text-center text-[12px] font-semibold">
                  Abstract
                </th>

                <th className="px-4 py-3 text-center text-[12px] font-semibold">
                  References
                </th>
              </tr>
            </thead>

            <tbody>
              {categories.map((item, index) => (
                <motion.tr
                  key={item.category}
                  initial={{
                    opacity: 0,
                    x: -14,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    backgroundColor: "#f3f8ff",
                  }}
                  className="border-b border-[#e0e7ef] last:border-b-0"
                >
                  <td className="border-r border-[#e0e7ef] px-4 py-[9px] text-[12px] font-[600] text-[#0860c4]">
                    {item.category}
                  </td>

                  <td className="border-r border-[#e0e7ef] px-4 py-[9px] text-[12px] font-medium text-[#44556c]">
                    {item.description}
                  </td>

                  <td className="border-r border-[#e0e7ef] px-4 py-[9px] text-center text-[12px] font-semibold text-[#233b60]">
                    {item.words}
                  </td>

                  <td className="border-r border-[#e0e7ef] px-4 py-[9px] text-center text-[12px] font-semibold text-[#233b60]">
                    {item.abstract}
                  </td>

                  <td className="px-4 py-[9px] text-center text-[12px] font-semibold text-[#233b60]">
                    {item.references}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <p className="mt-2 text-[9px] font-medium text-[#53647a] sm:text-[12px]">
        *Includes text, references, tables and figure captions.
      </p>
    </section>
  );
}

function ManuscriptStructureSection() {
  return (
    <motion.section
      id="section-3"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="rounded-[7px] border border-[#dfe7ef] bg-white p-5 shadow-[0_3px_14px_rgba(7,50,101,0.06)]"
    >
      <SectionHeading number="3" title="Manuscript Structure" />

      <div className="space-y-[11px]">
        {manuscriptStructure.map(([label, value]) => (
          <motion.div
            key={label}
            whileHover={{
              x: 4,
              backgroundColor: "#f7faff",
            }}
            className="grid gap-1 rounded-[4px] px-1 py-1 sm:grid-cols-[115px_1fr]"
          >
            <p className="text-[12px] font-[600] text-[#183665]">{label}</p>

            <p className="text-[11px] font-medium leading-[1.5] text-[#53647a] sm:text-[12px]">
              {value}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function FormattingSection() {
  return (
    <motion.section
      id="section-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="rounded-[7px] border border-[#dfe7ef] bg-white p-5 shadow-[0_3px_14px_rgba(7,50,101,0.06)]"
    >
      <SectionHeading number="4" title="Formatting Requirements" />

      <div className="space-y-[10px]">
        {formattingRequirements.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              whileHover={{
                x: 4,
                backgroundColor: "#f7faff",
              }}
              className="grid grid-cols-[20px_85px_1fr] items-start gap-2 rounded-[4px] px-1 py-1"
            >
              <Icon
                className="h-[13px] w-[13px] text-[#075ec7]"
                strokeWidth={1.8}
              />

              <p className="text-[12px] font-[600] text-[#183665]">
                {item.label}
              </p>

              <p className="text-[11px] font-medium leading-[1.5] text-[#53647a] sm:text-[12px]">
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

function ImportantNote() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 13px 28px rgba(7,75,161,0.12)",
      }}
      className="mx-auto mt-7 grid max-w-[1370px] overflow-hidden rounded-[7px] border border-[#dce7f3] bg-[#edf5ff] sm:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="flex items-center gap-4 px-5 py-5 sm:px-7">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#8cb8f0] text-white">
          <Info className="h-[21px] w-[21px]" />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
          <h3 className="whitespace-nowrap text-[16px] font-[600] text-[#063b87]">
            Important Note
          </h3>

          <p className="text-[11px] font-medium leading-[1.6] text-[#34455f] sm:text-[12px]">
            Failure to follow these guidelines may result in delays or rejection
            of your manuscript.
          </p>
        </div>
      </div>

      <div className="border-t border-[#d8e4f1] px-5 py-5 sm:border-l sm:border-t-0 sm:px-7">
        <p className="text-[11px] font-medium leading-[1.55] text-[#34455f]">
          For any queries, please contact us at
        </p>

        <a
          href="mailto:editor.aierrr@yashikapublications.com"
          className="mt-1 block break-all text-[11px] font-[600] text-[#075ec7] hover:underline sm:text-[12px]"
        >
          editor.aierrr@yashikapublications.com
        </a>
      </div>
    </motion.section>
  );
}

export default function AuthorGuidelines() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#102651]">
      <HeroSection />

      <QuickNavigation />

      <section className="px-5 pb-9 pt-6 m:pb-16 sm:px-8 lg:px-14 xl:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-7 lg:grid-cols-[255px_minmax(0,1fr)]">
          <Sidebar />

          <div className="min-w-0">
            <BeforeSubmissionSection />

            <CategoriesSection />

            <div className="mt-7 grid gap-6 xl:grid-cols-2">
              <ManuscriptStructureSection />
              <FormattingSection />
            </div>
          </div>
        </div>

        <ImportantNote />
      </section>
    </main>
  );
}
