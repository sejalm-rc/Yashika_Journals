import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaUnlockAlt,
  FaUser,
  FaUserCheck,
  FaChartLine,
  FaEdit,
  FaFileSignature,
  FaUsers,
  FaCheckCircle,
  FaPenNib,
  FaGlobe,
  FaTrophy,
  FaShieldAlt,
  FaFileAlt,
  FaPaperPlane,
  FaChevronRight
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";

import ServicesHero from "../assets/yashika-publication-manuscript-submission.webp";
import service2 from "../assets/yashika-publication-peer-review-service.webp";
import service3 from "../assets/yashika-publication-copy-editing-service.webp";
import service4 from "../assets/yashika-publication-journal-publication-service.webp";
import service5 from "../assets/yashika-publication-open-access-publishing.webp";
import service6 from "../assets/yashika-publication-indexing-support.webp";
import service7 from "../assets/yashika-publication-research-support.webp";
import howEWork from "../assets/yashika-publication-peer-review-process.webp"

const services = [
  {
    icon: <FaEdit />,
    title: "Journal Publishing",
    desc: "High-quality, peer-reviewed journals across Computer Science, IT, and AI Education.",
    image: service2,
    color: "bg-[#0057b8]",
  },
  {
    icon: <FaUnlockAlt />,
    title: "Open Access Publishing",
    desc: "Increase visibility and impact with open access options for wider dissemination.",
    image: service3,
    color: "bg-[#ff6b1a]",
  },
  {
    icon: <FaUser />,
    title: "Author Services",
    desc: "Guidance at every step from Professional editing, & Submissions.",
    image: service4,
    color: "bg-[#36a95b]",
  },
  {
    icon: <FaUserCheck />,
    title: "Peer Review Management",
    desc: "Rigorous, transparent, and fair peer review by domain experts.",
    image: service7,
    color: "bg-[#7442c8]",
  },
  {
    icon: <FaChartLine />,
    title: "Indexing & Visibility",
    desc: "Ensure global indexing and maximum visibility for your research.",
    image: service5,
    color: "bg-[#069aa8]",
  },
  {
    icon: <FaFileSignature />,
    title: "Editing & Production",
    desc: "Professional editing, typesetting, and production for publication excellence.",
    image: service6,
    color: "bg-[#0057b8]",
  },
];

const process = [
  { icon: <FaFileSignature />, step: "01", title: "Submission", desc: "Authors submit their manuscript through our easy online system." },
  { icon: <FaUsers />, step: "02", title: "Peer Review", desc: "Expert reviewers evaluate the manuscript for quality and originality." },
  { icon: <FaCheckCircle />, step: "03", title: "Decision", desc: "Timely decision with constructive feedback for improvement." },
  { icon: <FaPenNib />, step: "04", title: "Production", desc: "Professional editing, typesetting, and formatting for publication." },
  { icon: <FaGlobe />, step: "05", title: "Publication", desc: "Your research is published and made visible globally." },
];

const partner = [
  { icon: <FaTrophy />, title: "Quality First", desc: "Upholding the highest editorial and publication standards.", color: "text-[#004aad]" },
  { icon: <FaGlobe />, title: "Global Reach", desc: "Connecting research with readers in over 100+ countries.", color: "text-[#ff6b00]" },
  { icon: <FaShieldAlt />, title: "Ethical & Transparent", desc: "Ensuring integrity, transparency, and best publishing practices.", color: "text-[#16a34a]" },
  { icon: <FaUser />, title: "Researcher Focused", desc: "Dedicated support and resources for researchers and institutions.", color: "text-[#7c3aed]" },
];

const stats = [
  { icon: <FaBookOpen />, value: "5+", label: " Journals", sub: "In Emerging Tech" },
  { icon: <FaUsers />, value: "200+", label: "Editorial Experts", sub: "Across the Globe" },
  { icon: <FaGlobe />, value: "100+", label: "Countries", sub: "Global Readership" },
  { icon: <FaChartLine />, value: "0%", label: "Strong Indexing", sub: "for Quality Publications" },
  { icon: <FaCheckCircle />, value: "Fast", label: "Publishing", sub: "Timely & Transparent" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <PageTransition>
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${ServicesHero})` }}
      >
        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-[1400px] items-center px-4 py-10 sm:px-8  lg:px-14 xl:px-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-[600px]"
          >
             <div className="flex items-center gap-2 text-sm text-white/80 sm:mt-9 mt-5 mb-4">
  <Link
    to="/"
    className="transition duration-300 hover:text-[#ff9b21]"
  >
    Home
  </Link>

  <FaChevronRight className="text-[10px]" />

  <span className="font-medium text-white">
    Our Services
  </span>
</div>

            <h1 className="text-[36px] font-[600] leading-tight sm:text-[40px] md:text-[44px]">
              Our Services
            </h1>

            <div className="mt-4 h-1 w-12 bg-[#ff7a00]" />

            <h2 className="mt-4 text-[18px] font-[500] leading-snug md:text-[22px]">
              Comprehensive publishing solutions
              <br className="hidden sm:block" />
              designed to support researchers and institutions.
            </h2>

            <p className="mt-5 max-w-[560px] text-[15px] font-medium leading-7 text-white/90 sm:text-[15px]">
              From idea to impact, we provide end-to-end publishing services
              that ensure quality, visibility, and academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-4 py-10 sm:px-5 lg:py-10">
        <div className="mx-auto max-w-[1180px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[14px] font-[600] uppercase text-[#ff6b00]"
          >
            What We Offer
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-[24px] font-[600] leading-tight text-[#00245d] md:text-[28px]"
          >
            End-to-End Publishing Solutions
          </motion.h2>

          <div className="mx-auto mt-3 h-1 w-12 bg-[#ff6b00]" />

          <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-6 text-gray-700">
            We support every step of your research journey with expert services
            and world-class publishing standards.
          </p>

         <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
  {services.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.025 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.06 }}
      className="group flex h-[420px] flex-col overflow-hidden rounded-[14px] border border-[#E5EAF2] bg-white text-center shadow-[0_5px_20px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_18px_45px_rgba(0,74,173,0.18)]"
    >
      <div className="flex h-[205px] flex-col items-center px-4 pt-5">
  <div
    className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full ${item.color} text-[28px] text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
  >
    {item.icon}
  </div>

        <h3 className="mt-5 flex h-[48px] items-center justify-center text-[14px] font-[550] leading-5 text-[#061d45]">
          {item.title}
        </h3>

        <p className="mt-3 flex h-[58px] items-start justify-center text-[13px] leading-6 text-gray-700">
          {item.desc}
        </p>
      </div>

      <div className="mt-auto h-[155px] w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* PROCESS */}
<section className="bg-[#f4faff] px-4 py-10 sm:px-5 lg:py-12">
  <div className="mx-auto max-w-[1180px]">
    <div className="grid items-start gap-12 lg:grid-cols-[280px_1fr]">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[14px] font-[500] uppercase text-[#ff6b00]">
          How We Work
        </p>

        <h2 className="mt-3 text-[20px] font-[600] leading-tight text-[#00245d] md:text-[24px]">
          A Streamlined Process
          <br />
          Built Around You
        </h2>

        <div className="mt-4 h-1 w-12 bg-[#ff6b00]" />

        <p className="mt-5 text-[14px] leading-6 text-gray-700">
          Our efficient workflow ensures a smooth and transparent publishing
          experience.
        </p>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="mt-7 overflow-hidden rounded-[8px] shadow-sm"
        >
          <img
            src={howEWork}
            alt="Publishing Process"
            className="h-[155px] w-full object-cover object-center"
          />
        </motion.div>
      </motion.div>

      {/* Process Steps */}
      <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-5 lg:pt-6">
        <div className="absolute left-[8%] right-[8%] top-[67px] hidden border-t-2 border-dotted border-[#9aa8b9] md:block" />

        {process.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div
              className={`mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border text-[28px] shadow-sm ${
                i === 0
                  ? "border-[#bcd4ff] bg-[#eaf3ff] text-[#004aad]"
                  : i === 1
                  ? "border-[#ffd1a8] bg-[#fff2e7] text-[#ff6b00]"
                  : i === 2
                  ? "border-[#b7e7c0] bg-[#eaf9ed] text-[#22a447]"
                  : i === 3
                  ? "border-[#d7c3ff] bg-[#f3ecff] text-[#7b46d8]"
                  : "border-[#aeeaf0] bg-[#e9fbfd] text-[#069aa8]"
              }`}
            >
              {item.icon}
            </div>

            <span
              className={`mx-auto mt-4 flex h-7 w-7 items-center justify-center rounded-full border bg-white text-[11px] font-[500] ${
                i === 0
                  ? "border-[#004aad] text-[#004aad]"
                  : i === 1
                  ? "border-[#ff6b00] text-[#ff6b00]"
                  : i === 2
                  ? "border-[#22a447] text-[#22a447]"
                  : i === 3
                  ? "border-[#7b46d8] text-[#7b46d8]"
                  : "border-[#069aa8] text-[#069aa8]"
              }`}
            >
              {item.step}
            </span>

            <h3 className="mt-3 text-[14px] font-[550] text-[#061d45]">
              {item.title}
            </h3>

            <p className="mx-auto mt-2 max-w-[145px] text-[13px] leading-6 text-gray-700">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* WHY PARTNER */}
      <section className="bg-white px-4 py-12 sm:px-5 lg:py-14">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid items-center gap-8 lg:grid-cols-[270px_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[14px] font-[500] uppercase text-[#ff6b00]">
                Why Partner With Us
              </p>

              <h2 className="mt-3 w-[350px] text-[20px] font-[600] leading-tight text-[#00245d] md:text-[24px]">
                Committed to Quality.
                <br />
                Focused on Impact.
              </h2>

              <div className="mt-4 h-1 w-12 bg-[#ff6b00]" />

              <p className="mt-4 text-[14px] leading-5 text-gray-700">
                Our combine editorial excellence, innovative technology, and
                global outreach to help researchers share knowledge that shapes
                the future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {partner.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex min-h-[180px] flex-col items-center justify-center border-gray-200 px-5 text-center sm:border-r sm:last:border-r-0"
                >
                  <div className={`text-[48px] ${item.color}`}>{item.icon}</div>

                  <h3 className="mt-4 text-[14px] font-[550] text-[#061d45]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-gray-700">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-[#001c46] via-[#003b8f] to-[#004aad] px-4 py-9 text-white sm:px-5">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex items-center gap-4 border-white/20 px-2 text-center sm:text-left lg:border-r lg:last:border-r-0"
            >
              <div className="text-[38px] text-white/90">{item.icon}</div>
              <div>
                <h3 className="text-[20px] font-[500] leading-none text-[#ff7a00]">
                  {item.value}
                </h3>
                <p className="mt-1 text-[14px] font-[500]">{item.label}</p>
                <p className="mt-1 text-[12px] text-white/80">{item.sub}</p>
              </div>
            </motion.div>
          ))}
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
        className="flex h-[75px] w-[75px] items-center justify-center rounded-full border-2 border-white/70 text-[38px]"
      >
        <FaFileAlt />
      </motion.div>

      <div>
        <h2 className="text-[24px] font-medium leading-tight sm:text-[24px]">
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
    </PageTransition>
  );
};

export default Services;