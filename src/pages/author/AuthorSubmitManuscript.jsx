import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  Info,
  Plus,
  Send,
  Trash2,
  UploadCloud,
  UserPlus,
  X,
} from "lucide-react";

const initialForm = {
  manuscriptTitle: "",
  manuscriptType: "",
  subjectArea: "",
  keywords: "",
  abstract: "",
  shortTitle: "",
  reviewers: "",
  preferredEditor: "",

  correspondingAuthor: "Dr. Arjun Verma",
  email: "arjun.verma@example.com",
  affiliation: "Vishwakarma Institute of Technology, Pune, India",
  orcid: "0000-0002-1835-0097",
  mobile: "+91 98765 43210",
  address: "",

  publicationModel: "Hybrid Subscription + Gold Open Access",
  apcOption: "",
  fundingInformation: "",

  originalWork: false,
  authorApproval: false,
  authorGuidelines: false,
  ethicsPolicy: false,
  privacyPolicy: false,
  receiveUpdates: false,
};

const initialCoAuthors = [
  {
    id: 1,
    fullName: "Dr. Neha Sharma",
    email: "neha.sharma@example.com",
    affiliation: "VIT, Pune, India",
    orcid: "0000-0003-2345-6789",
  },
  {
    id: 2,
    fullName: "Rahul Kumar",
    email: "rahul.kumar@example.com",
    affiliation: "IIT Delhi, India",
    orcid: "0000-0003-4567-8901",
  },
];

const requiredFiles = [
  {
    key: "manuscript",
    label: "Manuscript File",
    description: "Main document (Word format)",
    required: true,
    accept: ".doc,.docx",
  },
  {
    key: "figures",
    label: "Figures / Images",
    description: "All figures in one ZIP file (JPG/PNG)",
    required: false,
    accept: ".zip,.jpg,.jpeg,.png",
  },
  {
    key: "tables",
    label: "Tables (if any)",
    description: "All tables in one file (Word/Excel)",
    required: false,
    accept: ".doc,.docx,.xls,.xlsx",
  },
  {
    key: "supplementary",
    label: "Supplementary Material",
    description: "Additional files (if any)",
    required: false,
    accept: ".pdf,.zip,.doc,.docx",
  },
  {
    key: "coverLetter",
    label: "Cover Letter",
    description: "Brief cover letter to the editor (PDF)",
    required: true,
    accept: ".pdf",
  },
];

function AuthorSubmitManuscript() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialForm);
  const [coAuthors, setCoAuthors] = useState(initialCoAuthors);
  const [files, setFiles] = useState({});
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const abstractWords = useMemo(() => {
    const value = formData.abstract.trim();

    return value ? value.split(/\s+/).length : 0;
  }, [formData.abstract]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage(null);
  };

  const updateCoAuthor = (id, field, value) => {
    setCoAuthors((previous) =>
      previous.map((author) =>
        author.id === id
          ? {
              ...author,
              [field]: value,
            }
          : author
      )
    );
  };

  const addCoAuthor = () => {
    setCoAuthors((previous) => [
      ...previous,
      {
        id: Date.now(),
        fullName: "",
        email: "",
        affiliation: "",
        orcid: "",
      },
    ]);
  };

  const removeCoAuthor = (id) => {
    setCoAuthors((previous) =>
      previous.filter((author) => author.id !== id)
    );
  };

  const handleFileChange = (key, selectedFile) => {
    if (!selectedFile) return;

    const maxFileSize = 25 * 1024 * 1024;

    if (selectedFile.size > maxFileSize) {
      setMessage({
        type: "error",
        text: `${selectedFile.name} is larger than 25 MB.`,
      });
      return;
    }

    setFiles((previous) => ({
      ...previous,
      [key]: selectedFile,
    }));

    setMessage(null);
  };

  const removeFile = (key) => {
    setFiles((previous) => {
      const nextFiles = { ...previous };
      delete nextFiles[key];
      return nextFiles;
    });
  };

  const validateForm = () => {
    if (!formData.manuscriptTitle.trim()) {
      return "Manuscript title is required.";
    }

    if (!formData.manuscriptType) {
      return "Please select a manuscript type.";
    }

    if (!formData.subjectArea) {
      return "Please select a subject area.";
    }

    if (!formData.keywords.trim()) {
      return "Keywords are required.";
    }

    if (!formData.abstract.trim()) {
      return "Abstract is required.";
    }

    if (abstractWords > 300) {
      return "Abstract cannot exceed 300 words.";
    }

    if (!formData.correspondingAuthor.trim()) {
      return "Corresponding author name is required.";
    }

    if (!formData.email.trim()) {
      return "Author email is required.";
    }

    if (!formData.affiliation.trim()) {
      return "Affiliation is required.";
    }

    if (!formData.mobile.trim()) {
      return "Mobile number is required.";
    }

    if (!formData.address.trim()) {
      return "Address is required.";
    }

    if (!files.manuscript) {
      return "Please upload the manuscript file.";
    }

    if (!files.coverLetter) {
      return "Please upload the cover letter.";
    }

    const requiredDeclarations = [
      formData.originalWork,
      formData.authorApproval,
      formData.authorGuidelines,
      formData.ethicsPolicy,
      formData.privacyPolicy,
    ];

    if (requiredDeclarations.some((item) => !item)) {
      return "Please accept all required declarations.";
    }

    if (!formData.publicationModel) {
      return "Please select a publication model.";
    }

    if (
      formData.publicationModel.includes("Gold Open Access") &&
      !formData.apcOption
    ) {
      return "Please select an APC option.";
    }

    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const error = validateForm();

    if (error) {
      setMessage({
        type: "error",
        text: error,
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const submission = {
      id: `YP-AIERRR-${new Date().getFullYear()}-${String(
        Date.now()
      ).slice(-4)}`,
      ...formData,
      coAuthors,
      files: Object.entries(files).map(([key, file]) => ({
        key,
        name: file.name,
        size: file.size,
        type: file.type,
      })),
      status: "Submitted",
      submittedAt: new Date().toISOString(),
    };

    const storedSubmissions = JSON.parse(
      localStorage.getItem("yashikaAuthorSubmissions") || "[]"
    );

    localStorage.setItem(
      "yashikaAuthorSubmissions",
      JSON.stringify([submission, ...storedSubmissions])
    );

    setIsSubmitting(false);

    setMessage({
      type: "success",
      text: `Manuscript submitted successfully. Submission ID: ${submission.id}`,
    });

    setTimeout(() => {
      navigate("/author/submissions");
    }, 1200);
  };

  return (
    <div className="mx-auto w-full max-w-[1600px]">
      <motion.header
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
          <h1 className="text-2xl font-bold text-[#09245D] sm:text-[28px]">
            Submit New Manuscript
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Please fill in all the details below and submit your manuscript.
          </p>
        </div>

        <p className="text-xs font-medium text-slate-500">
          <span className="text-red-500">*</span> Required Fields
        </p>
      </motion.header>

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
              aria-label="Close message"
            >
              <X size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5">
        <ManuscriptInformation
          formData={formData}
          abstractWords={abstractWords}
          onChange={handleChange}
        />

        <AuthorInformation
          formData={formData}
          coAuthors={coAuthors}
          onChange={handleChange}
          onUpdateCoAuthor={updateCoAuthor}
          onAddCoAuthor={addCoAuthor}
          onRemoveCoAuthor={removeCoAuthor}
        />

        <ManuscriptFiles
          files={files}
          onFileChange={handleFileChange}
          onRemoveFile={removeFile}
        />

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <Declarations
            formData={formData}
            onChange={handleChange}
          />

          <PublicationAccess
            formData={formData}
            onChange={handleChange}
          />
        </div>

        <motion.section
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="rounded-xl border border-blue-200 bg-blue-50/70 p-4"
        >
          <div className="flex items-start gap-3">
            <Info
              size={18}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <div>
              <h3 className="text-sm font-bold text-[#09245D]">
                Important Note
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                By clicking “Submit Manuscript”, you confirm that all
                information provided is accurate and complete. You will be
                able to track the status of your submission from your
                dashboard.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="sticky bottom-3 z-20 flex justify-center rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl"
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={
              isSubmitting
                ? {}
                : {
                    y: -2,
                    scale: 1.01,
                  }
            }
            whileTap={
              isSubmitting
                ? {}
                : {
                    scale: 0.98,
                  }
            }
            className="inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#075AE8] to-[#064AC9] px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Submitting Manuscript...
              </>
            ) : (
              <>
                <Send size={17} />
                Submit Manuscript
              </>
            )}
          </motion.button>
        </motion.div>
      </form>
    </div>
  );
}

function SectionCard({
  number,
  title,
  subtitle,
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
      <div className="flex items-start gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
          {number}
        </span>

        <div>
          <h2 className="text-base font-bold text-[#09245D]">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-1 text-xs text-slate-500">
              {subtitle}
            </p>
          )}
        </div>
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
    <label className="mb-2 block text-xs font-semibold text-[#09245D]">
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
      className={`h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-xs text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${className}`}
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

function ManuscriptInformation({
  formData,
  abstractWords,
  onChange,
}) {
  return (
    <SectionCard
      number="1"
      title="Manuscript Information"
      delay={0.03}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <FieldLabel required>
            Manuscript Title
          </FieldLabel>

          <TextInput
            name="manuscriptTitle"
            value={formData.manuscriptTitle}
            onChange={onChange}
            placeholder="Enter the full title of your manuscript"
          />
        </div>

        <div>
          <FieldLabel required>
            Manuscript Type
          </FieldLabel>

          <SelectInput
            name="manuscriptType"
            value={formData.manuscriptType}
            onChange={onChange}
          >
            <option value="">
              -- Select Manuscript Type --
            </option>
            <option value="Research Article">
              Research Article
            </option>
            <option value="Review Article">
              Review Article
            </option>
            <option value="Case Study">
              Case Study
            </option>
            <option value="Short Communication">
              Short Communication
            </option>
            <option value="Editorial">
              Editorial
            </option>
          </SelectInput>
        </div>

        <div>
          <FieldLabel required>
            Subject Area / Section
          </FieldLabel>

          <SelectInput
            name="subjectArea"
            value={formData.subjectArea}
            onChange={onChange}
          >
            <option value="">
              -- Select Subject Area --
            </option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
            <option value="Machine Learning">
              Machine Learning
            </option>
            <option value="Computer Science">
              Computer Science
            </option>
            <option value="Healthcare Technology">
              Healthcare Technology
            </option>
            <option value="Engineering">
              Engineering
            </option>
          </SelectInput>
        </div>

        <div>
          <FieldLabel required>Keywords</FieldLabel>

          <TextInput
            name="keywords"
            value={formData.keywords}
            onChange={onChange}
            placeholder="Enter keywords separated by commas (e.g., AI, Machine Learning, Healthcare)"
          />
        </div>

        <div>
          <FieldLabel required>Abstract</FieldLabel>

          <textarea
            name="abstract"
            value={formData.abstract}
            onChange={onChange}
            rows={6}
            placeholder="Enter your abstract (Maximum 300 words)"
            className="w-full resize-y rounded-md border border-slate-300 px-3 py-3 text-xs leading-5 text-slate-700 outline-none transition-all placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <p
            className={`mt-1 text-[10px] ${
              abstractWords > 300
                ? "text-red-500"
                : "text-slate-400"
            }`}
          >
            Word count: {abstractWords}/300
          </p>
        </div>

        <div>
          <FieldLabel>
            Short Title (Running Title)
          </FieldLabel>

          <TextInput
            name="shortTitle"
            value={formData.shortTitle}
            onChange={onChange}
            maxLength={60}
            placeholder="Enter short title (max 60 characters)"
          />

          <p className="mt-1 text-right text-[10px] text-slate-400">
            {formData.shortTitle.length}/60
          </p>
        </div>

        <div>
          <FieldLabel>
            Suggested Reviewers (Optional)
          </FieldLabel>

          <textarea
            name="reviewers"
            value={formData.reviewers}
            onChange={onChange}
            rows={3}
            placeholder="Enter names and emails of potential reviewers (one per line)"
            className="w-full resize-y rounded-md border border-slate-300 px-3 py-3 text-xs leading-5 outline-none transition-all hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <FieldLabel>
            Preferred Editor (Optional)
          </FieldLabel>

          <SelectInput
            name="preferredEditor"
            value={formData.preferredEditor}
            onChange={onChange}
          >
            <option value="">
              -- Select Preferred Editor --
            </option>
            <option value="Dr. Neha Sharma">
              Dr. Neha Sharma
            </option>
            <option value="Prof. Amit Verma">
              Prof. Amit Verma
            </option>
            <option value="Dr. Priya Mehta">
              Dr. Priya Mehta
            </option>
          </SelectInput>
        </div>
      </div>
    </SectionCard>
  );
}

function AuthorInformation({
  formData,
  coAuthors,
  onChange,
  onUpdateCoAuthor,
  onAddCoAuthor,
  onRemoveCoAuthor,
}) {
  return (
    <SectionCard
      number="2"
      title="Author Information"
      delay={0.06}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div>
          <FieldLabel required>
            Corresponding Author
          </FieldLabel>

          <TextInput
            name="correspondingAuthor"
            value={formData.correspondingAuthor}
            onChange={onChange}
          />
        </div>

        <div>
          <FieldLabel required>Email Address</FieldLabel>

          <TextInput
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
        </div>

        <div>
          <FieldLabel required>Affiliation</FieldLabel>

          <TextInput
            name="affiliation"
            value={formData.affiliation}
            onChange={onChange}
          />
        </div>

        <div>
          <FieldLabel>
            ORCID iD (Optional)
          </FieldLabel>

          <TextInput
            name="orcid"
            value={formData.orcid}
            onChange={onChange}
          />
        </div>

        <div>
          <FieldLabel required>Mobile Number</FieldLabel>

          <TextInput
            name="mobile"
            value={formData.mobile}
            onChange={onChange}
          />
        </div>

        <div>
          <FieldLabel required>Address</FieldLabel>

          <TextInput
            name="address"
            value={formData.address}
            onChange={onChange}
            placeholder="Enter full address"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold text-[#09245D]">
            Co-Authors <span className="text-red-500">*</span>
          </h3>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[900px] border-collapse overflow-hidden rounded-lg border border-slate-200">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="w-12 px-3 py-3 text-xs font-semibold text-slate-500">
                  #
                </th>
                <th className="px-3 py-3 text-xs font-semibold text-slate-500">
                  Full Name
                </th>
                <th className="px-3 py-3 text-xs font-semibold text-slate-500">
                  Email
                </th>
                <th className="px-3 py-3 text-xs font-semibold text-slate-500">
                  Affiliation
                </th>
                <th className="px-3 py-3 text-xs font-semibold text-slate-500">
                  ORCID iD
                </th>
                <th className="w-20 px-3 py-3 text-center text-xs font-semibold text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {coAuthors.map((author, index) => (
                <tr key={author.id}>
                  <td className="px-3 py-2 text-xs text-slate-500">
                    {index + 1}
                  </td>

                  {[
                    "fullName",
                    "email",
                    "affiliation",
                    "orcid",
                  ].map((field) => (
                    <td key={field} className="px-2 py-2">
                      <input
                        value={author[field]}
                        onChange={(event) =>
                          onUpdateCoAuthor(
                            author.id,
                            field,
                            event.target.value
                          )
                        }
                        className="h-9 w-full rounded-md border border-transparent px-2 text-xs outline-none transition hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </td>
                  ))}

                  <td className="px-3 py-2 text-center">
                    <button
                      type="button"
                      onClick={() =>
                        onRemoveCoAuthor(author.id)
                      }
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-red-200 text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 lg:hidden">
          {coAuthors.map((author, index) => (
            <article
              key={author.id}
              className="rounded-lg border border-slate-200 p-4"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#09245D]">
                  Co-Author {index + 1}
                </h4>

                <button
                  type="button"
                  onClick={() =>
                    onRemoveCoAuthor(author.id)
                  }
                  className="text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  ["fullName", "Full Name"],
                  ["email", "Email"],
                  ["affiliation", "Affiliation"],
                  ["orcid", "ORCID iD"],
                ].map(([field, label]) => (
                  <div key={field}>
                    <label className="mb-1 block text-[10px] font-semibold text-slate-500">
                      {label}
                    </label>

                    <TextInput
                      value={author[field]}
                      onChange={(event) =>
                        onUpdateCoAuthor(
                          author.id,
                          field,
                          event.target.value
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={onAddCoAuthor}
          className="mt-3 inline-flex items-center gap-2 rounded-md border border-blue-300 bg-white px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          <UserPlus size={14} />
          Add Co-Author
        </button>
      </div>
    </SectionCard>
  );
}

function ManuscriptFiles({
  files,
  onFileChange,
  onRemoveFile,
}) {
  return (
    <SectionCard
      number="3"
      title="Manuscript Files"
      subtitle="Please upload all required files."
      delay={0.09}
    >
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[800px] border-collapse overflow-hidden rounded-lg border border-slate-200">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="w-12 px-3 py-3 text-xs font-semibold text-slate-500">
                #
              </th>
              <th className="px-3 py-3 text-xs font-semibold text-slate-500">
                File Type
              </th>
              <th className="px-3 py-3 text-xs font-semibold text-slate-500">
                Description
              </th>
              <th className="px-3 py-3 text-xs font-semibold text-slate-500">
                File Name
              </th>
              <th className="px-3 py-3 text-xs font-semibold text-slate-500">
                Upload File
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {requiredFiles.map((file, index) => (
              <tr key={file.key}>
                <td className="px-3 py-3 text-xs text-slate-500">
                  {index + 1}
                </td>

                <td className="px-3 py-3 text-xs font-semibold text-[#09245D]">
                  {file.label}
                  {file.required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </td>

                <td className="px-3 py-3 text-xs text-slate-500">
                  {file.description}
                </td>

                <td className="px-3 py-3 text-xs text-slate-500">
                  {files[file.key]?.name || "No file chosen"}
                </td>

                <td className="px-3 py-3">
                  <FileUploadButton
                    fileConfig={file}
                    selectedFile={files[file.key]}
                    onFileChange={onFileChange}
                    onRemoveFile={onRemoveFile}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {requiredFiles.map((file, index) => (
          <article
            key={file.key}
            className="rounded-lg border border-slate-200 p-4"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FileText size={17} />
              </span>

              <div>
                <p className="text-[10px] text-slate-400">
                  File {index + 1}
                </p>

                <h3 className="mt-1 text-sm font-semibold text-[#09245D]">
                  {file.label}
                  {file.required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {file.description}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <FileUploadButton
                fileConfig={file}
                selectedFile={files[file.key]}
                onFileChange={onFileChange}
                onRemoveFile={onRemoveFile}
              />
            </div>
          </article>
        ))}
      </div>

      <p className="mt-3 text-[10px] leading-5 text-red-500">
        Note: Maximum file size per upload is 25 MB. Allowed formats:
        DOC, DOCX, PDF, ZIP, JPG, PNG, XLS, XLSX.
      </p>
    </SectionCard>
  );
}

function FileUploadButton({
  fileConfig,
  selectedFile,
  onFileChange,
  onRemoveFile,
}) {
  const inputRef = useRef(null);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <input
        ref={inputRef}
        type="file"
        accept={fileConfig.accept}
        onChange={(event) => {
          onFileChange(
            fileConfig.key,
            event.target.files?.[0]
          );

          event.target.value = "";
        }}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="inline-flex items-center gap-2 rounded-md border border-blue-300 bg-white px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-50"
      >
        <UploadCloud size={14} />
        Choose File
      </button>

      {selectedFile && (
        <button
          type="button"
          onClick={() =>
            onRemoveFile(fileConfig.key)
          }
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-red-200 text-red-500 hover:bg-red-50"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}

function Declarations({
  formData,
  onChange,
}) {
  const declarations = [
    {
      name: "originalWork",
      text: "I confirm that this manuscript is original, has not been published before and is not under consideration elsewhere.",
      required: true,
    },
    {
      name: "authorApproval",
      text: "I confirm that all authors have approved the manuscript and agree with this submission.",
      required: true,
    },
    {
      name: "authorGuidelines",
      text: "I have read and understood the Author Guidelines.",
      required: true,
    },
    {
      name: "ethicsPolicy",
      text: "I have read and understood the Ethics Policy and Publication Policy.",
      required: true,
    },
    {
      name: "privacyPolicy",
      text: "I agree to the processing of my data in accordance with the Privacy Policy.",
      required: true,
    },
    {
      name: "receiveUpdates",
      text: "I would like to be notified about new issues and updates.",
      required: false,
    },
  ];

  return (
    <SectionCard
      number="4"
      title="Declarations"
      delay={0.12}
    >
      <div className="space-y-4">
        {declarations.map((item) => (
          <label
            key={item.name}
            className="flex cursor-pointer items-start gap-3"
          >
            <input
              type="checkbox"
              name={item.name}
              checked={formData[item.name]}
              onChange={onChange}
              className="mt-0.5 h-4 w-4 shrink-0 rounded accent-blue-600"
            />

            <span className="text-xs leading-5 text-slate-600">
              {item.text}
              {item.required && (
                <span className="ml-1 text-red-500">*</span>
              )}
            </span>
          </label>
        ))}
      </div>
    </SectionCard>
  );
}

function PublicationAccess({
  formData,
  onChange,
}) {
  return (
    <SectionCard
      number="5"
      title="Publication & Access"
      delay={0.15}
    >
      <div className="space-y-4">
        <div>
          <FieldLabel required>
            Publication Model
          </FieldLabel>

          <SelectInput
            name="publicationModel"
            value={formData.publicationModel}
            onChange={onChange}
          >
            <option>
              Hybrid Subscription + Gold Open Access
            </option>
            <option>Gold Open Access</option>
            <option>Subscription Access</option>
          </SelectInput>
        </div>

        <div>
          <FieldLabel required>
            If you choose Gold Open Access, who will pay the APC?
          </FieldLabel>

          <SelectInput
            name="apcOption"
            value={formData.apcOption}
            onChange={onChange}
          >
            <option value="">-- Select --</option>
            <option value="Author">
              Author
            </option>
            <option value="Institution">
              Institution
            </option>
            <option value="Funding Agency">
              Funding Agency
            </option>
            <option value="Waiver Requested">
              Waiver Requested
            </option>
          </SelectInput>
        </div>

        <div>
          <FieldLabel>
            Funding Information (Optional)
          </FieldLabel>

          <textarea
            name="fundingInformation"
            value={formData.fundingInformation}
            onChange={onChange}
            rows={5}
            placeholder="Enter grant number or funding details (if any)"
            className="w-full resize-y rounded-md border border-slate-300 px-3 py-3 text-xs leading-5 outline-none transition-all hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>
    </SectionCard>
  );
}

export default AuthorSubmitManuscript;