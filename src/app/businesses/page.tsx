"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "../components/loadingSpinner";
import BusinessList from "../components/businessList";
import useYelpSearch from "../hooks/useYelpSearch";
import { useEffect } from "react";
import fetchBusinessDetails from "../utils/fetchBusinessDetails";

function BusinessListContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { searchYelp, businesses, loading } = useYelpSearch();

  useEffect(() => {
    const term = searchParams.get("term") || "";
    const location = searchParams.get("location") || "";
    const sortBy = searchParams.get("sortBy") || "rating";

    if (term && location) {
      searchYelp({ term, location, sortBy });
    }
  }, [searchParams, searchYelp]);

  const showBusinessDetails = async (id: string) => {
    const details = await fetchBusinessDetails(id);
    const query = new URLSearchParams(details).toString();
    router.push(`/business/${id}?${query}`);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (businesses.length === 0) {
    return <p>No businesses found.</p>;
  }

  return (
    <BusinessList
      businesses={businesses}
      onBusinessClick={showBusinessDetails}
    />
  );
}

export default function BusinessListPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BusinessListContent />
    </Suspense>
  );
}
