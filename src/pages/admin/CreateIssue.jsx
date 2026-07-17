import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Image as ImageIcon,
  Info,
  Plus,
  UploadCloud,
  X,
} from "lucide-react";

const initialForm = {
  journal: "AIEERR - AI Engineering Review Research",
  issueTitle: "",
  issueType: "Regular Issue",
  volume: "",
  issueNumber: "",
  year: "",
  issueDoi: "",
  description: "",
  publishedOn: "",
  expectedPublicationDate: "",
  submissionDeadline: "",
  startPage: "1",
  pageCount: "",
  showOnWebsite: true,
  seoTitle: "",
  seoDescription: "",
  makeCurrent: true,
  allowDownloads: true,
  sendEmailNotification: true,
};

const journals = [
  "AIEERR - AI Engineering Review Research",
  "International Journal of Computing",
  "Journal of Emerging Technologies",
  "Journal of Engineering Research",
];

const issueTypes = [
  "Regular Issue",
  "Special Issue",
  "Supplementary Issue",
  "Conference Issue",
];

function CreateIssue() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState(initialForm);
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState(null);

  const seoTitleLength = formData.seoTitle.length;
  const seoDescriptionLength = formData.seoDescription.length;
  const issueTitleLength = formData.issueTitle.length;

  const generatedDoi = useMemo(() => {
    if (formData.issueDoi.trim()) {
      return formData.issueDoi.trim();
    }

    if (
      !formData.year.trim() ||
      !formData.volume.trim() ||
      !formData.issueNumber.trim()
    ) {
      return "";
    }

    return `10.1234/aieerr.v${formData.volume}i${formData.issueNumber}.${formData.year}`;
  }, [
    formData.issueDoi,
    formData.issueNumber,
    formData.volume,
    formData.year,
  ]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage(null);
  };

  const handleRadioChange = (value) => {
    setFormData((previous) => ({
      ...previous,
      showOnWebsite: value,
    }));
  };

  const handleCoverFile = (file) => {
    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      setMessage({
        type: "error",
        text: "Please upload a JPG, PNG, or WEBP image.",
      });
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setMessage({
        type: "error",
        text: "Cover image must be smaller than 2 MB.",
      });
      return;
    }

    if (coverPreview) {
      URL.revokeObjectURL(coverPreview);
    }

    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
    setMessage(null);
  };

  const handleFileInputChange = (event) => {
    handleCoverFile(event.target.files?.[0]);
    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    handleCoverFile(event.dataTransfer.files?.[0]);
  };

  const removeCover = () => {
    if (coverPreview) {
      URL.revokeObjectURL(coverPreview);
    }

    setCoverFile(null);
    setCoverPreview("");
  };

  const validateForm = () => {
    if (!formData.journal) {
      return "Please select a journal.";
    }

    if (!formData.issueTitle.trim()) {
      return "Issue title is required.";
    }

    if (!formData.issueType) {
      return "Please select an issue type.";
    }

    if (!formData.volume.trim()) {
      return "Volume is required.";
    }

    if (!formData.issueNumber.trim()) {
      return "Issue number is required.";
    }

    if (!formData.year.trim()) {
      return "Year is required.";
    }

    if (!/^\d{4}$/.test(formData.year.trim())) {
      return "Please enter a valid four-digit year.";
    }

    if (!formData.publishedOn) {
      return "Issue publication date is required.";
    }

    if (!formData.startPage.trim()) {
      return "Start page is required.";
    }

    return null;
  };

  const handleCreateIssue = async (event) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setMessage({
        type: "error",
        text: validationError,
      });
      return;
    }

    setIsCreating(true);
    setMessage(null);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newIssue = {
      id: `ISSUE-${Date.now()}`,
      ...formData,
      issueDoi: generatedDoi,
      coverFileName: coverFile?.name || null,
      status: formData.makeCurrent ? "Current Issue" : "Created",
      createdAt: new Date().toISOString(),
    };

    const storedIssues = JSON.parse(
      localStorage.getItem("yashikaIssues") || "[]"
    );

    localStorage.setItem(
      "yashikaIssues",
      JSON.stringify([newIssue, ...storedIssues])
    );

    setIsCreating(false);

    setMessage({
      type: "success",
      text: "New issue created successfully.",
    });

    setTimeout(() => {
      navigate("/admin/journals");
    }, 900);
  };

  return (
    <div className="mx-auto w-full max-w-[1600px]">
      <motion.div
        initial={{
          opacity: 0,
          y: 14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mb-5 flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-start"
      >
        <div>
          <h1 className="text-2xl font-bold text-[#102A5C] sm:text-[28px]">
            Create New Issue
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Fill in the details below to create a new issue for your journal.
          </p>
        </div>

        <p className="text-xs font-medium text-slate-500">
          <span className="text-red-500">*</span> Required Fields
        </p>
      </motion.div>

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
              className="shrink-0"
            >
              <X size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleCreateIssue}>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_350px]">
          <div className="min-w-0 space-y-5">
            <IssueInformationSection
              formData={formData}
              issueTitleLength={issueTitleLength}
              generatedDoi={generatedDoi}
              onChange={handleChange}
            />

            <IssueScheduleSection
              formData={formData}
              onChange={handleChange}
            />

            <IndexingVisibilitySection
              formData={formData}
              seoTitleLength={seoTitleLength}
              seoDescriptionLength={seoDescriptionLength}
              onChange={handleChange}
              onRadioChange={handleRadioChange}
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="flex flex-col justify-end gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm min-[480px]:flex-row"
            >
              <button
                type="button"
                onClick={() => navigate("/admin/journals")}
                disabled={isCreating}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-500 bg-white px-8 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isCreating}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isCreating ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Creating Issue...
                  </>
                ) : (
                  <>
                    <Plus size={17} />
                    Create Issue
                  </>
                )}
              </button>
            </motion.div>
          </div>

          <aside className="space-y-5">
            <IssueCoverPanel
              coverFile={coverFile}
              coverPreview={coverPreview}
              isDragging={isDragging}
              fileInputRef={fileInputRef}
              onFileInputChange={handleFileInputChange}
              onDragEnter={() => setIsDragging(true)}
              onDragLeave={() => setIsDragging(false)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
              onRemoveCover={removeCover}
            />

            <PaginationSettings
              formData={formData}
              onChange={handleChange}
            />

            <AdditionalSettings
              formData={formData}
              onChange={handleChange}
            />

            <NotePanel />
          </aside>
        </div>
      </form>
    </div>
  );
}

function SectionCard({
  number,
  title,
  children,
  delay = 0,
}) {
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
        delay,
      }}
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
    >
      <div className="flex items-center gap-3">
        {number && (
          <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
            {number}
          </span>
        )}

        <h2 className="text-base font-bold text-[#102A5C]">
          {title}
        </h2>
      </div>

      <div className="mt-5">{children}</div>
    </motion.section>
  );
}

function FieldLabel({
  children,
  required = false,
}) {
  return (
    <label className="mb-2 block text-xs font-semibold text-[#102A5C]">
      {children}

      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
}

function TextInput({
  className = "",
  ...props
}) {
  return (
    <input
      {...props}
      className={`h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-xs text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-50 ${className}`}
    />
  );
}

function SelectInput({
  children,
  ...props
}) {
  return (
    <select
      {...props}
      className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-xs text-slate-700 outline-none transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    >
      {children}
    </select>
  );
}

function Toggle({
  name,
  checked,
  onChange,
}) {
  return (
    <label className="relative inline-flex shrink-0 cursor-pointer items-center">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <span className="h-6 w-11 rounded-full bg-slate-300 transition-colors duration-300 peer-checked:bg-blue-600" />

      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-5" />
    </label>
  );
}

function IssueInformationSection({
  formData,
  issueTitleLength,
  generatedDoi,
  onChange,
}) {
  return (
    <SectionCard
      number="1"
      title="Issue Information"
      delay={0.05}
    >
      <div className="space-y-4">
        <div>
          <FieldLabel required>Journal</FieldLabel>

          <SelectInput
            name="journal"
            value={formData.journal}
            onChange={onChange}
          >
            {journals.map((journal) => (
              <option
                key={journal}
                value={journal}
              >
                {journal}
              </option>
            ))}
          </SelectInput>
        </div>

        <div>
          <FieldLabel required>Issue Title</FieldLabel>

          <TextInput
            name="issueTitle"
            value={formData.issueTitle}
            onChange={onChange}
            maxLength={255}
            placeholder="Enter issue title"
          />

          <p className="mt-1 text-right text-[10px] text-slate-400">
            {issueTitleLength}/255
          </p>
        </div>

        <div>
          <FieldLabel required>Issue Type</FieldLabel>

          <SelectInput
            name="issueType"
            value={formData.issueType}
            onChange={onChange}
          >
            {issueTypes.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </SelectInput>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <FieldLabel required>Volume</FieldLabel>

            <TextInput
              name="volume"
              value={formData.volume}
              onChange={onChange}
              placeholder="e.g., 5"
            />
          </div>

          <div>
            <FieldLabel required>
              Issue Number
            </FieldLabel>

            <TextInput
              name="issueNumber"
              value={formData.issueNumber}
              onChange={onChange}
              placeholder="e.g., 2"
            />
          </div>

          <div>
            <FieldLabel required>Year</FieldLabel>

            <TextInput
              name="year"
              value={formData.year}
              onChange={onChange}
              maxLength={4}
              inputMode="numeric"
              placeholder="e.g., 2025"
            />
          </div>
        </div>

        <div>
          <FieldLabel>Issue DOI (Optional)</FieldLabel>

          <TextInput
            name="issueDoi"
            value={formData.issueDoi}
            onChange={onChange}
            placeholder="e.g., 10.1234/aieerr.v5i2"
          />

          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            {generatedDoi
              ? `Issue DOI: ${generatedDoi}`
              : "If left blank, DOI will be generated automatically after publishing."}
          </p>
        </div>

        <div>
          <FieldLabel>
            Description / About Issue (Optional)
          </FieldLabel>

          <div className="overflow-hidden rounded-md border border-slate-300 transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
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
                "🔗",
                "❝",
              ].map((tool) => (
                <button
                  key={tool}
                  type="button"
                  className="min-h-7 rounded px-2 text-[10px] font-semibold text-slate-600 transition-colors hover:bg-white hover:text-blue-700"
                >
                  {tool}
                </button>
              ))}
            </div>

            <textarea
              name="description"
              value={formData.description}
              onChange={onChange}
              rows={7}
              placeholder="Enter description about this issue"
              className="w-full resize-y px-3 py-3 text-xs leading-5 text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function IssueScheduleSection({
  formData,
  onChange,
}) {
  return (
    <SectionCard
      number="2"
      title="Issue Schedule"
      delay={0.1}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <DateField
          label="Issue Published On"
          required
          name="publishedOn"
          value={formData.publishedOn}
          onChange={onChange}
        />

        <DateField
          label="Expected Online Publication Date (Optional)"
          name="expectedPublicationDate"
          value={formData.expectedPublicationDate}
          onChange={onChange}
        />

        <DateField
          label="Submission Deadline (Optional)"
          name="submissionDeadline"
          value={formData.submissionDeadline}
          onChange={onChange}
        />
      </div>
    </SectionCard>
  );
}

function DateField({
  label,
  required = false,
  ...props
}) {
  return (
    <div>
      <FieldLabel required={required}>
        {label}
      </FieldLabel>

      <div className="relative">
        <TextInput
          {...props}
          type="date"
          className="pr-10"
        />

        <CalendarDays
          size={15}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}

function IndexingVisibilitySection({
  formData,
  seoTitleLength,
  seoDescriptionLength,
  onChange,
  onRadioChange,
}) {
  return (
    <SectionCard
      number="3"
      title="Indexing & Visibility"
      delay={0.15}
    >
      <div className="space-y-4">
        <div>
          <FieldLabel required>
            Show Issue on Website
          </FieldLabel>

          <div className="flex items-center gap-6">
            <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-600">
              <input
                type="radio"
                name="showOnWebsite"
                checked={formData.showOnWebsite === true}
                onChange={() => onRadioChange(true)}
                className="h-4 w-4 accent-blue-600"
              />

              Yes
            </label>

            <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-600">
              <input
                type="radio"
                name="showOnWebsite"
                checked={formData.showOnWebsite === false}
                onChange={() => onRadioChange(false)}
                className="h-4 w-4 accent-blue-600"
              />

              No
            </label>
          </div>
        </div>

        <div>
          <FieldLabel>SEO Meta Title (Optional)</FieldLabel>

          <TextInput
            name="seoTitle"
            value={formData.seoTitle}
            onChange={onChange}
            maxLength={60}
            placeholder="Enter meta title (max 60 characters)"
          />

          <p className="mt-1 text-right text-[10px] text-slate-400">
            {seoTitleLength}/60
          </p>
        </div>

        <div>
          <FieldLabel>
            SEO Meta Description (Optional)
          </FieldLabel>

          <TextInput
            name="seoDescription"
            value={formData.seoDescription}
            onChange={onChange}
            maxLength={160}
            placeholder="Enter meta description (max 160 characters)"
          />

          <p className="mt-1 text-right text-[10px] text-slate-400">
            {seoDescriptionLength}/160
          </p>
        </div>
      </div>
    </SectionCard>
  );
}

function IssueCoverPanel({
  coverFile,
  coverPreview,
  isDragging,
  fileInputRef,
  onFileInputChange,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onRemoveCover,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 18,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.08,
      }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h3 className="font-bold text-[#102A5C]">
        Issue Cover
      </h3>

      <p className="mt-2 text-xs text-slate-500">
        Upload a cover image for this issue.
      </p>

      <div
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        className={`relative mt-4 flex min-h-[290px] flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed p-5 text-center transition-all duration-300 ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-slate-300 bg-slate-50/50 hover:border-blue-400 hover:bg-blue-50/40"
        }`}
      >
        {coverPreview ? (
          <>
            <img
              src={coverPreview}
              alt="Issue cover preview"
              className="max-h-[235px] max-w-full rounded-md object-contain shadow-md"
            />

            <button
              type="button"
              onClick={onRemoveCover}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-500 shadow-lg transition-transform hover:scale-110"
            >
              <X size={17} />
            </button>

            <p className="mt-3 max-w-full truncate text-xs font-medium text-slate-600">
              {coverFile?.name}
            </p>
          </>
        ) : (
          <>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <UploadCloud size={30} />
            </div>

            <p className="mt-4 text-xs font-semibold text-[#102A5C]">
              Drag & drop image here
            </p>

            <p className="mt-2 text-xs text-slate-400">
              or
            </p>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-3 rounded-md border border-blue-500 bg-white px-4 py-2 text-xs font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-50"
            >
              Choose File
            </button>
          </>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          onChange={onFileInputChange}
          className="hidden"
        />
      </div>

      <div className="mt-4 space-y-1 text-[10px] leading-4 text-slate-500">
        <p>
          Recommended size: 800 × 1130 px
        </p>

        <p>
          Allowed formats: JPG, PNG, JPEG (Max 2MB)
        </p>
      </div>
    </motion.section>
  );
}

function PaginationSettings({
  formData,
  onChange,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 18,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.12,
      }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h3 className="font-bold text-[#102A5C]">
        Pagination Settings
      </h3>

      <div className="mt-5 space-y-4">
        <div>
          <FieldLabel required>
            Start Page From
          </FieldLabel>

          <TextInput
            name="startPage"
            value={formData.startPage}
            onChange={onChange}
            inputMode="numeric"
          />

          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            Usually the first page number of the issue.
          </p>
        </div>

        <div>
          <FieldLabel>
            Page Count (Optional)
          </FieldLabel>

          <TextInput
            name="pageCount"
            value={formData.pageCount}
            onChange={onChange}
            inputMode="numeric"
            placeholder="e.g., 100"
          />

          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            Total number of pages in this issue.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function AdditionalSettings({
  formData,
  onChange,
}) {
  const settings = [
    {
      name: "makeCurrent",
      title: "Make Issue Current",
      description:
        "Mark this issue as the current issue on the website.",
    },
    {
      name: "allowDownloads",
      title: "Allow Article Downloads",
      description:
        "Allow users to download articles from this issue.",
    },
    {
      name: "sendEmailNotification",
      title: "Send Email Notification",
      description:
        "Notify subscribers about this new issue.",
    },
  ];

  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 18,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.16,
      }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h3 className="font-bold text-[#102A5C]">
        Additional Settings
      </h3>

      <div className="mt-5 divide-y divide-slate-100">
        {settings.map((setting) => (
          <div
            key={setting.name}
            className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0"
          >
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#102A5C]">
                {setting.title}
              </p>

              <p className="mt-1 text-[10px] leading-4 text-slate-500">
                {setting.description}
              </p>
            </div>

            <Toggle
              name={setting.name}
              checked={formData[setting.name]}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function NotePanel() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 18,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.2,
      }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-4">
        <div className="flex gap-3">
          <Info
            size={18}
            className="mt-0.5 shrink-0 text-blue-600"
          />

          <div>
            <h4 className="text-sm font-bold text-[#102A5C]">
              Note
            </h4>

            <p className="mt-2 text-xs leading-5 text-slate-600">
              After creating the issue, you can add articles from the
              articles section and then publish the issue.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default CreateIssue;