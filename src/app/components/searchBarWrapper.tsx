"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "./searchBar";
import useYelpSearch from "../hooks/useYelpSearch";

export default function SearchBarWrapper() {
  const { searchYelp } = useYelpSearch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [term, setTerm] = useState(searchParams.get("term") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "rating");

  useEffect(() => {
    if (term && location) {
      searchYelp({ term, location, sortBy });
    }
  }, [term, location, sortBy]);

  const handleSearch = async (term: string, location: string, sortBy: string) => {
    setTerm(term);
    setLocation(location);
    setSortBy(sortBy);
    await searchYelp({ term, location, sortBy });

    const query = new URLSearchParams({ term, location, sortBy }).toString();
    router.push(`/businesses?${query}`);
  };

  return <SearchBar onSearch={handleSearch} initialTerm={term} initialLocation={location} initialSortBy={sortBy} />;
}
