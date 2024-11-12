import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import PizzaSlice from "../../assets/pizzaslice.svg";
const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  return (
    <div className="px-4 py-3 md:px-10 ">
      <div className="absolute -z-20 right-5 bottom-10">
        <img
          src={PizzaSlice}
          alt="pizza slice"
          className="w-full mr-20 mt-20 hidden lg:block transform rotate-25"
        />
      </div>
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold font-syne">
        Your cart, %NAME%
      </h2>
      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="flex gap-4 mt-6 items-center">
        <Button to="/order/new">Order Pizzas</Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
