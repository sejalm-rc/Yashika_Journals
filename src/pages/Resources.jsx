import { motion } from "framer-motion";
import {
  FaFileDownload,
  FaFilePdf,
  FaFileWord,
  FaVideo,
  FaQuestionCircle,
  FaBookOpen,
  FaGavel,
  FaShieldAlt,
  FaChevronRight,
} from "react-icons/fa";
import {
  FiFileText,
  FiUser,
  FiUsers,
  FiShield,
  FiDownload,
  FiArrowRight,
   FiImage,
  FiEdit,
  FiCheckCircle,
  FiClipboard,
   FiLock,
FiVolume2,
  FiHelpCircle, FiMail
  } from "react-icons/fi";
import {
  BsFiletypePdf,
  BsFiletypeDocx,
  BsFiletypePptx,
} from "react-icons/bs";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";
import bg from "../assets/yashika-publication-resources-banner.webp"
import {Link} from "react-router-dom"
import cta from "../assets/yashika-publication-call-to-action-banner.webp"

const authorResources = [
  {
    title: "Author Instructions (PDF)",
    desc: "Detailed guidelines for manuscript preparation, submission, and publication process.",
    type: "PDF",
    size: "562 KB",
    icon: <FiFileText />,
    fileIcon: <BsFiletypePdf />,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Copyright Transfer Agreement",
    desc: "Download the copyright transfer form required for publication.",
    type: "PDF",
    size: "198 KB",
    icon: <FiCheckCircle />,
    fileIcon: <BsFiletypePdf />,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Manuscript Template (Word)",
    desc: "Use our template to format your manuscript as per journal requirements.",
    type: "DOCX",
    size: "78 KB",
    icon: <FiFileText />,
    fileIcon: <BsFiletypeDocx />,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Checklist for Submission",
    desc: "Ensure your manuscript meets all the requirements before submission.",
    type: "PDF",
    size: "156 KB",
    icon: <FiClipboard />,
    fileIcon: <BsFiletypePdf />,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  {
    title: "Figure & Table Guidelines",
    desc: "Instructions for formatting figures, tables, and equations.",
    type: "PDF",
    size: "210 KB",
    icon: <FiImage />,
    fileIcon: <BsFiletypePdf />,
    bg: "bg-yellow-100",
    color: "text-yellow-500",
  },
  {
    title: "Reference Style Guide",
    desc: "Guidelines for citations and references (APA Style – 7th Edition).",
    type: "PDF",
    size: "142 KB",
    icon: <FiEdit />,
    fileIcon: <BsFiletypePdf />,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Cover Letter Sample",
    desc: "Download a sample cover letter for your submission.",
    type: "DOCX",
    size: "32 KB",
    icon: <FiEdit />,
    fileIcon: <BsFiletypeDocx />,
    bg: "bg-rose-100",
    color: "text-rose-500",
  },
  {
    title: "Graphical Abstract Template",
    desc: "Submit your graphical abstract using our official template.",
    type: "PPTX",
    size: "1.2 MB",
    icon: <FiFileText />,
    fileIcon: <BsFiletypePptx />,
    bg: "bg-cyan-100",
    color: "text-cyan-600",
  },
];



const quickAccess = [
  {
    title: "For Authors",
    desc: "Guidelines, templates and information for authors.",
    btn: "View Resources",
    icon: <FiFileText />,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "For Reviewers",
    desc: "Information and resources for reviewers.",
    btn: "View Resources",
    icon: <FiUser />,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Editorial Board",
    desc: "Join our editorial team and contribute.",
    btn: "Apply Now",
    icon: <FiUsers />,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Policies & Ethics",
    desc: "Publication policies and ethical guidelines.",
    btn: "View Resources",
    icon: <FiShield />,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  {
    title: "Templates & Forms",
    desc: "Download templates and useful forms.",
    btn: "View Resources",
    icon: <FiDownload />,
    bg: "bg-cyan-100",
    color: "text-cyan-600",
  },
];

const moreResources = [
  {
    title: "Policies & Ethics",
    icon: <FiShield />,
    color: "text-blue-600",
    list: [
      "Publication Ethics",
      "Plagiarism Policy",
      
      "Confidentiality Policy",
      "Malpractice Policy",
    ],
  },
  {
    title: "Open Access",
    icon: <FiLock />,
    color: "text-green-600",
    list: [
      "Open Access Policy",
      "License & Copyright",
      "Article Processing Charges",
      "Archiving & Preservation",
    ],
  },
  {
    title: "Editorial & Governance",
    icon: <FiUsers />,
    color: "text-purple-600",
    list: [
      "Editorial Board",
      "Aims & Scope",
      "Journal Statistics",
      "Peer Review Process",
    ],
  },
  {
    title: "Promotional Resources",
    icon: <FiVolume2 />,
    color: "text-orange-500",
    list: [
      "Journal Banner",
      "Call for Papers Template",
      "Social Media Kit",
      "Email Announcement",
    ],
  },
  {
    title: "Help & Support",
    icon: <FiHelpCircle />,
    color: "text-cyan-600",
    list: [
      "2AQ for Authors",
      "Submission Support",
      "Technical Guidelines",
      "Contact Editorial Office",
    ],
  },
];

const Resources = () => {
  return (
    <PageTransition>
      {/* HERO */}
       <section
           className="relative sm:min-h-[390px] min-h-[340px] bg-cover bg-center px-4 py-8 sm:px-8 lg:px-12"
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
      Resources
     </span>
   </div>
   
             <motion.h1
               initial={{ opacity: 0, y: 25 }}
               animate={{ opacity: 1, y: 0 }}
               className="mt-6 text-4xl font-[600] text-white sm:text-[40px] md:text-[40px] lg:text-[42px]"
             >
               Resources
             </motion.h1>
   
             <div className="mt-2 h-[2px] w-12 bg-[#ff9b21] rounded-full" />
   
           
   
             <motion.p
               initial={{ opacity: 0, y: 25 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="mt-6 max-w-[300px] text-sm leading-6 text-white/90"
             >
             Everything you need to publish, review, and stay updated with the Intelligent Learning Systems Journal. 
             </motion.p>
           </div>
         </section>

      {/* DOWNLOADS */}
  <section className="bg-white py-8 overflow-hidden">
  <div className="mx-auto max-w-[1190px] px-4">

    {/* Heading */}
    <div className="mb-8 text-center">
      <h2 className="sm:text-[25px] text-[20px] font-[600]  text-[#072a74]">
        Quick Access
      </h2>

      <div className="mx-auto mt-1 h-[3px] w-16 rounded-full bg-[#fcb017]" />
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

      {quickAccess.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: i * 0.08,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="group rounded-lg border border-[#edf0f8] bg-white px-5 py-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-[#0c4cc4] hover:shadow-[0_15px_45px_rgba(0,50,150,0.15)]"
        >
          {/* Icon */}
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${item.bg} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
          >
            <div className={`text-[30px] ${item.color}`}>
              {item.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-8 text-[17px] font-semibold text-[#072a74] leading-tight">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-3 min-h-[32px] text-[13px] leading-6 text-[#5f6475]">
            {item.desc}
          </p>

          {/* Button */}
          {/* <button className="mt-4 inline-flex items-center gap-3 font-semibold text-[14px] text-[#0c4cc4] transition-all duration-300 group-hover:gap-5">
            {item.btn}

            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </button> */}
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* POLICIES */}
    <section className="bg-white py-4">
      <div className="mx-auto max-w-[1190px] px-4 sm:px-4">
        <div className="mb-7 text-center">
          <h2 className="text-[20px] font-[600] text-[#062766] sm:text-[25px]">
            Author Resources
          </h2>
            <div className="mx-auto mt-1 h-[3px] w-16 rounded-full bg-[#fcb017]" />
        </div>

        <div className="overflow-hidden rounded-xl border border-[#e7ebf3] bg-white shadow-[0_8px_28px_rgba(8,35,85,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {authorResources.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group flex items-center gap-4 border-b border-[#e7ebf3] p-4 transition-all duration-300 hover:bg-[#f8fbff] sm:gap-5 sm:p-5 lg:[&:nth-last-child(-n+2)]:border-b-0 lg:odd:border-r"
              >
                <div
                  className={`flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color} text-[30px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold leading-snug text-[#062766]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px]  leading-6 text-[#20283a]">
                    {item.desc}
                  </p>
                </div>

                <div className="hidden h-16 w-px bg-[#e5e8ef] sm:block" />

                <button className="flex min-w-[110px] items-center justify-between rounded-lg border border-[#e7ebf3] bg-white px-5 py-1 text-left shadow-sm transition-all duration-300 hover:border-[#0b55cc] hover:shadow-md">
                  <span>
                    <span
                      className={`block text-[13px] ${
                        item.type === "PDF"
                          ? "text-red-500"
                          : item.type === "DOCX"
                          ? "text-blue-600"
                          : "text-blue-600"
                      }`}
                    >
                      {item.fileIcon}
                    </span>
                    <span className="mt-1 block text-[10px] font-bold text-[#1d2b44]">
                      {item.type}
                    </span>
                    <span className="block text-[11px] text-[#1d2b44]">
                      {item.size}
                    </span>
                  </span>

                  <FiDownload className="text-[#062766] transition-transform duration-300 group-hover:translate-y-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <div className="mt-5 text-center">
          <button className="group inline-flex items-center gap-3 text-[16px] font-bold text-[#0b55cc]">
            View All Author Resources
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div> */}
      </div>
    </section>

      {/* VIDEO TUTORIALS */}
   <section className="bg-white py-6">
      <div className="mx-auto max-w-[1190px] px-4 ">
        <div className="mb-7 text-center">
          <h2 className="text-[20px] font-[600] text-[#062766] sm:text-[25px]">
            More Resources
          </h2>
          <div className="mx-auto mt-1 h-[3px] w-16 rounded-full bg-[#f6a800]" />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {moreResources.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group flex min-h-[220px] flex-col rounded-xl border border-[#e8ecf4] bg-white px-5 py-5 shadow-[0_8px_28px_rgba(8,35,85,0.05)] transition-all duration-300 hover:border-[#0b55cc] hover:shadow-[0_16px_42px_rgba(8,35,85,0.13)]"
            >
              <div
                className={`mb-5 text-[36px] ${item.color} transition-all duration-300 group-hover:scale-110 `}
              >
                {item.icon}
              </div>

              <h3 className="mb-3 text-[15px] font-[600] leading-snug text-[#062766]">
                {item.title}
              </h3>

              <ul className="space-y-2 text-[12px] font-medium leading-5 text-[#101828]">
                {item.list.map((text, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#101828]" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              {/* <button className="mt-auto mx-4 inline-flex items-center gap-2 pt-3 text-[14px] font-semibold text-[#0b55cc] transition-all duration-300 group-hover:gap-4">
                View All <FiArrowRight />
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* FAQ CTA */}
     <section className="bg-white py-8">
      <div className="mx-auto max-w-[1180px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group flex flex-col items-center justify-between gap-6 overflow-hidden rounded-lg border border-[#b8cff4] bg-[#f7fbff] px-6 py-4 shadow-[0_6px_20px_rgba(8,35,85,0.04)] transition-all duration-300 hover:border-[#0b55cc] hover:shadow-[0_14px_38px_rgba(8,35,85,0.12)] md:flex-row md:px-10"
        >
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
            <img
              src={cta}
              alt="Need help"
              className="h-[86px] w-[240px] object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div>
              <h2 className="text-[20px] font-semibold text-[#062766]">
                Need Help?
              </h2>
              <p className="mt-2 max-w-[560px] text-[14px] font-medium leading-6 text-[#001b4d]">
                If you have any questions, our editorial team is here to assist you
                at every step of your publication journey.
              </p>
            </div>
          </div>
<Link to="/contact">
          <button className="inline-flex h-[48px] min-w-[165px] items-center justify-center gap-4 rounded-md bg-[#062766] px-7 text-[14px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b55cc] hover:shadow-xl">
            Contact Us
            <FiMail className="text-[18px]" />
          </button>
        </Link>
        </motion.div>
      </div>
    </section>
    </PageTransition>
  );
};

export default Resources;
