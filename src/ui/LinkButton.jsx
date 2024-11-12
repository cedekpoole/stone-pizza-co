import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "hover:underline hover:text-gray-300";
  if (to === "-1") {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
