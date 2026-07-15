import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  CheckCircle2,
  FileText,
  Gift,
  Globe2,
  Info,
  LockKeyhole,
  LockOpen,
  Mail,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";

import heroImg from "../../assets/yashika-journal-home-hero-banner.webp";

const topFeatures = [
  {
    icon: BookOpen,
    title: "Quality Content",
    description:
      "Access peer-reviewed articles of global significance.",
  },
  {
    icon: Globe2,
    title: "Global Access",
    description:
      "Available worldwide to subscribers and institutions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Protected access with IP authentication.",
  },
  {
    icon: UserRound,
    title: "Flexible Plans",
    description:
      "Subscription plans suited for every need and budget.",
  },
];

const subscriptionPlans = [
  {
    icon: UserRound,
    plan: "Individual",
    access: "Online Access",
    coverage: "1 User",
    duration: "1 Year",
    price: "100 USD",
    details: "Personal access to all current content of the journal.",
  },
  {
    icon: Building2,
    plan: "Institutional",
    access: "Online Access (IP Range)",
    coverage: "Unlimited Users",
    duration: "1 Year",
    price: "500 USD",
    details: "Access for all members within the institution's IP range.",
  },
  {
    icon: UsersRound,
    plan: "Consortium",
    access: "Online Access (Multiple Institutions)",
    coverage: "Unlimited Users",
    duration: "1 Year",
    price: "Custom Pricing",
    details:
      "For libraries and consortia. Please contact us for details.",
  },
  {
    icon: BookOpen,
    plan: "Print + Online",
    access: "Print Copy + Online Access",
    coverage: "1 User / Institution",
    duration: "1 Year",
    price: "150 USD",
    details: "Includes printed issues by post along with online access.",
  },
];

const terms = [
  "Subscriptions are valid for the selected duration from the date of payment.",
  "Access is non-transferable and limited to the subscriber.",
  "Institutional access is restricted to the registered IP ranges.",
  "Yashika Publications reserves the right to modify subscription rates with prior notice.",
  "No refund is provided for cancellations after activation.",
];

const benefits = [
  "Unlimited access to all issues during the subscription period.",
  "Full-text access to all articles (Subscription Access).",
  "Download articles for personal and academic use.",
  "Access on multiple devices (desktop, tablet, mobile).",
  "Regular email alerts and updates on new issues.",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function SectionHeading({ children }) {
  return (
    <div className="mb-4">
      <h2 className="text-[16px] font-[600] uppercase tracking-[0.02em] text-[#075bc7] sm:text-[18px]">
        {children}
      </h2>

      <div className="mt-2 h-[2px] w-[42px] rounded-full bg-[#ff7200]" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="relative min-h-[480px] bg-cover bg-center bg-no-repeat sm:min-h-[490px] lg:min-h-[500px]"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-[1400px] items-center px-5 py-10 sm:min-h-[490px] sm:px-8 lg:min-h-[500px] lg:px-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[530px]"
          >
            <motion.div
              whileHover={{ x: 4 }}
              className="mb-6 flex flex-wrap items-center gap-2 text-[13px] font-semibold"
            >
              <a
                href="/about"
                className="text-[#ff7600] transition hover:text-white"
              >
                About
              </a>

              <span className="text-white/80">›</span>

              <span className="text-white">Subscription Policy</span>
            </motion.div>

            <h1 className="max-w-[540px] text-[34px] font-[600] leading-[1.12] tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]">
              Subscription Policy
            </h1>

            <div className="mt-5 h-[3px] w-[46px] rounded-full bg-[#ff7900]" />

            <p className="mt-6 max-w-[470px] text-[18px] font-medium leading-[1.7] text-white sm:text-[20px]">
              Artificial Intelligence Education Research
              <br className="hidden sm:block" /> and Review (AIERRR)
            </p>

            <p className="mt-5 max-w-[470px] text-[14px] font-medium leading-[1.9] text-white/95">
              Yashika Publications offers flexible subscription options for
              institutions, libraries, and individuals to access our
              high-quality scholarly content.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-[1px] left-0 h-[34px] w-full bg-white [clip-path:ellipse(62%_38%_at_50%_100%)] sm:h-[46px]" />
    </section>
  );
}

function FeatureStrip() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 16px 34px rgba(8,66,145,0.12)",
      }}
      className="grid overflow-hidden rounded-[8px] border border-[#dbe6f2] bg-[#f4f8ff] shadow-[0_4px_16px_rgba(8,66,145,0.06)] sm:grid-cols-2 lg:grid-cols-4"
    >
      {topFeatures.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={feature.title}
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.07,
            }}
            whileHover={{
              y: -5,
              backgroundColor: "#eaf3ff",
            }}
            className="group flex min-h-[130px] items-center gap-5 border-b border-[#d9e4f0] px-6 py-5 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#afc8ec] bg-white text-[#075bc7] shadow-[0_5px_16px_rgba(8,66,145,0.12)]"
            >
              <Icon className="h-[30px] w-[30px]" strokeWidth={1.7} />
            </motion.div>

            <div>
              <h3 className="text-[14px] font-[550] text-[#072d74]">
                {feature.title}
              </h3>

              <p className="mt-2 text-[12px] font-medium leading-[1.65] text-[#394c67]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.section>
  );
}

function AccessOptions() {
  return (
    <section>
      <SectionHeading>Access Options</SectionHeading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="grid gap-5 lg:grid-cols-2"
      >
        <motion.article
          variants={fadeUp}
          whileHover={{
            y: -7,
            scale: 1.01,
            boxShadow: "0 16px 32px rgba(8,66,145,0.12)",
          }}
          className="flex min-h-[145px] items-center gap-6 rounded-[8px] border border-[#dbe6f2] bg-[#edf4ff] px-7 py-6 shadow-[0_4px_14px_rgba(8,66,145,0.05)]"
        >
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 4,
            }}
            className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border-2 border-[#075bc7] text-[#075bc7]"
          >
            <UserRound className="h-[32px] w-[32px]" strokeWidth={1.6} />
          </motion.div>

          <div>
            <h3 className="text-[18px] font-[600] text-[#063b87]">
              Subscription Access
            </h3>

            <p className="mt-3 text-[12px] font-medium leading-[1.7] text-[#263b5c] sm:text-[13px]">
              Articles are available to subscribers and their authorized users
              through our website and journal platform.
            </p>
          </div>
        </motion.article>

        <motion.article
          variants={fadeUp}
          whileHover={{
            y: -7,
            scale: 1.01,
            boxShadow: "0 16px 32px rgba(210,104,24,0.12)",
          }}
          className="flex min-h-[145px] items-center gap-6 rounded-[8px] border border-[#efd5b9] bg-[#fff8ef] px-7 py-6 shadow-[0_4px_14px_rgba(210,104,24,0.05)]"
        >
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 4,
            }}
            className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border-2 border-[#ff7200] text-[#ff7200]"
          >
            <LockOpen className="h-[32px] w-[32px]" strokeWidth={1.7} />
          </motion.div>

          <div>
            <h3 className="text-[18px] font-[600] text-[#063b87]">
              Gold Open Access
            </h3>

            <p className="mt-3 text-[12px] font-medium leading-[1.7] text-[#263b5c] sm:text-[13px]">
              Authors may choose Gold Open Access during submission to make
              their articles freely available to everyone immediately upon
              publication.
            </p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}

function SubscriptionTable() {
  return (
    <section>
      <SectionHeading>Subscription Plans</SectionHeading>

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.12,
        }}
        transition={{
          duration: 0.6,
        }}
        className="overflow-hidden rounded-[7px] border border-[#dbe5ef] bg-white shadow-[0_4px_16px_rgba(8,66,145,0.06)]"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[930px] border-collapse">
            <thead>
              <tr className="bg-[#062c68] text-white">
                <th className="w-[17%] border-r border-white/25 px-5 py-3 text-left text-[11px] font-semibold">
                  Plan Type
                </th>

                <th className="w-[21%] border-r border-white/25 px-5 py-3 text-center text-[11px] font-semibold">
                  Access Type
                </th>

                <th className="w-[16%] border-r border-white/25 px-5 py-3 text-center text-[11px] font-semibold">
                  Coverage
                </th>

                <th className="w-[12%] border-r border-white/25 px-5 py-3 text-center text-[11px] font-semibold">
                  Duration
                </th>

                <th className="w-[15%] border-r border-white/25 px-5 py-3 text-center text-[11px] font-semibold">
                  Price (USD)
                </th>

                <th className="w-[19%] px-5 py-3 text-left text-[11px] font-semibold">
                  Details
                </th>
              </tr>
            </thead>

            <tbody>
              {subscriptionPlans.map((plan, index) => {
                const Icon = plan.icon;

                return (
                  <motion.tr
                    key={plan.plan}
                    initial={{
                      opacity: 0,
                      x: -16,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.38,
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      backgroundColor: "#f3f8ff",
                    }}
                    className="border-b border-[#dfe7ef] last:border-b-0"
                  >
                    <td className="border-r border-[#dfe7ef] px-5 py-4">
                      <div className="flex items-center gap-4">
                        <Icon
                          className="h-[27px] w-[27px] shrink-0 text-[#075bc7]"
                          strokeWidth={1.7}
                        />

                        <span className="text-[12px] font-bold text-[#102651]">
                          {plan.plan}
                        </span>
                      </div>
                    </td>

                    <td className="border-r border-[#dfe7ef] px-5 py-4 text-center text-[11px] font-medium text-[#263b5c]">
                      {plan.access}
                    </td>

                    <td className="border-r border-[#dfe7ef] px-5 py-4 text-center text-[11px] font-medium text-[#263b5c]">
                      {plan.coverage}
                    </td>

                    <td className="border-r border-[#dfe7ef] px-5 py-4 text-center text-[11px] font-medium text-[#263b5c]">
                      {plan.duration}
                    </td>

                    <td className="border-r border-[#dfe7ef] px-5 py-4 text-center text-[12px] font-bold text-[#075bc7]">
                      {plan.price}
                    </td>

                    <td className="px-5 py-4 text-[11px] font-medium leading-[1.55] text-[#263b5c]">
                      {plan.details}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="mt-3 flex items-start gap-2">
        <Info
          className="mt-[1px] h-[15px] w-[15px] shrink-0 text-[#063b87]"
          strokeWidth={1.8}
        />

        <p className="text-[10px] font-medium leading-[1.5] text-[#53647a]">
          All subscription prices are exclusive of applicable taxes.
        </p>
      </div>
    </section>
  );
}

function TermsCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -7,
        boxShadow: "0 16px 32px rgba(8,66,145,0.12)",
      }}
      className="flex gap-6 rounded-[8px] border border-[#dbe6f2] bg-[#f7faff] px-6 py-6 shadow-[0_3px_13px_rgba(8,66,145,0.05)]"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 4,
        }}
        className="flex h-[68px] w-[68px] shrink-0 items-center justify-center text-[#075bc7]"
      >
        <FileText className="h-[50px] w-[50px]" strokeWidth={1.5} />
      </motion.div>

      <div>
        <h3 className="text-[17px] font-bold text-[#063b87]">
          Terms &amp; Conditions
        </h3>

        <ul className="mt-4 space-y-3">
          {terms.map((term) => (
            <motion.li
              key={term}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3"
            >
              <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#063b87]" />

              <p className="text-[11px] font-medium leading-[1.6] text-[#263b5c]">
                {term}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function BenefitsCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -7,
        boxShadow: "0 16px 32px rgba(8,66,145,0.12)",
      }}
      className="flex gap-6 rounded-[8px] border border-[#dbe6f2] bg-[#f7faff] px-6 py-6 shadow-[0_3px_13px_rgba(8,66,145,0.05)]"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 4,
        }}
        className="flex h-[68px] w-[68px] shrink-0 items-center justify-center text-[#075bc7]"
      >
        <Gift className="h-[50px] w-[50px]" strokeWidth={1.5} />
      </motion.div>

      <div>
        <h3 className="text-[17px] font-bold text-[#063b87]">
          Subscriber Benefits
        </h3>

        <ul className="mt-4 space-y-3">
          {benefits.map((benefit) => (
            <motion.li
              key={benefit}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                className="mt-[1px] h-[15px] w-[15px] shrink-0 text-[#075bc7]"
                strokeWidth={2}
              />

              <p className="text-[11px] font-medium leading-[1.6] text-[#263b5c]">
                {benefit}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function ContactStrip() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.55,
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 14px 28px rgba(8,66,145,0.11)",
      }}
      className="grid overflow-hidden rounded-[8px] border border-[#dbe6f2] bg-[#edf4ff] shadow-[0_3px_13px_rgba(8,66,145,0.05)] md:grid-cols-[1.35fr_0.65fr]"
    >
      <div className="flex items-center gap-5 border-b border-[#d6e2ef] px-6 py-5 md:border-b-0 md:border-r">
        <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#07347d] text-white">
          <Mail className="h-[25px] w-[25px]" strokeWidth={1.7} />
        </div>

        <p className="text-[11px] font-medium leading-[1.7] text-[#263b5c] sm:text-[12px]">
          For subscription inquiries, quotations, or assistance,
          <br className="hidden sm:block" />
          please contact us at:{" "}
          <a
            href="mailto:editor.aierrr@yashikapublications.com"
            className="font-bold text-[#075bc7] hover:underline"
          >
            editor.aierrr@yashikapublications.com
          </a>
        </p>
      </div>

      <div className="flex items-center gap-5 px-6 py-5">
        <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#07347d] text-white">
          <Globe2 className="h-[25px] w-[25px]" strokeWidth={1.7} />
        </div>

        <p className="text-[11px] font-medium leading-[1.7] text-[#263b5c] sm:text-[12px]">
          Visit us:
          <br />
          <a
            href="https://www.yashikapublications.com/aierrr"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#075bc7] hover:underline"
          >
            www.yashikapublications.com/aierrr
          </a>
        </p>
      </div>
    </motion.section>
  );
}

export default function SubscriptionPolicy() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#102651]">
      <HeroSection />

      <section className="px-4 pb-10 pt-6 sm:px-8 lg:px-14 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <FeatureStrip />

          <div className="mt-7">
            <AccessOptions />
          </div>

          <div className="mt-7">
            <SubscriptionTable />
          </div>

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="mt-7 grid gap-5 lg:grid-cols-2"
          >
            <TermsCard />
            <BenefitsCard />
          </motion.section>

          <div className="mt-5">
            <ContactStrip />
          </div>
        </div>
      </section>
    </main>
  );
}