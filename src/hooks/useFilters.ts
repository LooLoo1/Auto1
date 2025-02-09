import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filters } from 'types';

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialManufacturer = searchParams.get('manufacturer') || '';
  const initialColor = searchParams.get('color') || '';

  const [filters, setFilters] = useState<Filters>({
    manufacturer: initialManufacturer,
    color: initialColor,
  });

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);

    const params = new URLSearchParams();
    if (newFilters.manufacturer) params.set('manufacturer', newFilters.manufacturer);
    if (newFilters.color) params.set('color', newFilters.color);

    setSearchParams(params);  
  };

  useEffect(() => {
    const manufacturer = searchParams.get('manufacturer') || '';
    const color = searchParams.get('color') || '';
    setFilters({ manufacturer, color });
  }, [searchParams]);

  return { filters, handleFilterChange };
};
