import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiMenu";
import Logo from "../../assets/StonePizza.svg";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../user/userSlice";
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
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === "loading";

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 mx-auto mt-5">
        <h2 className="mb-7 font-syne text-2xl font-bold">Ready to order?</h2>
        <Form method="POST" className="mb-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center">
            <label className="sm:basis-30">FIRST NAME</label>
            <Input type={"text"} name={"customer"} defaultValue={username} />
          </div>

          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center">
            <label className="sm:basis-30">PHONE NUMBER</label>
            <Input type={"tel"} name="phone" />
          </div>
          {formErrors?.phone && (
            <p className="text-sm text-red-400">* {formErrors.phone}</p>
          )}
          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center">
            <label className="sm:basis-30">ADDRESS</label>
            <Input
              disabled={isLoadingAddress}
              defaultValue={address}
              type={"text"}
              name={"address"}
            />

            {!position.latitude && !position.longitude && (
              <Button
                type="light"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                disabled={isLoadingAddress}
              >
                Get Location
              </Button>
            )}
          </div>
          {addressStatus === "error" && (
            <p className="text-sm text-red-400">* {errorAddress}</p>
          )}

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
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <div>
            <Button disabled={isSubmitting || isLoadingAddress}>
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
        className="col-span-1 mx-auto hidden h-full w-full object-contain p-1 pt-5 md:block"
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
