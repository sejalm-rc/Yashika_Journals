import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  CloudDownload,
  Download,
  Eye,
  FileCode2,
  Info,
  RotateCcw,
  X,
} from "lucide-react";

const initialArticles = [
  {
    id: 1,
    title: "Deep Learning for Medical Image Analysis",
    firstAuthor: "Dr. Arjun Verma",
    doi: "10.1234/aieerr.2025.0178",
    doiStatus: "DOI Assigned",
    selected: true,
  },
  {
    id: 2,
    title: "A Survey on Convolutional Neural Networks",
    firstAuthor: "Neha Sharma",
    doi: "10.1234/aieerr.2025.0179",
    doiStatus: "DOI Assigned",
    selected: true,
  },
  {
    id: 3,
    title: "AI Techniques for Disease Prediction",
    firstAuthor: "Ravi Kumar",
    doi: "10.1234/aieerr.2025.0180",
    doiStatus: "DOI Assigned",
    selected: true,
  },
  {
    id: 4,
    title: "Machine Learning in Healthcare: A Review",
    firstAuthor: "Pooja Singh",
    doi: "10.1234/aieerr.2025.0181",
    doiStatus: "DOI Assigned",
    selected: true,
  },
  {
    id: 5,
    title: "Image Segmentation using U-Net Model",
    firstAuthor: "Ankit Patel",
    doi: "10.1234/aieerr.2025.0182",
    doiStatus: "DOI Assigned",
    selected: true,
  },
  {
    id: 6,
    title: "Transfer Learning for Medical Diagnosis",
    firstAuthor: "Sneha Joshi",
    doi: "",
    doiStatus: "DOI Pending",
    selected: true,
  },
  {
    id: 7,
    title: "Federated Learning in Healthcare Systems",
    firstAuthor: "Vikram Dubey",
    doi: "",
    doiStatus: "DOI Pending",
    selected: true,
  },
  {
    id: 8,
    title: "Explainable AI in Medical Imaging",
    firstAuthor: "Meera Nair",
    doi: "",
    doiStatus: "DOI Pending",
    selected: true,
  },
];

const initialHistory = [
  {
    id: 1,
    fileName: "crossref-volume-4-issue-4.xml",
    issue: "Volume 4, Issue 4",
    exportedAt: "12 May 2025, 11:25 AM",
    articles: 7,
    status: "Completed",
  },
  {
    id: 2,
    fileName: "crossref-volume-4-issue-3.xml",
    issue: "Volume 4, Issue 3",
    exportedAt: "10 January 2025, 04:40 PM",
    articles: 6,
    status: "Completed",
  },
];

const initialForm = {
  exportType: "issue",
  volume: "Volume 5 (2025)",
  issue: "Issue 2 (May 2025)",
  selectedArticleId: "1",
  includeAbstract: true,
  includeReferences: true,
  includeFunding: false,
  includeOrcid: true,
  xmlVersion: "Crossref Deposit Schema 5.4.0",
  encoding: "UTF-8",
};

function CrossrefXmlExport() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Export XML");
  const [formData, setFormData] = useState(initialForm);
  const [articles, setArticles] = useState(initialArticles);
  const [exportHistory, setExportHistory] = useState(initialHistory);
  const [showPreview, setShowPreview] = useState(false);
  const [showXmlPreview, setShowXmlPreview] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [message, setMessage] = useState(null);

  const selectedArticles = useMemo(() => {
    if (formData.exportType === "article") {
      return articles.filter(
        (article) =>
          article.id === Number(formData.selectedArticleId)
      );
    }

    return articles.filter((article) => article.selected);
  }, [articles, formData.exportType, formData.selectedArticleId]);

  const pendingDoiCount = selectedArticles.filter(
    (article) => article.doiStatus === "DOI Pending"
  ).length;

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage(null);
  };

  const toggleArticle = (articleId) => {
    setArticles((previous) =>
      previous.map((article) =>
        article.id === articleId
          ? {
              ...article,
              selected: !article.selected,
            }
          : article
      )
    );
  };

  const handleReset = () => {
    setFormData(initialForm);
    setArticles(initialArticles);
    setMessage({
      type: "success",
      text: "Export form reset successfully.",
    });
  };

  const escapeXml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");

  const generateXml = () => {
    const articlesXml = selectedArticles
      .map(
        (article) => `
      <journal_article publication_type="full_text">
        <titles>
          <title>${escapeXml(article.title)}</title>
        </titles>
        <contributors>
          <person_name contributor_role="author" sequence="first">
            <given_name>${escapeXml(
              article.firstAuthor.split(" ").slice(0, -1).join(" ")
            )}</given_name>
            <surname>${escapeXml(
              article.firstAuthor.split(" ").slice(-1)[0]
            )}</surname>
          </person_name>
        </contributors>
        ${
          formData.includeAbstract
            ? `<abstract>
          <jats:p>Abstract metadata for ${escapeXml(
            article.title
          )}</jats:p>
        </abstract>`
            : ""
        }
        ${
          formData.includeOrcid
            ? "<orcid>https://orcid.org/0000-0000-0000-0000</orcid>"
            : ""
        }
        ${
          formData.includeReferences
            ? `<citation_list>
          <citation key="ref-1">
            <unstructured_citation>Sample article reference</unstructured_citation>
          </citation>
        </citation_list>`
            : ""
        }
        ${
          formData.includeFunding
            ? `<program name="fundref">
          <assertion name="fundgroup">
            <assertion name="funder_name">Sample Funding Agency</assertion>
          </assertion>
        </program>`
            : ""
        }
        <doi_data>
          <doi>${escapeXml(
            article.doi || `10.1234/pending.${article.id}`
          )}</doi>
          <resource>https://yashikapublication.com/article/${article.id}</resource>
        </doi_data>
      </journal_article>`
      )
      .join("");

    return `<?xml version="1.0" encoding="${formData.encoding}"?>
<doi_batch xmlns="http://www.crossref.org/schema/5.4.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:jats="http://www.ncbi.nlm.nih.gov/JATS1"
  version="5.4.0">
  <head>
    <doi_batch_id>YASHIKA-${Date.now()}</doi_batch_id>
    <timestamp>${Date.now()}</timestamp>
    <depositor>
      <depositor_name>Yashika Publications</depositor_name>
      <email_address>admin@yashikapublication.com</email_address>
    </depositor>
    <registrant>Yashika Publications</registrant>
  </head>
  <body>
    <journal>
      <journal_metadata language="en">
        <full_title>AI Engineering Review Research</full_title>
        <abbrev_title>AIEERR</abbrev_title>
      </journal_metadata>
      <journal_issue>
        <publication_date media_type="online">
          <month>05</month>
          <year>2025</year>
        </publication_date>
        <journal_volume>
          <volume>5</volume>
        </journal_volume>
        <issue>2</issue>
      </journal_issue>
      ${articlesXml}
    </journal>
  </body>
</doi_batch>`;
  };

  const handleExport = async () => {
    if (selectedArticles.length === 0) {
      setMessage({
        type: "error",
        text: "Please select at least one article before exporting.",
      });
      return;
    }

    setIsExporting(true);
    setMessage(null);

    await new Promise((resolve) => setTimeout(resolve, 900));

    const xml = generateXml();
    const blob = new Blob([xml], {
      type: "application/xml;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    const fileName =
      formData.exportType === "issue"
        ? "crossref-volume-5-issue-2.xml"
        : `crossref-article-${formData.selectedArticleId}.xml`;

    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(url);

    const historyItem = {
      id: Date.now(),
      fileName,
      issue:
        formData.exportType === "issue"
          ? `${formData.volume}, ${formData.issue}`
          : "Single Article",
      exportedAt: new Date().toLocaleString(),
      articles: selectedArticles.length,
      status: "Completed",
    };

    setExportHistory((previous) => [
      historyItem,
      ...previous,
    ]);

    localStorage.setItem(
      "yashikaCrossrefExportHistory",
      JSON.stringify([historyItem, ...exportHistory])
    );

    setIsExporting(false);

    setMessage({
      type: "success",
      text: `Crossref XML exported successfully for ${selectedArticles.length} article(s).`,
    });
  };

  return (
    <div className="mx-auto w-full max-w-[1650px]">
      <motion.header
        initial={{
          opacity: 0,
          y: 14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="border-b border-slate-200 pb-4"
      >
        <h1 className="text-2xl font-bold text-[#102A5C] sm:text-[28px]">
          XML Export for Crossref
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Export article metadata in Crossref XML format for DOI
          registration and deposit.
        </p>
      </motion.header>

      <div className="mt-4 border-b border-slate-200">
        <div className="flex gap-2">
          {["Export XML", "Export History"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-3 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? "text-blue-700"
                  : "text-slate-500 hover:text-blue-700"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <motion.span
                  layoutId="crossref-tab"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"
                />
              )}
            </button>
          ))}
        </div>
      </div>

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
            className={`mt-5 flex items-start justify-between gap-3 rounded-xl border px-4 py-3 text-sm ${
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
                <AlertTriangle
                  size={18}
                  className="mt-0.5 shrink-0"
                />
              )}

              <span>{message.text}</span>
            </div>

            <button
              type="button"
              onClick={() => setMessage(null)}
              aria-label="Close notification"
            >
              <X size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeTab === "Export XML" ? (
          <motion.div
            key="export"
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
          >
            <div className="mt-5 grid grid-cols-1 gap-5 2xl:grid-cols-[minmax(320px,0.95fr)_minmax(420px,0.82fr)_320px]">
              <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <ExportTypeSection
                  formData={formData}
                  articles={articles}
                  onChange={handleFormChange}
                />

                <VolumeIssueSection
                  formData={formData}
                  articleCount={articles.length}
                  onChange={handleFormChange}
                />

                <AdditionalOptionsSection
                  formData={formData}
                  selectedCount={selectedArticles.length}
                  onChange={handleFormChange}
                />
              </div>

              <SelectedArticlesPanel
                articles={articles}
                exportType={formData.exportType}
                selectedArticleId={formData.selectedArticleId}
                pendingDoiCount={pendingDoiCount}
                onToggleArticle={toggleArticle}
              />

              <AboutExportPanel />
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mt-5 flex flex-col items-stretch justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="grid grid-cols-1 gap-3 min-[460px]:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-blue-500 bg-white px-7 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  <Eye size={17} />
                  Preview Articles
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-blue-500 bg-white px-7 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  <RotateCcw size={17} />
                  Reset
                </button>
              </div>

              <div className="flex flex-col gap-2 sm:items-center">
                <button
                  type="button"
                  onClick={handleExport}
                  disabled={isExporting}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-10 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isExporting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Exporting...
                    </>
                  ) : (
                    <>
                      <CloudDownload size={18} />
                      Export XML
                    </>
                  )}
                </button>

                <span className="text-center text-[10px] text-slate-500">
                  Export XML for selected{" "}
                  {formData.exportType === "issue"
                    ? "issue"
                    : "article"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <ExportHistory
            history={exportHistory}
            onDownload={(item) => {
              setMessage({
                type: "success",
                text: `${item.fileName} is ready for download.`,
              });
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPreview && (
          <ArticlePreviewModal
            articles={selectedArticles}
            onClose={() => setShowPreview(false)}
            onViewXml={() => {
              setShowPreview(false);
              setShowXmlPreview(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showXmlPreview && (
          <XmlPreviewModal
            xml={generateXml()}
            onClose={() => setShowXmlPreview(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeading({ number, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-base font-bold text-[#102A5C]">
        {number}.
      </span>

      <h2 className="text-base font-bold text-[#102A5C]">
        {children}
      </h2>
    </div>
  );
}

function ExportTypeSection({
  formData,
  articles,
  onChange,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: -15,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="p-5"
    >
      <SectionHeading number="1">
        Choose Export Type
      </SectionHeading>

      <div className="mt-5 space-y-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="radio"
            name="exportType"
            value="issue"
            checked={formData.exportType === "issue"}
            onChange={onChange}
            className="mt-1 h-4 w-4 accent-blue-600"
          />

          <span>
            <span className="block text-sm font-semibold text-[#102A5C]">
              Export by Issue (Bulk)
            </span>

            <span className="mt-1 block text-xs leading-5 text-slate-500">
              Export all articles from a selected issue in a single XML
              file.
            </span>
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="radio"
            name="exportType"
            value="article"
            checked={formData.exportType === "article"}
            onChange={onChange}
            className="mt-1 h-4 w-4 accent-blue-600"
          />

          <span>
            <span className="block text-sm font-semibold text-[#102A5C]">
              Export by Article (Single)
            </span>

            <span className="mt-1 block text-xs leading-5 text-slate-500">
              Export a single article in XML format.
            </span>
          </span>
        </label>

        <AnimatePresence>
          {formData.exportType === "article" && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
            >
              <label className="mb-2 block text-xs font-semibold text-[#102A5C]">
                Select Article
              </label>

              <select
                name="selectedArticleId"
                value={formData.selectedArticleId}
                onChange={onChange}
                className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                {articles.map((article) => (
                  <option
                    key={article.id}
                    value={article.id}
                  >
                    {article.title}
                  </option>
                ))}
              </select>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function VolumeIssueSection({
  formData,
  articleCount,
  onChange,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: -15,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.05,
      }}
      className="border-t border-slate-200 p-5"
    >
      <SectionHeading number="2">
        Select Volume and Issue
      </SectionHeading>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold text-[#102A5C]">
            Volume <span className="text-red-500">*</span>
          </label>

          <select
            name="volume"
            value={formData.volume}
            onChange={onChange}
            className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option>Volume 5 (2025)</option>
            <option>Volume 4 (2024)</option>
            <option>Volume 3 (2023)</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-[#102A5C]">
            Issue <span className="text-red-500">*</span>
          </label>

          <select
            name="issue"
            value={formData.issue}
            onChange={onChange}
            className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option>Issue 2 (May 2025)</option>
            <option>Issue 1 (January 2025)</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col justify-between gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-slate-600 min-[420px]:flex-row min-[420px]:items-center">
        <span className="inline-flex items-center gap-2">
          <Info
            size={16}
            className="shrink-0 text-blue-600"
          />

          Selected Issue:{" "}
          <strong className="text-[#102A5C]">
            Volume 5, Issue 2 (May 2025)
          </strong>
        </span>

        <strong className="text-[#102A5C]">
          Total Articles: {articleCount}
        </strong>
      </div>
    </motion.section>
  );
}

function AdditionalOptionsSection({
  formData,
  selectedCount,
  onChange,
}) {
  const checkboxes = [
    {
      name: "includeAbstract",
      label: "Include Abstract",
    },
    {
      name: "includeReferences",
      label: "Include References",
    },
    {
      name: "includeFunding",
      label: "Include Funding Information",
    },
    {
      name: "includeOrcid",
      label: "Include ORCID iDs",
    },
  ];

  return (
    <motion.section
      initial={{
        opacity: 0,
        x: -15,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.1,
      }}
      className="border-t border-slate-200 p-5"
    >
      <SectionHeading number="3">
        Additional Options
      </SectionHeading>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold text-[#102A5C]">
            Include
          </p>

          <div className="space-y-3">
            {checkboxes.map((checkbox) => (
              <label
                key={checkbox.name}
                className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
              >
                <input
                  type="checkbox"
                  name={checkbox.name}
                  checked={formData[checkbox.name]}
                  onChange={onChange}
                  className="h-4 w-4 rounded accent-blue-600"
                />

                {checkbox.label}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#102A5C]">
              XML Version
            </label>

            <select
              name="xmlVersion"
              value={formData.xmlVersion}
              onChange={onChange}
              className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option>Crossref Deposit Schema 5.4.0</option>
              <option>Crossref Deposit Schema 5.3.1</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#102A5C]">
              Encoding
            </label>

            <select
              name="encoding"
              value={formData.encoding}
              onChange={onChange}
              className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option>UTF-8</option>
              <option>UTF-16</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2
            size={18}
            className="mt-0.5 shrink-0 text-emerald-600"
          />

          <div>
            <p className="text-sm font-semibold text-emerald-700">
              Ready to export!
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-600">
              Click “Preview Articles” to review the list before exporting
              XML. Currently selected: {selectedCount}.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function SelectedArticlesPanel({
  articles,
  exportType,
  selectedArticleId,
  pendingDoiCount,
  onToggleArticle,
}) {
  const displayedArticles =
    exportType === "article"
      ? articles.filter(
          (article) =>
            article.id === Number(selectedArticleId)
        )
      : articles;

  return (
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
        delay: 0.08,
      }}
      className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="p-5">
        <SectionHeading number="4">
          Articles in Selected Issue
        </SectionHeading>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[580px] border-collapse">
          <thead>
            <tr className="border-y border-slate-200 bg-slate-50 text-left">
              <th className="w-12 px-4 py-3 text-xs font-semibold text-slate-500">
                #
              </th>

              <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                Article Title
              </th>

              <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                First Author
              </th>

              <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                DOI Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {displayedArticles.map((article, index) => (
              <tr
                key={article.id}
                className="transition-colors hover:bg-blue-50/40"
              >
                <td className="px-4 py-4">
                  {exportType === "issue" ? (
                    <input
                      type="checkbox"
                      checked={article.selected}
                      onChange={() =>
                        onToggleArticle(article.id)
                      }
                      className="h-4 w-4 accent-blue-600"
                    />
                  ) : (
                    <span className="text-sm text-slate-500">
                      {index + 1}
                    </span>
                  )}
                </td>

                <td className="px-4 py-4 text-sm font-medium leading-5 text-[#102A5C]">
                  {article.title}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">
                  {article.firstAuthor}
                </td>

                <td className="px-4 py-4">
                  <DoiBadge status={article.doiStatus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-slate-100 md:hidden">
        {displayedArticles.map((article, index) => (
          <article
            key={article.id}
            className="p-4"
          >
            <div className="flex items-start gap-3">
              {exportType === "issue" && (
                <input
                  type="checkbox"
                  checked={article.selected}
                  onChange={() =>
                    onToggleArticle(article.id)
                  }
                  className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                />
              )}

              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-400">
                  Article {index + 1}
                </p>

                <h3 className="mt-1 text-sm font-semibold leading-5 text-[#102A5C]">
                  {article.title}
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  {article.firstAuthor}
                </p>

                <div className="mt-3">
                  <DoiBadge status={article.doiStatus} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {pendingDoiCount > 0 && (
        <div className="m-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle
              size={18}
              className="mt-0.5 shrink-0 text-amber-600"
            />

            <p className="text-xs leading-5 text-amber-700">
              Articles with “DOI Pending” will still be included in the
              XML export. Please ensure DOIs are assigned before
              depositing.
            </p>
          </div>
        </div>
      )}
    </motion.section>
  );
}

function DoiBadge({ status }) {
  const assigned = status === "DOI Assigned";

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-md border px-2.5 py-1 text-[10px] font-semibold ${
        assigned
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border-amber-200 bg-amber-50 text-amber-700"
      }`}
    >
      {status}
    </span>
  );
}

function AboutExportPanel() {
  const includedItems = [
    "Article metadata",
    "Authors and affiliations",
    "Abstract",
    "References",
    "Funding information (if available)",
    "DOI and publication details",
  ];

  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: 18,
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
      <div className="p-5">
        <h2 className="text-base font-bold text-[#102A5C]">
          About XML Export
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          The XML file will be generated in Crossref Deposit Schema
          format and can be uploaded to Crossref for DOI registration.
        </p>

        <h3 className="mt-6 text-sm font-bold text-[#102A5C]">
          What is included?
        </h3>

        <div className="mt-4 space-y-4">
          {includedItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-emerald-500"
              />

              <span className="text-sm text-slate-600">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 p-5">
        <h3 className="text-sm font-bold text-[#102A5C]">
          Important Notes
        </h3>

        <ul className="mt-4 space-y-3 pl-4 text-sm leading-6 text-slate-600">
          <li className="list-disc">
            Ensure all required metadata is completed before export.
          </li>

          <li className="list-disc">
            DOIs must be unique and valid.
          </li>

          <li className="list-disc">
            XML file will be in .xml format and UTF-8 encoding.
          </li>
        </ul>
      </div>
    </motion.aside>
  );
}

function ExportHistory({
  history,
  onDownload,
}) {
  return (
    <motion.section
      key="history"
      initial={{
        opacity: 0,
        y: 14,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -10,
      }}
      className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 p-5">
        <h2 className="text-lg font-bold text-[#102A5C]">
          XML Export History
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Previously generated Crossref XML exports.
        </p>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="px-5 py-4 text-xs font-semibold text-slate-500">
                File
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-slate-500">
                Issue
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-slate-500">
                Articles
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-slate-500">
                Exported At
              </th>

              <th className="px-5 py-4 text-xs font-semibold text-slate-500">
                Status
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold text-slate-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {history.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-blue-50/40"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <FileCode2 size={18} />
                    </span>

                    <span className="text-sm font-semibold text-[#102A5C]">
                      {item.fileName}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {item.issue}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {item.articles}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {item.exportedAt}
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    {item.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    type="button"
                    onClick={() => onDownload(item)}
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-200 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                  >
                    <Download size={14} />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-slate-100 md:hidden">
        {history.map((item) => (
          <article
            key={item.id}
            className="p-4"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FileCode2 size={19} />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="break-all text-sm font-semibold text-[#102A5C]">
                  {item.fileName}
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  {item.issue}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {item.articles} articles · {item.exportedAt}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onDownload(item)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 py-2.5 text-sm font-semibold text-blue-700"
            >
              <Download size={15} />
              Download XML
            </button>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

function ArticlePreviewModal({
  articles,
  onClose,
  onViewXml,
}) {
  return (
    <ModalShell
      title="Preview Selected Articles"
      description={`${articles.length} article(s) will be included in this export.`}
      onClose={onClose}
      maxWidth="max-w-4xl"
    >
      <div className="max-h-[55vh] overflow-y-auto rounded-xl border border-slate-200">
        {articles.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center"
              >
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    Article {index + 1}
                  </p>

                  <h3 className="mt-1 text-sm font-semibold text-[#102A5C]">
                    {article.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {article.firstAuthor}
                  </p>
                </div>

                <DoiBadge status={article.doiStatus} />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-10 text-center text-sm text-slate-500">
            No articles selected.
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-col justify-end gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onClose}
          className="min-h-11 rounded-lg border border-slate-300 px-6 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          Close
        </button>

        <button
          type="button"
          onClick={onViewXml}
          disabled={articles.length === 0}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          <FileCode2 size={17} />
          Preview XML
        </button>
      </div>
    </ModalShell>
  );
}

function XmlPreviewModal({
  xml,
  onClose,
}) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(xml);
    } catch {
      // Clipboard may be unavailable in some browser contexts.
    }
  };

  return (
    <ModalShell
      title="Crossref XML Preview"
      description="Review the generated XML before exporting."
      onClose={onClose}
      maxWidth="max-w-5xl"
    >
      <pre className="max-h-[60vh] overflow-auto rounded-xl bg-slate-950 p-4 text-xs leading-6 text-slate-100">
        <code>{xml}</code>
      </pre>

      <div className="mt-5 flex flex-col justify-end gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onClose}
          className="min-h-11 rounded-lg border border-slate-300 px-6 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          Close
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className="min-h-11 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Copy XML
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
  maxWidth = "max-w-lg",
}) {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6">
      <motion.button
        type="button"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
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
        className={`relative z-10 max-h-[90vh] w-full overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6 ${maxWidth}`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
        >
          <X size={19} />
        </button>

        <h2 className="pr-12 text-xl font-bold text-[#102A5C]">
          {title}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          {description}
        </p>

        <div className="mt-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default CrossrefXmlExport;