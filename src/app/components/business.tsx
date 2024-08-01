import React from "react";

export type BusinessComponentProps = {
    image: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: number;
    category: string;
    rating: number;
    reviewCount: number;
}

export const Business = ({image, name, address, city, state, zipcode, category, rating, reviewCount}: BusinessComponentProps) => {
  return (
    <ul>
      <li>{image}</li>
        <li>{name}</li>
        <li>{address}</li>
        <li>{city}</li>
        <li>{state}</li>
        <li>{zipcode}</li>
        <li>{category}</li>
        <li>{rating}</li>
        <li>{reviewCount}</li>
    </ul>
  );
};

