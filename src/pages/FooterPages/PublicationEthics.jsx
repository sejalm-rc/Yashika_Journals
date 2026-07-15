import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  PenLine,
  Users,
  FileCheck2,
  Landmark,
  ScanText,
  Network,
  LockKeyhole,
  BarChart3,
  ShieldCheck,
  Bot,
  Copyright,
  BookOpen,
  BadgeCheck,
  Globe2,
  FileText,
  SearchCheck,
  CheckCircle2,
} from "lucide-react";

import PageTransition from "../../components/PageTransition";

import heroBg from "../../assets/yashika-journal-home-hero-banner.webp";
import copeLogo from "../../assets/scopus-indexed-journal.webp";
import icmjeLogo from "../../assets/dimensions-indexed-journal.webp";
import wameLogo from "../../assets/google-scholar-indexing.webp";
import cseLogo from "../../assets/crossref-doi-registration.webp";
import doajLogo from "../../assets/doaj-indexed-journal.webp";
import { FaChevronRight } from "react-icons/fa";

const ethicalResponsibilities = [
  {
    icon: PenLine,
    title: "Authors",
    points: [
      "Submit original, accurate, and unpublished work.",
      "Properly cite all sources and avoid plagiarism.",
      "Disclose any conflicts of interest.",
      "Obtain necessary permissions for copyrighted material.",
      "Treat data responsibly and report it honestly.",
    ],
  },
  {
    icon: Users,
    title: "Reviewers",
    points: [
      "Conduct reviews objectively and confidentially.",
      "Provide constructive and timely feedback.",
      "Decline review if there is a conflict of interest.",
      "Do not use unpublished information for personal advantage.",
    ],
  },
  {
    icon: FileCheck2,
    title: "Editors",
    points: [
      "Make fair and unbiased decisions.",
      "Maintain confidentiality of submissions.",
      "Avoid conflicts of interest.",
      "Ensure proper peer review.",
      "Take action on ethical concerns or misconduct.",
    ],
  },
  {
    icon: Landmark,
    title: "Publisher",
    points: [
      "Ensure integrity and transparency in publishing.",
      "Maintain the confidentiality of all parties.",
      "Provide timely publication.",
      "Correct errors and retract when necessary.",
    ],
  },
];

const ethicalGuidelines = [
  {
    icon: ScanText,
    topic: "Originality & Plagiarism",
    policy:
      "All submissions are screened for plagiarism using industry-standard software. Manuscripts must be original and not under consideration elsewhere. Plagiarism or self-plagiarism in any form is unacceptable.",
  },
  {
    icon: Network,
    topic: "Conflicts of Interest",
    policy:
      "All authors, reviewers, and editors must disclose any financial, personal, or professional relationships that could inappropriately influence their work or decisions.",
  },
  {
    icon: LockKeyhole,
    topic: "Confidentiality",
    policy:
      "Information about submitted manuscripts must be kept confidential and not shared or used for personal gain.",
  },
  {
    icon: BarChart3,
    topic: "Data Integrity",
    policy:
      "Authors must present accurate data and be prepared to provide raw data if requested. Fabrication, falsification, or selective reporting is strictly prohibited.",
  },
  {
    icon: ShieldCheck,
    topic: "Corrections, Retractions & Expressions of Concern",
    policy:
      "We correct published errors promptly. In cases of serious ethical violations, articles may be retracted with a retraction notice.",
  },
  {
    icon: Bot,
    topic: "Use of AI in Writing",
    policy:
      "AI tools may be used to assist in language improvement or grammar, but they cannot be listed as authors. Authors must take full responsibility for the content and disclose the use of AI tools in the Acknowledgement.",
  },
  {
    icon: Copyright,
    topic: "Copyright & Licensing",
    policy:
      "Authors retain copyright of their work under a Creative Commons Attribution (CC BY) license, allowing others to share and adapt with proper credit.",
  },
];

const internationalStandards = [
  {
    icon: BookOpen,
    title: "COPE Guidelines",
    description: "Promoting integrity in research and its publication.",
  },
  {
    icon: BadgeCheck,
    title: "ICMJE Recommendations",
    description:
      "Defining the role of authors and ethical reporting in medical research.",
  },
  {
    icon: Globe2,
    title: "WAME Policies",
    description:
      "Supporting editorial independence and ethical publishing worldwide.",
  },
  {
    icon: FileText,
    title: "CSE White Paper",
    description:
      "Best practices for editors on publication ethics and peer review.",
  },
  {
    icon: SearchCheck,
    title: "DOAJ Principles",
    description:
      "Ensuring transparency and openness in open access publishing.",
  },
];

const standardLogos = [
  {
    image: copeLogo,
    name: "COPE",
    subtitle: "Scopus Indexed",
  },
  {
    image: icmjeLogo,
    name: "ICMJE",
    subtitle: "Dimensions Indexed",
  },
  {
    image: wameLogo,
    name: "WAME",
    subtitle: "Google Scholar Indexing",
  },
  {
    image: cseLogo,
    name: "CSE",
    subtitle: "Crossref DOI Registration",
  },
  {
    image: doajLogo,
    name: "DOAJ",
    subtitle: "Directory of Open Access Journals",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const PublicationEthics = () => {
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
                  <Link to="/author-guidelines" className="text-white">
                    For Authors
                  </Link>

                  <FaChevronRight className="text-[8px] text-white/70" />

                  <span className="text-white"> Publication Ethics</span>
                </div>

                <h1 className="text-[36px] font-[600] leading-[1.1] tracking-[-1px] text-white sm:text-[40px] lg:text-[42px]">
                  Publication Ethics
                </h1>

                <div className="mt-3 h-[3px] w-[42px] bg-[#ff6b00] rounded-full" />

                <p className="mt-6 max-w-[520px] text-[17px] font-[400] leading-[1.55] text-white sm:text-[17px]">
                  Artificial Intelligence Education Research
                  <br className="hidden sm:block" />
                  and Review (AIERRR)
                </p>
                <p className="mt-5 max-w-[430px] text-[12px] leading-[1.8] text-white/80 sm:text-[13px]">
                  AIERRR follows the highest standards of publication ethics and
                  adheres to internationally recognized guidelines to ensure
                  integrity, transparency, and accountability in scholarly
                  publishing.
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

        {/* Commitment and standards */}
        <section className="px-5 pb-8 pt-10 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto grid max-w-[1380px] gap-7 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <SectionHeading title="Our Commitment" />

              <p className="mt-3 text-[11px] leading-[1.9] text-[#39475c] sm:text-[13px]">
                We are committed to upholding ethical standards in publishing
                and take all reasonable steps to prevent unethical practices.
                All parties involved in the publication process—authors,
                reviewers, editors, and publishers—are expected to follow these
                ethical principles.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 36px rgba(10, 55, 112, 0.1)",
              }}
              className="rounded-[8px] border border-[#dce5ef] bg-[#f8fbff] p-5 shadow-[0_5px_18px_rgba(0,43,92,0.06)]"
            >
              <h3 className="mb-5 text-[13px] sm:text-[15px] font-[600] text-[#173e7c]">
                We follow global ethical standards
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {standardLogos.map((item, index) => (
                  <motion.div
                    key={item.name}
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
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex h-[48px] items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-[42px] max-w-[82px] object-contain"
                      />
                    </div>

                    <p className="mt-3 text-[10px] leading-[1.45] text-[#536176]">
                      {item.subtitle}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ethical responsibilities */}
        <section className="px-5 py-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeading title="Ethical Responsibilities" />

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {ethicalResponsibilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
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
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -7,
                      boxShadow: "0 15px 35px rgba(10, 54, 110, 0.12)",
                    }}
                    className="rounded-[6px] border border-[#dce4ee] bg-white p-5 shadow-[0_4px_15px_rgba(0,43,92,0.05)]"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: 3,
                        }}
                        className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-[#2559aa]"
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </motion.div>

                      <h3 className="text-[15px] font-[600] text-[#173f7f]">
                        {item.title}
                      </h3>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 font-medium text-[11.5px] leading-[1.55] text-[#3f4c60]"
                        >
                          <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#244e99]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ethical guidelines */}
        <section className="px-5 py-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeading title="Ethical Guidelines" />

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
                amount: 0.08,
              }}
              transition={{
                duration: 0.55,
              }}
              className="mt-6 overflow-hidden rounded-[6px] border border-[#dce4ee]"
            >
              <div className="hidden grid-cols-[62px_260px_1fr] bg-[#092e69] text-[15px] font-[600] text-white md:grid">
                <div className="flex min-h-[42px] items-center justify-center border-r border-white/15">
                  <FileText size={19} />
                </div>

                <div className="flex min-h-[42px] items-center border-r border-white/15 px-4">
                  Topic
                </div>

                <div className="flex min-h-[42px] items-center px-4">
                  Our Policy
                </div>
              </div>

              <div>
                {ethicalGuidelines.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.topic}
                      whileHover={{
                        backgroundColor: "#f5f9ff",
                      }}
                      className={`grid grid-cols-1 md:grid-cols-[62px_260px_1fr] ${
                        index !== ethicalGuidelines.length - 1
                          ? "border-b border-[#dce4ee]"
                          : ""
                      }`}
                    >
                      <div className="flex min-h-[52px] items-center justify-center border-b border-[#dce4ee] text-[#2757a4] md:border-b-0 md:border-r">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      <div className="flex min-h-[52px]  items-center border-b sm:text-[13px] border-[#dce4ee] px-4 py-3 text-[11px] font-[600] text-[#153f80] md:border-b-0 md:border-r">
                        {item.topic}
                      </div>

                      <div className="flex min-h-[52px] items-center px-4 py-3 text-[11px] leading-[1.65] text-[#354257] sm:text-[13px]">
                        {item.policy}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* International standards */}
        <section className="px-5 pb-10 pt-8 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeading title="We Adhere to International Standards" />

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {internationalStandards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
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
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 13px 30px rgba(10, 55, 112, 0.11)",
                    }}
                    className="rounded-[6px] border border-[#dce4ee] bg-white p-3 shadow-[0_4px_14px_rgba(0,43,92,0.05)]"
                  >
                    <div className="flex items-start gap-2">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                        }}
                        className="flex h-[40px] w-[40px] shrink-0 items-center justify-center text-[#2757a4]"
                      >
                        <Icon size={30} strokeWidth={1.7} />
                      </motion.div>

                      <div>
                        <h3 className="text-[14px] font-[600] text-[#173e7c]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[11px] leading-[1.5] text-[#576477]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
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
                duration: 0.5,
              }}
              className="mt-6 flex items-center justify-center gap-3 rounded-[5px] bg-[#edf5ff] px-5 py-3 text-center"
            >
              <ShieldCheck
                size={19}
                strokeWidth={2}
                className="shrink-0 text-[#1d60ad]"
              />

              <p className="text-[11px] leading-[1.6] text-[#46617f] sm:text-[12px]">
                AIERRR upholds the highest ethical standards to ensure trust,
                credibility, and advancement of knowledge in Engineering,
                Medicine, and Education.
              </p>
            </motion.div>

            <p className="mt-4 text-center text-[11px] text-[#637083] sm:text-[12px]">
              For any ethical concerns, please contact us at{" "}
              <a
                href="mailto:editor@aierrrjournal.com"
                className="font-[600] text-[#1a5da7] transition-colors duration-300 hover:text-[#ff6b00] hover:underline"
              >
                editor@aierrrjournal.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

const SectionHeading = ({ title }) => {
  return (
    <div>
      <h2 className="text-[20px] font-[600] tracking-[-0.2px] text-[#123d7b] sm:text-[24px]">
        {title}
      </h2>

      <div className="mt-2 h-[3px] w-[36px] rounded-full bg-[#ff6b00]" />
    </div>
  );
};

export default PublicationEthics;
