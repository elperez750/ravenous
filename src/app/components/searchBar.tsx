"use client"
import React, { useState, useEffect, use } from "react";
import { Search, MapPin, Compass } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";


import axios from "axios";
const SearchBar = () => {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();


  const fetchBusinesses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/foursquare'); 
      const data = response.data;
      setBusinesses(data);
    } catch (err) {
      setError("Failed to fetch businesses");
    } finally {
      setLoading(false);
    }


    console.log(businesses)
  };

 




  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(keywords, location);
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };


  const handleClick = () => {
    router.push("/businesses");
  }
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-2xl items-center p-6">
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
        onSubmit={handleSearch}
      >
        <div className="relative col-span-1 sm:col-span-2">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search Businesses"
            value={keywords}
            onChange={handleKeywordsChange}
            className="border border-gray-300 p-2 pl-10 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="relative col-span-1 sm:col-span-2">
          <MapPin
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Where at?"
            value={location}
            onChange={handleLocationChange}
            className="border border-gray-300 p-2 pl-10 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="relative col-span-1">
          <label
            htmlFor="radius"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Radius
          </label>
          <div className="relative">
            <Compass
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <select
              id="radius"
              className="border border-gray-300 p-2 pl-10 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              <option value="5">5 Miles</option>
              <option value="10">10 Miles</option>
              <option value="25">25 Miles</option>
              <option value="50">50 Miles</option>
              <option value="100">100 Miles</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex items-end">
          <Button
            type="submit"
            onClick={handleClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Find Places
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
