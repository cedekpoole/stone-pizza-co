import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  dark: PropTypes.bool,
};

function Button({ children, disabled = false, to, dark = false }) {
  const className = `${
    dark ? "bg-[#373c4b] hover:bg-[#494f62]" : "bg-[#494f62] hover:bg-[#373c4b]"
  }  px-4 py-1 rounded-full tracking-wide font-syne transition-colors duration-200 focus:outline-none focus:ring focus:ring-offset-2 focus:bg-[#373c4b] focus:ring-[#373c4b] disabled:cursor-not-allowed`;

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
