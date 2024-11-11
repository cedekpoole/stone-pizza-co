import PropTypes from "prop-types";

Loader.propTypes = {
  fullScreen: PropTypes.bool,
};

export default function Loader({ fullScreen = false }) {
  return (
    <div
      className={`flex justify-center items-center ${
        fullScreen ? `min-h-screen` : ""
      }`}
    >
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-500"></div>
    </div>
  );
}
