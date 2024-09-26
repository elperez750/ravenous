"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
const BusinessesPage = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axios.get("/api/foursquare");
        console.log(response.data);
        setBusinesses(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch businesses");
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <h1 className="text-4xl font-bold">Businesses</h1>

      {businesses.map((business: any) => (
        <div key={business.fsq_id}>
          <h2>{business.name}</h2>
          <p>{business.location.address}</p>
          <p>{business.location.city}</p>
          <Image
            src="https://fastly.4sqi.net/img/general/original/3275561_p23llvdY7WENfcmcYSPvljaDmvBc8XXxM29mB799rik.jpg"
            alt="Business Image"
            width={600} // Adjust width as necessary
            height={400} // Adjust height as necessary
            layout="responsive"
          />
        </div>
      ))}
    </div>
  );
};

export default BusinessesPage;
