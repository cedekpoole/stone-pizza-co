// test id: IIDSAT; CQE92U

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiMenu";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-syne text-2xl font-semibold tracking-wide">
          Order #{id} status
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="text-semibold rounded-full bg-red-500 px-3 py-1 text-sm uppercase tracking-wide">
              Priority
            </span>
          )}
          <span className="text-semibold rounded-full bg-green-500 px-3 py-1 text-sm uppercase tracking-wide">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="space-y-2">
        <p className="text-sm font-medium">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-medium">
          To pay on delivery:{" "}
          <span className="text-green-300">
            {formatCurrency(orderPrice + priorityPrice)}
          </span>
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const { orderId } = params;
  const order = await getOrder(orderId);
  return order;
}

export default Order;
