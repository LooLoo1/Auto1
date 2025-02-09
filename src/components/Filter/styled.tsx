import { Box, Button, Select, styled } from "@mui/material"

export const BoxStyled = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "300px",
  height: "fit-content",
  border: "2px solid #EDEDED",
  backgroundColor: "white",
  gap: "15px",
  padding: "20px",
});

export const ButtonStyled = styled(Button)({
  width: "50%",
  color: "white",
  alignSelf: "flex-end",
  boxShadow: "none",
});

export const SelectStyled = styled(Select)({
  width: "100%",
  margin: "0",
  border: "1px solid #EDEDED",
  boxShadow: "none",
})
