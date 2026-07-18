import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Download,
  Eye,
  FileArchive,
  FileText,
  FolderOpen,
  History,
  Info,
  Save,
  X,
} from "lucide-react";

const initialArticle = {
  volumeIssue: "Volume 5, Issue 2 (May 2025)",
  selectedArticle: "Deep Learning for Medical Image Analysis",
  articleId: "AIE-2025-0178",
  status: "Accepted",
  submittedOn: "15 Apr 2025",
  acceptedOn: "18 May 2025",
  lastUpdated: "20 May 2025",

  articleType: "Research Article",
  section: "Artificial Intelligence",
  title: "Deep Learning for Medical Image Analysis",
  runningTitle: "Deep Learning for Medical Image Analysis",
  doiPrefix: "10.1234/aieerr",
  doiSuffix: "2025.0178",
  finalTitle: "Deep Learning for Medical Image Analysis",
  abstract:
    "This paper presents a novel deep learning framework for accurate medical image analysis using convolutional neural networks. The proposed model demonstrates superior performance on benchmark datasets and can assist clinicians in early diagnosis and decision-making.",

  volume: "5",
  issue: "2 (May 2025)",
  pages: "120 - 135",
  articleOrder: "5",
  publicationDate: "2025-05-23",

  accessType: "Gold Open Access",
  license: "CC BY 4.0 (Attribution)",
  immediatelyVisible: true,
};

const initialKeywords = [
  "Deep Learning",
  "Medical Image Analysis",
  "Convolutional Neural Networks",
  "Healthcare",
  "AI",
];

const articleFiles = [
  {
    id: 1,
    title: "Manuscript_Main.docx",
    subtitle: "Main File",
    size: "245 KB",
    type: "document",
  },
  {
    id: 2,
    title: "Figures.zip",
    subtitle: "Figures",
    size: "8.4 MB",
    type: "archive",
  },
  {
    id: 3,
    title: "Supplementary.pdf",
    subtitle: "Supplementary Material",
    size: "1.2 MB",
    type: "pdf",
  },
  {
    id: 4,
    title: "Cover_Letter.pdf",
    subtitle: "Cover Letter",
    size: "320 KB",
    type: "pdf",
  },
];

const tabs = [
  "Article Details",
  "Authors",
  "Abstract",
  "Keywords",
  "Metadata",
  "Files",
];

function EditArticle() {
  const navigate = useNavigate();

  const [article, setArticle] = useState(initialArticle);
  const [keywords, setKeywords] = useState(initialKeywords);
  const [keywordInput, setKeywordInput] = useState("");
  const [activeTab, setActiveTab] = useState("Article Details");
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showFileManager, setShowFileManager] = useState(false);
  const [message, setMessage] = useState(null);

  const abstractWordCount = useMemo(() => {
    const value = article.abstract.trim();

    return value ? value.split(/\s+/).length : 0;
  }, [article.abstract]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setArticle((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage(null);
  };

  const addKeyword = () => {
    const value = keywordInput.trim();

    if (!value) return;

    const alreadyExists = keywords.some(
      (keyword) => keyword.toLowerCase() === value.toLowerCase()
    );

    if (alreadyExists) {
      setMessage({
        type: "error",
        text: "This keyword has already been added.",
      });
      return;
    }

    setKeywords((previous) => [...previous, value]);
    setKeywordInput("");
  };

  const handleKeywordKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addKeyword();
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords((previous) =>
      previous.filter((keyword) => keyword !== keywordToRemove)
    );
  };

  const validateArticle = () => {
    if (!article.volumeIssue) {
      return "Please select a volume and issue.";
    }

    if (!article.selectedArticle) {
      return "Please select an article.";
    }

    if (!article.articleType) {
      return "Please select an article type.";
    }

    if (!article.title.trim()) {
      return "Article title is required.";
    }

    if (!article.doiSuffix.trim()) {
      return "DOI suffix is required.";
    }

    if (!article.finalTitle.trim()) {
      return "Final article title is required.";
    }

    if (keywords.length === 0) {
      return "Please add at least one keyword.";
    }

    if (!article.abstract.trim()) {
      return "Abstract is required.";
    }

    if (abstractWordCount > 300) {
      return "Abstract cannot exceed 300 words.";
    }

    if (!article.volume.trim()) {
      return "Volume is required.";
    }

    if (!article.issue.trim()) {
      return "Issue is required.";
    }

    if (!article.pages.trim()) {
      return "Page range is required.";
    }

    if (!article.publicationDate) {
      return "Publication date is required.";
    }

    return null;
  };

  const handleSave = async () => {
    const validationError = validateArticle();

    if (validationError) {
      setMessage({
        type: "error",
        text: validationError,
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    setIsSaving(true);
    setMessage(null);

    await new Promise((resolve) => setTimeout(resolve, 900));

    const updatedArticle = {
      ...article,
      keywords,
      updatedAt: new Date().toISOString(),
    };

    const storedArticles = JSON.parse(
      localStorage.getItem("yashikaAdminArticles") || "[]"
    );

    const existingIndex = storedArticles.findIndex(
      (item) => item.articleId === updatedArticle.articleId
    );

    if (existingIndex >= 0) {
      storedArticles[existingIndex] = updatedArticle;
    } else {
      storedArticles.unshift(updatedArticle);
    }

    localStorage.setItem(
      "yashikaAdminArticles",
      JSON.stringify(storedArticles)
    );

    setIsSaving(false);

    setMessage({
      type: "success",
      text: "Article changes saved successfully.",
    });
  };

  const handleDownload = (file) => {
    const content = [
      "Yashika Publications",
      `Article: ${article.title}`,
      `File: ${file.title}`,
      `Size: ${file.size}`,
    ].join("\n");

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = file.title;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(url);

    setMessage({
      type: "success",
      text: `${file.title} downloaded successfully.`,
    });
  };

  const handleDownloadAll = () => {
    articleFiles.forEach((file, index) => {
      setTimeout(() => {
        handleDownload(file);
      }, index * 250);
    });
  };

  return (
    <div className="mx-auto w-full max-w-[1650px]">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
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
                <AlertCircle
                  size={18}
                  className="mt-0.5 shrink-0"
                />
              )}

              <span>{message.text}</span>
            </div>

            <button
              type="button"
              onClick={() => setMessage(null)}
              aria-label="Close message"
            >
              <X size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-5 2xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 space-y-5">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <h1 className="text-lg font-bold text-[#102A5C]">
              Select Article
            </h1>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <FieldLabel required>
                  Volume / Issue / Section
                </FieldLabel>

                <SelectField
                  name="volumeIssue"
                  value={article.volumeIssue}
                  onChange={handleChange}
                >
                  <option>Volume 5, Issue 2 (May 2025)</option>
                  <option>Volume 5, Issue 1 (January 2025)</option>
                  <option>Volume 4, Issue 4 (December 2024)</option>
                </SelectField>
              </div>

              <div>
                <FieldLabel required>
                  Select Article
                </FieldLabel>

                <SelectField
                  name="selectedArticle"
                  value={article.selectedArticle}
                  onChange={handleChange}
                >
                  <option>
                    Deep Learning for Medical Image Analysis
                  </option>
                  <option>
                    Explainable AI Approaches in Healthcare
                  </option>
                  <option>
                    Federated Learning for Medical Systems
                  </option>
                </SelectField>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
              <CheckCircle2 size={16} />
              Article details loaded successfully.
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="overflow-x-auto border-b border-slate-200">
              <div className="flex min-w-max px-2 sm:px-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-3 py-4 text-xs font-semibold transition-colors sm:px-4 ${
                      activeTab === tab
                        ? "text-blue-700"
                        : "text-slate-500 hover:text-blue-700"
                    }`}
                  >
                    {tab}

                    {activeTab === tab && (
                      <motion.span
                        layoutId="edit-article-tab"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "Article Details" && (
                    <ArticleDetailsForm
                      article={article}
                      keywords={keywords}
                      keywordInput={keywordInput}
                      abstractWordCount={abstractWordCount}
                      onChange={handleChange}
                      onKeywordInput={setKeywordInput}
                      onKeywordKeyDown={handleKeywordKeyDown}
                      onAddKeyword={addKeyword}
                      onRemoveKeyword={removeKeyword}
                    />
                  )}

                  {activeTab !== "Article Details" && (
                    <TabPlaceholder tab={activeTab} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.section>

          <PublicationDetails
            article={article}
            onChange={handleChange}
          />

          <VisibilityAccess
            article={article}
            onChange={handleChange}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky bottom-3 z-20 grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl min-[500px]:grid-cols-3"
          >
            <button
              type="button"
              onClick={() => navigate("/admin/articles")}
              disabled={isSaving}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 disabled:opacity-60"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => setShowPreview(true)}
              disabled={isSaving}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-blue-400 bg-white px-5 text-sm font-semibold text-blue-700 transition-all hover:-translate-y-0.5 hover:bg-blue-50 disabled:opacity-60"
            >
              <Eye size={16} />
              Preview Article
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSaving ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Saving Changes...
                </>
              ) : (
                <>
                  <Save size={16} />
                  Save Changes
                </>
              )}
            </button>
          </motion.div>
        </div>

        <aside className="space-y-5">
          <ArticleInformation article={article} />

          <FilesPanel
            files={articleFiles}
            onDownload={handleDownload}
            onManageFiles={() => setShowFileManager(true)}
          />

          <QuickActions
            onPreview={() => setShowPreview(true)}
            onDownloadAll={handleDownloadAll}
            onHistory={() => navigate("/admin/articles/audit-trail")}
            onSubmission={() =>
              navigate("/admin/submissions/YP-AIERRR-25-0178")
            }
          />

          <NotePanel />
        </aside>
      </div>

      <AnimatePresence>
        {showPreview && (
          <ArticlePreviewModal
            article={article}
            keywords={keywords}
            onClose={() => setShowPreview(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFileManager && (
          <FileManagerModal
            files={articleFiles}
            onDownload={handleDownload}
            onClose={() => setShowFileManager(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldLabel({ children, required = false }) {
  return (
    <label className="mb-2 block text-xs font-semibold text-[#102A5C]">
      {children}

      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
}

function TextInput({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-xs text-slate-700 outline-none transition-all placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-50 ${className}`}
    />
  );
}

function SelectField({ children, ...props }) {
  return (
    <div className="relative">
      <select
        {...props}
        className="h-10 w-full appearance-none rounded-md border border-slate-300 bg-white px-3 pr-9 text-xs text-slate-700 outline-none transition-all hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >
        {children}
      </select>

      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

function ArticleDetailsForm({
  article,
  keywords,
  keywordInput,
  abstractWordCount,
  onChange,
  onKeywordInput,
  onKeywordKeyDown,
  onAddKeyword,
  onRemoveKeyword,
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <FieldLabel required>
            Article Type
          </FieldLabel>

          <SelectField
            name="articleType"
            value={article.articleType}
            onChange={onChange}
          >
            <option>Research Article</option>
            <option>Review Article</option>
            <option>Case Study</option>
            <option>Short Communication</option>
          </SelectField>
        </div>

        <div>
          <FieldLabel required>
            Section / Category
          </FieldLabel>

          <SelectField
            name="section"
            value={article.section}
            onChange={onChange}
          >
            <option>Artificial Intelligence</option>
            <option>Machine Learning</option>
            <option>Computer Science</option>
            <option>Healthcare Technology</option>
          </SelectField>
        </div>
      </div>

      <div>
        <FieldLabel required>Title</FieldLabel>

        <TextInput
          name="title"
          value={article.title}
          onChange={onChange}
          maxLength={500}
        />

        <p className="mt-1 text-right text-[10px] text-slate-400">
          {article.title.length}/500
        </p>
      </div>

      <div>
        <FieldLabel>Running Title (Optional)</FieldLabel>

        <TextInput
          name="runningTitle"
          value={article.runningTitle}
          onChange={onChange}
          maxLength={60}
        />

        <p className="mt-1 text-right text-[10px] text-slate-400">
          {article.runningTitle.length}/60
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <FieldLabel>DOI Prefix</FieldLabel>

          <TextInput
            name="doiPrefix"
            value={article.doiPrefix}
            disabled
          />

          <p className="mt-1 text-[10px] text-slate-400">
            Prefix is configured in journal settings.
          </p>
        </div>

        <div>
          <FieldLabel required>DOI Suffix</FieldLabel>

          <TextInput
            name="doiSuffix"
            value={article.doiSuffix}
            onChange={onChange}
          />

          <p className="mt-1 text-[10px] text-slate-400">
            Full DOI: {article.doiPrefix}/{article.doiSuffix}
          </p>
        </div>
      </div>

      <div>
        <FieldLabel required>
          Final Article Title
        </FieldLabel>

        <TextInput
          name="finalTitle"
          value={article.finalTitle}
          onChange={onChange}
          maxLength={500}
        />

        <p className="mt-1 text-right text-[10px] text-slate-400">
          {article.finalTitle.length}/500
        </p>
      </div>

      <div>
        <FieldLabel required>Keywords</FieldLabel>

        <div className="rounded-md border border-slate-300 bg-white p-2 transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-[10px] text-slate-600"
              >
                {keyword}

                <button
                  type="button"
                  onClick={() => onRemoveKeyword(keyword)}
                  className="text-slate-400 hover:text-red-500"
                >
                  <X size={11} />
                </button>
              </span>
            ))}

            <input
              type="text"
              value={keywordInput}
              onChange={(event) =>
                onKeywordInput(event.target.value)
              }
              onKeyDown={onKeywordKeyDown}
              placeholder="Add more keywords..."
              className="min-w-[140px] flex-1 px-1 py-1 text-xs outline-none"
            />

            <button
              type="button"
              onClick={onAddKeyword}
              className="rounded bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-700 hover:bg-blue-100"
            >
              Add
            </button>
          </div>
        </div>

        <p className="mt-1 text-[10px] text-slate-400">
          Press Enter to add more keywords.
        </p>
      </div>

      <div>
        <FieldLabel required>Abstract</FieldLabel>

        <div className="overflow-hidden rounded-md border border-slate-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
          <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 px-2 py-2">
            {[
              "Paragraph",
              "B",
              "I",
              "U",
              "•",
              "1.",
              "↶",
              "↷",
              "❝",
            ].map((tool) => (
              <button
                key={tool}
                type="button"
                className="min-h-7 rounded px-2 text-[10px] font-semibold text-slate-600 hover:bg-white hover:text-blue-700"
              >
                {tool}
              </button>
            ))}
          </div>

          <textarea
            name="abstract"
            value={article.abstract}
            onChange={onChange}
            rows={7}
            className="w-full resize-y px-3 py-3 text-xs leading-5 text-slate-700 outline-none"
          />

          <div className="border-t border-slate-200 px-3 py-2 text-[10px] text-slate-400">
            Word count: {abstractWordCount} / 300
          </div>
        </div>
      </div>
    </div>
  );
}

function PublicationDetails({ article, onChange }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 }}
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
    >
      <h2 className="text-base font-bold text-[#102A5C]">
        Publication Details
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <FieldLabel required>Volume</FieldLabel>

          <SelectField
            name="volume"
            value={article.volume}
            onChange={onChange}
          >
            <option>5</option>
            <option>4</option>
            <option>3</option>
          </SelectField>
        </div>

        <div>
          <FieldLabel required>Issue</FieldLabel>

          <SelectField
            name="issue"
            value={article.issue}
            onChange={onChange}
          >
            <option>2 (May 2025)</option>
            <option>1 (January 2025)</option>
          </SelectField>
        </div>

        <div>
          <FieldLabel required>Pages</FieldLabel>

          <TextInput
            name="pages"
            value={article.pages}
            onChange={onChange}
          />
        </div>

        <div>
          <FieldLabel required>
            Article Order
          </FieldLabel>

          <TextInput
            type="number"
            min="1"
            name="articleOrder"
            value={article.articleOrder}
            onChange={onChange}
          />

          <p className="mt-1 text-[10px] text-slate-400">
            Order in the issue
          </p>
        </div>

        <div className="sm:col-span-2">
          <FieldLabel required>
            Publication Date
          </FieldLabel>

          <div className="relative">
            <TextInput
              type="date"
              name="publicationDate"
              value={article.publicationDate}
              onChange={onChange}
              className="pr-10"
            />

            <CalendarDays
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function VisibilityAccess({ article, onChange }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 }}
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
    >
      <h2 className="text-base font-bold text-[#102A5C]">
        Visibility & Access
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <FieldLabel required>
            Access Type
          </FieldLabel>

          <SelectField
            name="accessType"
            value={article.accessType}
            onChange={onChange}
          >
            <option>Gold Open Access</option>
            <option>Hybrid Open Access</option>
            <option>Subscription Access</option>
          </SelectField>
        </div>

        <div>
          <FieldLabel required>License</FieldLabel>

          <SelectField
            name="license"
            value={article.license}
            onChange={onChange}
          >
            <option>CC BY 4.0 (Attribution)</option>
            <option>CC BY-NC 4.0</option>
            <option>CC BY-SA 4.0</option>
          </SelectField>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold text-[#102A5C]">
            Make Article Immediately Visible
          </p>

          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            If enabled, the article will be visible to all users
            immediately after publication.
          </p>
        </div>

        <ToggleSwitch
          name="immediatelyVisible"
          checked={article.immediatelyVisible}
          onChange={onChange}
        />
      </div>
    </motion.section>
  );
}

function ToggleSwitch({ name, checked, onChange }) {
  return (
    <label className="relative inline-flex shrink-0 cursor-pointer items-center">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <span className="h-6 w-11 rounded-full bg-slate-300 transition-colors peer-checked:bg-blue-600" />

      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
    </label>
  );
}

function ArticleInformation({ article }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-base font-bold text-[#102A5C]">
        Article Information
      </h2>

      <div className="mt-5 space-y-4">
        <SideInfo
          label="Article ID"
          value={article.articleId}
        />

        <SideInfo
          label="Status"
          value={
            <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
              {article.status}
            </span>
          }
        />

        <SideInfo
          label="Submitted On"
          value={article.submittedOn}
        />

        <SideInfo
          label="Accepted On"
          value={article.acceptedOn}
        />

        <SideInfo
          label="Last Updated"
          value={article.lastUpdated}
        />
      </div>
    </motion.section>
  );
}

function SideInfo({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-xs font-medium text-slate-500">
        {label}
      </span>

      <div className="text-right text-xs font-semibold text-[#102A5C]">
        {value}
      </div>
    </div>
  );
}

function FilesPanel({
  files,
  onDownload,
  onManageFiles,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.06 }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-base font-bold text-[#102A5C]">
        Files ({files.length})
      </h2>

      <div className="mt-4 divide-y divide-slate-100">
        {files.map((file) => (
          <FileRow
            key={file.id}
            file={file}
            onDownload={onDownload}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onManageFiles}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-400 bg-white py-2.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-50"
      >
        <FolderOpen size={15} />
        Manage Files
      </button>
    </motion.section>
  );
}

function FileRow({ file, onDownload }) {
  const Icon =
    file.type === "archive" ? FileArchive : FileText;

  const iconClass =
    file.type === "archive"
      ? "bg-orange-50 text-orange-500"
      : file.type === "pdf"
        ? "bg-red-50 text-red-500"
        : "bg-blue-50 text-blue-600";

  return (
    <div className="flex items-center gap-3 py-3">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
      >
        <Icon size={17} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold text-[#102A5C]">
          {file.title}
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          {file.subtitle}
        </p>

        <p className="mt-0.5 text-[10px] text-slate-400">
          {file.size}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onDownload(file)}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-blue-200 text-blue-600 transition hover:bg-blue-50"
        aria-label={`Download ${file.title}`}
      >
        <Download size={14} />
      </button>
    </div>
  );
}

function QuickActions({
  onPreview,
  onDownloadAll,
  onHistory,
  onSubmission,
}) {
  const actions = [
    {
      label: "View Article",
      icon: Eye,
      onClick: onPreview,
    },
    {
      label: "Download All Files",
      icon: Download,
      onClick: onDownloadAll,
    },
    {
      label: "Preview Article",
      icon: Eye,
      onClick: onPreview,
    },
    {
      label: "View Submission",
      icon: FileText,
      onClick: onSubmission,
    },
    {
      label: "Audit Trail",
      icon: History,
      onClick: onHistory,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-base font-bold text-[#102A5C]">
        Quick Actions
      </h2>

      <div className="mt-4 space-y-1">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              type="button"
              onClick={action.onClick}
              className="group flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left transition hover:bg-blue-50"
            >
              <Icon
                size={16}
                className="shrink-0 text-blue-600 transition-transform group-hover:scale-110"
              />

              <span className="text-xs font-medium text-[#102A5C]">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.section>
  );
}

function NotePanel() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.14 }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
        <Info
          size={17}
          className="mt-0.5 shrink-0 text-blue-600"
        />

        <div>
          <h3 className="text-sm font-bold text-[#102A5C]">
            Note
          </h3>

          <p className="mt-2 text-xs leading-5 text-slate-600">
            After saving changes, an email notification will be sent
            to the authors if enabled in settings.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function TabPlaceholder({ tab }) {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <FileText size={24} />
      </div>

      <h2 className="mt-4 text-lg font-bold text-[#102A5C]">
        {tab}
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        The {tab.toLowerCase()} information for this article will be
        displayed here.
      </p>
    </div>
  );
}

function ArticlePreviewModal({
  article,
  keywords,
  onClose,
}) {
  return (
    <ModalShell
      title="Article Preview"
      description="Preview how this article will appear after publication."
      onClose={onClose}
      maxWidth="max-w-4xl"
    >
      <article>
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {article.articleType}
        </span>

        <h1 className="mt-5 text-2xl font-bold leading-tight text-[#102A5C] sm:text-4xl">
          {article.finalTitle}
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Published on {article.publicationDate}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-[#102A5C]">
            Abstract
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {article.abstract}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 rounded-xl bg-slate-50 p-5 sm:grid-cols-2">
          <SideInfo
            label="DOI"
            value={`${article.doiPrefix}/${article.doiSuffix}`}
          />

          <SideInfo
            label="Pages"
            value={article.pages}
          />

          <SideInfo
            label="Access"
            value={article.accessType}
          />

          <SideInfo
            label="License"
            value={article.license}
          />
        </div>
      </article>
    </ModalShell>
  );
}

function FileManagerModal({
  files,
  onDownload,
  onClose,
}) {
  const inputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState(files);

  const handleUpload = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    setUploadedFiles((previous) => [
      ...previous,
      {
        id: Date.now(),
        title: selectedFile.name,
        subtitle: "Uploaded File",
        size: `${(selectedFile.size / 1024).toFixed(0)} KB`,
        type: selectedFile.name.endsWith(".zip")
          ? "archive"
          : selectedFile.name.endsWith(".pdf")
            ? "pdf"
            : "document",
      },
    ]);

    event.target.value = "";
  };

  return (
    <ModalShell
      title="Manage Article Files"
      description="Review, upload, download, or remove article files."
      onClose={onClose}
      maxWidth="max-w-2xl"
    >
      <input
        ref={inputRef}
        type="file"
        onChange={handleUpload}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mb-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
      >
        <FolderOpen size={16} />
        Upload New File
      </button>

      <div className="divide-y divide-slate-100 rounded-xl border border-slate-200">
        {uploadedFiles.map((file) => (
          <div
            key={file.id}
            className="flex items-center gap-3 p-4"
          >
            <FileText
              size={20}
              className="shrink-0 text-blue-600"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#102A5C]">
                {file.title}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {file.size}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onDownload(file)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Download size={15} />
            </button>

            <button
              type="button"
              onClick={() =>
                setUploadedFiles((previous) =>
                  previous.filter((item) => item.id !== file.id)
                )
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-500 hover:bg-red-50"
            >
              <X size={15} />
            </button>
          </div>
        ))}
      </div>
    </ModalShell>
  );
}

function ModalShell({
  title,
  description,
  children,
  onClose,
  maxWidth = "max-w-lg",
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
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.96 }}
        className={`relative z-10 max-h-[90vh] w-full overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6 ${maxWidth}`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-red-500"
        >
          <X size={19} />
        </button>

        <h2 className="pr-12 text-xl font-bold text-[#102A5C]">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default EditArticle;