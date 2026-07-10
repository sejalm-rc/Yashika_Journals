import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaUsers,
  FaAward,
  FaFlag,
  FaGlobe,
  FaUnlockAlt,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaUserCheck,
  FaFileAlt,
  FaPaperPlane,
   FaChevronRight
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";

import HeroBg from "../assets/yashika-publication-about-us-banner.webp";
import WhoImage from "../assets/yashika-publication-about-company.webp";
import WhyImage from "../assets/yashika-publication-editorial-team.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: <FaCalendarAlt />,
    title: "12+ Years",
    desc: "of Publishing Excellence",
  },
  {
    icon: <FaGraduationCap />,
    title: "Specialized in AI, IT",
    desc: "& Education Publishing",
  },
  {
    icon: <FaUsers />,
    title: "Global Network of",
    desc: "Authors, Editors & Reviewers",
  },
  {
    icon: <FaAward />,
    title: "Commitment to",
    desc: "Quality, Integrity & Open Access",
  },
];

const milestones = [
  {
    year: "2006",
    icon: <FaFlag />,
    color: "bg-blue-100 text-blue-700 border-blue-200",
    text: "Yashika Publications was founded with a vision to promote quality research.",
  },
  {
    year: "2011",
    icon: <FaUsers />,
    color: "bg-orange-100 text-orange-600 border-orange-200",
    text: "Expanded our editorial board and launched our first set of journals in emerging fields.",
  },
  {
    year: "2016",
    icon: <FaGlobe />,
    color: "bg-blue-100 text-blue-700 border-blue-200",
    text: "Enhanced global collaborations and strengthened our peer review process.",
  },
  {
    year: "2021",
    icon: <FaUnlockAlt />,
    color: "bg-green-100 text-green-600 border-green-200",
    text: "Embraced Open Access publishing to ensure wider visibility and greater impact.",
  },
  {
    year: "2026",
    icon: <FaStar />,
    color: "bg-purple-100 text-purple-600 border-purple-200",
    text: "Continuing to innovate and set new standards in academic publishing excellence.",
  },
];

const trustCards = [
  {
    icon: <FaShieldAlt />,
    title: "Rigorous Quality",
    desc: "Strict peer review and editorial standards.",
  },
  {
    icon: <FaRocket />,
    title: "Global Reach",
    desc: "Authors and readers from 100+ countries.",
  },
  {
    icon: <FaChartLine />,
    title: "High Visibility",
    desc: "Indexed in leading databases for maximum impact.",
  },
  {
    icon: <FaUserCheck />,
    title: "Ethical Publishing",
    desc: "Transparency, integrity, and best practices.",
  },
];

const About = () => {
  return (
    <PageTransition>
      {/* HERO */}
      <section
        className="relative min-h-[380px] overflow-hidden bg-cover bg-center text-white md:min-h-[430px]"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#001f4f] via-[#002c68]/90 to-transparent" /> */}

        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-[1400px] items-center px-8  py-10 sm:px-8 lg:px-14 xl:px-16">
          <motion.div5
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* <p className="mb-6 text-[12px] font-[500]">
              Home &nbsp;›&nbsp; About Us
            </p> */}
            <div className="flex items-center gap-2 text-sm text-white/80 sm:mt-9 mt-5 mb-4">
  <Link
    to="/"
    className="transition duration-300 hover:text-[#ff9b21]"
  >
    Home
  </Link>

  <FaChevronRight className="text-[10px]" />

  <span className="font-medium text-white">
    About Us
  </span>
</div>

            <h1 className="text-[36px] font-[600] leading-tight sm:text-[40px] md:text-[44px]">
              About Us
            </h1>

            <div className="mt-4 h-1 w-12 bg-[#ff7a00]" />

            <h2 className="mt-4 text-[18px] font-[500] leading-snug md:text-[22px]">
              Advancing Knowledge,
              <br />
              Empowering Innovation.
            </h2>

            <p className="mt-4 max-w-lg font-medium text-[15px] leading-8 text-white/90">
              Yashika Publications is a trusted academic publisher committed to
              advancing research and education in the fields of Computer
              Science, Information Technology, and AI Education.
            </p>
          </motion.div5>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative mx-auto max-w-[1180px] bg-white px-8 py-10 sm:px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-[14px] font-[500] uppercase text-[#ff6b00]">
              Who We Are
            </p>

            <h2 className="mt-3 max-w-md text-[24px] font-[600] leading-tight text-[#00245d] md:text-[28px]">
              A Legacy of Excellence in Academic Publishing
            </h2>

            <div className="mt-5 h-1 w-12 bg-[#ff6b00]" />

            <p className="mt-6 text-[14px] leading-6 text-gray-700">
              With over 20 years of unwavering commitment, Yashika Publications
              has established itself as a leading academic publisher in India.
              We specialize in high-quality, peer-reviewed content that drives
              innovation and academic excellence in Computer Science, IT, and AI
              Education.
            </p>

            <p className="mt-4 text-[14px] leading-6 text-gray-700">
              Our mission is to empower researchers, academicians, and students
              by providing a global platform for knowledge sharing and impactful
              research.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="flex min-h-[165px] flex-col items-center justify-start border-gray-200 px-2 text-center sm:border-r sm:last:border-r-0"
                >
                  <div className="mb-4 flex h-12 items-center justify-center text-[34px] text-[#004aad]">
                    {item.icon}
                  </div>

                  <h4 className="flex h-[42px] items-center justify-center text-[12px] font-medium leading-5 text-[#061d45]">
                    {item.title}
                  </h4>

                  <p className="mt-2 flex h-[60px] items-start justify-center text-[12px] font-medium leading-5 text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative pb-14 sm:pb-12 lg:pb-0"
          >
            <img
              src={WhoImage}
              alt="Yashika Publications Office"
              className="h-[260px] w-full rounded-xl object-cover shadow-xl sm:h-[340px] lg:h-[400px]"
            />

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="absolute -bottom-2 left-4 right-4 flex items-center gap-4 rounded-2xl bg-[#052148] p-4 text-white shadow-2xl sm:left-8 sm:right-8 sm:p-5 lg:-bottom-10 lg:left-10 lg:right-10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/40 text-[26px] sm:h-16 sm:w-16 sm:text-3xl">
                <FaRocket />
              </div>

              <div>
                <h3 className="text-[15px] font-[500]">Our Commitment</h3>
                <p className="mt-1 text-[12px] leading-5 text-white/90 sm:leading-6">
                  To publish research that solves real-world challenges and
                  contributes to a smarter, more innovative future.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* MILESTONES */}
      <section className="bg-[#f7fbff] px-5 py-10">
        <div className="relative mx-auto  max-w-[1180px] px-8 py-10 sm:px-4">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[14px] font-[500] uppercase text-[#ff6b00]">
                Our Journey
              </p>

              <h2 className="mt-3 max-w-md text-[24px] font-[600] leading-tight text-[#00245d] md:text-[28px]">
                Milestones That Define Us
              </h2>

              <div className="mt-5 h-1 w-12 bg-[#ff6b00]" />

              <p className="mt-6 text-[14px] leading-6 text-gray-700">
                From a humble beginning to becoming a trusted name in academic
                publishing, our journey has been fueled by passion,
                perseverance, and purpose.
              </p>

              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                href="/journals"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#004aad] px-6 py-3 text-[12px] font-[500] text-white shadow-lg hover:bg-[#003b8f]"
              >
                Explore Our Journals →
              </motion.a>
            </motion.div>

            <div className="relative grid gap-10 md:grid-cols-5">
              <div className="absolute left-0 right-0 top-[82px] hidden h-px bg-gray-300 md:block" />

              {milestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.08 }}
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border text-[30px] shadow-sm ${item.color}`}
                  >
                    {item.icon}
                  </motion.div>

                  <div className="mx-auto mt-5 h-4 w-4 rounded-full bg-[#004aad] md:mt-6" />

                  <h3 className="mt-5 text-[14px] font-[500] text-[#061d45]">
                    {item.year}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-gray-700">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative mx-auto  max-w-[1180px] px-8 py-10 sm:px-4 bg-white">
        <div className="mx-auto grid items-center gap-8 lg:grid-cols-[250px_minmax(0,1fr)_270px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[14px] font-[500] uppercase text-[#ff6b00]">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-[24px] font-[600] leading-tight text-[#00245d] md:text-[28px]">
              Built on Trust.
              <br />
              Driven by Impact.
            </h2>

            <div className="mt-4 h-1 w-12 bg-[#ff6b00]" />

            <p className="mt-4 text-[14px] leading-6 text-gray-700">
              We combine global publishing standards with local insight to
              deliver a world-class publishing experience.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {trustCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 18px 35px rgba(0,74,173,.12)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex h-[200px] flex-col items-center rounded-[16px] border border-[#E8EDF5] bg-white px-2 py-4 text-center shadow-[0_4px_18px_rgba(0,0,0,0.05)]"
              >
                {/* Fixed Icon Area */}
                <div className="flex h-[44px] items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#004aad] text-[22px] text-[#004aad]">
                    {card.icon}
                  </div>
                </div>

                {/* Fixed Title Area */}
                <div className="mt-4 flex h-[40px] items-center justify-center">
                  <h3 className="text-[13px] font-[550] leading-5 text-[#061d45]">
                    {card.title}
                  </h3>
                </div>

                {/* Fixed Description Area */}
                <div className="mt-1 flex h-[70px] items-start justify-center">
                  <p className="text-[11px] leading-6 text-gray-700">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative  hidden h-[240px] w-[430px] overflow-hidden lg:block"
            style={{
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <img
              src={WhyImage}
              alt="Team Collaboration"
              className="h-full w-full object-cover object-right"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <div className="mb-6">
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

export default About;
