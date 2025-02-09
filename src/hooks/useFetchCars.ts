import { fetchCars } from "api"
import { useState, useEffect } from 'react';
import { Car, Filters } from "types"

export const useFetchCars = (page: number, filters?: Filters) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!filters) return; 
    setLoading(true);
    fetchCars(page, 10, filters)
      .then(data => {
        setCars(data.cars);
        setTotalCount(data.totalCarsCount);
        setPageCount(data.totalPageCount);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [page, filters]);

  return { cars, totalCount, pageCount, loading, error };
};

