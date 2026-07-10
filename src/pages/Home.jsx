import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaUsers,
  FaChartLine,
  FaGlobeAsia,
  FaBolt,
  FaGlobe,
  FaHandshake,
  FaPenNib,
  FaLock,
  FaUserCheck,
  FaComments,
  FaSearch,
  FaEdit,
  FaBrain,
  FaDesktop,
  FaCloud,
  FaMicrochip,
  FaShieldAlt,
  FaFileAlt,
  FaArrowRight,
  FaAward,
  FaHeadset,
  FaPaperPlane,
  FaRegFileAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaBullseye,
} from "react-icons/fa";

import heroImg from "../assets/yashika-publication-home-hero-banner.webp";
import aboutImg from "../assets/yashika-publication-about-company.webp";
import { ArrowRight, BadgeCheck, BrainCircuit, ChartNoAxesCombined, CloudCog, FilePenLine, LockKeyhole, Monitor, Network, PencilLine, ShieldCheck, UsersRound } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};


const heroFeatures = [
  {
    icon: <FaAward />,
    title: "Global Standards",
    text: "COPE Membership",
  },
  {
    icon: <FaShieldAlt />,
    title: "Rigorous Peer",
    text: "Review Process",
  },
  {
    icon: <FaGlobe />,
    title: "High Impact",
    text: "& Visibility",
  },
  // {
  //   icon: <FaHeadset />,
  //   title: "Continuous",
  //   text: "Support",
  // },
];


const stats = [
  {
    icon: <FaBookOpen />,
    value: "5",
    title: "Journals",
    desc: "In Emerging Tech",
    color: "#0b8de3",
  },
  {
    icon: <FaUsers />,
    value: "200+",
    title: "Editorial Board",
    desc: "International Experts",
    color: "#ff6b00",
  },
  {
    icon: <FaRegFileAlt />,
    value: "0%",
    title: "Strong Indexing",
    desc: "For Quality Publications",
    color: "#1677d2",
  },
  {
    icon: <FaGlobe />,
    value: "Global Readership",
    title: "",
    desc: "Across 100+ Countries",
    color: "#37b34a",
  },
  {
    icon: <FaChartLine />,
    value: "High Impact Visibility",
    title: "",
    desc: "Riveting Elsevier & Springer",
    color: "#ff6b00",
  },
  {
    icon: <FaBolt />,
    value: "Fast & Efficient Publication",
    title: "",
    desc: "Timely & Transparent",
    color: "#8e5cf7",
  },
];
const aboutFeatures = [
  {
    icon: <FaCalendarAlt />,
    title: "20+",
    desc: "Years of Excellence",
  },
  {
    icon: <FaGraduationCap />,
    title: "Specialized in",
    desc: "AI, IT & Education Industries",
  },
  {
    icon: <FaUsers />,
    title: "Global Network",
    desc: "Authors, Editors & Reviewers",
  },
  {
    icon: <FaAward />,
    title: "Commitment to",
    desc: "Quality, Integrity & Open Access",
  },
];
const services = [
  {
    title: "Journal Publishing",
    desc: "High-quality, peer-reviewed journals in cutting-edge fields.",
    icon: <PencilLine size={34} strokeWidth={2.2} />,
    color: "#0874c9",
  },
  {
    title: "Open Access Publishing",
    desc: "Wider visibility and greater impact through open access.",
    icon: <LockKeyhole size={34} strokeWidth={2.2} />,
    color: "#ff6b12",
  },
  {
    title: "Author Services",
    desc: "End-to-end support for authors from Professional editing, & Submissions.",
    icon: <UsersRound size={34} strokeWidth={2.2} />,
    color: "#34ae5f",
  },
  {
    title: "Peer Review Management",
    desc: "Rigorous and transparent peer review by domain experts.",
    icon: <BadgeCheck size={34} strokeWidth={2.2} />,
    color: "#7c45c8",
  },
  {
    title: "Indexing & Visibility",
    desc: "Ensuring global indexing, high visibility and maximum impact.",
    icon: <ChartNoAxesCombined size={34} strokeWidth={2.2} />,
    color: "#08a5ad",
  },
  {
    title: "Editing & Production",
    desc: "Professional editing, formatting and production for quality publications.",
    icon: <FilePenLine size={34} strokeWidth={2.2} />,
    color: "#0874c9",
  },
];

const journals = [
  {
    title: "Journal of Artificial Intelligence Education (JAIE)",
    desc: "Exploring AI techniques, learning paradigms, and intelligent systems in education.",
    icon: <BrainCircuit size={50} strokeWidth={1.7} />,
    color: "from-[#0085d9] to-[#0068b8]",
  },
  {
    title: "Journal of Computer Science Education (JCSE)",
    desc: "Advancing computer science education through research, innovation and practice.",
    icon: <Monitor size={50} strokeWidth={1.7} />,
    color: "from-[#18a860] to-[#07884f]",
  },
  {
    title: "Journal of Information Technology & Learning (JITL)",
    desc: "Focuses on IT innovations, e-learning, and digital transformation in education.",
    icon: <CloudCog size={50} strokeWidth={1.7} />,
    color: "from-[#7a45d6] to-[#6030b7]",
  },
  {
    title: "Journal of Data Science & AI Applications (JDSAA)",
    desc: "Bridging data science, machine learning, and real-world applications in education.",
    icon: <Network size={50} strokeWidth={1.7} />,
    color: "from-[#0085d9] to-[#0068b8]",
  },
  {
    title: "Journal of Cyber Security Education & Research (JCSER)",
    desc: "Promoting cybersecurity awareness, education strategies, and secure digital environments.",
    icon: <ShieldCheck size={50} strokeWidth={1.7} />,
    color: "from-[#08aab0] to-[#078b96]",
  },
];

function Home() {
  return (
    <div className="w-full overflow-hidden bg-white text-[#09224a]">
      {/* HERO */}
     <section className="relative overflow-hidden bg-[#061f45]">
      <div
        className="relative min-h-[480px] bg-cover bg-center bg-no-repeat sm:min-h-[490px] lg:min-h-[500px]"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        

        <div className="relative z-10 mx-auto flex min-h-[490px] max-w-[1400px] items-center px-5 py-10 sm:min-h-[490px] sm:px-8 lg:min-h-[500px] lg:px-14 xl:px-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[640px]"
          >
            <motion.p
              whileHover={{ x: 5 }}
              className="mb-4 text-[18px] font-semibold leading-[1.35] text-[#ff8a00] sm:text-[20px] lg:text-[22px]"
            >
              Advancing Knowledge.
              <br />
              Empowering Innovation.
            </motion.p>

            <h1 className="max-w-[620px] text-[34px] font-[600] leading-[1.12] tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]">
              India’s Leading Publisher in Computer, IT & AI Education
            </h1>

            <p className="mt-4 max-w-[470px] text-[14px] font-medium leading-[1.8] text-white/85 sm:text-[14px] lg:text-[15px]">
              Yashika Publications is committed to publishing high-quality,
              impactful research that drives innovation and shapes the future of
              technology and education.
            </p>

            <div className="mt-6 grid max-w-[650px] grid-cols-2 gap-2 sm:grid-cols-4">
              {heroFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group flex items-center gap-2 border-r border-white/25 pr-3 last:border-r-0"
                >
                  <div className="text-[30px] text-[#4aa2ea] transition duration-300 group-hover:scale-110 group-hover:text-[#18b9ff]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-medium leading-tight text-white sm:text-[11px]">
                      {item.title}
                    </h4>
                    <p className="text-[9px] font-medium leading-tight text-white/75 sm:text-[10px]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,119,217,0.7)",
                }}
                whileTap={{ scale: 0.96 }}
                href="/journals"
                className="inline-flex h-[44px] items-center justify-center gap-3 rounded-[6px] bg-[#0077d9] px-7 text-[14px] font-semibold text-white shadow-lg transition duration-300 hover:bg-[#0064ba]"
              >
                Explore Our Journals <FaArrowRight />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 22px rgba(255,255,255,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                href="/authors"
                className="inline-flex h-[44px] items-center justify-center gap-3 rounded-[6px] border-2 border-white/45 bg-transparent px-8 text-[14px] font-semibold text-white transition duration-300 hover:bg-white hover:text-[#061f45]"
              >
                For Authors <FaArrowRight />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* STATS */}
    <section className="relative z-20 mx-auto -mt-4 max-w-[1190px] px-4 sm:-mt-12 lg:-mt-6">
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65 }}
    className="grid overflow-hidden rounded-[10px] border border-[#e7edf5] bg-white shadow-[0_14px_35px_rgba(15,35,70,0.16)] sm:grid-cols-2 lg:grid-cols-6"
  >
    {stats.map((item, index) => (
      <motion.div
        key={index}
        whileHover={{
          y: -7,
          scale: 1.02,
          boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
        }}
        transition={{ duration: 0.25 }}
        className="group flex min-h-[130px] items-center gap-4 border-b border-[#e7edf5] px-3 py-6 last:border-b-0 sm:last:border-b lg:border-b-0 lg:border-r lg:last:border-r-0"
      >
        <div
          className="shrink-0 text-[38px] transition duration-300 group-hover:scale-110"
          style={{ color: item.color }}
        >
          {item.icon}
        </div>

        <div>
          <h3 className="text-[16px] font-semibold leading-tight text-[#072b5f]">
            {item.value}
          </h3>

          {item.title && (
            <p className="mt-1 text-[12px] font-semibold leading-tight text-[#111827]">
              {item.title}
            </p>
          )}

          <p className="mt-2 text-[11px] font-medium leading-[1.5] text-[#64748b]">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* ABOUT */}
    <section className="mx-auto grid max-w-[1210px] grid-cols-1 items-center gap-6 px-5 py-10 lg:grid-cols-[0.95fr_1.15fr] lg:px-8 lg:py-10">
  {/* LEFT CONTENT */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <p className="text-[26px] font-semibold leading-tight text-[#004b9b]">
      About
    </p>

    <h2 className=" text-[28px] font-semibold leading-tight text-[#004b9b] sm:text-[32px]">
      Yashika Publications
    </h2>

    <div className="mt-2 h-[3px] w-[64px] bg-[#ff7a00] rounded-full" />

    <p className="mt-5 max-w-[430px] text-[14px] font-medium leading-[1.85] text-[#1f2937] sm:text-[15px]">
      With over 20 years of excellence, Yashika Publications has become a
      trusted name in academic publishing, specializing in Computer Science,
      Information Technology, and AI Education.
    </p>

    <div className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
      {aboutFeatures.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12, duration: 0.5 }}
          whileHover={{ y: -7, scale: 1.04 }}
          className="group border-r border-[#d8dee8] px-2  last:border-r-0"
        >
          <div className="mx-auto mb-3 text-[38px] text-[#005fc5] transition duration-300 group-hover:scale-110 group-hover:text-[#1356e8]">
            {item.icon}
          </div>

          <h4 className="text-[12px] font-semibold leading-5 text-[#111827]">
            {item.title}
          </h4>

          <p className="mt-1 text-[11px] font-medium leading-5 text-[#111827]">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

    <motion.a
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 24px rgba(0,95,197,0.45)",
      }}
      whileTap={{ scale: 0.96 }}
      href="/about"
      className="mt-10 inline-flex h-[50px] items-center justify-center gap-3 rounded-[6px] bg-[#0067c8] px-8 text-[15px] font-semibold text-white shadow-lg transition duration-300 hover:bg-[#0053a8]"
    >
      Learn More About Us <FaArrowRight />
    </motion.a>
  </motion.div>

  {/* RIGHT IMAGE */}
  <motion.div
    initial={{ opacity: 0, x: 45 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
    className="relative pb-28 sm:pb-24"
  >
    <motion.img
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      src={aboutImg}
      alt="Yashika Publications Office"
      className="h-[270px] w-full rounded-[18px] object-cover object-center shadow-[0_18px_45px_rgba(0,0,0,0.15)] sm:h-[350px] lg:h-[370px]"
    />

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="absolute bottom-10 left-4 rounded-[14px] bg-[#002b63] px-9 py-4 text-center text-white shadow-xl sm:left-8 lg:bottom-4"
    >
      <h3 className="text-[30px] font-semibold leading-none">20+</h3>
      <p className="mt-3 text-[15px]  leading-7">
        Years of <br />
        Publishing <br />
        Excellence
      </p>
      <div className="absolute -bottom-1 left-1/2 h-[8px] w-[86px] -translate-x-1/2 rounded-full bg-[#ff7a00]" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.35, duration: 0.6 }}
      whileHover={{ y: -6 }}
      className=" absolute bottom-0 right-0 flex max-w-[390px] items-center gap-5 rounded-[14px] bg-white px-7 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:right-3 lg:-bottom-6"
    >
      <p className="text-[14px]  leading-6 text-[#1f2937]">
        Our mission is to empower researchers and educators by publishing
        innovative research that solves real-world challenges and contributes to
        a smarter tomorrow.
      </p>

      <FaBullseye className="hidden shrink-0 text-[60px] text-[#005fc5] sm:block" />
    </motion.div>
  </motion.div>
</section>

      {/* SERVICES */}
         <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1160px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-[26px] font-[600] leading-tight text-[#004b9b] sm:text-[28px]"
        >
          Our Services
        </motion.h2>

        <div className="mx-auto mt-2 h-[3px] w-[38px] rounded-full bg-[#f28b21]" />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto mt-3 max-w-[760px] text-[13px] font-medium leading-6 text-[#09224a] sm:text-[15px]"
        >
          Comprehensive publishing solutions designed to support researchers and
          institutions.
        </motion.p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
              className="group flex min-h-[245px] flex-col items-center rounded-[12px] border border-[#e6e8ec] bg-white px-5 py-7 shadow-[0_4px_18px_rgba(9,34,74,0.13)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(9,34,74,0.22)]"
            >
              <motion.div
                whileHover={{ rotate: 8 }}
                className="flex h-[68px] w-[68px] items-center justify-center rounded-full text-white shadow-md"
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </motion.div>

              <h3 className="mt-6 min-h-[44px] text-center text-[15px] font-[600] leading-[21px] text-[#09224a]">
                {service.title}
              </h3>

              <div
                className="mt-4 h-[3px] w-[30px] rounded-full"
                style={{ backgroundColor: service.color }}
              />

              <p className="mt-5 text-center text-[12px] font-medium leading-[22px] text-[#2b2f36]">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* JOURNALS */}
       <section className="relative overflow-hidden bg-[#003b72] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="absolute right-6 top-5 hidden h-[135px] w-[135px] opacity-20 lg:block">
        <div className="grid grid-cols-10 gap-2">
          {Array.from({ length: 90 }).map((_, i) => (
            <span key={i} className="h-[3px] w-[3px] rounded-full bg-white/40" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1160px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-[26px] font-[600] leading-tight  sm:text-[28px]"
        >
          Our Journals
        </motion.h2>

        <div className="mx-auto mt-2 h-[3px] w-[48px] rounded-full bg-[#f28b21]" />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto mt-3 max-w-[670px] text-[12px] font-medium leading-5 text-white/90 sm:text-[13px]"
        >
          Five new peer-reviewed, open access journals dedicated to advancing
          research and innovation in Computer Science, IT, and AI Education.
        </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
  {journals.map((j, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{
        y: -10,
        scale: 1.03,
        transition: { duration: 0.25 },
      }}
      className="group overflow-hidden rounded-[18px] bg-white text-left text-[#09224a] shadow-[0_12px_28px_rgba(0,0,0,0.28)] transition-all duration-300 hover:shadow-[0_20px_42px_rgba(0,0,0,0.38)]"
    >
      <div
        className={`relative flex h-[110px] items-center justify-center bg-gradient-to-br ${j.color}`}
      >
        <motion.div
          whileHover={{ rotate: 6, scale: 1.12 }}
          transition={{ duration: 0.25 }}
          className="text-white"
        >
          {React.cloneElement(j.icon, {
            size: 55,
            strokeWidth: 1.7,
          })}
        </motion.div>

        {/* <span className="absolute bottom-[-1px] left-1/2 h-0 w-0 -translate-x-1/2 border-l-[13px] border-r-[13px] border-t-[13px] border-l-transparent border-r-transparent border-t-white" /> */}
      </div>

      <div className="min-h-[240px] rounded-t-[18px] bg-white px-6 pb-7 pt-4">
        <h3 className="min-h-[62px] text-[15px] font-semibold leading-[25px] text-[#09224a]">
          {j.title}
        </h3>

        <div
          className="mt-3 h-[3px] w-[32px] rounded-full"
          style={{ backgroundColor: j.lineColor || "#168bd2" }}
        />

        <p className="mt-6 min-h-[95px] text-[13px] font-medium leading-[26px] text-[#202733]">
          {j.desc}
        </p>

        <p className="mt-6 whitespace-nowrap text-[14px] font-semibold leading-none text-[#ff6b12]">
          View Details <ArrowRight size={18} className="inline-block" />
        </p>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>

      {/* CTA */}
      <div className="py-6">
    <section className="relative overflow-hidden bg-[#004b93] px-5 py-8 text-white sm:py-8 ">
  <div className="absolute right-0 top-0 h-full w-[240px] opacity-35 ">
    <div className="h-full w-full bg-[radial-gradient(circle,#28b8ff_2px,transparent_2px)] [background-size:18px_18px]" />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative z-10 mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-7 md:flex-row"
  >
    <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
      <motion.div
        whileHover={{ scale: 1.08, rotate: 3 }}
        className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white/70 text-[44px]"
      >
        <FaFileAlt />
      </motion.div>

      <div>
        <h2 className="text-[24px] font-medium leading-tight sm:text-[26px]">
          Ready to Publish Your Research?
        </h2>
        <p className="mt-1 max-w-[560px] text-[14px] font-medium leading-6 text-white/90 sm:text-[14px]">
          Join thousands of researchers worldwide who trust <br className="hidden sm:block" />
          Yashika Publications for quality and impact.
        </p>
      </div>
    </div>

    <motion.a
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 25px rgba(255,255,255,0.45)",
      }}
      whileTap={{ scale: 0.96 }}
      href="/journals"
      className="inline-flex h-[50px] sm:mr-10 mr-0 min-w-[220px] items-center justify-center gap-3 rounded-[6px] bg-white px-6 text-[15px] font-semibold text-[#063a70] shadow-xl transition duration-300 hover:bg-[#f2f7ff]"
    >
      Submit Your Paper <FaPaperPlane className="text-[18px]" />
    </motion.a>
  </motion.div>
</section></div>
    </div>
  );
}

export default Home;