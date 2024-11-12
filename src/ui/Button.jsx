import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

function Button({ children, disabled = false }) {
  return (
    <button
      disabled={disabled}
      className="bg-[#494f62] px-4 py-1 rounded-full
  hover:bg-[#373c4b] tracking-wide font-syne transition-colors 
  duration-200 focus:outline-none focus:ring focus:ring-offset-2
   focus:bg-[#373c4b] focus:ring-[#373c4b] disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default Button;
