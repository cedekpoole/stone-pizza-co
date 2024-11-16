import LinkButton from "../../ui/LinkButton";
import PizzaSlice from "../../assets/pizzaslice.svg";

function EmptyCart() {
  return (
    <div className="grid grid-cols-1 px-4 py-3 md:grid-cols-2">
      <div>
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>

        <p className="font-semi-bold mt-2 pt-7 text-3xl">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </div>
      <div>
        <img
          src={PizzaSlice}
          alt="pizza slice"
          className="mx-auto mt-10 w-9/12"
        />
      </div>
    </div>
  );
}

export default EmptyCart;
