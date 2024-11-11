import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between">
      <Link to="/">Stone Pizza Company</Link>
      <p>Cam Poole</p>
    </header>
  );
}

export default Header;
