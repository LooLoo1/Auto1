import { Container, styled, Typography } from "@mui/material";

const FooterStyled = styled("footer")({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  borderTop: "2px solid #EDEDED",
  padding: "20px 0"
});

const CopyrightStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: "center",
}))

export const Footer = () => (
  <FooterStyled>
    <Container maxWidth="lg">
      <CopyrightStyled>
        © AUTO1 Group 2025
      </CopyrightStyled> 
    </Container>
  </FooterStyled>
);