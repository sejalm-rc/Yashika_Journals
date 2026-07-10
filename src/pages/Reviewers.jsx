import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMedal,
  FaCertificate,
  FaGlobe,
  FaBookOpen,
  FaUsers,
  FaHandHoldingHeart,
  FaEnvelopeOpenText,
  FaFileAlt,
  FaClipboardCheck,
  FaUserFriends,
  FaAward,
  FaTrophy,
  FaPaperPlane,
  FaUserCheck,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewerHero from "../assets/yashika-publication-reviewers-banner.webp";
import r1 from "../assets/yashika-publication-email-icon.webp";

const benefits = [
  {
    icon: <FaMedal />,
    title: "Enhance Your Profile",
    desc: "Gain recognition for your expertise and strengthen your academic reputation.",
    color: "border-[#bcd4ff] bg-[#eaf3ff] text-[#004aad]",
  },
  {
    icon: <FaCertificate />,
    title: "Recognition & Certificates",
    desc: "Receive certificates and acknowledgment for your valuable contributions.",
    color: "border-[#bcd4ff] bg-[#eaf3ff] text-[#004aad]",
  },
  {
    icon: <FaGlobe />,
    title: "Global Exposure",
    desc: "Be part of a global network of researchers and subject matter experts.",
    color: "border-[#bcd4ff] bg-[#eaf3ff] text-[#004aad]",
  },
  {
    icon: <FaBookOpen />,
    title: "Access to Research",
    desc: "Get early access to the latest research in your field of expertise.",
    color: "border-[#bcd4ff] bg-[#eaf3ff] text-[#004aad]",
  },
  {
    icon: <FaUsers />,
    title: "Professional Growth",
    desc: "Improve your reviewing skills and stay updated with research trends.",
    color: "border-[#bcd4ff] bg-[#eaf3ff] text-[#004aad]",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Make an Impact",
    desc: "Help maintain research quality and shape the future of your discipline.",
    color: "border-[#bcd4ff] bg-[#eaf3ff] text-[#004aad]",
  },
];

const process = [
  {
    icon: <FaEnvelopeOpenText />,
    step: "1.",
    title: "Invitation",
    desc: "You will receive an invitation to review a manuscript that matches your expertise.",
    color: "border-[#bcd4ff] bg-[#eaf3ff] text-[#004aad]",
  },
  {
    icon: <FaFileAlt />,
    step: "2.",
    title: "Accept & Review",
    desc: "Accept the invitation and submit your review within the given timeline.",
    color: "border-[#ffd1a8] bg-[#fff2e7] text-[#ff6b00]",
  },
  {
    icon: <FaClipboardCheck />,
    step: "3.",
    title: "Submit Feedback",
    desc: "Provide constructive and confidential feedback to help improve the manuscript.",
    color: "border-[#b7e7c0] bg-[#eaf9ed] text-[#22a447]",
  },
  {
    icon: <FaUserFriends />,
    step: "4.",
    title: "Editorial Decision",
    desc: "Your review helps our editors make informed decisions about the manuscript.",
    color: "border-[#d7c3ff] bg-[#f3ecff] text-[#7b46d8]",
  },
  {
    icon: <FaAward />,
    step: "5.",
    title: "Recognition",
    desc: "Receive acknowledgment and continue contributing to quality research.",
    color: "border-[#aeeaf0] bg-[#e9fbfd] text-[#069aa8]",
  },
];

const stats = [
  {
    icon: <FaUsers />,
    value: "200+",
    label: "Expert Reviewers",
    sub: "Worldwide",
    color: "text-[#20a852]",
  },
  {
    icon: <FaFileAlt />,
    value: "1000+",
    label: "Manuscripts",
    sub: "Reviewed",
    color: "text-[#7442c8]",
  },
  {
    icon: <FaBookOpen />,
    value: "5+",
    label: "High-quality Journals in",
    sub: "Diverse Disciplines",
    color: "text-[#ff6b00]",
  },
  {
    icon: <FaTrophy />,
    value: "100%",
    label: "Commitment to Ethical",
    sub: "Publishing",
    color: "text-[#004aad]",
  },
];

const testimonials = [
  {
    image: r1,
    text: "Reviewing for Yashika Publications has been a rewarding experience. The editorial team is professional, supportive, and responsive.",
    name: "Dr. Rajeev Sharma",
    role: "Professor, Computer Science",
    country: "India",
  },
  {
    image: r1,
    text: "I appreciate the timely process and recognition I receive for my reviews. It's a great platform for researchers.",
    name: "Dr. Maria Gonzalez",
    role: "Associate Professor, Education",
    country: "Spain",
  },
  {
    image: r1,
    text: "The quality of submissions and the transparent review process make Yashika Publications stand out.",
    name: "Dr. Ahmed Khan",
    role: "Research Scientist, AI & ML",
    country: "UAE",
  },
  {
    image: r1,
    text: "Reviewing for Yashika Publications has been a rewarding experience. The editorial team is professional, supportive, and responsive.",
    name: "Dr. Dhiraj Kumar",
    role: "Professor, Computer Science",
    country: "India",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const Reviewers = () => {
  return (
    <PageTransition>
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${ReviewerHero})` }}
      >
        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-[1400px] items-center px-4 py-10 sm:min-h-[420px] sm:px-8 lg:min-h-[430px] lg:px-14 xl:px-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-[560px]"
          >
            <div className="flex items-center gap-2 text-sm text-white/80 sm:mt-9 mt-5 mb-4">
              <Link
                to="/"
                className="transition duration-300 hover:text-[#ff9b21]"
              >
                Home
              </Link>

              <FaChevronRight className="text-[10px]" />

              <span className="font-medium text-white">For Reviewers</span>
            </div>

            <h1 className="text-[36px] font-[600] leading-tight sm:text-[40px] md:text-[44px]">
              For Reviewers
            </h1>

            <div className="mt-4 h-1 w-12 bg-[#ff7a00]" />

            <h2 className="mt-4 text-[18px] font-[500] leading-snug md:text-[22px]">
              Be a part of quality publishing.
              <br />
              Make a global impact.
            </h2>

            <p className="mt-5 max-w-[375px] text-[14px] font-medium leading-7 text-white/90 sm:text-[15px]">
              Your expertise helps us maintain the highest standards of research
              and drive innovation forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY REVIEW */}
      <section className="bg-white px-4 py-12 sm:px-5 lg:py-14">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[330px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mt-2 text-[24px] font-[600] leading-tight text-[#00245d] md:text-[28px]">
              Why Review with
              <br />
              Yashika Publications?
            </h2>

            <div className="mt-5 h-1 w-12 bg-[#ff6b00]" />

            <p className="mt-6 text-[14px] leading-6 text-gray-700">
              We value reviewers as the backbone of scholarly publishing. Join a
              global community of experts and contribute to advancing research
              and knowledge.
            </p>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="mt-8 rounded-[14px] bg-[#fff4e7] p-7 shadow-[0_10px_35px_rgba(255,107,0,0.12)]"
            >
              <h3 className="text-[18px] font-[550] text-[#00245d]">
                We Value Your Expertise
              </h3>
              <div className="mt-2 text-[46px] leading-none text-[#ff6b00]">
                “
              </div>
              <p className="-mt-10 pl-6 text-[14px] italic leading-7 text-gray-700">
                Every review you complete helps ensure that only high-quality,
                ethical and original research is published.
              </p>
              <div className="ml-6 mt-3 h-px w-12 bg-[#00245d]/20" />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex min-h-[180px] flex-col items-center justify-start border-gray-200 px-6 text-center sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <div
                  className={`flex h-[60px] w-[60px] items-center justify-center rounded-full border text-[28px] shadow-sm ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-[14px] font-[550] text-[#061d45]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[210px] text-[13px] leading-6 text-gray-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-4 pb-10 sm:px-5">
        <div className="mx-auto max-w-[1180px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-[24px] font-[600] leading-tight text-[#00245d] md:text-[28px]"
          >
            How the Review Process Works
          </motion.h2>

          <div className="mx-auto mt-3 h-1 w-10 bg-[#ff6b00]" />

          <div className="relative mt-9 grid gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-5">
            <div className="absolute left-[8%] right-[8%] top-[42px] hidden border-t-2 border-dotted border-[#9aa8b9] md:block" />

            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative z-10 text-center"
              >
                <div
                  className={`mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border text-[28px] shadow-sm ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-[14px] font-[550] text-[#061d45]">
                  {item.step} {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[170px] text-[13px] leading-6 text-gray-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white px-4 py-7 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-[1180px] items-center gap-6 rounded-[16px] bg-[#f4f8ff] p-7 shadow-[0_8px_30px_rgba(0,74,173,0.08)] lg:grid-cols-[260px_1fr]"
        >
          <div>
            <h2 className="mt-2 text-[24px] font-[600] leading-tight text-[#00245d] md:text-[26px]">
              Your Knowledge.
              <br />
              Their Future.
              <br />
              Our Impact.
            </h2>
            <div className="mt-4 h-1 w-12 bg-[#ff6b00]" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                className="flex flex-col items-center justify-center border-gray-300 px-4 text-center lg:border-r lg:last:border-r-0"
              >
                <div className={`text-[42px] ${item.color}`}>{item.icon}</div>
                <h3 className="mt-3 text-[24px] font-[500] text-[#00245d]">
                  {item.value}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-gray-800">
                  {item.label}
                  <br />
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white px-4 py-8 sm:px-5">
        <div className="mx-auto max-w-[1180px]">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[24px] font-[600] text-[#00245d] md:text-[28px]"
          >
            Voices of Our Reviewers
          </motion.h2>

          <div className="mx-auto mt-3 h-1 w-10 bg-[#ff6b00]" />

          <div className="relative mt-10">
           <button className="review-prev absolute -left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 lg:flex">
  <FaChevronLeft className="text-[#00245d]" />
</button>

<button className="review-next absolute -right-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 lg:flex">
  <FaChevronRight className="text-[#00245d]" />
</button>

           <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation={{
    nextEl: ".review-next",
    prevEl: ".review-prev",
  }}
  pagination={{
    clickable: true,
    el: ".review-pagination",
  }}
  loop={true}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
  spaceBetween={20}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {testimonials.map((item, i) => (
    <SwiperSlide key={i}>
      <motion.div
        whileHover={{
          y: -8,
          boxShadow: "0 20px 45px rgba(0,74,173,.12)",
        }}
        transition={{ duration: 0.35 }}
        className="h-full rounded-[14px] border border-[#edf2fa] bg-[#f8fbff] p-7"
      >
        <FaQuoteLeft className="mb-4 text-[24px] text-[#0a3da9]" />

        <p className="min-h-[108px] text-[14px] leading-7 text-[#4d5667]">
          {item.text}
        </p>

        <div className="mt-2 flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
          />

          <div>
            <h4 className="text-[15px] font-[550] text-[#0a3da9]">
              {item.name}
            </h4>

            <p className="mt-1 text-[13px] text-[#444]">
              {item.role}
            </p>

            <p className="text-[13px] text-[#555]">
              {item.country}
            </p>
          </div>
        </div>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

            {/* Dots */}

            <div className="review-pagination mt-8 flex justify-center">
              <span className="h-3 w-3 rounded-full bg-[#0a3da9]" />

              <span className="h-3 w-3 rounded-full bg-[#d5d9e3]" />

              <span className="h-3 w-3 rounded-full bg-[#d5d9e3]" />

              <span className="h-3 w-3 rounded-full bg-[#d5d9e3]" />
            </div>
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
                className="flex h-[75px] w-[75px] items-center justify-center rounded-full border-2 border-white/70 text-[38px]"
              >
                <FaFileAlt />
              </motion.div>

              <div>
                <h2 className="text-[24px] font-medium leading-tight sm:text-[24px]">
                  Ready to Review and Make a Difference?
                </h2>
                <p className="mt-1 max-w-[560px] text-[14px] font-medium leading-6 text-white/90 sm:text-[14px]">
                  Join our reviewer community and contribute to advancing
                  knowledge worldwide.
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
        </section>
      </div>
    </PageTransition>
  );
};

export default Reviewers;
