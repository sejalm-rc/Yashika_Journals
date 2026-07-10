import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaComments,
  FaFileAlt,
  FaHandshake,
  FaUsers,
  FaBullhorn,
  FaMapMarkerAlt,
  FaGlobe,
  FaPaperPlane,
  FaHeadset,
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";

import ContactHero from "../assets/yashika-journal-home-hero-banner.webp";
// import ContactMap from "../assets/contactMap.png";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    value: "info@yashikapublications.com",
    href: "mailto:info@yashikapublications.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "+91 99702 94396",
    href: "tel:+919970294396",
  },
  {
    icon: <FaClock />,
    title: "Office Hours",
    value: "Mon – Sat : 10:00 AM – 6:00 PM (IST)",
  },
];

const enquiryCards = [
  {
    icon: <FaComments />,
    title: "Publication Enquiries",
    desc: "Get information about our journals and publishing process.",
    color: "border-[#c9ddff] bg-[#eaf3ff] text-[#075bc4]",
  },
  {
    icon: <FaFileAlt />,
    title: "Author Services",
    desc: "Assistance with submissions, guidelines, and publication.",
    color: "border-[#ffd5b3] bg-[#fff0e3] text-[#ff6b00]",
  },
  {
    icon: <FaHandshake />,
    title: "Partnerships & Collaborations",
    desc: "Explore opportunities for institutional and research partnerships.",
    color: "border-[#c9ddff] bg-[#eaf3ff] text-[#075bc4]",
  },
  {
    icon: <FaUsers />,
    title: "Reviewer Onboarding",
    desc: "Join our global network of expert reviewers.",
    color: "border-[#bce6cd] bg-[#e6f8ed] text-[#12a258]",
  },
  {
    icon: <FaBullhorn />,
    title: "General Enquiries",
    desc: "We’re here to help with any questions you may have.",
    color: "border-[#dfcbff] bg-[#f2eaff] text-[#7c3dc7]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@yashikapublications.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _captcha: "false",
            _template: "table",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Message failed");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("Message not sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      {/* HERO */}
      <section
        className="relative overflow-visible bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${ContactHero})`,
        }}
      >
        <div className="mx-auto flex min-h-[390px] max-w-[1400px] items-start px-4 pt-16 pb-28 sm:min-h-[430px] sm:px-8 lg:min-h-[430px] lg:px-14 xl:px-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="relative z-10 max-w-[470px]"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="text-[36px] font-[600]  leading-tight sm:text-[40px] md:text-[44px]"
            >
              Contact Us
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-2 h-1 bg-[#ff6b00]"
            />

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 text-[18px] font-[500] leading-snug md:text-[22px]"
            >
              We’re here to help and look forward to hearing from you.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 space-y-4"
            >
              {contactDetails.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href || undefined}
                  whileHover={{ x: 7 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="flex max-w-max items-center gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0874d6] text-[16px] text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
                    {item.icon}
                  </span>

                  <span>
                    <span className="block text-[13px] font-[500]">
                      {item.title}
                    </span>

                    <span className="block text-[11px] leading-5 text-white/95 sm:text-[12px]">
                      {item.value}
                    </span>
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative z-30 mt-[10px] bg-transparent px-4 pb-8 sm:px-5 ">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto grid max-w-[1180px] gap-8 rounded-[18px] bg-white p-6 shadow-[0_15px_45px_rgba(0,28,75,.14)] sm:p-8 lg:grid-cols-[320px_1fr] lg:p-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="mt-2 text-[24px] font-[600] leading-tight text-[#00245d] md:text-[28px]">
              Send Us a Message
            </h2>

            <div className="mt-2 h-[3px] rounded-full w-12 bg-[#ff6b00]" />

            <p className="mt-3 max-w-[260px] text-[13px] leading-6 text-gray-700">
              Have a question or need assistance? Fill out the form and our team
              will get back to you shortly.
            </p>

            <motion.div
              whileHover={{ y: -5 }}
              className="mt-5 hidden rounded-xl bg-[#f4f8ff] p-5 lg:block"
            >
              <FaHeadset className="text-[30px] text-[#075bc4]" />
              <p className="mt-3 text-[13px] leading-6 text-gray-700">
                Our support team is available during office hours to assist with
                your publishing enquiries.
              </p>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="h-[45px] w-full rounded-[8px] border border-[#e0e8f5] bg-[#f6f9ff] px-4 text-[13px] text-[#132b50] outline-none transition duration-300 placeholder:text-[#52647d] focus:border-[#075bc4] focus:bg-white focus:shadow-[0_0_0_3px_rgba(7,91,196,0.10)]"
              />

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="h-[45px] w-full rounded-[8px] border border-[#e0e8f5] bg-[#f6f9ff] px-4 text-[13px] text-[#132b50] outline-none transition duration-300 placeholder:text-[#52647d] focus:border-[#075bc4] focus:bg-white focus:shadow-[0_0_0_3px_rgba(7,91,196,0.10)]"
              />
            </div>

            <input
              required
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject *"
              className="h-[45px] w-full rounded-[8px] border border-[#e0e8f5] bg-[#f6f9ff] px-4 text-[13px] text-[#132b50] outline-none transition duration-300 placeholder:text-[#52647d] focus:border-[#075bc4] focus:bg-white focus:shadow-[0_0_0_3px_rgba(7,91,196,0.10)]"
            />

            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              rows={5}
              className="min-h-[110px] w-full resize-y rounded-[8px] border border-[#e0e8f5] bg-[#f6f9ff] px-4 py-4 text-[13px] text-[#132b50] outline-none transition duration-300 placeholder:text-[#52647d] focus:border-[#075bc4] focus:bg-white focus:shadow-[0_0_0_3px_rgba(7,91,196,0.10)]"
            />

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                  boxShadow: "0 12px 25px rgba(0,74,173,0.28)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-[42px] min-w-[180px] items-center justify-center gap-3 rounded-[6px] bg-[#034cac] px-6 text-[13px] font-[500] text-white transition hover:bg-[#003b8f] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[13px] font-[500] text-green-600"
                >
                  Your message has been sent successfully.
                </motion.p>
              )}

              {error && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[13px] font-[500] text-red-600"
                >
                  {error}
                </motion.p>
              )}
            </div>
          </motion.form>
        </motion.div>
      </section>

      {/* WHY REACH OUT */}
      <section className="bg-white px-4 py-10 sm:px-5">
        <div className="mx-auto max-w-[1180px]">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-2 text-[24px] font-[600] leading-tight text-[#00245d] md:text-[28px]"
          >
            Why Reach Out to Us?
          </motion.h2>

          <div className="mx-auto mt-2 h-[3px] rounded-full w-10 bg-[#ff6b00]" />

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {enquiryCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                  boxShadow: "0 18px 38px rgba(0,74,173,0.13)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group flex min-h-[180px] flex-col items-center rounded-[12px] border border-[#e7edf6] bg-white px-5 py-6 text-center shadow-[0_5px_18px_rgba(0,0,0,0.05)]"
              >
                <div
                  className={`flex h-[74px] w-[74px] shrink-0 -mt-10 items-center justify-center rounded-full border text-[32px] transition duration-300 group-hover:scale-110 ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-2 flex w-[50px] min-h-[44px] items-center justify-center text-[13px] font-[550] leading-5 text-[#00245d]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[12px] leading-6 text-gray-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE AND MAP */}
      <section className="bg-white px-4 pb-5 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[12px] shadow-[0_10px_35px_rgba(0,31,80,0.13)] lg:grid-cols-[390px_1fr]"
        >
          <div className="bg-gradient-to-br from-[#07316d] to-[#004d9c] p-7 text-white sm:p-8">
            <h2 className="text-[25px] font-[600]">Our Office</h2>

            <div className="mt-3 h-1 w-12 bg-[#ff6b00]" />

            <div className="mt-6 space-y-5">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[22px]" />
                <p className="text-[14px] leading-6">
                  Yashika Publications
                  <br />
                 Wardha, Nagpur, Pune
                </p>
              </motion.div>

              <motion.a
                whileHover={{ x: 5 }}
                href="tel:+919970294396"
                className="flex items-center gap-4"
              >
                <FaPhoneAlt className="shrink-0 text-[20px]" />
                <span className="text-[14px]">+91 99702 94396</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:info@yashikapublications.com"
                className="flex items-center gap-4"
              >
                <FaEnvelope className="shrink-0 text-[20px]" />
                <span className="break-all text-[14px]">
                  info@yashikapublications.com
                </span>
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                href="https://www.yashikapublications.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <FaGlobe className="shrink-0 text-[21px]" />
                <span className="break-all text-[14px]">
                  www.yashikapublications.com
                </span>
              </motion.a>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden">
            <iframe
              title="Yashika Publications Location"
              src="https://www.google.com/maps?q=201%20Planet%20Apt%20Omkar%20Nagar%20Besa%20Road%20Nagpur%20India&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="absolute left-1/2 top-1/2 w-[260px] max-w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
            >
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#075bc4] text-[18px] text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-[13px] font-[550] text-[#00245d]">
                    Yashika Publications
                  </h3>

                  <p className="mt-1 text-[12px] leading-5 text-gray-700">
                    201, Planet Apt, Omkar Nagar,
                    <br />
                    Besa Road, Nagpur – India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
                  Let’s Work Together
                </h2>
                <p className="mt-1 max-w-[560px] text-[14px] font-medium leading-6 text-white/90 sm:text-[14px]">
                  Whether you’re an author, reviewer, or institution, we’re
                  excited to partner with you.
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

export default Contact;
