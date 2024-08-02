import React from "react";
import { Business, BusinessComponentProps } from "./business";

type BusinessListComponentProps = {
    businesses: BusinessComponentProps[];
};

export const BusinessList = ({ businesses }: BusinessListComponentProps) => {
  return (
    <div className="bg-light-gray min-h-screen p-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {businesses.map((business, index) => (
          <Business
            key={index}
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
    </div>
  );
};
