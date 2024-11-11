import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between my-10 text-[#f1f1f1]">
      <Link to="/">Stone Pizza Company</Link>
      <p>Cam Poole</p>
    </header>
  );
}

export default Header;
