import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Logo from "../assets/StonePizza.svg";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="mb-5 flex items-center justify-between px-3 py-3 text-[#f1f1f1] lg:px-16">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-32 lg:w-40" />
      </Link>
      <div className="flex items-center gap-4">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}

export default Header;
