import React, { useState } from "react";

export type SearchBarProps = {
  onSearch: (term: string, location: string, sortBy: string) => Promise<any>;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTerm(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(term, location, sortBy);
  };

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption);
  };
  

  return (
    <div className="flex flex-col gap-4 p-4 bg-light-gray shadow">
      <form onSubmit={handleSearch} className="flex gap-3">
        <input
          className="flex-1 p-2 border-2 border-gray-200 rounded text-almost-black"
          placeholder="Search Businesses"
          type="text"
          value={term}
          onChange={handleTermChange}
        />
        <input
          className="flex-1 p-2 border-2 border-gray-200 rounded text-almost-black"
          placeholder="Where?"
          type="text"
          value={location}
          onChange={handleLocationChange}
        />
        <button
          className="px-4 py-2 bg-deep-blue text-white rounded hover:bg-sky-blue"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="flex gap-2">
        <button
          onClick={() => handleSortChange("best_match")}
          className={`${sortBy === "best_match" ? "bg-sky-blue text-white" : "bg-gray-200 text-black"} p-2 rounded`}
        >
          Best Match
        </button>
        <button
          onClick={() => handleSortChange("rating")}
          className={`${sortBy === "rating" ? "bg-sky-blue text-white" : "bg-gray-200 text-black"} p-2 rounded`}
        >
          Highest Rated
        </button>
        <button
          onClick={() => handleSortChange("review_count")}
          className={`${sortBy === "review_count" ? "bg-sky-blue text-white" : "bg-gray-200 text-black"} p-2 rounded`}
        >
          Most Reviewed
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
