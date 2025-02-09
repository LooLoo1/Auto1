import { Filter, CarList } from "components"
import { useFilters } from "hooks"
import { BoxStyled } from "./styled"

export const Home = () => {
  const { filters, handleFilterChange } = useFilters();
  return (
    <BoxStyled>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <CarList filters={filters}  />
    </BoxStyled>
  )
}
