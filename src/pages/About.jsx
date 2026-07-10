import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaBuilding,
  FaCalendarAlt,
  FaGlobe,
  FaLanguage,
  FaUserCheck,
  FaFileAlt,
  FaBullseye,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaGraduationCap,
  FaClipboardCheck,
  FaLaptopCode,
  FaUniversity,
  FaBalanceScale,
  FaBrain,
  FaChevronRight,
} from "react-icons/fa";

import PageTransition from "../components/PageTransition";


import aboutHero from "../assets/yashika-journal-home-hero-banner.webp";
// import journalBook from "../assets/aierr-journal-book.webp";

const overviewItems = [
  {
    icon: <FaBuilding />,
    label: "Publisher",
    value: "Yashika Publications",
  },
  {
    icon: <FaCalendarAlt />,
    label: "Frequency",
    value: "Quarterly (4 Issues per Year)",
  },
  {
    icon: <FaGlobe />,
    label: "Access",
    value: "Open Access",
  },
  {
    icon: <FaLanguage />,
    label: "Language",
    value: "English",
  },
  {
    icon: <FaUserCheck />,
    label: "Peer Review",
    value: "Double Blind",
  },
  {
    icon: <FaFileAlt />,
    label: "Type",
    value: "Scholarly Journal",
  },
];

const aims = [
  {
    icon: <FaBullseye />,
    title: "To advance knowledge",
    description:
      "Advance the theory and practice of artificial intelligence in education through high-quality research.",
  },
  {
    icon: <FaUsers />,
    title: "To bridge communities",
    description:
      "Bridge researchers, educators, practitioners, and policymakers by sharing innovative and practical insights.",
  },
  {
    icon: <FaLightbulb />,
    title: "To promote innovation",
    description:
      "Promote the innovative use of AI technologies to improve teaching, learning, assessment, and administration.",
  },
  {
    icon: <FaChartLine />,
    title: "To inform policy",
    description:
      "Inform educational policy and practice with evidence-based research and real-world applications.",
  },
  {
    icon: <FaHandshake />,
    title: "To encourage collaboration",
    description:
      "Encourage collaboration across disciplines and sectors to address emerging educational challenges.",
  },
];

const scopeRows = [
  {
    icon: <FaGraduationCap />,
    area: "AI in Teaching and Learning",
    topics:
      "Intelligent tutoring systems, adaptive learning, personalized learning, AI-enhanced instruction, learning analytics, and learner modelling.",
  },
  {
    icon: <FaClipboardCheck />,
    area: "Assessment and Evaluation",
    topics:
      "Automated grading, intelligent assessment, learning analytics for assessment, feedback systems, and educational data mining.",
  },
  {
    icon: <FaLaptopCode />,
    area: "AI Technologies and Tools",
    topics:
      "Natural language processing, computer vision, machine learning, deep learning, chatbots, virtual agents, and AI educational platforms.",
  },
  {
    icon: <FaUniversity />,
    area: "Educational Administration",
    topics:
      "AI in decision making, institutional management, student support systems, policy design, and resource optimization.",
  },
  {
    icon: <FaBalanceScale />,
    area: "Ethics and Policy",
    topics:
      "Ethical issues, bias and fairness, data privacy, responsible AI, AI governance, and policy frameworks.",
  },
  {
    icon: <FaBrain />,
    area: "Emerging Trends",
    topics:
      "Generative AI in education, AI for inclusive education, human-AI collaboration, future of AI in education.",
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
  },
};

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const staggerItem = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideFromLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideFromRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <PageTransition>
      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden ">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${aboutHero})`,
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

                  <span className="text-white">About the Journal</span>
                </div>

                <h1 className="text-[36px] font-[600] leading-[1.1] tracking-[-1px] text-white sm:text-[40px] lg:text-[42px]">
                  About the Journal
                </h1>

                <div className="mt-3 h-[3px] w-[42px] bg-[#ff6b00] rounded-full" />

                <p className="mt-6 max-w-[520px] text-[17px] font-[400] leading-[1.55] text-white sm:text-[17px]">
                  Artificial Intelligence Education Research
                  <br className="hidden sm:block" />
                  and Review (AIERRR)
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

        {/* About and overview */}
        <section className="px-5 py-8 sm:px-8 lg:px-12 lg:py-8 xl:px-16">
          <div className="mx-auto grid max-w-[1380px] items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            {/* About content */}
           <motion.div
  variants={slideFromLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.2,
  }}
>
              <SectionHeading title="About the Journal" />

              <div className="mt-5  text-[13px] font-[400] leading-7 text-[#334357] sm:text-[14px]">
                <p>
                  Artificial Intelligence Education Research and Review
                  (AIERRR) is a peer-reviewed, open access journal dedicated to
                  advancing the theory, research, and practice of artificial
                  intelligence in education.
               
                  The journal provides a platform for researchers, educators,
                  practitioners, and policymakers to share innovative ideas,
                  empirical studies, and practical applications that explore
                  the role of AI in teaching, learning, assessment, and
                  educational administration.
                </p>
              </div>
            </motion.div>

            {/* Overview card */}
            <motion.div
  variants={slideFromRight}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.2,
  }}
  whileHover={{
    y: -5,
    boxShadow: "0 18px 45px rgba(5, 46, 105, 0.12)",
  }}
  transition={{
    duration: 0.3,
  }}
  className="rounded-[8px] border border-[#dce4ef] bg-white p-5 shadow-[0_7px_24px_rgba(10,43,84,0.08)] sm:p-6"
>
              <h2 className="mb-2 text-[18px] font-[600] text-[#0c3372]">
                Journal Overview
              </h2>

             <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.15,
  }}
  className="overflow-hidden rounded-[5px] border border-[#e1e6ed]"
>
                {overviewItems.map((item, index) => (
                 <motion.div
  key={item.label}
  variants={staggerItem}
  whileHover={{
    backgroundColor: "#f5f6f7",
    x: 5,
    transition: { duration: 0.2 }
  }}
                    className={`grid grid-cols-[38px_100px_1fr]  items-center text-[11px] sm:grid-cols-[42px_130px_1fr] sm:text-[12px] ${
                      index !== overviewItems.length - 1
                        ? "border-b border-[#e2e7ee]"
                        : ""
                    }`}
                  >
                    <motion.div
  whileHover={{
    scale: 1.2,
    rotate: 8
  }}
  transition={{
    type: "spring",
    stiffness: 350
  }}
  className="flex h-full min-h-[42px] items-center justify-center border-r border-[#e2e7ee] text-[14px] text-[#264fa3]"
>
                      {item.icon}
                    </motion.div>

                    <div className="flex min-h-[42px] items-center border-r border-[#e2e7ee] px-3 font-[500] text-[#334155]">
                      {item.label}
                    </div>

                    <div className="flex min-h-[42px] items-center px-3 font-[600] text-[#19243a]">
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Aims and Scope */}
        <section className="px-5 pb-10 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1380px]">
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.6,
              }}
            >
              <SectionHeading title="Aims and Scope" />
            </motion.div>

            {/* Aims */}
            <div className="mt-6">
              <h3 className="mb-2 text-[17px] font-[600] text-[#2966ce]">
                Aims
              </h3>

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
                className="overflow-hidden rounded-[7px] border border-[#dce4ee]"
              >
                {aims.map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      backgroundColor: "#f5f9ff",
                    }}
                    className={`grid grid-cols-1 sm:grid-cols-[58px_220px_1fr] ${
                      index !== aims.length - 1
                        ? "border-b border-[#dce4ee]"
                        : ""
                    }`}
                  >
                    <div className="flex min-h-[48px] items-center justify-center border-b border-[#dce4ee] text-[17px] text-[#274fa1] sm:border-b-0 sm:border-r">
                      {item.icon}
                    </div>

                    <div className="flex min-h-[48px] items-center border-b border-[#dce4ee] px-4 text-[12px] font-[600] text-[#123a7b] sm:border-b-0 sm:border-r">
                      {item.title}
                    </div>

                    <div className="flex min-h-[48px] items-center px-4 py-3 text-[11px] leading-[1.65] text-[#354052] sm:text-[12px]">
                      {item.description}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Scope */}
            <div className="mt-8">
              <h3 className="mb-2 text-[17px] font-[600] text-[#2966ce]">
                Scope
              </h3>

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
                className="overflow-hidden rounded-[7px] border border-[#d9e1ec]"
              >
                {/* Desktop table */}
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true
  }}
  className="hidden md:block"
>                  <div className="grid grid-cols-[58px_275px_1fr] bg-[#082d68] text-[12px] font-[600] text-white">
                    <div className="flex min-h-[38px] items-center justify-center border-r border-white/15">
                      <FaBookOpen />
                    </div>

                    <div className="flex min-h-[38px] items-center border-r border-white/15 px-4">
                      Area
                    </div>

                    <div className="flex min-h-[38px] items-center px-4">
                      Topics Include
                    </div>
                  </div>

                  {scopeRows.map((item, index) => (
                    <motion.div
                      key={item.area}
                      whileHover={{
                        backgroundColor: "#f3f8ff",
                      }}
                      className={`grid grid-cols-[58px_275px_1fr] ${
                        index !== scopeRows.length - 1
                          ? "border-b border-[#dce4ee]"
                          : ""
                      }`}
                    >
                      <div className="flex min-h-[54px] items-center justify-center border-r border-[#dce4ee] text-[17px] text-[#274fa1]">
                        {item.icon}
                      </div>

                      <div className="flex min-h-[54px] items-center border-r border-[#dce4ee] px-4 text-[12px] font-[600] text-[#173d7d]">
                        {item.area}
                      </div>

                      <div className="flex min-h-[54px] items-center px-4 py-3 text-[12px] leading-[1.55] text-[#354052]">
                        {item.topics}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Mobile cards */}
                <div className="space-y-3 bg-[#f7f9fc] p-3 md:hidden">
                  {scopeRows.map((item) => (
                    <motion.div
                      key={item.area}
                      whileHover={{
                        y: -3,
                      }}
                      className="rounded-[6px] border border-[#dce4ee] bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-[#274fa1]">
                          {item.icon}
                        </div>

                        <h4 className="text-[13px] font-[600] text-[#173d7d]">
                          {item.area}
                        </h4>
                      </div>

                      <p className="mt-3 text-[12px] leading-[1.7] text-[#465165]">
                        {item.topics}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

const SectionHeading = ({ title }) => {
  return (
    <div>
      <h2 className="text-[22px] font-[600] tracking-[-0.3px] text-[#0b3473] sm:text-[24px]">
        {title}
      </h2>

      <div className="mt-2 h-[3px] w-[36px] rounded-full bg-[#ff6b00]" />
    </div>
  );
};

export default About;