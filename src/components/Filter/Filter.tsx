import { CircularProgress, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useFetchColors } from "hooks/useFetchColors";
import { useFetchManufacturers } from "hooks/useFetchManufacturers";
import { Filters } from "types";
import { BoxStyled, ButtonStyled, SelectStyled } from "./styled";

type FilterProps = {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
};

export const Filter = ({ filters, onFilterChange }: FilterProps) => {
  const { colors, loading: colorsLoading, error: colorsError } = useFetchColors();
  const { manufacturers, loading: manufacturersLoading, error: manufacturersError } = useFetchManufacturers();

  const manufacturerOptions = ["All manufacturers", ...manufacturers.map((m) => m.name)];
  const colorOptions = ["All car colors", ...colors];

  const handleManufacturerChange = (event: SelectChangeEvent<string>) => {
    onFilterChange({
      manufacturer: event.target.value === "All manufacturers" ? "" : event.target.value,
      color: filters.color,
    });
  };

  const handleColorChange = (event: SelectChangeEvent<string>) => {
    onFilterChange({
      manufacturer: filters.manufacturer,
      color: event.target.value === "All car colors" ? "" : event.target.value,
    });
  };

  if (colorsLoading || manufacturersLoading) return <CircularProgress />;
  if (colorsError || manufacturersError) return <div>Error loading data</div>;

  return (
    <BoxStyled>
      <FormControl variant="outlined">
        <Typography variant="subtitle1">Color</Typography>
        <Select value={filters.color || "All car colors"} onChange={handleColorChange}>
          {colorOptions.map((color, index) => (
            <MenuItem key={index} value={color}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined">
        <Typography variant="subtitle1">Manufacturer</Typography>
        <Select value={filters.manufacturer || "All manufacturers"} onChange={handleManufacturerChange}>
          {manufacturerOptions.map((manufacturer, index) => (
            <MenuItem key={index} value={manufacturer}>
              {manufacturer}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ButtonStyled variant="contained" onClick={() => onFilterChange(filters)}>
        Filter
      </ButtonStyled>
    </BoxStyled>
  );
};
