import { useState, useEffect } from "react";
import { fetchCarDetails } from "api";
import { Car } from "types";

type CarDetailsState = {
  car: Car | null;
  loading: boolean;
  error: string | null;
}

export const useCarDetails = (carId: number) => {
  const [state, setState] = useState<CarDetailsState>({
    car: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getCarDetails = async () => {
      setState({ car: null, loading: true, error: null });
      try {
        const fetchedCar = await fetchCarDetails(carId);
        setState({ car: fetchedCar.car, loading: false, error: null });
      } catch (err: any) {
        setState({ car: null, loading: false, error: err.message });
      }
    };

    getCarDetails();
  }, [carId]);

  return state; 
};
