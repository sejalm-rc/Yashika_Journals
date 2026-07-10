import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaHeart,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/yashika-publication-footer-logo.webp";
import bg from "../assets/yashika-publication-footer-background.webp";

const journalLinks = [
  
  { name: "About Us", path: "/about" },
  { name: " Services", path: "/services" },
  { name: " Journals", path: "/journals" },
  { name: " Authors", path: "/authors",  },
  { name: " Reviewers", path: "/reviewers", },
  { name: " Resources", path: "/resources", },
];

const authorLinks = [
  "Author Guidelines",
  "Submit Your Paper",
  "Publication Ethics",
  "Open Access Policy",
  "FAQ for Authors",
  
];

const policyLinks = [
  "Reviewers Guidelines",
  "Reviewer Process",
  "Benefits of Reviewers",
  "Reviewer Login",
 
];

const socials = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div
        className="relative bg-cover bg-center bg-no-repeat px-4 pt-6 pb-12 sm:px-6 lg:px-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <img
              src={logo}
              alt="Yashika Publications"
              className="mb-4 h-[42px] w-auto object-contain"
            />

            <p className="max-w-[270px] text-[12px]  leading-[22px] text-white/90">
              Yashika Publications is committed to promoting high 
              academic research and innovation across diverse disciplines
              through our peer reviewed journals.
            </p>

            <div className="mt-2 flex gap-2">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-[13px] text-white transition-all duration-300 hover:bg-white hover:text-[#0066ad]"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Journal */}
          <FooterColumn title="QUICK LINKS" links={journalLinks} />

          {/* Authors */}
          <FooterColumn title="FOR AUTHORS" links={authorLinks} />

          {/* Policies */}
          <FooterColumn title="FOR REVIEWERS" links={policyLinks} />

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            <h4 className="mb-4 text-[13px] font-[600] uppercase tracking-wide">
              CONTACT US
            </h4>

            <ul className="space-y-3 text-[13px] font-medium leading-[21px] text-white/90">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-white" />
                <span>
                  Yashika Publications
                  <br />
                 Wardha, Nagpur, Pune 
                </span>
              </li>
              <li className="flex items-center gap-3">
               <FaPhoneAlt className="shrink-0 text-white" />
                              <span className="text-[14px]">+91 99702 94396</span>
</li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-white" />
                <span>info@yashikapublications.com</span>
              </li>

              <li className="flex items-center gap-3">
                <FaGlobe className="shrink-0 text-white" />
                <span>www.yashikapublications.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
     
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <h4 className="mb-2 text-[13px] font-[600] uppercase tracking-wide">
        {title}
      </h4>

      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            {typeof link === "string" ? (
              <Link
                to="/"
                className="inline-block text-[12px] font-medium leading-[18px] text-white/90 transition-all duration-300 hover:translate-x-1 hover:text-orange-400 hover:underline"
              >
                {link}
              </Link>
            ) : (
              <Link
                to={link.path}
                className="inline-block text-[12px] font-medium leading-[18px] text-white/90 transition-all duration-300 hover:translate-x-1 hover:text-orange-400 hover:underline"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Footer;





// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaGlobe,
//   FaHeart,
// } from "react-icons/fa";

// import logo from "../assets/yashika-publication-footer-logo.webp";
// import bg from "../assets/yashika-publication-footer-background.webp";

// const journalLinks = [
//   {
//     name: "About the Journal",
//     path: "/about",
//   },
//   {
//     name: "Editorial Board",
//     path: "/editorial-board",
//   },
//   {
//     name: "Current Issue",
//     path: "/current-issue",
//   },
//   {
//     name: "Archives",
//     path: "/archives",
//   },
//   {
//     name: "Indexing & Abstracting",
//     path: "/indexing-and-abstracting",
//   },
//   {
//     name: "Contact",
//     path: "/contact",
//   },
// ];

// const authorLinks = [
//   {
//     name: "Author Guidelines",
//     path: "/author-guidelines",
//   },
//   {
//     name: "Submit Manuscript",
//     path: "/submit-manuscript",
//   },
//   {
//     name: "Publication Ethics",
//     path: "/publication-ethics",
//   },
//   {
//     name: "Peer Review Process",
//     path: "/peer-review-process",
//   },
//   {
//     name: "Copyright Policy",
//     path: "/copyright-policy",
//   },
//   {
//     name: "Article Processing Charges",
//     path: "/article-processing-charges",
//   },
// ];

// const policyLinks = [
//   {
//     name: "Privacy Policy",
//     path: "/privacy-policy",
//   },
//   {
//     name: "Terms of Use",
//     path: "/terms-of-use",
//   },
//   {
//     name: "Open Access Policy",
//     path: "/open-access-policy",
//   },
//   {
//     name: "Conflict of Interest",
//     path: "/conflict-of-interest",
//   },
//   {
//     name: "Plagiarism Policy",
//     path: "/plagiarism-policy",
//   },
// ];

// const socialLinks = [
//   {
//     name: "Facebook",
//     icon: <FaFacebookF />,
//     href: "https://www.facebook.com/",
//   },
//   {
//     name: "Twitter",
//     icon: <FaTwitter />,
//     href: "https://twitter.com/",
//   },
//   {
//     name: "LinkedIn",
//     icon: <FaLinkedinIn />,
//     href: "https://www.linkedin.com/",
//   },
//   {
//     name: "Email",
//     icon: <FaEnvelope />,
//     href: "mailto:editorial.err@yashikapublications.com",
//   },
// ];

// const Footer = () => {
//   return (
//     <footer className="relative w-full overflow-hidden bg-white">
//       {/* Main footer */}
//       <div
//         className="relative min-h-[270px] bg-[#0065b7] bg-cover bg-center bg-no-repeat px-5 pb-[55px] pt-8 sm:px-8 lg:px-12 xl:px-16"
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-9 text-white sm:grid-cols-2 lg:grid-cols-[1.45fr_0.9fr_1.08fr_0.95fr_1.45fr] lg:gap-8 xl:gap-12">
//           {/* Logo and description */}
//           <motion.div
//             initial={{ opacity: 0, y: 22 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.45 }}
//           >
//             <Link
//               to="/"
//               aria-label="Yashika Publications home"
//               className="inline-flex"
//             >
//               <img
//                 src={logo}
//                 alt="Yashika Publications"
//                 className="mb-3 h-[48px] w-auto max-w-[230px] object-contain transition-transform duration-300 hover:scale-[1.03]"
//               />
//             </Link>

//             <p className="max-w-[285px] text-[12px] font-[400] leading-[20px] text-white/95">
//               Yashika Publications is committed to promoting high-quality
//               academic research and innovation across diverse disciplines
//               through our peer-reviewed journals.
//             </p>

//             <div className="mt-3 flex items-center gap-2">
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.name}
//                   href={social.href}
//                   target={
//                     social.href.startsWith("http") ? "_blank" : undefined
//                   }
//                   rel={
//                     social.href.startsWith("http")
//                       ? "noopener noreferrer"
//                       : undefined
//                   }
//                   aria-label={social.name}
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   whileTap={{ scale: 0.92 }}
//                   className="flex h-[29px] w-[29px] items-center justify-center rounded-full border border-white/80 text-[12px] text-white transition-colors duration-300 hover:bg-white hover:text-[#0064b5]"
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           <FooterColumn
//             title="JOURNAL"
//             links={journalLinks}
//             delay={0.05}
//           />

//           <FooterColumn
//             title="FOR AUTHORS"
//             links={authorLinks}
//             delay={0.1}
//           />

//           <FooterColumn
//             title="POLICIES"
//             links={policyLinks}
//             delay={0.15}
//           />

//           {/* Contact section */}
//           <motion.div
//             initial={{ opacity: 0, y: 22 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.45, delay: 0.2 }}
//           >
//             <h4 className="mb-4 text-[12px] font-[700] uppercase tracking-[0.3px] text-white">
//               CONTACT US
//             </h4>

//             <ul className="space-y-[12px] text-[12px] font-[400] leading-[20px] text-white/95">
//               <li className="flex items-start gap-3">
//                 <FaMapMarkerAlt className="mt-[3px] shrink-0 text-[15px]" />

//                 <span>
//                   Yashika Publications
//                   <br />
//                   Indore, Madhya Pradesh, India
//                 </span>
//               </li>

//               <li className="flex items-start gap-3">
//                 <FaEnvelope className="mt-[3px] shrink-0 text-[15px]" />

//                 <a
//                   href="mailto:editorial.err@yashikapublications.com"
//                   className="break-all transition-colors duration-300 hover:text-[#ffb66c] hover:underline"
//                 >
//                   editorial.err@yashikapublications.com
//                 </a>
//               </li>

//               <li className="flex items-start gap-3">
//                 <FaGlobe className="mt-[3px] shrink-0 text-[15px]" />

//                 <a
//                   href="https://www.yashikapublications.com/aierr"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="break-all transition-colors duration-300 hover:text-[#ffb66c] hover:underline"
//                 >
//                   www.yashikapublications.com/aierr
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom copyright bar */}
//       <div className="relative z-10 -mt-[24px] bg-transparent px-5 pb-3 sm:px-8 lg:px-12 xl:px-16">
//         <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
//           <p className="text-[10px] font-[500] text-[#6b7280]">
//             © 2025 Yashika Publications. All Rights Reserved.
//           </p>

//           <p className="flex items-center justify-center gap-1 text-[10px] font-[500] text-[#6b7280]">
//             Designed with
//             <FaHeart className="text-[11px] text-red-500" />
//             for Research and Innovation
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const FooterColumn = ({ title, links, delay = 0 }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 22 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.45, delay }}
//     >
//       <h4 className="mb-3 text-[12px] font-[700] uppercase tracking-[0.3px] text-white">
//         {title}
//       </h4>

//       <ul className="space-y-[3px]">
//         {links.map((link) => (
//           <li key={link.path}>
//             <Link
//               to={link.path}
//               className="group inline-flex items-center text-[12px] font-[400] leading-[19px] text-white/95 transition-all duration-300 hover:translate-x-[4px] hover:text-[#ffb66c]"
//             >
//               <span className="relative">
//                 {link.name}

//                 <span className="absolute -bottom-[1px] left-0 h-px w-0 bg-[#ffb66c] transition-all duration-300 group-hover:w-full" />
//               </span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// };

// export default Footer;