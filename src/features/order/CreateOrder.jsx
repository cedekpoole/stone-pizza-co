import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiMenu";
import Logo from "../../assets/StonePizza.svg";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

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
              // value={withPriority}
              // onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority">Want to give your order priority?</label>
          </div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <div>
            <Button disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Order now"}
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
    priority: data.priority === "on",
  };
  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone = "Please give a valid phone number";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
