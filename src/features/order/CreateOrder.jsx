import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiMenu";
import Logo from "../../assets/StonePizza.svg";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getUsername } from "../user/userSlice";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-1 mx-auto mt-5">
        <h2 className="mb-7 font-syne text-2xl font-bold">Ready to order?</h2>

        <Form method="POST" className="flex flex-col gap-6">
          <div className="flex items-center gap-4 text-sm">
            <label>FIRST NAME</label>
            <Input type={"text"} name={"customer"} defaultValue={username} />
          </div>

          <div className="flex items-center gap-4 text-sm">
            <label>PHONE NUMBER</label>
            <div>
              <Input type={"tel"} name="phone" />
            </div>
          </div>
          {formErrors?.phone && <p className="text-sm">* {formErrors.phone}</p>}
          <div className="flex items-center gap-4 text-sm">
            <label>ADDRESS</label>
            <div>
              <Input type={"text"} name={"address"} />
            </div>
          </div>

          <div className="text-md flex items-center gap-4">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              className="h-6 w-6 accent-[#373c4b] transition-all duration-300 focus:outline-none focus:ring focus:ring-[#494f62]"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority">Want to give your order priority?</label>
          </div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <div>
            <Button disabled={isSubmitting}>
              {isSubmitting
                ? "Submitting..."
                : `Order for ${formatCurrency(totalPrice)}`}
            </Button>
          </div>
        </Form>
      </div>
      <img
        src={Logo}
        alt="Logo"
        className="col-span-2 mx-auto hidden h-full w-full object-contain p-10 md:block"
      />
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone = "Please give a valid phone number";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  //do not overuse as it can lead to performance issues
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
