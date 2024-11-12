import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

function Cart() {
  return (
    <div>
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2>Your cart, %NAME%</h2>

      <div className="flex gap-4">
        <Button to="/order/new">Order Pizzas</Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
