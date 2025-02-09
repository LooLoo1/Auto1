import { Box, styled, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const BoxStyled = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh"
});

export const TitleStyled = styled(Typography)({
  fontWeight: "bold"
})

export const ParagraphStyled = styled(Typography)({
  fontWeight: "medium"
})

export const LinkStyled = styled(Link)(({theme}) => ({
  color: theme.palette.primary.main,
  textDecoration: "none"
}))