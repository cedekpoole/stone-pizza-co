import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiMenu";
import Logo from "../../assets/StonePizza.svg";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
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
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="mt-5 col-span-1 mx-auto">
        <h2 className="font-bold font-syne text-2xl mb-7">Ready to order?</h2>

        <Form method="POST" className="flex flex-col gap-6">
          <div className="flex gap-4 text-sm items-center">
            <label>FIRST NAME</label>
            <input
              type="text"
              name="customer"
              required
              className="p-1 rounded-md text-[#242424]"
            />
          </div>

          <div className="flex gap-4 text-sm items-center">
            <label>PHONE NUMBER</label>
            <div>
              <input
                type="tel"
                name="phone"
                required
                className="p-1 rounded-md text-[#242424]"
              />
            </div>
          </div>
          {formErrors?.phone && <p className="text-sm">* {formErrors.phone}</p>}
          <div className="flex gap-4 text-sm items-center">
            <label>ADDRESS</label>
            <div>
              <input
                type="text"
                name="address"
                required
                className="p-1 rounded-md text-[#242424]"
              />
            </div>
          </div>

          <div className="flex gap-4 text-md items-center">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              // value={withPriority}
              // onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority">Want to give your order priority?</label>
          </div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <div>
            <button
              disabled={isSubmitting}
              className="bg-[#494f62] px-4 py-1 rounded-full
               hover:bg-[#373c4b] tracking-wide font-syne transition-colors 
               duration-200 focus:outline-none focus:ring focus:ring-offset-2
                focus:bg-[#373c4b] focus:ring-[#373c4b] disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Order now"}
            </button>
          </div>
        </Form>
      </div>
      <img
        src={Logo}
        alt="Logo"
        className="w-full h-full p-10 col-span-2 object-contain mx-auto hidden md:block"
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
