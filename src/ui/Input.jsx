import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function Input({ type, name }) {
  return (
    <input
      type={type}
      name={name}
      required
      className="p-1 rounded-md text-[#242424] transition-all
      duration-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#494f62]"
    />
  );
}

export default Input;
