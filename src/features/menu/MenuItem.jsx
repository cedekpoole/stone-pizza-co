import PropTypes from "prop-types";

const MenuItem = ({ pizza }) => {
  const { name, unitPrice: price, ingredients, soldOut, imageUrl } = pizza;

  return (
    <div className="relative bg-[#3a3f50] text-[#f1f1f1] rounded-lg shadow-lg overflow-hidden grid grid-cols-2 gap-4 items-center transition-transform transform hover:scale-105">
      {/* Pizza Image */}
      <div className={`h-full ${soldOut ? "opacity-50" : ""}`}>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>

      {/* Content */}
      <div className="p-2 md:p-6 space-y-4">
        {/* Pizza Name */}
        <h2 className="text-lg md:text-2xl font-bold">{name}</h2>

        {/* Ingredients */}
        <p className="text-gray-400 text-sm">{ingredients.join(", ")}</p>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span
            className={`text-md md:text-2xl font-bold ${
              soldOut ? "text-gray-500 line-through" : "text-green-400"
            }`}
          >
            ${price.toFixed(2)}
          </span>
          {!soldOut && (
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-2.5 py-1.5 md:px-4 md:py-2 rounded-md">
              Add to Cart
            </button>
          )}
        </div>
      </div>

      {/* Sold Out Badge */}
      {soldOut && (
        <div className="absolute top-2 right-2 bg-red-600 text-sm font-semibold px-3 py-1 rounded-md">
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
