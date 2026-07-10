import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiFileText,
  FiUsers,
  FiMessageSquare,
  FiBookOpen,
  FiHelpCircle,
  FiAward,
  FiGlobe,
  FiShield,
  FiRefreshCw,
  FiChevronRight,
  FiSend,
   FiEdit3,
  FiList,
  FiCopy,
  FiCheckCircle,
  FiLock,
 
} from "react-icons/fi";

import {
  FaChevronRight,
  FaFileAlt,
  FaGoogle,
  FaPaperPlane,
} from "react-icons/fa";
import {
  HiOutlineDocumentText,
  HiOutlineUsers,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBookOpen,
  HiOutlineQuestionMarkCircle,
  HiOutlineTrophy,
} from "react-icons/hi2";
import PageTransition from "../components/PageTransition";
import bg from "../assets/yashika-publication-authors-banner.webp"
import l1 from "../assets/scopus-indexed-journal.webp"
import l2 from "../assets/doaj-indexed-journal.webp"
import l3 from "../assets/google-scholar-indexing.webp"
import l4 from "../assets/crossref-doi-registration.webp"
import l5 from "../assets/dimensions-indexed-journal.webp"
import l6 from "../assets/yashika-publication-publication-process.webp"


const authorCards = [
  {
    icon: <HiOutlineDocumentText />,
    title: "Easy Submission",
    desc: "Simple and user-friendly submission system.",
  },
  {
    icon: <HiOutlineUsers />,
    title: "Guidelines Policies",
    desc: "Clear author guidelines and publication policies.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight />,
    title: "Track Your Paper",
    desc: "Stay updated on your manuscript status.",
  },
  {
    icon: <HiOutlineBookOpen />,
    title: "Prepare Your Paper",
    desc: "Access templates, checklists and formatting resources.",
  },
  {
    icon: <HiOutlineQuestionMarkCircle />,
    title: "Get Support",
    desc: "Our team is here to help you at every step.",
  },
  {
    icon: <HiOutlineTrophy />,
    title: "Grow Your Impact",
    desc: "Maximize visibility and citations for your work.",
  },
];



const stats1 = [
  [<FiGlobe />, "100+", "Countries\nReached"],
  [<FiUsers />, "200+", "Editorial\nExperts"],
  [<FiFileText />, "5", "Journals\nin Emerging Tech"],
  [<FiAward />, "0%", "Strong Indexing\nfor Quality Publications"],
  [<FiShield />, "100%", "Ethical & Transparent\nPublishing"],
  [<FiRefreshCw />, "Fast", "Review &\nPublication"],
];

const resources = [
  [<FiEdit3 />, "Author Guidelines"],
  [<FiList />, "Formatting & Style Guide"],
  [<FiShield />, "Publication Ethics"],
  [<FiHelpCircle />, "Frequently Asked Questions"],
  [<FiFileText />, "Paper Templates"],
  [<FiCopy />, "Plagiarism Policy"],
  [<FiLock />, "Copyright Policy"],
  [<FiBookOpen />, "Open Access Policy"],
];
const indexes = [
  { name: "Scopus", img: l1, h: "h-[42px]" },
  { name: "DOAJ", img: l2, h: "h-[72px]" },
  { name: "Google Scholar", img: l3, h: "h-[62px]" },
  { name: "Crossref", img: l4, h: "h-[50px]" },
  { name: "Dimensions", img: l5, h: "h-[58px]" },
  { name: "ROAD", img: l6, h: "h-[62px]" },
];


const Authors = () => {
  return (
    <PageTransition>
      <main className="overflow-hidden bg-white text-[#061f5c]">
        {/* HERO */}
           <section
                className="relative min-h-[410px] bg-cover bg-center px-4 py-8 sm:px-8 lg:px-12"
                style={{
                  backgroundImage:
                    `url(${bg})`,
                }}
              >
                <div className="mx-auto max-w-[1240px]">
                 <div className="flex items-center gap-2 text-sm text-white/80 sm:mt-9 mt-5">
          <Link
            to="/"
            className="transition duration-300 hover:text-[#ff9b21]"
          >
            Home
          </Link>
        
          <FaChevronRight className="text-[10px]" />
        
          <span className="font-medium text-white">
            Our Authors
          </span>
        </div>
        
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-4xl font-[600] text-white sm:text-[40px] md:text-[40px] lg:text-[42px]"
                  >
                    For Authors
                  </motion.h1>
        
                  <div className="mt-2 h-[2px] w-12 bg-[#ff9b21] rounded-full" />
        
                  <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 text-[20px] font-medium text-white max-w-[350px]"
                  >
                    We’re here to support every step of your publishing journey.
                  </motion.h2>
        
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 max-w-[400px] text-sm leading-6 text-white/90"
                  >
                   Yashika Publications is committed to helping researchers share their
              work with the world through a smooth, fair, and transparent
              publishing experience.
                  </motion.p>
                </div>
              </section>
        

        {/* AUTHOR CARDS */}
       <section className="bg-white px-4 py-6 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-[1180px]">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-[24px] sm:text-[28px] font-[600] tracking-[-0.4px] text-[#082b73]">
        Everything You Need, All in One Place
      </h2>

      <div className="mx-auto mt-3 h-[3px] w-[42px] rounded-full bg-[#ff7a1a]" />
    </motion.div>

    <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-6">

      {authorCards.map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .45,
            delay: index * .07,
          }}
          whileHover={{
            y: -10,
          }}
          className="group relative overflow-hidden rounded-[14px] border border-[#e5e8ef] bg-white px-6 py-6 text-center shadow-[0_3px_12px_rgba(0,0,0,.05)] transition-all duration-300 hover:border-[#d3dff5] hover:shadow-[0_15px_40px_rgba(5,39,98,.15)]"
        >

          <motion.div
            whileHover={{
              rotate: -8,
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#0A43B8] text-[31px] text-white shadow-md"
          >
            {item.icon}
          </motion.div>

          <h3 className="mt-4 text-[14px] font-semibold leading-tight text-[#06285c]">
            {item.title}
          </h3>

          <p className=" mt-2 min-h-[78px] max-w-[190px] text-[13px] leading-6 text-[#444]">
            {item.desc}
          </p>

          <motion.div
            initial={{ width: 30 }}
            whileHover={{ width: 55 }}
            transition={{ duration: .3 }}
            className="mx-auto mt-3 h-[3px] rounded-full bg-[#0A43B8]"
          />

        </motion.div>

      ))}

    </div>
  </div>
</section>

        {/* PLATFORM + RESOURCES */}
        <section className="w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[14px] border border-[#e5e9f2] bg-white shadow-sm lg:grid-cols-[1fr_1.28fr]">

        {/* LEFT BLUE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[14px] bg-[#062b86] px-6 py-6 text-white sm:px-8 lg:rounded-r-none"
        >
        <div className="absolute inset-0 bg-gradient-to-br from-[#07266f] via-[#003b91]/90 to-[#001b58]" />

          <div className="relative z-10">
            <h2 className="text-[20px] font-semibold leading-tight sm:text-[22px]">
              Your Research. Our Global Platform.
            </h2>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3">
              {stats1.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -7, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className={`group flex min-h-[125px] flex-col items-center justify-center border-white/20 text-center
                    ${i < 3 ? "border-b" : ""}
                    ${i % 3 !== 2 ? "sm:border-r" : ""}
                    ${i % 2 === 0 ? "border-r sm:border-r" : "sm:border-r"}
                    ${i === 2 || i === 5 ? "sm:border-r-0" : ""}
                  `}
                >
                  <div className="text-[30px] text-white transition duration-300 group-hover:text-[#8ec5ff]">
                    {item[0]}
                  </div>

                  <h3 className="mt-3 text-[22px] font-semibold leading-none">
                    {item[1]}
                  </h3>

                  <p className="mt-2 whitespace-pre-line text-[11px] font-medium leading-[16px] text-white">
                    {item[2]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT RESOURCE AREA */}
        <div
          className="relative grid min-h-[360px] overflow-hidden bg-cover bg-center md:grid-cols-[1.1fr_.9fr]"
        
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative z-10 px-6 py-6 sm:px-8"
          >
            <h2 className="text-[20px] font-semibold leading-tight text-[#061f5c] sm:text-[24px]">
              Author Resources
            </h2>

            <div className="mt-1 h-[2px] w-9 bg-[#f58220]" />

            <p className="mt-3 text-[13px] font-medium text-[#202020]">
              Find everything you need to prepare and submit your best work.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {resources.map((r, i) => (
                <motion.button
                  key={i}
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex min-h-[42px] items-center justify-between rounded-[7px] border border-[#dfe6f1] bg-white px-3 text-left text-[12px] font-medium text-[#061f5c] shadow-[0_3px_10px_rgba(7,35,90,0.08)] transition hover:border-[#0646b4] hover:shadow-lg"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[20px] text-[#0646b4] transition group-hover:scale-110">
                      {r[0]}
                    </span>
                    {r[1]}
                  </span>

                  {/* <FiChevronRight className="text-[20px] text-[#0646b4] transition group-hover:translate-x-1" /> */}
                </motion.button>
              ))}
            </div>

          
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.65 }}
            className="hidden bg-cover bg-center md:block"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80')",
            }}
          />
        </div>
      </div>
    </section>

        {/* INDEXED */}
        <section className="bg-[#f7fbff] px-4 py-10 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1170px]">
        <motion.h2
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[24px] font-[600] text-[#061f5c] sm:text-[28px]"
        >
          Indexed In Leading Databases
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-2 h-[3px] rounded-full bg-[#ff7a1a]"
        />

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {indexes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0 14px 30px rgba(6,31,92,0.16)",
              }}
              className="group flex h-[98px] items-center justify-center rounded-[12px] border border-[#dfe8f3] bg-white px-5 shadow-[0_5px_15px_rgba(6,31,92,0.08)] transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className={`${item.h} max-w-full object-contain transition duration-300 group-hover:scale-105`}
              />
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>

        {/* CTA */}
           <div className="pb-6">
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
                 Have a  Research to Publish ?
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
             className="inline-flex h-[50px] sm:mr-10 mr-0 min-w-[220px] items-center justify-center text-white gap-3 rounded-[6px] bg-orange-400 px-6 text-[15px] font-semibold hover:text-[#063a70] shadow-xl transition duration-300 hover:bg-[#f2f7ff]"
           >
             Submit Your Paper <FaPaperPlane className="text-[18px]" />
           </motion.a>
         </motion.div>
       </section></div>
           
      </main>
    </PageTransition>
  );
};

export default Authors;