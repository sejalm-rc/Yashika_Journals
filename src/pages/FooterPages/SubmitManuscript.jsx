import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FileText,
  Mail,
  Paperclip,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRound,
} from "lucide-react";

import logo from "../../assets/yashika-publication-logo.webp";
import heroBg from "../../assets/yashika-journal-home-hero-banner.webp";
import editorialTeam from "../../assets/crossref-doi-registration.webp";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const submissionSteps = [
  {
    number: "01",
    icon: FileText,
    title: "Prepare Manuscript",
    text: "Format your manuscript according to the journal author guidelines.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Upload Files",
    text: "Upload the manuscript and all required supporting documents.",
  },
  {
    number: "03",
    icon: UserRound,
    title: "Author Details",
    text: "Provide accurate author, affiliation and correspondence information.",
  },
  {
    number: "04",
    icon: Send,
    title: "Final Submission",
    text: "Review the entered information and submit your manuscript.",
  },
];

const requirements = [
  "Original manuscript in Microsoft Word format",
  "Title, abstract and keywords",
  "Complete author and affiliation details",
  "Corresponding author email address",
  "Figures and tables in clear quality",
  "Reference list in the required format",
  "Conflict-of-interest declaration",
  "Ethical approval details where applicable",
];

const manuscriptTypes = [
  "Research Article",
  "Review Article",
  "Short Communication",
  "Case Study",
  "Technical Paper",
  "Editorial",
];

/* -------------------------------------------------------------------------- */
/*                                 ANIMATION                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function SubmitYourPaper() {
  const [formData, setFormData] = useState({
    authorName: "",
    email: "",
    phone: "",
    affiliation: "",
    country: "",
    manuscriptTitle: "",
    manuscriptType: "",
    journalName: "",
    abstract: "",
    message: "",
  });

  const [manuscriptFile, setManuscriptFile] = useState(null);
  const [supportingFile, setSupportingFile] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!agreed) {
      alert("Please confirm the submission declaration.");
      return;
    }

    setSubmitted(true);

    console.log({
      ...formData,
      manuscriptFile,
      supportingFile,
    });
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden bg-white text-[#10213D]"
    >
      {/* ================================================================== */}
      {/* HERO SECTION                                                       */}
      {/* ================================================================== */}

      {/* <section className="relative min-h-[340px] overflow-hidden bg-[#082D68]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,.42),transparent_30%),linear-gradient(115deg,#061B46_0%,#0B2C66_50%,transparent_50%)]" />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[56%]">
          <img
            src={reviewerBanner}
            alt="Submit research paper"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C66] via-[#0B2C66]/45 to-transparent lg:from-[#0B2C66]/65" />
        </div>

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [25, 28, 25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[38%] top-[-130px] hidden h-[560px] w-36 bg-blue-500/25 lg:block"
        />

        <div className="absolute left-[44%] top-[-120px] hidden h-[550px] w-1 rotate-[28deg] bg-[#F57C20] lg:block" />

        <div className="relative mx-auto flex min-h-[340px] max-w-[1260px] items-center px-5 py-14 sm:px-8 lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-[650px]"
          >
            <motion.img
              variants={fadeUp}
              src={logo}
              alt="Yashika Publications"
              className="mb-7 h-10 w-auto object-contain sm:h-12"
            />

            <motion.p
              variants={fadeUp}
              className="mb-3 text-[14px] font-[500] uppercase tracking-[0.2em] text-[#FFA65C]"
            >
              Manuscript Submission
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-white text-[36px] font-[600] leading-tight sm:text-[40px] md:text-[44px]"
            >
              Submit Manuscript
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mt-3 block h-1 w-14 rounded-full bg-[#F57C20]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[590px] text-[16px] font-[500] leading-7 text-white/90 sm:text-[18px]"
            >
              Submit your original research for expert peer review and global
              scholarly publication.
            </motion.p>
          </motion.div>
        </div>
      </section> */}

      <section className="relative overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />

        <div className="relative mx-auto min-h-[500px] max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid min-h-[500px] items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
            {/* Hero content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              className="relative z-10 max-w-[600px] py-14 lg:py-10"
            >
              <div className="mb-7 flex flex-wrap items-center gap-2 text-[14px] font-[500]">
                <Link
                  to="/"
                  className="text-[#ff7800] transition-colors duration-300 hover:text-white"
                >
                  Home
                </Link>

                <span className="text-white/80">›</span>
                 <span className="text-white">Open Access Policy</span>
               <span className="text-white/80">›</span>
                <span className="text-white"> Submit Manuscript</span>
              </div>

              <h1 className="text-[36px] font-[600] leading-[1.1] tracking-[-1px] text-white sm:text-[40px] lg:text-[42px]">
                Submit Manuscript
              </h1>

              <div className="mt-3 h-[3px] w-[42px] bg-[#ff6b00] rounded-full" />

              <p className="mt-5 max-w-[430px] text-[12px] leading-[1.8] text-white/80 sm:text-[13px]">
                Submit your original research for expert peer review and global
                scholarly publication.
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

      {/* ================================================================== */}
      {/* SUBMISSION STEPS                                                   */}
      {/* ================================================================== */}

      <section className="relative py-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
              <Sparkles size={14} />
              Submission Process
            </span>

            <h2 className="mx-auto mt-4 max-w-[500px] text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Submit Your Manuscript in Four Simple Steps
            </h2>

            <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Prepare all required information and files before beginning your
              manuscript submission.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-[2px] bg-gradient-to-r from-[#125FEA] via-[#F57C20] to-[#125FEA] lg:block" />

            {submissionSteps.map(
              ({ number, icon: Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                  }}
                  className="relative rounded-[24px] border border-slate-100 bg-white px-5 pb-6 pt-16 text-center shadow-[0_12px_32px_rgba(15,54,110,.10)]"
                >
                  <div
                    className={`absolute left-1/2 top-0 z-10 grid h-16 w-16 -translate-x-1/2 -translate-y-2 place-items-center rounded-full text-white ring-8 ring-white shadow-lg ${
                      index % 2 === 1
                        ? "bg-[#F57C20] shadow-orange-200"
                        : "bg-gradient-to-br from-[#216DED] to-[#092F70] shadow-blue-200"
                    }`}
                  >
                    <Icon size={25} />
                  </div>

                  <span className="mt-2 inline-block text-[11px] font-[500] uppercase tracking-[0.16em] text-[#125FEA]">
                    Step {number}
                  </span>

                  <h3 className="mt-3 text-[14px] font-[550] text-[#0B2C66]">
                    {title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-slate-600">
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* REQUIREMENTS AND FORM                                              */}
      {/* ================================================================== */}

      <section className="bg-[#F8FAFE] py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1260px] gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:px-10">
          {/* LEFT SIDE */}

          <motion.aside
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
            }}
            className="lg:sticky lg:top-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA] shadow-sm">
              <FileCheck2 size={14} />
              Before Submission
            </span>

            <h2 className="mt-4 max-w-[430px] text-[20px] font-[600] leading-tight text-[#0B2C66] sm:text-[24px] lg:text-[28px]">
              Manuscript Requirements
            </h2>

            <span className="mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Please confirm that your manuscript follows the journal guidelines
              and includes all required details.
            </p>

            <div className="mt-7 space-y-3">
              {requirements.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 5,
                  }}
                  className="flex items-start gap-3 rounded-[17px] border border-slate-100 bg-white px-4 py-3 shadow-[0_7px_22px_rgba(15,54,110,.07)]"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
                    <Check size={15} strokeWidth={3} />
                  </span>

                  <p className="text-[13px] leading-6 text-slate-600">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-[22px] border border-orange-100 bg-orange-50 p-5">
              <div className="flex items-start gap-4">
                <ShieldCheck
                  size={24}
                  className="mt-1 shrink-0 text-[#F57C20]"
                />

                <div>
                  <h3 className="text-[14px] font-[530] text-[#0B2C66]">
                    Submission Declaration
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    The submitted manuscript must be original and must not be
                    under consideration by another journal.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* FORM */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_18px_50px_rgba(15,54,110,.12)] sm:p-7 lg:p-8"
          >
            <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
              <div className="grid h-12 w-12 h-[48px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#216DED] to-[#092F70] text-white">
                <Upload size={20} />
              </div>

              <div>
                <h2 className="text-[21px] font-[600] text-[#0B2C66] sm:text-[24px]">
                  Manuscript Submission Form
                </h2>

                <p className="mt-2 text-[12px] leading-6 text-slate-600 sm:text-[13px]">
                  Complete all required fields and upload your manuscript.
                </p>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="py-16 text-center"
              >
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={40} />
                </div>

                <h3 className="mt-6 text-[22px] font-[600] text-[#0B2C66]">
                  Manuscript Submitted
                </h3>

                <p className="mx-auto mt-3 max-w-lg text-[13px] leading-7 text-slate-600">
                  Your manuscript information has been recorded successfully.
                  The editorial office will contact you after reviewing the
                  submission.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-xl bg-[#125FEA] px-6 py-3 text-[13px] font-[600] text-white transition hover:-translate-y-1 hover:bg-[#0B4FCB]"
                >
                  Submit Another Paper
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7">
                {/* AUTHOR INFORMATION */}

                <div>
                  <h3 className="flex items-center gap-3 text-[15px] font-[600] text-[#0B2C66]">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
                      1
                    </span>
                    Author Information
                  </h3>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="authorName"
                        className="mb-2 block text-[12px] font-[600] text-slate-700"
                      >
                        Corresponding Author Name *
                      </label>

                      <input
                        id="authorName"
                        name="authorName"
                        type="text"
                        required
                        value={formData.authorName}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[12px] font-[600] text-slate-700"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="author@example.com"
                        className="w-full rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[12px] font-[600] text-slate-700"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="mb-2 block text-[12px] font-[600] text-slate-700"
                      >
                        Country *
                      </label>

                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Enter country"
                        className="w-full rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="affiliation"
                        className="mb-2 block text-[12px] font-[600] text-slate-700"
                      >
                        Institution or Affiliation *
                      </label>

                      <input
                        id="affiliation"
                        name="affiliation"
                        type="text"
                        required
                        value={formData.affiliation}
                        onChange={handleChange}
                        placeholder="University, college or organization"
                        className="w-full rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                </div>

                {/* MANUSCRIPT INFORMATION */}

                <div className="mt-9 border-t border-slate-100 pt-7">
                  <h3 className="flex items-center gap-3 text-[15px] font-[600] text-[#0B2C66]">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
                      2
                    </span>
                    Manuscript Information
                  </h3>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="manuscriptTitle"
                        className="mb-2 block text-[12px] font-[600] text-slate-700"
                      >
                        Manuscript Title *
                      </label>

                      <input
                        id="manuscriptTitle"
                        name="manuscriptTitle"
                        type="text"
                        required
                        value={formData.manuscriptTitle}
                        onChange={handleChange}
                        placeholder="Enter complete manuscript title"
                        className="w-full rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="manuscriptType"
                        className="mb-2 block text-[12px] font-[600] text-slate-700"
                      >
                        Manuscript Type *
                      </label>

                      <select
                        id="manuscriptType"
                        name="manuscriptType"
                        required
                        value={formData.manuscriptType}
                        onChange={handleChange}
                        className="w-full rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="">Select manuscript type</option>

                        {manuscriptTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="journalName"
                        className="mb-2 block text-[12px] font-[600] text-slate-700"
                      >
                        Select Journal *
                      </label>

                      <select
                        id="journalName"
                        name="journalName"
                        required
                        value={formData.journalName}
                        onChange={handleChange}
                        className="w-full rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="">Select journal</option>
                        <option value="Yashika Journal of Science and Technology">
                          Yashika Journal of Science and Technology
                        </option>
                        <option value="Yashika Journal of Management Research">
                          Yashika Journal of Management Research
                        </option>
                        <option value="Yashika Journal of Engineering Studies">
                          Yashika Journal of Engineering Studies
                        </option>
                        <option value="Yashika Journal of Multidisciplinary Research">
                          Yashika Journal of Multidisciplinary Research
                        </option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="abstract"
                        className="mb-2 block text-[12px] font-[600] text-slate-700"
                      >
                        Abstract *
                      </label>

                      <textarea
                        id="abstract"
                        name="abstract"
                        required
                        rows={5}
                        value={formData.abstract}
                        onChange={handleChange}
                        placeholder="Enter manuscript abstract"
                        className="w-full resize-none rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] leading-6 outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                </div>

                {/* FILE UPLOAD */}

                <div className="mt-9 border-t border-slate-100 pt-7">
                  <h3 className="flex items-center gap-3 text-[15px] font-[600] text-[#0B2C66]">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
                      3
                    </span>
                    Upload Manuscript
                  </h3>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <label className="group cursor-pointer rounded-[20px] border-2 border-dashed border-blue-200 bg-blue-50/50 p-6 text-center transition hover:border-[#125FEA] hover:bg-blue-50">
                      <input
                        type="file"
                        accept=".doc,.docx,.pdf"
                        required
                        onChange={(event) =>
                          setManuscriptFile(event.target.files?.[0] || null)
                        }
                        className="hidden"
                      />

                      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#125FEA] text-white transition group-hover:scale-110">
                        <Upload size={22} />
                      </div>

                      <h4 className="mt-4 text-[13px] font-[600] text-[#0B2C66]">
                        Manuscript File *
                      </h4>

                      <p className="mt-2 text-[11px] leading-5 text-slate-500">
                        DOC, DOCX or PDF
                      </p>

                      {manuscriptFile && (
                        <p className="mt-3 break-all text-[11px] font-[600] text-[#125FEA]">
                          {manuscriptFile.name}
                        </p>
                      )}
                    </label>

                    <label className="group cursor-pointer rounded-[20px] border-2 border-dashed border-orange-200 bg-orange-50/50 p-6 text-center transition hover:border-[#F57C20] hover:bg-orange-50">
                      <input
                        type="file"
                        accept=".doc,.docx,.pdf,.zip,.jpg,.jpeg,.png"
                        onChange={(event) =>
                          setSupportingFile(event.target.files?.[0] || null)
                        }
                        className="hidden"
                      />

                      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#F57C20] text-white transition group-hover:scale-110">
                        <Paperclip size={22} />
                      </div>

                      <h4 className="mt-4 text-[13px] font-[600] text-[#0B2C66]">
                        Supporting File
                      </h4>

                      <p className="mt-2 text-[11px] leading-5 text-slate-500">
                        Figures, tables or supplementary files
                      </p>

                      {supportingFile && (
                        <p className="mt-3 break-all text-[11px] font-[600] text-[#F57C20]">
                          {supportingFile.name}
                        </p>
                      )}
                    </label>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[12px] font-[600] text-slate-700"
                    >
                      Message to the Editorial Office
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Add any important information about your submission"
                      className="w-full resize-none rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] leading-6 outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* DECLARATION */}

                <div className="mt-7 rounded-[18px] border border-slate-200 bg-slate-50 p-4">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(event) => setAgreed(event.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#125FEA]"
                    />

                    <span className="text-[12px] leading-6 text-slate-600">
                      I confirm that this manuscript is original, has not been
                      published previously and is not currently under
                      consideration by another journal.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-[14px] bg-gradient-to-r from-[#125FEA] to-[#082D68] px-6 py-4 text-[13px] font-[600] text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
                >
                  Submit Manuscript
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SUPPORT CTA                                                        */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#071F58] py-11 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(34,104,235,.45),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(245,124,32,.18),transparent_25%)]" />

        <motion.div
          animate={{
            x: [0, 18, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-12 -top-24 h-72 w-72 rounded-full border border-blue-200/20"
        />

        <div className="relative mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-7 px-5 text-center sm:px-8 lg:flex-row lg:px-10 lg:text-left">
          <div className="flex max-w-3xl flex-col items-center gap-5 sm:flex-row">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/25 bg-white/10">
              <BookOpen size={31} />
            </div>

            <div>
              <h2 className="text-[18px] font-[550] sm:text-[20px]">
                Need Help Before Submission?
              </h2>

              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                Review the author guidelines or contact the editorial office for
                manuscript preparation support.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/author-guidelines"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-4 py-3 text-[12px] font-[500] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35]"
            >
              Author Guidelines
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 px-4 py-3 text-[12px] font-[500] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66]"
            >
              Contact Editorial Office
              <Mail size={17} />
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
