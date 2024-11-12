import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

function Cart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold font-syne">
        Your cart, %NAME%
      </h2>

      <div className="flex gap-4">
        <Button to="/order/new">Order Pizzas</Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
