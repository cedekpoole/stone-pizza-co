import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center bg-[#2f3343] py-3 lg:px-12 justify-between mb-9 text-[#f1f1f1]">
      <Link to="/">
        <img src="./StonePizza.svg" alt="logo" className="w-32 lg:w-40" />
      </Link>
      <p>Cam Poole</p>
    </header>
  );
}

export default Header;
