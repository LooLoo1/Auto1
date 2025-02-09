import { AppBar, styled } from "@mui/material"
import { Link } from "react-router-dom"

export const AppBarStyled = styled(AppBar)({
  backgroundColor: "white",
  borderBottom: "2px solid #EDEDED",
  boxShadow: "none",
  padding: "20px 0",
});

export const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));