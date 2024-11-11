import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Logo from "../assets/StonePizza.svg";

function Header() {
  return (
    <header className="flex items-center bg-gradient-to-r to-[#494f62] from-[#1c1e25] py-3 lg:px-12 justify-between mb-9 text-[#f1f1f1]">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-32 lg:w-36" />
      </Link>
      <div className="flex gap-4 items-center">
        <SearchOrder />
        <p className="font-syne">CEDEKPOOLE</p>
      </div>
    </header>
  );
}

export default Header;
