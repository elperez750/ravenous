"use client";
import { Suspense } from "react";
import BusinessList from "../components/businessList";
import useYelpSearch from "../hooks/useYelpSearch";
import { useRouter, useSearchParams } from "next/navigation";
import fetchBusinessDetails from "../utils/fetchBusinessDetails";
import LoadingSpinner from "../components/loadingSpinner";
import { useEffect } from "react";

export default function BusinessListPage() {
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
  }, [searchParams]);

  const showBusinessDetails = async (id: string) => {
    const details = await fetchBusinessDetails(id);
    const query = new URLSearchParams(details).toString();
    console.log("query", query);
    router.push(`/business/${id}?${query}`);
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {loading && <LoadingSpinner />}
      {!loading && businesses.length === 0 && <p>No businesses found.</p>}
      <BusinessList
        businesses={businesses}
        onBusinessClick={showBusinessDetails}
      />
    </Suspense>
  );
}
