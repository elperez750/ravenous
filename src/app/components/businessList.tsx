import React from "react";
import { Business, BusinessComponentProps } from "./business";


type BusinessListComponentProps = {
    businesses: BusinessComponentProps[];
}


// This should ideally be in a separate data file or coming from an API
/*
const listOfBusinesses: BusinessComponentProps[] = [
    {
      image: "images/shop1.jpg",
      name: "Coffee Brewsters",
      address: "123 Brew Lane",
      city: "Seattle",
      state: "WA",
      zipcode: 98101,
      category: "Cafe",
      rating: 4.5,
      reviewCount: 89
    },
    {
      image: "images/shop2.jpg",
      name: "Tech Gadgets",
      address: "456 Tech Ave",
      city: "San Francisco",
      state: "CA",
      zipcode: 94102,
      category: "Electronics",
      rating: 4.2,
      reviewCount: 120
    }
  ];

*/



const BusinessList = ({businesses}: BusinessListComponentProps) => {
  return (
    <div>
      {businesses.map(business => (
        <Business
          image={business.image}
          name={business.name}
          address={business.address}
          city={business.city}
          state={business.state}
          zipcode={business.zipcode}
          category={business.category}
          rating={business.rating}
          reviewCount={business.reviewCount}
        />
      ))}
    </div>
  );
};