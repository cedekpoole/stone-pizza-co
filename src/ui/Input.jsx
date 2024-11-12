import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

function Input({ type, name, defaultValue }) {
  return (
    <input
      type={type}
      name={name}
      defaultValue={defaultValue}
      required
      className="rounded-full bg-[#f1f1f1] p-1 text-[#242424] transition-all duration-300 focus:outline-none focus:ring focus:ring-[#494f62] focus:ring-offset-1"
    />
  );
}

export default Input;
