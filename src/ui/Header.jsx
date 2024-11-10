import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between">
      <Link to="/">The Surf Shack</Link>
      <p>Cam Poole</p>
    </header>
  );
}

export default Header;
