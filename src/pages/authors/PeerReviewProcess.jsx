import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Upload,
  SearchCheck,
  Users,
  UserRoundCheck,
  ClipboardCheck,
  FileText,
  RefreshCw,
  Sparkles,
  BarChart3,
  AlignLeft,
  CheckCircle2,
  BookOpen,
  CalendarDays,
  FileClock,
  Award,
  Send,
  ShieldCheck,
} from "lucide-react";

import PageTransition from "../../components/PageTransition";

import heroBg from "../../assets/yashika-journal-home-hero-banner.webp";
import { FaChevronRight } from "react-icons/fa";


const workflowSteps = [
  {
    number: "1",
    icon: Upload,
    title: "Submission",
    description:
      "Author submits the manuscript through our online system.",
  },
  {
    number: "2",
    icon: SearchCheck,
    title: "Initial Screening",
    description:
      "Editorial team checks for scope, formatting, and compliance.",
  },
  {
    number: "3",
    icon: Users,
    title: "Editor Assignment",
    description:
      "Manuscript is assigned to an Editor with relevant expertise.",
  },
  {
    number: "4",
    icon: UserRoundCheck,
    title: "Reviewer Selection",
    description:
      "Editor invites at least two independent reviewers.",
  },
  {
    number: "5",
    icon: ClipboardCheck,
    title: "Peer Review",
    description:
      "Reviewers evaluate the manuscript and submit their reports.",
  },
  {
    number: "6",
    icon: FileText,
    title: "Decision",
    description:
      "Editor makes a decision based on reviewer comments.",
  },
  {
    number: "7",
    icon: RefreshCw,
    title: "Revision & Publication",
    description:
      "Authors revise the manuscript and the accepted paper is published.",
  },
];

const reviewCriteria = [
  {
    icon: Sparkles,
    title: "Originality & Significance",
    description:
      "The work should be novel, significant, and contribute to the advancement of knowledge.",
  },
  {
    icon: BarChart3,
    title: "Methodology",
    description:
      "The research design, methods, and analysis should be appropriate and well-executed.",
  },
  {
    icon: AlignLeft,
    title: "Clarity & Organization",
    description:
      "The manuscript should be well-structured, clear, and logically presented.",
  },
  {
    icon: CheckCircle2,
    title: "Results & Discussion",
    description:
      "Results should be valid, well-interpreted, and discussed in the context of existing literature.",
  },
  {
    icon: BookOpen,
    title: "Ethics & Compliance",
    description:
      "The study must adhere to ethical standards, reporting guidelines, and legal requirements.",
  },
];

const timelineItems = [
  {
    icon: CalendarDays,
    value: "5",
    unit: "days",
    description: "Submission to first decision",
  },
  {
    icon: FileClock,
    value: "62",
    unit: "days",
    description: "Submission to decision after review",
  },
  {
    icon: Award,
    value: "147",
    unit: "days",
    description: "Submission to acceptance",
  },
  {
    icon: Send,
    value: "7",
    unit: "days",
    description: "Acceptance to online publication",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const PeerReviewProcess = () => {
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
                
                                  <span className="text-white">    Peer Review Process</span>
                                </div>
                
                                <h1 className="text-[36px] font-[600] leading-[1.1] tracking-[-1px] text-white sm:text-[40px] lg:text-[42px]">
                                    Peer Review Process
                                </h1>
                
                                <div className="mt-3 h-[3px] w-[42px] bg-[#ff6b00] rounded-full" />
                
                                <p className="mt-6 max-w-[520px] text-[17px] font-[400] leading-[1.55] text-white sm:text-[17px]">
                                  Artificial Intelligence Education Research
                                  <br className="hidden sm:block" />
                                  and Review (AIERRR)
                                </p>
                                  <p className="mt-5 max-w-[430px] text-[12px] leading-[1.8] text-white/80 sm:text-[13px]">
                        AIERRR follows a rigorous and transparent peer review process
                  to ensure the publication of high-quality, original, and
                  impactful research.
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
        {/* Commitment */}
        <section className="px-5 pb-6 pt-8 text-center sm:px-8 lg:px-12 xl:px-16">
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
            }}
            transition={{
              duration: 0.55,
            }}
            className="mx-auto max-w-[980px]"
          >
            <h2 className="text-[20px] font-[600] text-[#123d7b] sm:text-[24px]">
              Our Peer Review Commitment
            </h2>

            <div className="mx-auto mt-2 h-[3px] w-[38px] rounded-full bg-[#ff6b00]" />

            <p className="mx-auto mt-4 max-w-[900px] text-[12px] leading-[1.8] text-[#46546a] sm:text-[13px]">
              We are committed to a fair, unbiased, and constructive peer
              review process that upholds the highest academic standards,
              ensuring integrity, quality, and relevance of published research.
            </p>
          </motion.div>
        </section>

        {/* Workflow */}
        <section className="px-5 py-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeading title="Peer Review Workflow" />

            <div className="relative mt-7">
              <div className="absolute left-[7%] right-[7%] top-[50px] hidden border-t-2 border-dotted border-[#9bb7dc] xl:block" />

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <motion.article
                      key={step.number}
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
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.07,
                      }}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 16px 35px rgba(12, 55, 110, 0.13)",
                      }}
                      className="relative rounded-[6px] border border-[#dce4ee] bg-white px-4 pb-5 pt-8 text-center shadow-[0_4px_15px_rgba(0,43,92,0.05)]"
                    >
                      <div className="absolute left-1/2 top-0 z-10 flex h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#062f70] text-[12px] font-[600] text-white shadow-md">
                        {step.number}
                      </div>

                      <motion.div
                        whileHover={{
                          scale: 1.12,
                          rotate: 3,
                        }}
                        className="mx-auto flex h-[46px] w-[46px] items-center justify-center text-[#1559ad]"
                      >
                        <Icon size={34} strokeWidth={1.7} />
                      </motion.div>

                      <h3 className="mt-2 text-[13px] font-[600] text-[#153e7e] min-h-[40px]">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-[1.55] text-[#4c596c]">
                        {step.description}
                      </p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Review criteria */}
        <section className="px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeading title="Review Criteria" />

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
              <div className="hidden grid-cols-[58px_300px_1fr] bg-[#092f6b] text-[11px] font-[600] text-white md:grid">
                <div className="flex min-h-[42px] items-center justify-center border-r border-white/15">
                  <ClipboardCheck size={19} />
                </div>

                <div className="flex min-h-[42px] sm:text-[15px] text-[12px] items-center border-r border-white/15 px-4">
                  Criteria
                </div>

                <div className="flex min-h-[42px] sm:text-[15px] text-[12px] items-center px-4">
                  Description
                </div>
              </div>

              {reviewCriteria.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      backgroundColor: "#f5f9ff",
                    }}
                    className={`grid grid-cols-1 md:grid-cols-[58px_300px_1fr] ${
                      index !== reviewCriteria.length - 1
                        ? "border-b border-[#dce4ee]"
                        : ""
                    }`}
                  >
                    <div className="flex min-h-[52px] items-center justify-center border-b border-[#dce4ee] text-[#2758a6] md:border-b-0 md:border-r">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div className="flex min-h-[52px] items-center border-b border-[#dce4ee] px-4 py-3 text-[11px] sm:text-[13px]  font-[600] text-[#173f80] md:border-b-0 md:border-r">
                      {item.title}
                    </div>

                    <div className="flex min-h-[52px] items-center px-4 py-3 text-[11px] sm:text-[13px] leading-[1.65] text-[#374459]">
                      {item.description}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Review timeline */}
        <section className="px-5 pb-10 pt-7 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeading title="Review Timeline" />

            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {timelineItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.description}
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
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    className="flex items-center gap-4 rounded-[8px] bg-white px-4 py-3"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 3,
                      }}
                      className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-[#1c5db0]"
                    >
                      <Icon size={31} strokeWidth={1.7} />
                    </motion.div>

                    <div>
                      <div className="flex items-end gap-2">
                        <span className="text-[24px] font-[600] leading-none text-[#0f3475]">
                          {item.value}
                        </span>

                        <span className="pb-[2px] text-[11px] font-[600] text-[#4d5c70]">
                          {item.unit}
                        </span>
                      </div>

                      <p className="mt-2 max-w-[150px] text-[11px] sm:text-[12px] leading-[1.5] text-[#566376]">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
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
              className="mt-6 flex items-center justify-center gap-3 rounded-[5px] bg-[#edf5ff] px-5 py-4 text-center"
            >
              <ShieldCheck
                size={18}
                strokeWidth={2}
                className="shrink-0 text-[#1c60ad]"
              />

              <p className="text-[11px] sm:text-[13px] leading-[1.6] text-[#46617f]">
                AIERRR does not charge any fee for peer review. The process is
                completely independent and based solely on academic merit.
              </p>
            </motion.div>
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

export default PeerReviewProcess;