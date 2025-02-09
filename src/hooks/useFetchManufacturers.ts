import { useState, useEffect } from 'react';
import { fetchManufacturers } from '../api';

export const useFetchManufacturers = () => {
  const [manufacturers, setManufacturers] = useState<{ name: string; models: { name: string }[] }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchManufacturers();
        setManufacturers(data.manufacturers);
        setLoading(false);
      } catch (err) {
        setError('Error fetching manufacturers');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { manufacturers, loading, error };
};
