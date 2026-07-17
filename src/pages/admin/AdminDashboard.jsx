import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import {
  BookOpen,
  FileText,
  Clock3,
  Users,
  TrendingUp,
  TrendingDown,
  Plus,
  ChevronRight,
  Eye,
  CalendarDays,
  Search,
} from "lucide-react";

const statCards = [
  {
    id: 1,
    title: "Total Journals",
    value: "24",
    change: "+8.4%",
    trend: "up",
    description: "Compared to last month",
    icon: BookOpen,
    iconStyle: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Published Articles",
    value: "1,248",
    change: "+12.6%",
    trend: "up",
    description: "Compared to last month",
    icon: FileText,
    iconStyle: "bg-violet-100 text-violet-700",
  },
  {
    id: 3,
    title: "Pending Manuscripts",
    value: "86",
    change: "-3.2%",
    trend: "down",
    description: "Compared to last month",
    icon: Clock3,
    iconStyle: "bg-orange-100 text-orange-700",
  },
  {
    id: 4,
    title: "Registered Authors",
    value: "3,892",
    change: "+18.2%",
    trend: "up",
    description: "Compared to last month",
    icon: Users,
    iconStyle: "bg-emerald-100 text-emerald-700",
  },
];

const manuscriptData = [
  {
    id: "YSK-2401",
    title: "Machine Learning Approaches for Healthcare Diagnosis",
    author: "Dr. Rahul Sharma",
    journal: "Journal of Intelligent Systems",
    submitted: "17 Jul 2026",
    status: "Pending",
  },
  {
    id: "YSK-2402",
    title: "Blockchain-Based Secure Electronic Health Records",
    author: "Dr. Neha Verma",
    journal: "International Journal of Computing",
    submitted: "16 Jul 2026",
    status: "Under Review",
  },
  {
    id: "YSK-2403",
    title: "Sustainable Energy Optimization Using Artificial Intelligence",
    author: "Prof. Amit Kumar",
    journal: "Journal of Engineering Research",
    submitted: "15 Jul 2026",
    status: "Accepted",
  },
  {
    id: "YSK-2404",
    title: "Edge Computing Framework for Smart Manufacturing",
    author: "Dr. Priya Singh",
    journal: "Journal of Emerging Technologies",
    submitted: "14 Jul 2026",
    status: "Rejected",
  },
  {
    id: "YSK-2405",
    title: "Deep Learning-Based Network Intrusion Detection",
    author: "Dr. Sanjay Mehta",
    journal: "Cybersecurity Research Journal",
    submitted: "13 Jul 2026",
    status: "Published",
  },
];

const statusStyles = {
  Pending: "border-amber-200 bg-amber-50 text-amber-700",
  "Under Review": "border-blue-200 bg-blue-50 text-blue-700",
  Accepted: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Rejected: "border-red-200 bg-red-50 text-red-700",
  Published: "border-violet-200 bg-violet-50 text-violet-700",
};

function AdminDashboard() {
  const navigate = useNavigate();

  const outletContext = useOutletContext();
  const searchTerm = outletContext?.searchTerm || "";

  const filteredManuscripts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return manuscriptData;
    }

    return manuscriptData.filter((item) => {
      return (
        item.id.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query) ||
        item.journal.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query)
      );
    });
  }, [searchTerm]);

  const handleViewManuscript = (manuscriptId) => {
    navigate(`/admin/submissions/${manuscriptId}`);
  };

  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
      >
        <div>
          <p className="text-sm text-slate-500">
            Welcome back, Administrator
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#0B2C66] sm:text-3xl">
            Dashboard Overview
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:w-auto">
          <button
            type="button"
            onClick={() => navigate("/admin/journals/add")}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-4 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md"
          >
            <BookOpen size={17} />
            Add Journal
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/articles/add")}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#103DC2] to-[#0868EE] px-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Plus size={17} />
            Add Article
          </button>
        </div>
      </motion.section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          const TrendIcon =
            card.trend === "up" ? TrendingUp : TrendingDown;

          return (
            <motion.article
              key={card.id}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.07,
              }}
              whileHover={{
                y: -4,
              }}
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {card.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#0B2C66]">
                    {card.value}
                  </h3>
                </div>

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${card.iconStyle}`}
                >
                  <Icon size={23} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                <span
                  className={`inline-flex items-center gap-1 font-semibold ${
                    card.trend === "up"
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  <TrendIcon size={14} />
                  {card.change}
                </span>

                <span className="text-slate-400">
                  {card.description}
                </span>
              </div>
            </motion.article>
          );
        })}
      </section>

      <motion.section
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
      >
        <div className="flex flex-col justify-between gap-3 border-b border-slate-100 px-4 py-5 min-[480px]:px-5 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h3 className="text-lg font-bold text-[#0B2C66]">
              Recent Manuscript Submissions
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Review and manage newly submitted manuscripts
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/admin/submissions")}
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
          >
            View all
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[950px] border-collapse">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Manuscript
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Author
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Journal
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Submitted
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredManuscripts.map((item) => (
                <tr
                  key={item.id}
                  className="transition-colors hover:bg-blue-50/40"
                >
                  <td className="px-6 py-4">
                    <div className="max-w-[270px]">
                      <p className="truncate text-sm font-semibold text-slate-700">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {item.id}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {item.author}
                  </td>

                  <td className="px-6 py-4">
                    <p className="max-w-[190px] truncate text-sm text-slate-600">
                      {item.journal}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-slate-500">
                      <CalendarDays size={15} />
                      {item.submitted}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold ${
                        statusStyles[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() =>
                        handleViewManuscript(item.id)
                      }
                      aria-label={`View ${item.title}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-blue-100 hover:text-blue-700"
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
          {filteredManuscripts.map((item) => (
            <article
              key={item.id}
              className="p-4 sm:p-5"
            >
              <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-blue-700">
                    {item.id}
                  </p>

                  <h4 className="mt-1 text-sm font-bold leading-5 text-slate-700">
                    {item.title}
                  </h4>
                </div>

                <span
                  className={`w-fit shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
                    statusStyles[item.status]
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-slate-500 min-[480px]:grid-cols-2">
                <p>
                  <span className="font-semibold text-slate-600">
                    Author:
                  </span>{" "}
                  {item.author}
                </p>

                <p>
                  <span className="font-semibold text-slate-600">
                    Date:
                  </span>{" "}
                  {item.submitted}
                </p>

                <p className="min-[480px]:col-span-2">
                  <span className="font-semibold text-slate-600">
                    Journal:
                  </span>{" "}
                  {item.journal}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleViewManuscript(item.id)
                }
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
              >
                <Eye size={16} />
                View Manuscript
              </button>
            </article>
          ))}
        </div>

        {filteredManuscripts.length === 0 && (
          <div className="px-6 py-12 text-center">
            <Search className="mx-auto h-10 w-10 text-slate-300" />

            <h4 className="mt-3 font-semibold text-slate-600">
              No manuscripts found
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              Try searching with another keyword.
            </p>
          </div>
        )}
      </motion.section>
    </>
  );
}

export default AdminDashboard;