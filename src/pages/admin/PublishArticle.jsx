import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  Download,
  Eye,
  FileArchive,
  FileText,
  Info,
  Plus,
  Send,
  Tag,
  X,
} from "lucide-react";

const initialArticle = {
  finalTitle: "Deep Learning for Medical Image Analysis",
  runningTitle: "Deep Learning for Medical Image Analysis",
  doiPrefix: "10.1234/aieerr",
  doiSuffix: "2025.0178",
  articleType: "Research Article",
  section: "Artificial Intelligence",
  abstract:
    "This paper presents a novel deep learning framework for accurate medical image analysis using convolutional neural networks. The proposed model demonstrates superior performance on benchmark datasets and can assist clinicians in early diagnosis and decision-making.",
  issue: "Volume 5, Issue 2 (May 2025)",
  publicationDate: "2025-05-23",
  pages: "120 - 135",
  articleOrder: "5",
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

const files = [
  {
    id: 1,
    title: "Manuscript Main File",
    filename: "Manuscript_Main.docx",
    type: "document",
  },
  {
    id: 2,
    title: "Figures",
    filename: "Figures.zip",
    type: "archive",
  },
  {
    id: 3,
    title: "Supplementary Material",
    filename: "Supplementary.pdf",
    type: "pdf",
  },
  {
    id: 4,
    title: "Cover Letter",
    filename: "Cover_Letter.pdf",
    type: "pdf",
  },
];

const checklistItems = [
  "Manuscript accepted",
  "All required files uploaded",
  "Metadata completed",
  "Authors information verified",
  "Issue/Volume selected",
  "DOI will be assigned",
];

const tabs = [
  "Article Details",
  "Files",
  "Authors",
  "Review History",
  "Metadata",
];

function PublishArticle() {
  const navigate = useNavigate();

  const [article, setArticle] = useState(initialArticle);
  const [keywords, setKeywords] = useState(initialKeywords);
  const [keywordInput, setKeywordInput] = useState("");
  const [activeTab, setActiveTab] = useState("Article Details");
  const [showPreview, setShowPreview] = useState(false);
  const [showPublishConfirm, setShowPublishConfirm] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [message, setMessage] = useState(null);

  const titleCount = article.finalTitle.length;
  const runningTitleCount = article.runningTitle.length;
  const abstractWordCount = useMemo(
    () =>
      article.abstract.trim()
        ? article.abstract.trim().split(/\s+/).length
        : 0,
    [article.abstract]
  );

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setArticle((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage(null);
  };

  const handleAddKeyword = () => {
    const value = keywordInput.trim();

    if (!value) return;

    const exists = keywords.some(
      (keyword) => keyword.toLowerCase() === value.toLowerCase()
    );

    if (exists) {
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
      handleAddKeyword();
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords((previous) =>
      previous.filter((keyword) => keyword !== keywordToRemove)
    );
  };

  const handleDownload = (file) => {
    const content = `Demo download for ${file.title}\nFile: ${file.filename}`;
    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = file.filename;
    anchor.click();

    URL.revokeObjectURL(url);

    setMessage({
      type: "success",
      text: `${file.filename} downloaded successfully.`,
    });
  };

  const validateArticle = () => {
    if (!article.finalTitle.trim()) {
      return "Final article title is required.";
    }

    if (!article.doiSuffix.trim()) {
      return "DOI suffix is required.";
    }

    if (!article.articleType) {
      return "Please select an article type.";
    }

    if (!article.section) {
      return "Please select a category or section.";
    }

    if (keywords.length === 0) {
      return "Please add at least one keyword.";
    }

    if (!article.abstract.trim()) {
      return "Abstract is required.";
    }

    if (!article.issue) {
      return "Please select an issue and volume.";
    }

    if (!article.publicationDate) {
      return "Publication date is required.";
    }

    if (!article.pages.trim()) {
      return "Article page range is required.";
    }

    if (!article.articleOrder.trim()) {
      return "Article order is required.";
    }

    return null;
  };

  const handleSaveDraft = () => {
    localStorage.setItem(
      "yashikaPublishArticleDraft",
      JSON.stringify({
        article,
        keywords,
        savedAt: new Date().toISOString(),
      })
    );

    setMessage({
      type: "success",
      text: "Article draft saved successfully.",
    });
  };

  const handleOpenPublishConfirmation = () => {
    const validationError = validateArticle();

    if (validationError) {
      setMessage({
        type: "error",
        text: validationError,
      });
      return;
    }

    setShowPublishConfirm(true);
  };

  const handlePublish = async () => {
    setIsPublishing(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const publishedArticle = {
      id: `ART-${Date.now()}`,
      ...article,
      keywords,
      status: "Published",
      publishedAt: new Date().toISOString(),
    };

    const storedArticles = JSON.parse(
      localStorage.getItem("yashikaPublishedArticles") || "[]"
    );

    localStorage.setItem(
      "yashikaPublishedArticles",
      JSON.stringify([publishedArticle, ...storedArticles])
    );

    localStorage.removeItem("yashikaPublishArticleDraft");

    setIsPublishing(false);
    setShowPublishConfirm(false);

    setMessage({
      type: "success",
      text: "Article published successfully. DOI assignment has started.",
    });
  };

  return (
    <div className="mx-auto w-full max-w-[1600px]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
      >
        <div>
          <h1 className="text-2xl font-bold text-[#102A5C] sm:text-[28px]">
            Publish Article
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Review details and publish the article to make it publicly
            available.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/admin/submissions")}
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#102A5C] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
        >
          <ArrowLeft size={16} />
          Back to Submission
        </button>
      </motion.div>

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
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
              ) : (
                <CircleAlert size={18} className="mt-0.5 shrink-0" />
              )}

              <span>{message.text}</span>
            </div>

            <button
              type="button"
              onClick={() => setMessage(null)}
              className="shrink-0"
            >
              <X size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_330px]">
        <div className="min-w-0 space-y-5">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <FileText size={27} />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold text-[#102A5C] sm:text-xl">
                    Deep Learning for Medical Image Analysis
                  </h2>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                      YP-AIEERR-25-0178
                    </span>

                    <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                      Accepted
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 border-t border-slate-100 pt-4 sm:grid-cols-3">
                <InfoItem
                  label="Journal"
                  value="AIEERR - AI Engineering Review Research"
                />

                <InfoItem
                  label="Author"
                  value="Dr. Arjun Verma"
                />

                <InfoItem
                  label="Accepted On"
                  value="18 May 2025"
                />
              </div>
            </div>

            <div className="overflow-x-auto border-t border-slate-200">
              <div className="flex min-w-max px-3 sm:px-5">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-3 py-3.5 text-xs font-semibold transition-colors sm:px-4 ${
                      activeTab === tab
                        ? "text-blue-700"
                        : "text-slate-500 hover:text-blue-600"
                    }`}
                  >
                    {tab}

                    {activeTab === tab && (
                      <motion.span
                        layoutId="publish-tab"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.section>

          {activeTab === "Article Details" ? (
            <>
              <ArticleInformationSection
                article={article}
                keywords={keywords}
                keywordInput={keywordInput}
                titleCount={titleCount}
                runningTitleCount={runningTitleCount}
                abstractWordCount={abstractWordCount}
                onChange={handleChange}
                onKeywordInput={setKeywordInput}
                onKeywordKeyDown={handleKeywordKeyDown}
                onAddKeyword={handleAddKeyword}
                onRemoveKeyword={removeKeyword}
              />

              <PublicationSettingsSection
                article={article}
                onChange={handleChange}
              />

              <AccessSection
                article={article}
                onChange={handleChange}
              />
            </>
          ) : (
            <TabPlaceholder activeTab={activeTab} />
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className=" bottom-3 z-20 grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl min-[520px]:grid-cols-3"
          >
            <button
              type="button"
              onClick={handleSaveDraft}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-blue-500 bg-white px-4 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Save as Draft
            </button>

            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-blue-500 bg-white px-4 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <Eye size={16} />
              Preview Article
            </button>

            <button
              type="button"
              onClick={handleOpenPublishConfirmation}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Send size={16} />
              Publish Article
            </button>
          </motion.div>
        </div>

        <aside className="space-y-5">
          <FilesPanel onDownload={handleDownload} />

          <motion.section
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18 }}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="font-bold text-[#102A5C]">
              Article Preview
            </h3>

            <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50/70 p-4">
              <div className="flex gap-2 text-sm text-slate-600">
                <Info
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <p>
                  Preview how the article will appear to readers.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-300 bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50"
              >
                <Eye size={15} />
                Preview Article
              </button>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.24 }}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="font-bold text-[#102A5C]">
              Publishing Checklist
            </h3>

            <div className="mt-4 space-y-4">
              {checklistItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-slate-600"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-500"
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm font-semibold text-emerald-700">
              <CheckCircle2 size={17} />
              All good! You can publish this article.
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-4">
              <div className="flex gap-2">
                <Info
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>
                  <h4 className="text-sm font-bold text-[#102A5C]">
                    Note
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Once published, the article will be available online
                    and a DOI will be activated. An email notification
                    will be sent to all authors.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
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
        {showPublishConfirm && (
          <PublishConfirmation
            isPublishing={isPublishing}
            onCancel={() => setShowPublishConfirm(false)}
            onConfirm={handlePublish}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold leading-5 text-[#102A5C]">
        {value}
      </p>
    </div>
  );
}

function FieldLabel({ children, required = false }) {
  return (
    <label className="mb-2 block text-xs font-semibold text-[#102A5C]">
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
}

function TextInput({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-xs text-slate-700 outline-none transition-all placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${className}`}
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

function ArticleInformationSection({
  article,
  keywords,
  keywordInput,
  titleCount,
  runningTitleCount,
  abstractWordCount,
  onChange,
  onKeywordInput,
  onKeywordKeyDown,
  onAddKeyword,
  onRemoveKeyword,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
    >
      <h3 className="text-sm font-bold text-[#102A5C]">
        Article Information
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <FieldLabel required>Final Article Title</FieldLabel>

          <TextInput
            name="finalTitle"
            value={article.finalTitle}
            maxLength={500}
            onChange={onChange}
          />

          <p className="mt-1 text-right text-[10px] text-slate-400">
            {titleCount}/500
          </p>
        </div>

        <div>
          <FieldLabel>Running Title (Optional)</FieldLabel>

          <TextInput
            name="runningTitle"
            value={article.runningTitle}
            maxLength={60}
            onChange={onChange}
          />

          <p className="mt-1 text-right text-[10px] text-slate-400">
            {runningTitleCount}/60
          </p>
        </div>

        <div>
          <FieldLabel>DOI Prefix</FieldLabel>

          <TextInput
            name="doiPrefix"
            value={article.doiPrefix}
            disabled
            className="cursor-not-allowed bg-slate-50"
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

        <div>
          <FieldLabel required>Article Type</FieldLabel>

          <SelectField
            name="articleType"
            value={article.articleType}
            onChange={onChange}
          >
            <option>Research Article</option>
            <option>Review Article</option>
            <option>Case Study</option>
            <option>Short Communication</option>
            <option>Editorial</option>
          </SelectField>
        </div>

        <div>
          <FieldLabel>
            Section / Category (Optional)
          </FieldLabel>

          <SelectField
            name="section"
            value={article.section}
            onChange={onChange}
          >
            <option>Artificial Intelligence</option>
            <option>Computer Science</option>
            <option>Healthcare Technology</option>
            <option>Engineering</option>
            <option>Data Science</option>
          </SelectField>
        </div>

        <div className="md:col-span-2">
          <FieldLabel required>Keywords</FieldLabel>

          <div className="rounded-md border border-slate-300 bg-white p-2 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600"
                >
                  {keyword}

                  <button
                    type="button"
                    onClick={() => onRemoveKeyword(keyword)}
                    className="text-slate-400 hover:text-red-500"
                  >
                    <X size={12} />
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
                className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-700 hover:bg-blue-100"
              >
                <Plus size={12} />
                Add
              </button>
            </div>
          </div>

          <p className="mt-1 text-[10px] text-slate-400">
            Press Enter to add more keywords.
          </p>
        </div>

        <div className="md:col-span-2">
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
              ].map((tool) => (
                <button
                  key={tool}
                  type="button"
                  className="min-h-7 rounded px-2 text-[10px] font-semibold text-slate-600 transition hover:bg-white hover:text-blue-700"
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
    </motion.section>
  );
}

function PublicationSettingsSection({ article, onChange }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 }}
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
    >
      <h3 className="text-sm font-bold text-[#102A5C]">
        Publication Settings
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <FieldLabel required>Issue / Volume</FieldLabel>

          <SelectField
            name="issue"
            value={article.issue}
            onChange={onChange}
          >
            <option>Volume 5, Issue 2 (May 2025)</option>
            <option>Volume 5, Issue 1 (January 2025)</option>
            <option>Volume 4, Issue 4 (December 2024)</option>
          </SelectField>
        </div>

        <div>
          <FieldLabel required>Publication Date</FieldLabel>

          <div className="relative">
            <TextInput
              type="date"
              name="publicationDate"
              value={article.publicationDate}
              onChange={onChange}
              className="pr-9"
            />

            <CalendarDays
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        <div>
          <FieldLabel required>Pages</FieldLabel>

          <TextInput
            name="pages"
            value={article.pages}
            onChange={onChange}
          />

          <p className="mt-1 text-[10px] text-slate-400">
            Enter page range (e.g. 120-135)
          </p>
        </div>

        <div>
          <FieldLabel>Article Order</FieldLabel>

          <TextInput
            name="articleOrder"
            type="number"
            min="1"
            value={article.articleOrder}
            onChange={onChange}
          />

          <p className="mt-1 text-[10px] text-slate-400">
            Article position in the issue
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function AccessSection({ article, onChange }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 }}
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
    >
      <h3 className="text-sm font-bold text-[#102A5C]">
        Open Access & Visibility
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <FieldLabel required>Access Type</FieldLabel>

          <SelectField
            name="accessType"
            value={article.accessType}
            onChange={onChange}
          >
            <option>Gold Open Access</option>
            <option>Green Open Access</option>
            <option>Subscription Access</option>
            <option>Hybrid Open Access</option>
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
            <option>CC BY-SA 4.0</option>
            <option>CC BY-NC 4.0</option>
            <option>All Rights Reserved</option>
          </SelectField>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold text-[#102A5C]">
            Make Article Immediately Visible
          </p>

          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            If enabled, the article will be visible to all users immediately
            after publication.
          </p>
        </div>

        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            name="immediatelyVisible"
            checked={article.immediatelyVisible}
            onChange={onChange}
            className="peer sr-only"
          />

          <span className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-blue-600" />

          <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
        </label>
      </div>
    </motion.section>
  );
}

function FilesPanel({ onDownload }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.12 }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h3 className="font-bold text-[#102A5C]">
        Files to Publish
      </h3>

      <div className="mt-4 divide-y divide-slate-100">
        {files.map((file) => {
          const Icon =
            file.type === "archive" ? FileArchive : FileText;

          return (
            <div
              key={file.id}
              className="group flex items-center gap-3 py-3"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  file.type === "archive"
                    ? "bg-orange-50 text-orange-500"
                    : file.type === "pdf"
                    ? "bg-red-50 text-red-500"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <Icon size={17} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-[#102A5C]">
                  {file.title}
                </p>

                <p className="mt-1 truncate text-[10px] text-slate-400">
                  {file.filename}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onDownload(file)}
                className="inline-flex shrink-0 items-center gap-1 text-[10px] font-semibold text-blue-600 transition hover:text-blue-800"
              >
                <Download size={13} />
                <span className="hidden min-[420px]:inline xl:hidden 2xl:inline">
                  Download
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

function TabPlaceholder({ activeTab }) {
  return (
    <motion.section
      key={activeTab}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[360px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Tag size={24} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-[#102A5C]">
        {activeTab}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        The {activeTab.toLowerCase()} information for this article will
        appear here.
      </p>
    </motion.section>
  );
}

function ArticlePreviewModal({ article, keywords, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-7">
          <div>
            <h2 className="text-lg font-bold text-[#102A5C]">
              Article Preview
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Preview of the public article page
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-red-500"
          >
            <X size={20} />
          </button>
        </div>

        <article className="p-5 sm:p-8">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {article.articleType}
          </span>

          <h1 className="mt-5 text-2xl font-bold leading-tight text-[#102A5C] sm:text-4xl">
            {article.finalTitle}
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Dr. Arjun Verma · Published{" "}
            {article.publicationDate || "Not selected"}
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

          <div className="mt-8 border-t border-slate-200 pt-7">
            <h2 className="text-lg font-bold text-[#102A5C]">
              Abstract
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {article.abstract}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 rounded-xl bg-slate-50 p-5 sm:grid-cols-2">
            <InfoItem
              label="DOI"
              value={`${article.doiPrefix}/${article.doiSuffix}`}
            />

            <InfoItem
              label="Issue"
              value={article.issue}
            />

            <InfoItem
              label="Pages"
              value={article.pages}
            />

            <InfoItem
              label="License"
              value={article.license}
            />
          </div>
        </article>
      </motion.div>
    </div>
  );
}

function PublishConfirmation({
  isPublishing,
  onCancel,
  onConfirm,
}) {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={isPublishing ? undefined : onCancel}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.96 }}
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <Send size={27} />
        </div>

        <h2 className="mt-5 text-xl font-bold text-[#102A5C]">
          Publish this article?
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          The article will become publicly available and all authors will
          receive an email notification.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={isPublishing}
            className="min-h-11 rounded-lg border border-slate-300 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={isPublishing}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPublishing ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Publishing...
              </>
            ) : (
              <>
                <Check size={17} />
                Publish
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default PublishArticle;