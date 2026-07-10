import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  CircleUserRound,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  PenTool,
  Send,
  UsersRound,
  X,
} from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";

import heroImg from "../assets/yashika-journal-home-hero-banner.webp";
import logo from "../assets/yashika-publication-logo.webp";

const leadership = [
  {
    role: "Editor-in-Chief",
    name: "Prof. (Dr.) Anil Kumar",
    institution: "Indian Institute of Technology",
    location: "Delhi, India",
    expertise:
      "Research Areas: AI in Education, Learning Analytics, Intelligent Tutoring Systems",
    icon: CircleUserRound,
  },
  {
    role: "Associate Editor",
    name: "Prof. (Dr.) Maria Soledad Ibarra",
    institution: "University of Salamanca",
    location: "Salamanca, Spain",
    expertise:
      "Research Areas: Educational Data Mining, Assessment Analytics, e-Learning",
    icon: PenTool,
  },
  {
    role: "Associate Editor",
    name: "Prof. (Dr.) Kwok-Wing Lai",
    institution: "The Education University",
    location: "of Hong Kong, Hong Kong",
    expertise:
      "Research Areas: Educational Technology, AI Applications, Teacher Professional Development",
    icon: UsersRound,
  },
  {
    role: "Managing Editor",
    name: "Dr. Ritu Sharma",
    institution: "Yashika Publications",
    location: "Indore, India",
    expertise:
      "Research Areas: Academic Publishing, Research Ethics, Open Science",
    icon: CircleUserRound,
  },
];

const boardMembers = [
  {
    name: "Prof. Dr. Nian-Shing Chen",
    affiliation: "National Taiwan Normal University",
    country: "Taiwan",
    expertise: "AI in Education, Intelligent Systems, Learning Analytics",
    image: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Prof. Dr. Begoña Gros",
    affiliation: "Universitat Oberta de Catalunya",
    country: "Spain",
    expertise: "Educational Innovation, e-Learning, Digital Transformation",
    image: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Prof. Dr. Derrick Goh",
    affiliation: "Nanyang Technological University",
    country: "Singapore",
    expertise:
      "AI Applications, Smart Learning Environments, Human-Computer Interaction",
    image: "https://i.pravatar.cc/120?img=15",
  },
  {
    name: "Prof. Dr. Jason Lodge",
    affiliation: "Edith Cowan University",
    country: "Australia",
    expertise: "Learning Design, Educational Technology, Online Learning",
    image: "https://i.pravatar.cc/120?img=11",
  },
  {
    name: "Prof. Dr. M. Shamim Kaiser",
    affiliation: "King Abdulaziz University",
    country: "Saudi Arabia",
    expertise: "Machine Learning, AI in Education, Data Science",
    image: "https://i.pravatar.cc/120?img=49",
  },
  {
    name: "Prof. Dr. Chandralal Hewawasam",
    affiliation: "University of Colombo",
    country: "Sri Lanka",
    expertise: "ICT in Education, AI Ethics, Curriculum Innovation",
    image: "https://i.pravatar.cc/120?img=13",
  },
];

const journalLinks = [
  { label: "About the Journal", path: "/about" },
  { label: "Editorial Board", path: "/editorial-board" },
  { label: "Current Issue", path: "/current-issue" },
  { label: "Archives", path: "/archives" },
  { label: "Indexing & Abstracting", path: "/indexing" },
  { label: "Contact", path: "/contact" },
];

const authorLinks = [
  { label: "Author Guidelines", path: "/author-guidelines" },
  { label: "Submit Manuscript", path: "/submit-manuscript" },
  { label: "Publication Ethics", path: "/publication-ethics" },
  { label: "Peer Review Process", path: "/peer-review" },
  { label: "Copyright Policy", path: "/copyright-policy" },
  { label: "Article Processing Charges", path: "/charges" },
];

const policyLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Use", path: "/terms" },
  { label: "Open Access Policy", path: "/open-access-policy" },
  { label: "Conflict of Interest", path: "/conflict-of-interest" },
  { label: "Plagiarism Policy", path: "/plagiarism-policy" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function SectionHeading({ children }) {
  return (
    <div className="mb-5">
      <h2 className="text-[16px] font-[600] uppercase tracking-[0.02em] text-[#075bc7] sm:text-[18px]">
        {children}
      </h2>
      <div className="mt-1 h-[3px] w-[40px] rounded-full bg-[#ff7900]" />
    </div>
  );
}

function Hero() {
  return (
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
            className="max-w-[650px]"
          >
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[13px] font-semibold">
              <Link to="/" className="text-[#ff7900] hover:text-[#ff9d3a]">
                Home
              </Link>
              <FaChevronRight className="text-[8px] text-white/70" />
              <span className="text-white font-[500]">Editorial Board</span>
            </div>

            <h1 className="max-w-[400px] text-[34px] font-[600] leading-[1.12] tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]">
              Editorial Board
            </h1>

            <div className="mt-2 h-[3px] w-[48px] rounded-full bg-[#ff7900]" />

            <p className="mt-4 max-w-[400px] text-[14px] font-medium leading-[1.8] text-white sm:text-[14px] lg:text-[18px]">
              Artificial Intelligence Education Research and Review (AIERRR)
            </p>

            <p className="mt-6 max-w-[500px] text-[14px] font-medium leading-[1.9] text-white/90 sm:text-[14px]">
              AIERRR is guided by a distinguished team of scholars and experts
              committed to maintaining the highest standards of academic
              excellence and integrity.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-1px] left-0 h-[40px] w-full bg-white [clip-path:ellipse(60%_45%_at_50%_100%)] sm:h-[55px]" />
    </section>
  );
}

function LeadershipCards() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
    >
      {leadership.map((member) => {
        const Icon = member.icon;

        return (
          <motion.article
            key={member.name}
            variants={fadeUp}
            whileHover={{
              y: -9,
              scale: 1.015,
              boxShadow: "0 18px 38px rgba(4, 48, 101, 0.16)",
            }}
            className="group flex min-h-[360px] flex-col items-center rounded-[7px] border border-[#dfe7f0] bg-white px-6 py-7 text-center shadow-[0_5px_16px_rgba(4,48,101,0.07)]"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.08 }}
              className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#eaf3ff] text-[#075ec2]"
            >
              <Icon className="h-[43px] w-[43px]" strokeWidth={1.7} />
            </motion.div>

            <p className="mt-5 text-[13px] font-[600] text-[#ff6200]">
              {member.role}
            </p>

            <h3 className="mt-4 text-[16px] font-[600] leading-[1.5] text-[#081d4b]">
              {member.name}
            </h3>

            <p className="mt-4 text-[13px] font-medium leading-[1.7] text-[#243653]">
              {member.institution}
              <br />
              {member.location}
            </p>

            <p className="mt-4 text-[13px] font-medium leading-[1.75] text-[#243653]">
              {member.expertise}
            </p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

function BoardTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65 }}
      className="overflow-hidden rounded-[7px] border border-[#dbe4ee] bg-white shadow-[0_5px_18px_rgba(4,48,101,0.07)]"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse">
          <thead>
            <tr className="bg-[#073b82] text-left text-white">
              <th className="w-[30%] border-r border-white/30 px-5 py-3 text-[13px] font-semibold">
                Name
              </th>
              <th className="w-[29%] border-r border-white/30 px-5 py-3 text-[13px] font-semibold">
                Affiliation
              </th>
              <th className="w-[13%] border-r border-white/30 px-5 py-3 text-[13px] font-semibold">
                Country
              </th>
              <th className="w-[28%] px-5 py-3 text-[13px] font-semibold">
                Research Expertise
              </th>
            </tr>
          </thead>

          <tbody>
            {boardMembers.map((member, index) => (
              <motion.tr
                key={member.name}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ backgroundColor: "#f2f7ff" }}
                className="border-b border-[#dfe6ef] last:border-b-0"
              >
                <td className="border-r border-[#dfe6ef] px-5 py-3">
                  <div className="flex items-center gap-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={member.image}
                      alt={member.name}
                      className="h-[42px] w-[42px] shrink-0 rounded-full border-2 border-white object-cover shadow-md"
                    />
                    <span className="text-[13px] font-[600] text-[#102753]">
                      {member.name}
                    </span>
                  </div>
                </td>

                <td className="border-r border-[#dfe6ef] px-5 py-3 text-[13px] font-medium leading-6 text-[#263957]">
                  {member.affiliation}
                </td>

                <td className="border-r border-[#dfe6ef] px-5 py-3 text-[13px] font-medium text-[#263957]">
                  {member.country}
                </td>

                <td className="px-5 py-3 text-[13px] font-medium leading-6 text-[#263957]">
                  {member.expertise}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[14px] font-[600] uppercase text-white">{title}</h3>
      <div className="mt-5 space-y-3">
        {links.map((item) => (
          <motion.div key={item.label} whileHover={{ x: 5 }}>
            <Link
              to={item.path}
              className="text-[13px] font-medium text-white/90 transition hover:text-[#ffab55]"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EditorialBoard() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-[#102753]">
      <main>
        <Hero />

        <section className="bg-white px-5 pb-14 pt-7 sm:pb-16 sm:px-8 lg:min-h-[500px] lg:px-14 xl:px-14">
          <div className="mx-auto max-w-[1400px]">
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-[1000px] text-center text-[13px] font-medium leading-[1.6] text-[#273a58] sm:text-[15px]"
            >
              Our editorial board comprises leading academics, researchers, and
              practitioners from around the globe.
              <br className="hidden sm:block" />
              Their collective expertise ensures rigorous peer review and
              upholds the quality of research we publish.
            </motion.p>

            <div className="mt-10">
              <SectionHeading>Editorial Leadership</SectionHeading>
              <LeadershipCards />
            </div>

            <div className="mt-10">
              <SectionHeading>Editorial Board Members</SectionHeading>
              <BoardTable />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-5 text-center text-[12px] font-medium text-[#273a58] sm:text-[13px]"
              >
                * Full list of Editorial Board Members is available in the
                journal.
              </motion.p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EditorialBoard;
