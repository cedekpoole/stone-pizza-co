import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const cartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  if (!cartQuantity) return null;
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-l from-[#1c1e25] to-[#494f62] px-6 py-3 text-white shadow-lg">
      <p className="text-sm">
        <span>
          {cartQuantity} pizza{cartQuantity > 1 ? "s" : ""}
        </span>{" "}
        <span className="ml-2 font-bold text-green-400">
          {formatCurrency(totalPrice)}
        </span>
      </p>
      <Link
        to="/cart"
        className="font-semibold text-green-400 hover:text-green-300"
      >
        View cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
