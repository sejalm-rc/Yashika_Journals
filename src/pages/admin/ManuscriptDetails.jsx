import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  Download,
  Eye,
  FileArchive,
  FileText,
  History,
  Mail,
  MessageSquare,
  Printer,
  Send,
  UserRound,
  X,
} from "lucide-react";

const initialManuscript = {
  id: "YP-AIERRR-25-0178",
  title: "Deep Learning for Medical Image Analysis",
  journal: "AIERRR - AI Engineering Review Research",
  manuscriptType: "Research Article",
  subjectArea: "Artificial Intelligence",
  submittedOn: "15 May 2025 10:24 AM",
  submittedDate: "15 May 2025",
  submittedBy: "Dr. Arjun Verma",
  authorEmail: "arjun.verma@example.com",
  status: "Under Review",
  abstract:
    "This paper presents a novel deep learning framework for accurate medical image analysis using convolutional neural networks. The proposed model demonstrates superior performance on benchmark datasets and can assist clinicians in early diagnosis and decision-making.",
};

const files = [
  {
    id: 1,
    fileName: "Manuscript_Main.docx",
    fileType: "Word Document",
    size: "1.24 MB",
    uploadedOn: "15 May 2025 10:24 AM",
    type: "document",
  },
  {
    id: 2,
    fileName: "Figures.zip",
    fileType: "ZIP Archive",
    size: "4.58 MB",
    uploadedOn: "15 May 2025 10:24 AM",
    type: "archive",
  },
  {
    id: 3,
    fileName: "Supplementary_Material.pdf",
    fileType: "PDF Document",
    size: "812 KB",
    uploadedOn: "15 May 2025 10:24 AM",
    type: "pdf",
  },
  {
    id: 4,
    fileName: "Cover_Letter.pdf",
    fileType: "PDF Document",
    size: "245 KB",
    uploadedOn: "15 May 2025 10:24 AM",
    type: "pdf",
  },
];

const statusOptions = [
  {
    value: "Under Review",
    label: "Under Review",
    description: "Manuscript is under initial review",
    dot: "bg-amber-500",
    badge: "border-amber-200 bg-amber-50 text-amber-700",
  },
  {
    value: "Revision Required",
    label: "Revision Required",
    description: "Major/Minor revision required from author",
    dot: "bg-violet-500",
    badge: "border-violet-200 bg-violet-50 text-violet-700",
  },
  {
    value: "Accepted",
    label: "Accepted",
    description: "Manuscript accepted for publication",
    dot: "bg-emerald-500",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    value: "Rejected",
    label: "Rejected",
    description: "Manuscript rejected",
    dot: "bg-red-500",
    badge: "border-red-200 bg-red-50 text-red-700",
  },
  {
    value: "Published",
    label: "Published",
    description: "Manuscript published",
    dot: "bg-indigo-500",
    badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
];

const tabs = [
  "Submission Details",
  "Author Details",
  "Abstract",
  "Review History",
  "Comments (2)",
];

const reviewHistory = [
  {
    id: 1,
    title: "Manuscript submitted",
    description: "Submission received from Dr. Arjun Verma.",
    date: "15 May 2025 10:24 AM",
  },
  {
    id: 2,
    title: "Initial screening completed",
    description: "The manuscript passed the initial editorial screening.",
    date: "16 May 2025 11:40 AM",
  },
  {
    id: 3,
    title: "Status changed to Under Review",
    description: "The manuscript was sent for editorial review.",
    date: "17 May 2025 09:15 AM",
  },
];

const existingComments = [
  {
    id: 1,
    author: "Administrator",
    text: "Please verify that all figures include appropriate captions.",
    date: "16 May 2025 02:15 PM",
  },
  {
    id: 2,
    author: "Editorial Team",
    text: "The manuscript scope is suitable for the selected journal.",
    date: "17 May 2025 09:10 AM",
  },
];

function ManuscriptDetails() {
  const navigate = useNavigate();
  const { manuscriptId } = useParams();

  const [manuscript, setManuscript] = useState(initialManuscript);
  const [activeTab, setActiveTab] = useState("Submission Details");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [authorComment, setAuthorComment] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [internalComment, setInternalComment] = useState("");
  const [assignedEditor, setAssignedEditor] = useState("");
  const [comments, setComments] = useState(existingComments);

  const currentStatus = useMemo(() => {
    return (
      statusOptions.find(
        (status) => status.value === manuscript.status
      ) || statusOptions[0]
    );
  }, [manuscript.status]);

  const handleDownload = (file) => {
    const content = [
      `Yashika Publications demo file`,
      `Manuscript: ${manuscript.title}`,
      `File: ${file.fileName}`,
      `Type: ${file.fileType}`,
    ].join("\n");

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const downloadUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = downloadUrl;
    anchor.download = file.fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(downloadUrl);

    setMessage({
      type: "success",
      text: `${file.fileName} downloaded successfully.`,
    });
  };

  const handleStatusUpdate = async () => {
    if (!selectedStatus) {
      setMessage({
        type: "error",
        text: "Please select a new manuscript status.",
      });
      return;
    }

    if (selectedStatus === manuscript.status) {
      setMessage({
        type: "error",
        text: "The selected status is already active.",
      });
      return;
    }

    setIsUpdating(true);
    setMessage(null);

    await new Promise((resolve) => setTimeout(resolve, 900));

    const updatedManuscript = {
      ...manuscript,
      status: selectedStatus,
      lastStatusComment: authorComment.trim(),
      updatedAt: new Date().toISOString(),
    };

    setManuscript(updatedManuscript);

    const storedSubmissions = JSON.parse(
      localStorage.getItem("yashikaManuscripts") || "[]"
    );

    const existingIndex = storedSubmissions.findIndex(
      (item) => item.id === updatedManuscript.id
    );

    if (existingIndex >= 0) {
      storedSubmissions[existingIndex] = updatedManuscript;
    } else {
      storedSubmissions.unshift(updatedManuscript);
    }

    localStorage.setItem(
      "yashikaManuscripts",
      JSON.stringify(storedSubmissions)
    );

    setSelectedStatus("");
    setAuthorComment("");
    setIsUpdating(false);

    setMessage({
      type: "success",
      text: `Manuscript status updated to ${selectedStatus}.`,
    });
  };

  const handleAssignEditor = () => {
    if (!assignedEditor) {
      setMessage({
        type: "error",
        text: "Please select an editor.",
      });
      return;
    }

    setActiveModal(null);

    setMessage({
      type: "success",
      text: `Manuscript assigned to ${assignedEditor}.`,
    });

    setAssignedEditor("");
  };

  const handleInternalComment = () => {
    if (!internalComment.trim()) {
      setMessage({
        type: "error",
        text: "Please enter an internal comment.",
      });
      return;
    }

    setComments((previous) => [
      ...previous,
      {
        id: Date.now(),
        author: "Administrator",
        text: internalComment.trim(),
        date: new Date().toLocaleString(),
      },
    ]);

    setInternalComment("");
    setActiveModal(null);
    setActiveTab("Comments (2)");

    setMessage({
      type: "success",
      text: "Internal comment added successfully.",
    });
  };

  const handleEmailAuthor = () => {
    window.location.href = `mailto:${manuscript.authorEmail}?subject=${encodeURIComponent(
      `Update regarding manuscript ${manuscript.id}`
    )}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto w-full max-w-[1650px]">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              height: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              y: -8,
              height: 0,
            }}
            className={`mb-5 flex items-start justify-between gap-3 rounded-xl border px-4 py-3 text-sm ${
              message.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            <div className="flex items-start gap-2">
              {message.type === "success" ? (
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0"
                />
              ) : (
                <CircleAlert
                  size={18}
                  className="mt-0.5 shrink-0"
                />
              )}

              <span>{message.text}</span>
            </div>

            <button
              type="button"
              onClick={() => setMessage(null)}
              className="shrink-0"
              aria-label="Close message"
            >
              <X size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-5 2xl:grid-cols-[minmax(0,1fr)_390px]">
        <motion.section
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="px-4 py-4 sm:px-6">
            <button
              type="button"
              onClick={() => navigate("/admin/submissions")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
            >
              <ArrowLeft size={17} />
              Back to All Submissions
            </button>
          </div>

          <div className="px-4 pb-5 sm:px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 sm:h-20 sm:w-20">
                <FileText size={34} />
              </div>

              <div className="min-w-0 flex-1">
                <h1 className="text-xl font-bold leading-tight text-[#102A5C] sm:text-2xl lg:text-[28px]">
                  {manuscript.title}
                </h1>

                <span className="mt-3 inline-flex rounded-md border border-blue-300 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  {manuscriptId || manuscript.id}
                </span>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <TopInfo
                    label="Journal"
                    value={manuscript.journal}
                  />

                  <TopInfo
                    label="Submitted on"
                    value={manuscript.submittedDate}
                  />

                  <TopInfo
                    label="Submitted by"
                    value={
                      <>
                        <span className="block">
                          {manuscript.submittedBy}
                        </span>

                        <span className="mt-1 block break-all font-normal text-slate-500">
                          {manuscript.authorEmail}
                        </span>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto border-y border-slate-200">
            <div className="flex min-w-max px-3 sm:px-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 py-4 text-xs font-semibold transition-colors sm:px-5 ${
                    activeTab === tab
                      ? "text-blue-700"
                      : "text-slate-500 hover:text-blue-700"
                  }`}
                >
                  {tab}

                  {activeTab === tab && (
                    <motion.span
                      layoutId="manuscript-active-tab"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {activeTab === "Submission Details" && (
                  <SubmissionDetailsTab
                    manuscript={manuscript}
                    currentStatus={currentStatus}
                    files={files}
                    onDownload={handleDownload}
                  />
                )}

                {activeTab === "Author Details" && (
                  <AuthorDetailsTab manuscript={manuscript} />
                )}

                {activeTab === "Abstract" && (
                  <AbstractTab manuscript={manuscript} />
                )}

                {activeTab === "Review History" && (
                  <ReviewHistoryTab />
                )}

                {activeTab === "Comments (2)" && (
                  <CommentsTab comments={comments} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        <aside className="space-y-5">
          <motion.section
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.08,
            }}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <h2 className="text-lg font-bold text-[#102A5C]">
              Update Manuscript Status
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-slate-600">
                Current Status
              </span>

              <span className="h-6 w-px bg-slate-200" />

              <span
                className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${currentStatus.badge}`}
              >
                {manuscript.status}
              </span>
            </div>

            <div className="mt-5">
              <label
                htmlFor="newStatus"
                className="mb-2 block text-sm font-semibold text-[#102A5C]"
              >
                Change Status To
              </label>

              <div className="relative">
                <select
                  id="newStatus"
                  value={selectedStatus}
                  onChange={(event) =>
                    setSelectedStatus(event.target.value)
                  }
                  className="h-11 w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 pr-10 text-sm text-slate-700 outline-none transition-all hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">
                    -- Select New Status --
                  </option>

                  {statusOptions.map((status) => (
                    <option
                      key={status.value}
                      value={status.value}
                    >
                      {status.label}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {statusOptions.map((status) => (
                <div
                  key={status.value}
                  className="flex items-start gap-3"
                >
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${status.dot}`}
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#102A5C]">
                      {status.label}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {status.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <label
                htmlFor="authorComment"
                className="mb-2 block text-sm font-semibold text-[#102A5C]"
              >
                Comments to Author{" "}
                <span className="font-normal text-slate-400">
                  (optional)
                </span>
              </label>

              <textarea
                id="authorComment"
                value={authorComment}
                onChange={(event) =>
                  setAuthorComment(event.target.value)
                }
                rows={5}
                placeholder="Enter comments or decision details for the author..."
                className="w-full resize-y rounded-lg border border-slate-300 px-3 py-3 text-sm leading-6 text-slate-700 outline-none transition-all placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedStatus("");
                  setAuthorComment("");
                }}
                disabled={isUpdating}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-500 bg-white px-4 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleStatusUpdate}
                disabled={isUpdating}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isUpdating ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Update Status
                  </>
                )}
              </button>
            </div>
          </motion.section>

          <motion.section
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.14,
            }}
            className="rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="px-5 py-5 sm:px-6">
              <h2 className="text-lg font-bold text-[#102A5C]">
                Quick Actions
              </h2>
            </div>

            <div className="divide-y divide-slate-100 border-t border-slate-100">
              <QuickAction
                icon={UserRound}
                label="Assign to Editor"
                onClick={() => setActiveModal("assignEditor")}
              />

              <QuickAction
                icon={MessageSquare}
                label="Add Internal Comment"
                onClick={() => setActiveModal("internalComment")}
              />

              <QuickAction
                icon={Eye}
                label="View Review History"
                onClick={() => setActiveTab("Review History")}
              />

              <QuickAction
                icon={Mail}
                label="Email Author"
                onClick={handleEmailAuthor}
              />

              <QuickAction
                icon={Printer}
                label="Print Details"
                onClick={handlePrint}
              />
            </div>
          </motion.section>
        </aside>
      </div>

      <AnimatePresence>
        {activeModal === "assignEditor" && (
          <AssignEditorModal
            assignedEditor={assignedEditor}
            onEditorChange={setAssignedEditor}
            onClose={() => setActiveModal(null)}
            onSubmit={handleAssignEditor}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeModal === "internalComment" && (
          <InternalCommentModal
            comment={internalComment}
            onCommentChange={setInternalComment}
            onClose={() => setActiveModal(null)}
            onSubmit={handleInternalComment}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function TopInfo({ label, value }) {
  return (
    <div className="border-slate-200 sm:border-l sm:pl-4 first:border-l-0 first:pl-0">
      <p className="text-xs font-medium text-slate-400">
        {label}:
      </p>

      <div className="mt-1 text-xs font-semibold leading-5 text-[#102A5C]">
        {value}
      </div>
    </div>
  );
}

function SubmissionDetailsTab({
  manuscript,
  currentStatus,
  files,
  onDownload,
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#102A5C]">
        Manuscript Information
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
        <InfoBlock
          label="Manuscript ID"
          value={manuscript.id}
        />

        <InfoBlock
          label="Manuscript Type"
          value={manuscript.manuscriptType}
        />

        <InfoBlock
          label="Subject Area"
          value={manuscript.subjectArea}
        />

        <InfoBlock
          label="Submitted On"
          value={manuscript.submittedOn}
        />

        <div>
          <p className="text-xs font-medium text-slate-400">
            Current Status
          </p>

          <span
            className={`mt-2 inline-flex rounded-md border px-3 py-1.5 text-xs font-semibold ${currentStatus.badge}`}
          >
            {manuscript.status}
          </span>
        </div>
      </div>

      <div className="mt-7">
        <p className="text-xs font-medium text-slate-400">
          Title
        </p>

        <p className="mt-2 text-sm font-semibold text-[#102A5C]">
          {manuscript.title}
        </p>
      </div>

      <div className="mt-7">
        <p className="text-xs font-medium text-slate-400">
          Abstract
        </p>

        <p className="mt-2 text-sm leading-7 text-[#102A5C]">
          {manuscript.abstract}
        </p>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <h2 className="text-lg font-bold text-[#102A5C]">
          Submitted Files
        </h2>

        <div className="mt-5 hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[850px] border-collapse overflow-hidden rounded-lg border border-slate-200">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                  #
                </th>

                <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                  File Name
                </th>

                <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                  File Type
                </th>

                <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                  Size
                </th>

                <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                  Uploaded On
                </th>

                <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {files.map((file, index) => (
                <FileTableRow
                  key={file.id}
                  file={file}
                  index={index}
                  onDownload={onDownload}
                />
              ))}
            </tbody>

            <tfoot>
              <tr className="border-t border-slate-200 bg-slate-50">
                <td
                  colSpan="3"
                  className="px-4 py-3 text-xs font-medium text-slate-500"
                >
                  Total Files: {files.length}
                </td>

                <td
                  colSpan="3"
                  className="px-4 py-3 text-right text-xs font-medium text-slate-500"
                >
                  Total Size: 6.88 MB
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-5 space-y-3 lg:hidden">
          {files.map((file, index) => (
            <MobileFileCard
              key={file.id}
              file={file}
              index={index}
              onDownload={onDownload}
            />
          ))}

          <div className="flex flex-col gap-1 rounded-lg bg-slate-50 px-4 py-3 text-xs text-slate-500 min-[420px]:flex-row min-[420px]:justify-between">
            <span>Total Files: {files.length}</span>
            <span>Total Size: 6.88 MB</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ label, value }) {
  return (
    <div className="border-slate-200 xl:border-r xl:pr-4 last:border-r-0">
      <p className="text-xs font-medium text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold leading-5 text-[#102A5C]">
        {value}
      </p>
    </div>
  );
}

function FileTableRow({ file, index, onDownload }) {
  const Icon =
    file.type === "archive" ? FileArchive : FileText;

  const iconClass =
    file.type === "archive"
      ? "bg-orange-50 text-orange-500"
      : file.type === "pdf"
        ? "bg-red-50 text-red-500"
        : "bg-blue-50 text-blue-600";

  return (
    <tr className="transition-colors hover:bg-blue-50/40">
      <td className="px-4 py-3 text-sm text-slate-500">
        {index + 1}
      </td>

      <td className="px-4 py-3">
        <p className="text-sm font-medium text-[#102A5C]">
          {file.fileName}
        </p>
      </td>

      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-md ${iconClass}`}
          >
            <Icon size={16} />
          </span>

          <span className="text-sm text-slate-600">
            {file.fileType}
          </span>
        </div>
      </td>

      <td className="px-4 py-3 text-sm text-slate-600">
        {file.size}
      </td>

      <td className="px-4 py-3 text-sm text-slate-600">
        {file.uploadedOn}
      </td>

      <td className="px-4 py-3">
        <button
          type="button"
          onClick={() => onDownload(file)}
          className="inline-flex items-center gap-2 rounded-md border border-blue-300 bg-white px-3 py-2 text-xs font-semibold text-blue-700 transition-all hover:bg-blue-50"
        >
          <Download size={14} />
          Download
        </button>
      </td>
    </tr>
  );
}

function MobileFileCard({
  file,
  index,
  onDownload,
}) {
  const Icon =
    file.type === "archive" ? FileArchive : FileText;

  const iconClass =
    file.type === "archive"
      ? "bg-orange-50 text-orange-500"
      : file.type === "pdf"
        ? "bg-red-50 text-red-500"
        : "bg-blue-50 text-blue-600";

  return (
    <article className="rounded-lg border border-slate-200 p-4">
      <div className="flex items-start gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          <Icon size={18} />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-xs text-slate-400">
            File {index + 1}
          </p>

          <h3 className="mt-1 break-all text-sm font-semibold text-[#102A5C]">
            {file.fileName}
          </h3>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-slate-500 min-[430px]:grid-cols-2">
        <p>
          <span className="font-semibold text-slate-600">
            Type:
          </span>{" "}
          {file.fileType}
        </p>

        <p>
          <span className="font-semibold text-slate-600">
            Size:
          </span>{" "}
          {file.size}
        </p>

        <p className="min-[430px]:col-span-2">
          <span className="font-semibold text-slate-600">
            Uploaded:
          </span>{" "}
          {file.uploadedOn}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onDownload(file)}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-300 bg-blue-50 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
      >
        <Download size={15} />
        Download
      </button>
    </article>
  );
}

function AuthorDetailsTab({ manuscript }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#102A5C]">
        Author Details
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <DetailCard
          label="Full Name"
          value={manuscript.submittedBy}
        />

        <DetailCard
          label="Email Address"
          value={manuscript.authorEmail}
        />

        <DetailCard
          label="Affiliation"
          value="Department of Computer Science and Engineering"
        />

        <DetailCard
          label="Institution"
          value="National Institute of Technology"
        />

        <DetailCard
          label="Country"
          value="India"
        />

        <DetailCard
          label="Corresponding Author"
          value="Yes"
        />
      </div>
    </div>
  );
}

function AbstractTab({ manuscript }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#102A5C]">
        Manuscript Abstract
      </h2>

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm leading-7 text-slate-700">
          {manuscript.abstract}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-bold text-[#102A5C]">
          Keywords
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Deep Learning",
            "Medical Imaging",
            "Convolutional Neural Networks",
            "Healthcare",
            "Artificial Intelligence",
          ].map((keyword) => (
            <span
              key={keyword}
              className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewHistoryTab() {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#102A5C]">
        Review History
      </h2>

      <div className="mt-6 space-y-5">
        {reviewHistory.map((history, index) => (
          <div
            key={history.id}
            className="relative flex gap-4"
          >
            {index !== reviewHistory.length - 1 && (
              <span className="absolute left-5 top-10 h-[calc(100%+4px)] w-px bg-slate-200" />
            )}

            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <History size={18} />
            </span>

            <div className="min-w-0 flex-1 rounded-lg border border-slate-200 p-4">
              <h3 className="text-sm font-semibold text-[#102A5C]">
                {history.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {history.description}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                {history.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommentsTab({ comments }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#102A5C]">
        Internal Comments
      </h2>

      <div className="mt-5 space-y-4">
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="rounded-xl border border-slate-200 p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <UserRound size={17} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#102A5C]">
                  {comment.author}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {comment.date}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              {comment.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function DetailCard({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-medium text-slate-400">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-semibold text-[#102A5C]">
        {value}
      </p>
    </div>
  );
}

function QuickAction({ icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-blue-50 sm:px-6"
    >
      <span className="flex min-w-0 items-center gap-3">
        <Icon
          size={18}
          className="shrink-0 text-blue-600 transition-transform group-hover:scale-110"
        />

        <span className="truncate text-sm font-medium text-[#102A5C]">
          {label}
        </span>
      </span>

      <ChevronRight
        size={17}
        className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600"
      />
    </button>
  );
}

function AssignEditorModal({
  assignedEditor,
  onEditorChange,
  onClose,
  onSubmit,
}) {
  return (
    <ModalShell
      title="Assign Manuscript to Editor"
      description="Select an editor who will manage this manuscript."
      onClose={onClose}
    >
      <label className="mb-2 block text-sm font-semibold text-[#102A5C]">
        Select Editor
      </label>

      <select
        value={assignedEditor}
        onChange={(event) =>
          onEditorChange(event.target.value)
        }
        className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >
        <option value="">Choose an editor</option>
        <option value="Dr. Neha Sharma">
          Dr. Neha Sharma
        </option>
        <option value="Prof. Amit Verma">
          Prof. Amit Verma
        </option>
        <option value="Dr. Priya Mehta">
          Dr. Priya Mehta
        </option>
      </select>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onClose}
          className="min-h-11 rounded-lg border border-slate-300 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onSubmit}
          className="min-h-11 rounded-lg bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Assign Editor
        </button>
      </div>
    </ModalShell>
  );
}

function InternalCommentModal({
  comment,
  onCommentChange,
  onClose,
  onSubmit,
}) {
  return (
    <ModalShell
      title="Add Internal Comment"
      description="This comment is only visible to the editorial team."
      onClose={onClose}
    >
      <textarea
        value={comment}
        onChange={(event) =>
          onCommentChange(event.target.value)
        }
        rows={6}
        placeholder="Enter your internal comment..."
        className="w-full resize-y rounded-lg border border-slate-300 px-3 py-3 text-sm leading-6 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onClose}
          className="min-h-11 rounded-lg border border-slate-300 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onSubmit}
          className="min-h-11 rounded-lg bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Add Comment
        </button>
      </div>
    </ModalShell>
  );
}

function ModalShell({
  title,
  description,
  onClose,
  children,
}) {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6">
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
        aria-label="Close modal"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 25,
          scale: 0.96,
        }}
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-red-500"
        >
          <X size={19} />
        </button>

        <h2 className="pr-10 text-xl font-bold text-[#102A5C]">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-6">{children}</div>
      </motion.div>
    </div>
  );
}

export default ManuscriptDetails;