import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex justify-between my-10">
      <p>
        <span>3 pizzas</span>
        <span>£ 30,00</span>
      </p>
      <Link to="/cart">View cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
