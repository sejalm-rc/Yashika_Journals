import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline-teal",
};

/**
 * Reusable animated Button.
 * Renders a <Link> if `to` is provided, otherwise a <button>.
 */
const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  ...rest
}) => {
  const classes = `${variantClasses[variant] || variantClasses.primary} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 15 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes} {...rest}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
