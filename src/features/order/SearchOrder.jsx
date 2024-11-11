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
        className="px-2 py-1 bg-[#1c1e25] text-white rounded-md"
      />
    </form>
  );
}

export default SearchOrder;
