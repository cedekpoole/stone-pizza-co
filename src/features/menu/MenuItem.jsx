import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCartQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import AddToCart from "../../assets/add-to-cart.svg";

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice: price, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currQuantity = useSelector(getCartQuantityById(id));

  const isInCart = currQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div className="relative grid max-h-44 transform grid-cols-8 gap-4 divide-y divide-stone-200 overflow-hidden text-[#f1f1f1]">
      {/* Pizza Image */}
      <div className={`col-span-2 h-full ${soldOut ? "opacity-40" : ""}`}>
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full rounded-l-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="col-span-6 space-y-3 pt-3">
        {/* Pizza Name */}
        <h2 className="font-syne text-lg font-bold md:text-xl lg:text-2xl">
          {name}
        </h2>

        {/* Ingredients */}
        <p className="text-sm text-gray-400">{ingredients.join(", ")}</p>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span
            className={`text-md font-bold md:text-2xl ${
              soldOut ? "text-gray-500 line-through" : "text-green-400"
            }`}
          >
            £{price.toFixed(2)}
          </span>
          <div className="mb-1 mr-1 mt-3 flex gap-3 md:gap-8">
            {isInCart && (
              <UpdateItemQuantity pizzaId={id} currentQuantity={currQuantity} />
            )}
            {isInCart && <DeleteItem pizzaId={id} />}
            {!soldOut && !isInCart && (
              <button
                onClick={handleAddToCart}
                className="mr-3 rounded-md bg-[#373c4b] px-1 py-1.5 transition-colors duration-200 hover:bg-green-600 md:px-2 md:py-1.5"
              >
                <img
                  src={AddToCart}
                  alt="Add to Cart"
                  className="h-6 w-6 md:h-8 md:w-8"
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sold Out Badge */}
      {soldOut && (
        <div className="absolute right-1 top-3 rounded-md bg-red-500 px-3 py-1 font-syne text-sm font-semibold uppercase tracking-wide">
          Sold Out
        </div>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;
