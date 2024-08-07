"use client";
import { useState } from 'react';
import { BusinessComponentProps } from './components/business';
import { BusinessList } from './components/businessList';
import SearchBar from './components/searchBar';
import HomeDepot from '../../public/images/homedepot.jpg';
import Walmart from '../../public/images/walmart.png';
import useYelpSearch from './utils/useYelpSearch';
import LoadingSpinner from './components/loadingSpinner';

export default function Home() {
  const { businesses, loading, error, searchYelp } = useYelpSearch();
  const [searchParams, setSearchParams] = useState({
    term: '',
    location: '',
    sortBy: 'rating',
  });

  const handleSearch = async (term: string, location: string, sortBy: string) => {
    setSearchParams({ term, location, sortBy });
    await searchYelp({ term, location, sortBy });
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && <p>Error: {error.message}</p>}
      <BusinessList businesses={businesses} />
    </>
  );
}
