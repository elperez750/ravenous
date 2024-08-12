"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function IndividualPage() {
  const router = useRouter();
  const [businessDetails, setBusinessDetails] = useState<any>();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const details = Object.fromEntries(params.entries());
    setBusinessDetails(details);
  }, []);

  if (!businessDetails) {
    return <div className="flex justify-center items-center h-screen text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
        {businessDetails.image_url && (
          <img
            src={businessDetails.image_url}
            alt={businessDetails.name}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-6">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="text-blue-500 hover:text-blue-700 hover:underline mb-4"
          >
            &larr; Back
          </button>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">{businessDetails.name}</h1>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Phone:</span> {businessDetails.display_phone}
          </p>


          <p className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Rating:</span> {businessDetails.rating} / 5
          </p>

          <p className="text-lg text-gray-600 mt-2">
            <span className="font-semibold">Review Count:</span> {businessDetails.review_count} reviews
          </p>

          {businessDetails.price && (
            <p className="text-lg text-gray-600 mt-2">
              <span className="font-semibold">Price:</span> {businessDetails.price}
            </p>
          )}

         

          {businessDetails.url && (
            <a
              href={businessDetails.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View on Yelp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
