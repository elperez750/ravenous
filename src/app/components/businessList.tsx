import React from "react";
import { BusinessCard, BusinessComponentProps } from "./business";

type BusinessListComponentProps = {
    businesses: BusinessComponentProps[];
    onBusinessClick: (id: string) => void; // Add a prop type for the click handler

};

export default function BusinessList ({ businesses, onBusinessClick }: BusinessListComponentProps) {
  return (
    <div className="bg-light-gray min-h-screen p-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {businesses.map((business) => (
         <>
          <BusinessCard
            key={business.key}
            image={business.image}
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            zipcode={business.zipcode}
            category={business.category}
            rating={business.rating}
            reviewCount={business.reviewCount}
            handleClick={() => onBusinessClick(business.key)} 
          />
          </>
          
        ))}
      </div>
    </div>
  );
};
