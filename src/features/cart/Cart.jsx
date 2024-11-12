import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

function Cart() {
  return (
    <div>
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2>Your cart, %NAME%</h2>

      <div className="flex gap-4">
        <Link to="/order/new">
          <Button>Order Pizzas</Button>
        </Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
