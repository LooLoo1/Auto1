import { useState } from "react";
import { useFetchCars } from "hooks";
import { Box, CircularProgress, Typography } from "@mui/material";
import { CarItem } from "../CarItem";
import { Pagination } from "../Pagination";
import { Car, Filters } from "../../types";
import { BoxStyled } from "./styled"

type CarListProps = {
  filters?: Filters;
};

export const CarList = ({ filters }: CarListProps) => {
  const [page, setPage] = useState(1);
  const { cars, loading, error, totalCount } = useFetchCars(page, filters); 
  
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <BoxStyled>
      <Typography variant="h6" fontWeight="bold">
        Available cars
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={2}>
        Showing {cars.length} of {totalCount} results
      </Typography>

      {cars.map((car: Car) => (
        <Box key={car.stockNumber} mb={2} p={2} border="1px solid #ddd" borderRadius={2}>
          <CarItem car={car} />
        </Box>
      ))}

      <Pagination currentPage={page} onPageChange={setPage} />
    </BoxStyled>
  );
};
