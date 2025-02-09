import { useState, useEffect } from 'react';
import { fetchColors } from '../api';

export const useFetchColors = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchColors();
        setColors(data.colors);
        setLoading(false);
      } catch (err) {
        setError('Error fetching colors');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { colors, loading, error };
};
