import PropTypes from "prop-types";

const MenuItem = ({ pizza }) => {
  const { name, unitPrice: price, ingredients, soldOut, imageUrl } = pizza;

  return (
    <div className="relative grid max-h-52 transform grid-cols-2 gap-4 overflow-hidden rounded-lg bg-[#3a3f50] text-[#f1f1f1] shadow-lg transition-transform hover:scale-105">
      {/* Pizza Image */}
      <div className={`h-full ${soldOut ? "opacity-50" : ""}`}>
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full rounded-l-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-2 md:p-6">
        {/* Pizza Name */}
        <h2 className="font-syne text-lg font-bold md:text-xl">{name}</h2>

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
          {!soldOut && (
            <button className="rounded-md bg-green-500 px-2.5 py-1.5 text-sm text-white hover:bg-green-600 md:px-4 md:py-2">
              Add to Cart
            </button>
          )}
        </div>
      </div>

      {/* Sold Out Badge */}
      {soldOut && (
        <div className="absolute right-2 top-2 rounded-md bg-red-600 px-3 py-1 text-sm font-semibold">
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
  }).isRequired,
};

export default MenuItem;
