import React from "react";
import { motion } from "framer-motion";
import {
  BadgePercent,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  FileCheck2,
  FileText,
  Globe2,
  Info,
  LockOpen,
  Mail,
  ReceiptText,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import heroImg from "../assets/yashika-journal-home-hero-banner.webp";

const waiverRows = [
  {
    icon: Globe2,
    group: "Low Income Countries",
    apc: "0 USD",
    apcColor: "#0b9b48",
    iconColor: "#0b9b48",
    details:
      "Full waiver of APC. Authors from low income countries are exempted from APC.",
  },
  {
    icon: Globe2,
    group: "Middle Income Countries",
    apc: "125 USD\n(50% Discount)",
    apcColor: "#ff6b00",
    iconColor: "#ff8200",
    details:
      "50% discount on standard APC. Authors from middle income countries pay 50% of the standard APC.",
  },
  {
    icon: Globe2,
    group: "High Income Countries",
    apc: "250 USD",
    apcColor: "#075bc7",
    iconColor: "#075bc7",
    details:
      "Full APC applicable. Authors from high income countries pay the full APC.",
  },
];

const paymentItems = [
  {
    icon: FileCheck2,
    text: "Payment is due after acceptance of the manuscript.",
  },
  {
    icon: CreditCard,
    text: "Payments can be made via bank transfer, credit card, or online payment gateway.",
  },
  {
    icon: ReceiptText,
    text: "Invoices will be issued upon acceptance.",
  },
  {
    icon: CircleDollarSign,
    text: "All charges are in USD.",
  },
];

const importantNotes = [
  "APC is non-refundable once the manuscript enters the peer review process.",
  "Waiver requests (if applicable) must be made at the time of submission.",
  "Yashika Publications reserves the right to update APC policies. Any changes will be notified on the website.",
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
      staggerChildren: 0.09,
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
        <div className="relative z-10 mx-auto flex min-h-[490px] max-w-[1400px] items-center px-5 py-10 sm:min-h-[490px] sm:px-8 lg:min-h-[500px] lg:px-14 xl:px-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[520px]"
          >
            <motion.div
              whileHover={{ x: 4 }}
              className="mb-6 flex flex-wrap items-center gap-2 text-[13px] font-semibold"
            >
              <a
                href="/"
                className="text-[#ff7600] transition hover:text-white"
              >
                Home
              </a>

              <span className="text-white/80">›</span>

              <a
                href="/authors"
                className="text-white transition hover:text-[#ff7600]"
              >
                For Authors
              </a>

              <span className="text-white/80">›</span>

              <span className="text-white">Article Processing Charges</span>
            </motion.div>

            <h1 className="max-w-[400px] text-[34px] font-[600]  tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]">
              Article Processing Charges
            </h1>

            <div className="mt-2 h-[3px] w-[46px] rounded-full bg-[#ff7900]" />

            <p className="mt-4 max-w-[400px] text-[14px] font-medium leading-[1.8] text-white sm:text-[14px] lg:text-[18px]">
              Artificial Intelligence Education Research
              <br className="hidden sm:block" /> and Review (AIERRR)
            </p>

            <p className="mt-6 max-w-[500px] text-[14px] font-medium leading-[1.9] text-white/90 sm:text-[14px]">
              Yashika Publications is committed to transparent and fair
              publication practices. This page provides details of our
              publication model, fees, waivers, and payment policies.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-[1px] left-0 h-[34px] w-full bg-white [clip-path:ellipse(62%_38%_at_50%_100%)] sm:h-[46px]" />
    </section>
  );
}

function PublicationModel() {
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
        boxShadow: "0 16px 34px rgba(8,66,145,0.13)",
      }}
      className="grid overflow-hidden rounded-[8px] border border-[#d9e5f2] bg-[#f1f7ff] shadow-[0_4px_16px_rgba(8,66,145,0.07)] lg:grid-cols-[1.35fr_0.65fr_0.65fr]"
    >
      <div className="flex flex-col gap-5 border-b border-[#cbdced] px-6 py-6 sm:flex-row sm:items-center lg:border-b-0 lg:border-r">
        <motion.div
          whileHover={{
            rotate: 4,
            scale: 1.06,
          }}
          className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-white text-[#ff7200] shadow-md"
        >
          <LockOpen className="h-[38px] w-[38px]" strokeWidth={2} />
        </motion.div>

        <div>
          <h2 className="text-[18px] font-[600] text-[#063b87]">
            Hybrid Publication Model
          </h2>

          <p className="mt-3 text-[12px] font-medium leading-[1.75] text-[#243754] sm:text-[13px]">
            All journals published by Yashika Publications follow a{" "}
            <strong className="font-[500] text-[#102651]">HYBRID</strong> model.
            Articles are published either under{" "}
            <strong className="font-[500] text-[#102651]">
              Subscription Access
            </strong>{" "}
            or{" "}
            <strong className="font-[500] text-[#102651]">
              Gold Open Access
            </strong>
            , as per the author&apos;s choice at the time of submission.
          </p>
        </div>
      </div>

      <motion.div
        whileHover={{
          backgroundColor: "#e8f2ff",
        }}
        className="group flex gap-4 border-b border-[#cbdced] px-6 py-6 lg:border-b-0 lg:border-r"
      >
        <FileText
          className="h-[40px] w-[40px] shrink-0 text-[#075bc7] transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.7}
        />

        <div>
          <h3 className="text-[13px] font-[600] text-[#063b87]">
            Subscription Access
          </h3>

          <p className="mt-3 text-[11px] font-medium leading-[1.65] text-[#30435f]">
            Articles are available to subscribers and institutions through our
            journal platform.
          </p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{
          backgroundColor: "#fff4e9",
        }}
        className="group flex gap-4 px-6 py-6"
      >
        <LockOpen
          className="h-[40px] w-[40px] shrink-0 text-[#ff7200] transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.8}
        />

        <div>
          <h3 className="text-[13px] font-[600] text-[#063b87]">
            Gold Open Access
          </h3>

          <p className="mt-3 text-[11px] font-medium leading-[1.65] text-[#30435f]">
            Articles are freely available to everyone immediately upon
            publication.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

function StandardApcCard() {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
        boxShadow: "0 17px 36px rgba(8,66,145,0.14)",
      }}
      className="flex min-h-[310px] flex-col rounded-[8px] border border-[#dbe5ef] bg-white px-7 py-7 shadow-[0_4px_16px_rgba(8,66,145,0.06)]"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.08,
          }}
          className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-full bg-[#032761] text-white shadow-md"
        >
          <FileText className="h-[30px] w-[30px]" strokeWidth={1.8} />
        </motion.div>

        <div>
          <h3 className="text-[17px] font-[600] text-[#102651]">
            Standard APC
          </h3>

          <p className="mt-3 text-[28px] font-[550] leading-none text-[#ff6b00]">
            250 USD
          </p>

          <p className="mt-4 text-[13px] font-[520] text-[#102651]">
            Per accepted article
          </p>

          <p className="mt-5 text-[12px] font-medium leading-[1.75] text-[#30435f]">
            This fee covers peer review, editorial processing, typesetting, DOI
            registration, online publication, and long-term archiving.
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function WaiverTable() {
  return (
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
    >
      <h3 className="mb-4 text-[17px] font-[500] leading-[1.45] text-[#063b87]">
        Waivers for Authors Based on World Bank Country Income Classification*
      </h3>

      <div className="overflow-hidden rounded-[7px] border border-[#dbe5ef] bg-white shadow-[0_4px_16px_rgba(8,66,145,0.06)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse">
            <thead>
              <tr className="bg-[#062c68] text-white">
                <th className="w-[36%] border-r border-white/25 px-5 py-3 text-left text-[14px] font-[500]">
                  Country Income Group
                </th>

                <th className="w-[25%] border-r border-white/25 px-5 py-3 text-center text-[14px] font-[500]">
                  APC Payable
                </th>

                <th className="w-[39%] px-5 py-3 text-left text-[14px] font-[500]">
                  Details
                </th>
              </tr>
            </thead>

            <tbody>
              {waiverRows.map((row, index) => {
                const Icon = row.icon;

                return (
                  <motion.tr
                    key={row.group}
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
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      backgroundColor: "#f3f8ff",
                    }}
                    className="border-b border-[#dfe7ef] last:border-b-0"
                  >
                    <td className="border-r border-[#dfe7ef] px-5 py-4">
                      <div className="flex items-center gap-4">
                        <Icon
                          className="h-[32px] w-[32px] shrink-0"
                          style={{
                            color: row.iconColor,
                          }}
                          strokeWidth={1.8}
                        />

                        <span className="text-[12px] font-[520] text-[#102651]">
                          {row.group}
                        </span>
                      </div>
                    </td>

                    <td className="border-r border-[#dfe7ef] px-5 py-4 text-center">
                      <p
                        className="whitespace-pre-line text-[14px] font-[500] leading-[1.45]"
                        style={{
                          color: row.apcColor,
                        }}
                      >
                        {row.apc}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-[13px] font-[500] leading-[1.6] text-[#30435f]">
                      {row.details}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-3 text-[12px] italic text-[#56677e]">
        *Classification as per the latest World Bank list of economies.
      </p>
    </motion.div>
  );
}

function EditorialBenefits() {
  return (
    <section>
      <SectionHeading>Benefits for Editorial Board Members</SectionHeading>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.16,
        }}
        whileHover={{
          y: -5,
          boxShadow: "0 16px 34px rgba(120,72,20,0.12)",
        }}
        className="grid overflow-hidden rounded-[9px] border border-[#ead9c2] bg-[#fffaf3] shadow-[0_4px_16px_rgba(120,72,20,0.05)] lg:grid-cols-[120px_1fr_1fr]"
      >
        <div className="flex items-center justify-center px-5 py-7">
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 4,
            }}
            className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#987142] text-white shadow-md"
          >
            <UsersRound className="h-[26px] w-[26px]" strokeWidth={1.9} />
          </motion.div>
        </div>

        <motion.div
          whileHover={{
            backgroundColor: "#fff5e8",
          }}
          className="flex gap-5 border-t border-[#ead9c2] px-7 py-6 lg:border-l lg:border-t-0"
        >
          <CalendarDays
            className="h-[42px] w-[42px] flex-shrink-0 text-[#d26a1a]"
            strokeWidth={1.8}
          />

          <div>
            <h3 className="text-[14px] font-[550] text-[#102651]">
              Free Publication – 1 Article per Year
            </h3>

            <p className="mt-3 text-[12px] font-[500] leading-[1.65] text-[#30435f]">
              Each Editorial Board Member is entitled to publish one article per
              year free of charge in any journal of Yashika Publications.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{
            backgroundColor: "#fff5e8",
          }}
          className="flex gap-5 border-t border-[#ead9c2] px-7 py-6 lg:border-l lg:border-t-0"
        >
          <BadgePercent
            className="h-[42px] w-[42px] flex-shrink-0 text-[#d26a1a]"
            strokeWidth={1.8}
          />

          <div>
            <h3 className="text-[14px] font-[550] text-[#102651]">
              50% APC Waiver from Second Article
            </h3>

            <p className="mt-3 text-[12px] font-medium leading-[1.65] text-[#30435f]">
              From the second article onwards in the same year, Editorial Board
              Members will receive a 50% waiver on the APC.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function PaymentInformation() {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -7,
        boxShadow: "0 16px 34px rgba(8,66,145,0.13)",
      }}
      className="rounded-[8px] border border-[#dbe6f2] bg-[#f7faff] px-6 py-6 shadow-[0_4px_16px_rgba(8,66,145,0.05)]"
    >
      <h3 className="text-[17px] font-[550] text-[#063b87]">
        Payment Information
      </h3>

      <div className="mt-5 space-y-4">
        {paymentItems.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.text}
              whileHover={{
                x: 5,
              }}
              className="flex gap-4"
            >
              <Icon
                className="h-[24px] w-[24px] shrink-0 text-[#075bc7]"
                strokeWidth={1.7}
              />

              <p className="text-[12px] font-[500] leading-[1.6] text-[#30435f]">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.article>
  );
}

function NoHiddenCharges() {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -7,
        boxShadow: "0 16px 34px rgba(8,66,145,0.13)",
      }}
      className="flex flex-col items-center justify-center rounded-[8px] border border-[#dbe6f2] bg-[#f1f6ff] px-6 py-7 text-center shadow-[0_4px_16px_rgba(8,66,145,0.05)]"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 4,
        }}
      >
        <ShieldCheck
          className="h-[48px] w-[48px] text-[#063b87]"
          strokeWidth={1.8}
        />
      </motion.div>

      <h3 className="mt-4 text-[17px] font-[550] text-[#063b87]">
        No Hidden Charges
      </h3>

      <p className="mt-3 max-w-[230px] text-[12px] font-[500] leading-[1.65] text-[#30435f]">
        We believe in transparency. The APC includes all standard publication
        services.
      </p>
    </motion.article>
  );
}

function ImportantNotes() {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -7,
        boxShadow: "0 16px 34px rgba(8,66,145,0.13)",
      }}
      className="rounded-[8px] border border-[#dbe6f2] bg-[#f7faff] px-6 py-6 shadow-[0_4px_16px_rgba(8,66,145,0.05)]"
    >
      <h3 className="text-[17px] font-[550] text-[#063b87]">Important Notes</h3>

      <ul className="mt-5 space-y-3">
        {importantNotes.map((note) => (
          <motion.li
            key={note}
            whileHover={{
              x: 5,
            }}
            className="flex gap-3"
          >
            <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#063b87]" />

            <p className="text-[12px] font-[500] leading-[1.65] text-[#30435f]">
              {note}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}

function ContactStrip() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 14px 30px rgba(8,66,145,0.13)",
      }}
      className="flex flex-col items-center gap-4 rounded-[8px] border border-[#dbe6f2] bg-[#eaf2ff] px-6 py-2 text-center shadow-[0_4px_14px_rgba(8,66,145,0.05)] sm:flex-row sm:text-left"
    >
      <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#073b82] text-white">
        <Mail className="h-[22px] w-[22px]" strokeWidth={2} />
      </div>

      <p className="text-[12px] font-medium leading-[1.7] text-[#243754] sm:text-[13px]">
        For any queries related to APC, waivers, or payments, please contact us
        at{" "}
        <a
          href="mailto:editor.aierrr@yashikapublications.com"
          className="font-bold text-[#0649b0] hover:underline"
        >
          editor.aierrr@yashikapublications.com
        </a>
      </p>
    </motion.section>
  );
}

export default function ArticleProcessingCharges() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#102651]">
      <HeroSection />

      <section className="px-4 pb-10 pt-6 m:pb-16 sm:px-8 lg:px-14 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <PublicationModel />

          <section className="mt-7">
            <SectionHeading>Article Processing Charges (APC)</SectionHeading>

            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <StandardApcCard />
              <WaiverTable />
            </div>
          </section>

          <section className="mt-8">
            <EditorialBenefits />
          </section>

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.62fr_1fr]"
          >
            <PaymentInformation />
            <NoHiddenCharges />
            <ImportantNotes />
          </motion.section>

          <div className="mt-5">
            <ContactStrip />
          </div>
        </div>
      </section>
    </main>
  );
}
