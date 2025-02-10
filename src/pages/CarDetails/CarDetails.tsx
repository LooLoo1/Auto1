import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCarDetails } from "hooks"; 

export const CarDetails = () => {
  const { id } = useParams<{ id: string }>(); 
  const parsedId = Number(id);
  const { car, loading, error } = useCarDetails(parsedId);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  if (!car) return <Typography>No car found</Typography>;

  const mileage = car.mileage?.number ?? 'N/A'; 
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <Box
        component="img"
        src={car.pictureUrl}
        alt={`${car.manufacturerName} ${car.modelName}`}
        sx={{
          width: "100%", 
          height: "auto",  
          maxHeight: "400px", 
          objectFit: "cover",
        }}
      />
      <Box display={"flex"} width={"80%"} margin={"0 auto"} gap={2}>
        <Box width={"55%"}>
          <Typography gutterBottom sx={{ fontSize: "32px", fontWeight: "bold" }}>{car.manufacturerName} {car.modelName}</Typography>
          <Typography mb={2} variant="body1">
            Stock # {car.stockNumber} - {mileage} KM - {car.fuelType} - {car.color}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.
          </Typography>

        </Box>

        <Box width={"40%"} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: 2, padding: 2, border: "2px solid #EDEDED" }}>
          <Typography variant="body1">If you like this car, click the button and save it in your collection of favourite items.</Typography>
          <Button sx={{ width: "50%", alignSelf: "flex-end", color: "white", boxShadow: "none" }} variant="contained" color="primary" onClick={() => alert("Saved to collection!")}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
