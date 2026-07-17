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
  { name: "About the Journal", path: "/about" },
  { name: "Editorial Board", path: "/editorial-board" },
  { name: "Indexing & Abstracting", path: "/indexing-and-abstracting" },
  { name: "Current Issue", path: "/current-issue" },
  { name: "Archives", path: "/archives" },
  
];

const authorLinks = [
 
  {
    name: "Submit Manuscript",
    path: "/submit-manuscript",
    newTab: true,
  },
  {
    name: "Publication Ethics",
    path: "/publication-ethics",
    newTab: true,
  },
  {
    name: "Peer Review Process",
    path: "/peer-review-process",
    newTab: true,
  },
  {
    name: "Copyright Policy",
    path: "/copyright-policy",
    newTab: true,
  },
  {
    name: "Article Processing Charges",
    path: "/article-processing-charges",
    newTab: true,
  },
];

const policyLinks = [
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    newTab: true,
  },
  {
    name: "Terms of Use",
    path: "/terms-of-use",
    newTab: true,
  },
  {
    name: "Open Access Policy",
    path: "/open-access-policy",
    newTab: true,
  },
  {
    name: "Conflict of Interest",
    path: "/conflict-of-interest",
    newTab: true,
  },
  {
    name: "Plagiarism Policy",
    path: "/plagiarism-policy",
    newTab: true,
  },
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
              className="mb-3 h-[52px] w-auto object-contain"
            />

            <p className="max-w-[270px] text-[12px]  leading-[22px] text-white/90">
              Yashika Publications is committed to promoting high academic
              research and innovation across diverse disciplines through our
              peer reviewed journals.
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
          <FooterColumn title="POLICIES" links={policyLinks} />

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
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noopener noreferrer" : undefined}
              className="inline-block text-[12px] font-medium leading-[18px] text-white/90 transition-all duration-300 hover:translate-x-1 hover:text-orange-400 hover:underline"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Footer;

