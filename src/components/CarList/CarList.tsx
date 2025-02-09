import { useState } from "react";
import { useFetchCars } from "hooks";
import { Box, CircularProgress, Typography } from "@mui/material";
import { CarItem } from "../CarItem";
import { Pagination } from "../Pagination";
import { Car, Filters } from "../../types";

type CarListProps = {
  filters?: Filters;
};

export const CarList = ({ filters }: CarListProps) => {
  const [page, setPage] = useState(1);
  const { cars, loading, error, totalCount, pageCount } = useFetchCars(page, filters); 

  return (
    <Box width={"65%"} position="relative">
      <Typography variant="h6" fontWeight="bold">
        Available cars
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={2}>
        Showing {cars.length} of {totalCount} results
      </Typography>

      <Box position="relative" minHeight={200}>
        {loading && (
          <Box 
            position="absolute" 
            top={0} left={0} right={0} bottom={0} 
            display="flex" justifyContent="center" alignItems="center" 
            bgcolor="rgba(255,255,255,0.6)"
            zIndex={10}
          >
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Typography color="error">Error: {error}</Typography>
        )}

        {!loading && cars.length === 0 && (
          <Typography>No cars found</Typography>
        )}

        {cars.map((car: Car) => (
          <Box key={car.stockNumber} mb={2} p={2} border="1px solid #ddd" borderRadius={2}>
            <CarItem car={car} />
          </Box>
        ))}
      </Box>

      <Pagination totalPages={pageCount} currentPage={page} onPageChange={setPage} />
    </Box>
  );
};
