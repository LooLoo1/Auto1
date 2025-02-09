import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Car } from '../types';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { fetchCarDetails } from '../api';

export const CarDetails = () => {
  const { stockNumber } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (stockNumber) {
      fetchCarDetails(Number(stockNumber))
        .then((data) => {
          setCar(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [stockNumber]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {car?.manufacturerName} {car?.modelName}
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Fuel Type:</strong> {car?.fuelType}
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Color:</strong> {car?.color}
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Mileage:</strong> {car?.mileage.number} {car?.mileage.unit}
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Price:</strong> $ {'test'}
      </Typography>
      <Button variant="contained" color="primary">
        Add to Favorites
      </Button>
    </Box>
  );
};