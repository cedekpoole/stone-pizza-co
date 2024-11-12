import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search order #"
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full bg-[#f1f1f1] px-2 py-1 text-gray-400 transition-all duration-500 focus:w-48 focus:bg-[#373c4b] focus:outline-none focus:ring focus:ring-[#282c38] sm:w-56 focus:sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
