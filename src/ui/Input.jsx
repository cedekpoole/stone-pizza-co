import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
};

function Input({ type, name, defaultValue, disabled = false }) {
  return (
    <input
      type={type}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      required
      className="grow rounded-full bg-[#f1f1f1] px-2 py-1 text-base text-[#242424] transition-all duration-300 focus:outline-none focus:ring focus:ring-[#494f62] focus:ring-offset-1"
    />
  );
}

export default Input;
