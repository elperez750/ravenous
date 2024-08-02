"use client"
import { BusinessComponentProps } from "./components/business";
import { BusinessList } from "./components/businessList";
import { SearchBar } from "./components/searchBar";
import HomeDepot from "../../public/images/homedepot.jpg";
import Walmart from "../../public/images/walmart.png"



export default function Home() {

  const listOfBusinesses: BusinessComponentProps[] = [
    {
      image: HomeDepot.src,
      name: "Home Depot",
      address: "123 Brew Lane",
      city: "Seattle",
      state: "WA",
      zipcode: 98101,
      category: "Home Improvement",
      rating: 4.5,
      reviewCount: 89
    },
    {
      image: Walmart.src,
      name: "Walmart",
      address: "456 Tech Ave",
      city: "San Francisco",
      state: "CA",
      zipcode: 94102,
      category: "Supermarket",
      rating: 4.2,
      reviewCount: 120
    },
    {
      image: HomeDepot.src,
      name: "Coffee Brewsters",
      address: "123 Brew Lane",
      city: "Seattle",
      state: "WA",
      zipcode: 98101,
      category: "Home Improvement",
      rating: 4.5,
      reviewCount: 89
    },
    {
      image: HomeDepot.src,
      name: "Coffee Brewsters",
      address: "123 Brew Lane",
      city: "Seattle",
      state: "WA",
      zipcode: 98101,
      category: "Home Improvement",
      rating: 4.5,
      reviewCount: 89
    },
    {
      image: HomeDepot.src,
      name: "Coffee Brewsters",
      address: "123 Brew Lane",
      city: "Seattle",
      state: "WA",
      zipcode: 98101,
      category: "Home Improvement",
      rating: 4.5,
      reviewCount: 89
    },
    {
      image: HomeDepot.src,
      name: "Coffee Brewsters",
      address: "123 Brew Lane",
      city: "Seattle",
      state: "WA",
      zipcode: 98101,
      category: "Home Improvement",
      rating: 4.5,
      reviewCount: 89
    },
    {
      image: HomeDepot.src,
      name: "Coffee Brewsters",
      address: "123 Brew Lane",
      city: "Seattle",
      state: "WA",
      zipcode: 98101,
      category: "Home Improvement",
      rating: 4.5,
      reviewCount: 89
    },
    {
      image: HomeDepot.src,
      name: "Coffee Brewsters",
      address: "123 Brew Lane",
      city: "Seattle",
      state: "WA",
      zipcode: 98101,
      category: "Home Improvement",
      rating: 4.5,
      reviewCount: 89
    },
    {
      image: HomeDepot.src,
      name: "Coffee Brewsters",
      address: "123 Brew Lane",
      city: "Seattle",
      state: "WA",
      zipcode: 98101,
      category: "Home Improvement",
      rating: 4.5,
      reviewCount: 89
    },
  ];

  const searchYelp = (term: string, location: string, sortBy: string) => {
    console.log(`Searching Yelp with term: ${term}, location: ${location}, sorted by ${sortBy}`);
    // API call would be initiated here, for example:
    // axios.get('/api/search', { params: { term, location, sortBy } })
    //   .then(response => {
    //     // Process response data
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     // Handle any errors
    //     console.error('Search failed', error);
    //   });
  };

  return (
    <>
    <SearchBar onSearch={searchYelp}/>
      <BusinessList businesses={listOfBusinesses} />
    </>
  );
}
