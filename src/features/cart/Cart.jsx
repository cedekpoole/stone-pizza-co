import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import PizzaSlice from "../../assets/pizzaslice.svg";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../user/userSlice";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3 md:px-10">
      <div className="absolute bottom-10 right-5 -z-20">
        <img
          src={PizzaSlice}
          alt="pizza slice"
          className="rotate-25 mr-20 mt-20 hidden w-full transform lg:block"
        />
      </div>
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      <h2 className="mt-7 font-syne text-xl font-semibold">
        Your cart, {username}
      </h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4">
        <Button to="/order/new">Order Pizzas</Button>
        <Button type="secondary" onClick={dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
