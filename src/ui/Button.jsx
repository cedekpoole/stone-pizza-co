import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
};

function Button({ children, disabled = false, to }) {
  const className =
    "bg-[#494f62] px-4 py-1 rounded-full hover:bg-[#373c4b] tracking-wide font-syne transition-colors duration-200 focus:outline-none focus:ring focus:ring-offset-2 focus:bg-[#373c4b] focus:ring-[#373c4b] disabled:cursor-not-allowed";

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
