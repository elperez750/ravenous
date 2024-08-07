import { useState, useCallback } from 'react';
import fetchBusinesses from '../utils/yelpApi';
import { BusinessComponentProps } from '../components/business';

type FetchBusinessesProps = {
  term: string;
  location: string;
  sortBy: string;
};

const useYelpSearch = () => {
  const [businesses, setBusinesses] = useState<BusinessComponentProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const searchYelp = useCallback(async ({ term, location, sortBy }: FetchBusinessesProps) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBusinesses({ term, location, sortBy });
      if (data && data.businesses) {
        const newBusinesses = data.businesses.map((business: any) => ({
          image: business.image_url,
          name: business.name,
          address: `${business.location.address1 || ''} ${business.location.address2 || ''} ${business.location.address3 || ''}`.trim(),
          city: business.location.city,
          state: business.location.state,
          zipcode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        }));

        if (sortBy === 'rating') {
          newBusinesses.sort((a: BusinessComponentProps, b: BusinessComponentProps) => b.rating - a.rating);
        } else if (sortBy === 'review_count') {
          newBusinesses.sort((a: BusinessComponentProps, b: BusinessComponentProps) => b.reviewCount - a.reviewCount);
        }

        setBusinesses(newBusinesses);
      }
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { businesses, loading, error, searchYelp };
};

export default useYelpSearch;
