import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-l to-[#494f62] from-[#1c1e25] text-white px-4 py-3 flex justify-between items-center shadow-lg">
      <p className="text-sm">
        <span className="font-semibold">3 pizzas</span>{" "}
        <span className="ml-2">£30.00</span>
      </p>
      <Link
        to="/cart"
        className="text-green-400 font-semibold hover:text-green-300"
      >
        View cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
