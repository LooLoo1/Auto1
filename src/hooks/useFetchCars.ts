import { fetchCars } from "api";
import { useState, useEffect } from "react";
import { Car, Filters } from "types";

type CarsState = {
  cars: Car[];
  totalCount: number;
  pageCount: number;
  loading: boolean;
  error: string | null;
}

const CARS_PER_PAGE = 10;
const InitialState: CarsState = { cars: [], totalCount: 0, pageCount: 0, loading: true, error: null };

export const useFetchCars = (page: number, filters?: Filters) => {
  const [state, setState] = useState<CarsState>(InitialState);

  useEffect(() => {
    if (!filters) return;

    let isMounted = true;
    setState((prev) => ({ ...prev, loading: true, error: null }));

    fetchCars(page, CARS_PER_PAGE, filters)
      .then((data) => {
        if (isMounted) {
          setState({
            cars: data.cars,
            totalCount: data.totalCarsCount,
            pageCount: data.totalPageCount,
            loading: false,
            error: null,
          });
        }
      })
      .catch((err) => {
        if (isMounted) {
          setState((prev) => ({ ...prev, loading: false, error: err.message }));
        }
      });

    return () => {
      isMounted = false;
    };
  }, [page, filters]);

  return state;
};
