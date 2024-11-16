import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(["dark", "light", "secondary"]),
  onClick: PropTypes.func,
};

function Button({
  children,
  disabled = false,
  to,
  type = "light",
  onClick = () => {},
}) {
  const base =
    "rounded-full tracking-wide font-syne transition-colors duration-200 focus:outline-none focus:ring focus:ring-offset-2 focus:bg-[#373c4b] focus:ring-[#373c4b] disabled:cursor-not-allowed";

  const styles = {
    dark: base + " bg-[#373c4b] hover:bg-[#494f62] px-4 py-1",
    light: base + " bg-[#494f62] hover:bg-[#373c4b] px-4 py-1",
    secondary:
      " border-2 border-stone-700 hover:bg-[#1c1e25] px-3 py-1 rounded-full tracking-wide font-syne transition-colors duration-200 focus:outline-none focus:ring focus:ring-offset-2 focus:bg-[#373c4b] focus:ring-[#373c4b] disabled:cursor-not-allowed",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
