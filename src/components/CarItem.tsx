import { Car } from '../types';
import { Card, CardContent, Typography, CardMedia, styled } from '@mui/material';
import { Link } from 'react-router-dom';

type CarItemProps = {
  car: Car;
}

const CardStyled = styled(Card)({
  display: 'flex',
  flexDirection: 'row',
  gap: "20px",
  padding: 2,
  boxShadow: "none"
});

const CardContentStyled = styled(CardContent)({
  flexGrow: 1,
  padding: 0,
  "&:last-child": {
    paddingBottom: 0
  }
});

const LinkStyled = styled(Link)(({theme}) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
}))

export const CarItem = ({ car: {stockNumber, mileage, fuelType, color, pictureUrl, manufacturerName, modelName} }: CarItemProps) => {
  return (
    <CardStyled>
      <CardMedia
        component="img"
        image={pictureUrl}
        alt={`${manufacturerName} ${modelName}`}
        sx={{ width: 200, height: 100, objectFit: 'cover' }}
      />
      <CardContentStyled>
        <Typography variant="h6" component="div" gutterBottom fontWeight={"bold"}>
          {manufacturerName} {modelName}
        </Typography>
        <Typography variant="body2" gutterBottom color="text.secondary">
          Stock # {stockNumber} - {mileage.number.toLocaleString()} {mileage.unit} - {fuelType} - {color}
        </Typography>
        <LinkStyled to={`/cars/${stockNumber}`}>
          View Details
        </LinkStyled>

      </CardContentStyled> 
    </CardStyled>
  );
};
