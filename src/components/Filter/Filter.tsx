import { useState } from "react";
import { FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useFetchColors } from "hooks/useFetchColors";
import { useFetchManufacturers } from "hooks/useFetchManufacturers";
import { Filters } from "types";
import { BoxStyled, ButtonStyled } from "./styled";

type FilterProps = {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
};

export const Filter = ({ filters, onFilterChange }: FilterProps) => {
  const { colors, loading: colorsLoading, error: colorsError } = useFetchColors();
  const { manufacturers, loading: manufacturersLoading, error: manufacturersError } = useFetchManufacturers();

  const manufacturerOptions = ["All manufacturers", ...manufacturers.map((m) => m.name)];
  const colorOptions = ["All car colors", ...colors];

  const [localFilters, setLocalFilters] = useState(filters);

  const handleManufacturerChange = (event: SelectChangeEvent<string>) => {
    setLocalFilters((prev) => ({
      ...prev,
      manufacturer: event.target.value === "All manufacturers" ? "" : event.target.value,
    }));
  };

  const handleColorChange = (event: SelectChangeEvent<string>) => {
    setLocalFilters((prev) => ({
      ...prev,
      color: event.target.value === "All car colors" ? "" : event.target.value,
    }));
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
  };

  if (colorsError || manufacturersError) return <div>Error loading data</div>;

  return (
    <BoxStyled>
      <FormControl variant="outlined">
        <Typography variant="subtitle1">Color</Typography>
        <Select value={localFilters.color || "All car colors"} onChange={handleColorChange}>
          {colorOptions.map((color, index) => (
            <MenuItem key={index} value={color}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined">
        <Typography variant="subtitle1">Manufacturer</Typography>
        <Select value={localFilters.manufacturer || "All manufacturers"} onChange={handleManufacturerChange}>
          {manufacturerOptions.map((manufacturer, index) => (
            <MenuItem key={index} value={manufacturer}>
              {manufacturer}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ButtonStyled variant="contained" onClick={applyFilters}>
        Filter
      </ButtonStyled>
    </BoxStyled>
  );
};
