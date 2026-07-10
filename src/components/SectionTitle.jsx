import { motion } from "framer-motion";

/**
 * Consistent section heading used across all pages.
 * tag: small pill label above the heading (e.g. "OUR JOURNALS")
 * title: main heading text
 * subtitle: optional supporting paragraph
 * align: "center" | "left"
 * light: use light (white) text for dark backgrounds
 */
const SectionTitle = ({
  tag,
  title,
  subtitle,
  align = "center",
  light = false,
}) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${alignment} mb-10 md:mb-14`}
    >
      {tag && <span className="section-tag mb-4">{tag}</span>}
      <h2
        className={`mt-3 font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm md:text-base leading-relaxed ${
            light ? "text-navy-100/80" : "text-navy-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
