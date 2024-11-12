import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }),
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button dark={true}>Remove</Button>
      </div>
    </li>
  );
}

export default CartItem;
