import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpFromLine,
  BarChart3,
  Eye,
  FilePlus2,
  FolderPlus,
  LockKeyhole,
} from "lucide-react";

const actionCards = [
  {
    id: 1,
    title: "Submit Manuscript",
    description:
      "Start a new submission in a few simple steps.",
    buttonLabel: "New Submission",
    icon: FilePlus2,
    iconStyle: "bg-blue-100 text-blue-700",
    buttonStyle:
      "border-blue-600 bg-blue-600 text-white hover:bg-blue-700",
    path: "/author/submit-manuscript",
  },
  {
    id: 2,
    title: "My Submissions",
    description:
      "View and manage all your submitted manuscripts.",
    buttonLabel: "View Submissions",
    icon: FolderPlus,
    iconStyle: "bg-emerald-100 text-emerald-700",
    buttonStyle:
      "border-emerald-500 bg-white text-emerald-700 hover:bg-emerald-50",
    path: "/author/submissions",
  },
  {
    id: 3,
    title: "Status of Manuscripts",
    description:
      "Track the progress and current status of your manuscripts.",
    buttonLabel: "Check Status",
    icon: BarChart3,
    iconStyle: "bg-orange-100 text-orange-600",
    buttonStyle:
      "border-orange-500 bg-white text-orange-600 hover:bg-orange-50",
    path: "/author/status",
  },
  {
    id: 4,
    title: "Change Password",
    description:
      "Update your account password for better security.",
    buttonLabel: "Change Password",
    icon: LockKeyhole,
    iconStyle: "bg-violet-100 text-violet-700",
    buttonStyle:
      "border-violet-500 bg-white text-violet-700 hover:bg-violet-50",
    path: "/author/change-password",
  },
];

const submissions = [
  {
    id: "YP-AIERRR-25-0142",
    title: "Deep Learning for Medical Image Analysis",
    journal: "AIERRR",
    submittedOn: "15 May 2025",
    status: "Under Review",
  },
  {
    id: "YP-AIERRR-25-0108",
    title: "Explainable AI Approaches in Healthcare",
    journal: "AIERRR",
    submittedOn: "02 May 2025",
    status: "Revision Required",
  },
  {
    id: "YP-AIERRR-25-0087",
    title: "A Survey on Federated Learning Methods",
    journal: "AIERRR",
    submittedOn: "18 Apr 2025",
    status: "Accepted",
  },
  {
    id: "YP-AIERRR-25-0045",
    title: "Blockchain for Secure Health Records",
    journal: "AIERRR",
    submittedOn: "10 Mar 2025",
    status: "Published",
  },
  {
    id: "YP-AIERRR-25-0021",
    title: "IoT and AI for Smart Healthcare Systems",
    journal: "AIERRR",
    submittedOn: "05 Feb 2025",
    status: "Withdrawn",
  },
];

const statusStyles = {
  "Under Review":
    "border-amber-200 bg-amber-50 text-amber-700",
  "Revision Required":
    "border-red-200 bg-red-50 text-red-600",
  Accepted:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
  Published:
    "border-violet-200 bg-violet-50 text-violet-700",
  Withdrawn:
    "border-slate-200 bg-slate-50 text-slate-600",
};

function AuthorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-[1600px]">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-r from-[#F2F7FF] via-white to-[#EDF5FF] px-5 py-6 shadow-sm sm:px-8 sm:py-8"
      >
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-100/70 to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row">
          <motion.div
            whileHover={{ scale: 1.04, rotate: -2 }}
            className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:h-36 sm:w-36"
          >
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-[#0C3477] bg-white">
              <FilePlus2
                size={44}
                className="text-blue-600"
              />

              <span className="absolute -right-5 bottom-2 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                <ArrowUpFromLine size={20} />
              </span>
            </div>
          </motion.div>

          <div className="min-w-0 flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold text-[#081E55] sm:text-3xl">
              Welcome back, Dr. Arjun Verma!
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Manage your manuscripts and track their progress
              all in one place.
            </p>
          </div>

          <div className="hidden min-w-[220px] items-end justify-center gap-2 xl:flex">
            <div className="space-y-1">
              <div className="h-5 w-36 rounded bg-blue-300 shadow-sm" />
              <div className="h-5 w-40 rounded bg-blue-400 shadow-sm" />
              <div className="h-5 w-44 rounded bg-blue-600 shadow-sm" />
            </div>

            <div className="h-24 w-14 rounded-t-full bg-gradient-to-t from-emerald-700 to-emerald-300" />
          </div>
        </div>
      </motion.section>

      <section className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actionCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              whileHover={{ y: -5 }}
              className="group flex min-h-[255px] flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${card.iconStyle}`}
              >
                <Icon size={29} />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#081E55]">
                {card.title}
              </h2>

              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {card.description}
              </p>

              <button
                type="button"
                onClick={() => navigate(card.path)}
                className={`mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border px-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${card.buttonStyle}`}
              >
                <Icon size={16} />
                {card.buttonLabel}
              </button>
            </motion.article>
          );
        })}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32 }}
        className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="flex flex-col justify-between gap-3 border-b border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:px-6">
          <h2 className="text-lg font-bold text-[#081E55]">
            Recent Submissions
          </h2>

          <button
            type="button"
            onClick={() => navigate("/author/submissions")}
            className="w-fit text-sm font-semibold text-blue-700 transition hover:text-blue-900"
          >
            View All Submissions
          </button>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-6 py-3 text-xs font-semibold text-slate-500">
                  Manuscript ID
                </th>

                <th className="px-6 py-3 text-xs font-semibold text-slate-500">
                  Title
                </th>

                <th className="px-6 py-3 text-xs font-semibold text-slate-500">
                  Journal
                </th>

                <th className="px-6 py-3 text-xs font-semibold text-slate-500">
                  Submitted On
                </th>

                <th className="px-6 py-3 text-xs font-semibold text-slate-500">
                  Status
                </th>

                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {submissions.map((submission) => (
                <tr
                  key={submission.id}
                  className="transition hover:bg-blue-50/40"
                >
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/author/submissions/${submission.id}`
                        )
                      }
                      className="text-sm font-semibold text-blue-700 hover:underline"
                    >
                      {submission.id}
                    </button>
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-[#0A2257]">
                    {submission.title}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {submission.journal}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {submission.submittedOn}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-md border px-3 py-1 text-xs font-semibold ${
                        statusStyles[submission.status]
                      }`}
                    >
                      {submission.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/author/submissions/${submission.id}`
                        )
                      }
                      className="inline-flex h-9 w-10 items-center justify-center rounded-lg border border-blue-300 text-blue-600 transition hover:bg-blue-50"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="divide-y divide-slate-100 lg:hidden">
          {submissions.map((submission) => (
            <article
              key={submission.id}
              className="p-4 sm:p-5"
            >
              <div className="flex flex-col gap-3 min-[430px]:flex-row min-[430px]:items-start min-[430px]:justify-between">
                <div className="min-w-0">
                  <button
                    type="button"
                    onClick={() =>
                      navigate(
                        `/author/submissions/${submission.id}`
                      )
                    }
                    className="text-xs font-semibold text-blue-700"
                  >
                    {submission.id}
                  </button>

                  <h3 className="mt-2 text-sm font-bold leading-5 text-[#0A2257]">
                    {submission.title}
                  </h3>
                </div>

                <span
                  className={`w-fit shrink-0 rounded-md border px-2.5 py-1 text-[10px] font-semibold ${
                    statusStyles[submission.status]
                  }`}
                >
                  {submission.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-slate-500 min-[430px]:grid-cols-2">
                <p>
                  <span className="font-semibold text-slate-600">
                    Journal:
                  </span>{" "}
                  {submission.journal}
                </p>

                <p>
                  <span className="font-semibold text-slate-600">
                    Submitted:
                  </span>{" "}
                  {submission.submittedOn}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  navigate(
                    `/author/submissions/${submission.id}`
                  )
                }
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-300 bg-blue-50 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                <Eye size={16} />
                View Submission
              </button>
            </article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default AuthorDashboard;