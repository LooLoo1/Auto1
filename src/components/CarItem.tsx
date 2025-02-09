import { Car } from '../types';
import { Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

type CarItemProps = {
  car: Car;
}

export const CarItem = ({ car }: CarItemProps) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', p: 2, mb: 2, border: '1px solid #ddd' }}>
      <CardMedia
        component="img"
        image={car.pictureUrl}
        alt={`${car.manufacturerName} ${car.modelName}`}
        sx={{ width: 200, height: "auto", objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" gutterBottom>
          {car.manufacturerName} {car.modelName}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2" color="text.secondary">
            Stock # {car.stockNumber} - {car.mileage.number.toLocaleString()} {car.mileage.unit} - {car.fuelType} - {car.color}
          </Typography>
        </Box>
        <Box sx={{ px: 2, pb: 2 }}>
          <Button size="small" component={Link} to={`/car/${car.stockNumber}`} variant="outlined" fullWidth>
            View Details
          </Button>
        </Box>
      </CardContent> 
    </Card>
  );
};
