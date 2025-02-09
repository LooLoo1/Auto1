import { AppBar, Box, Container, styled, Toolbar, Typography } from "@mui/material";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { AppBarStyled, LinkStyled } from "./styled"

export const Header = () => (
  <AppBarStyled position="static">
    <Container maxWidth="lg"> 
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link to="/">
          <Logo />
        </Link>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography variant="h6"><LinkStyled to="/Purchase">Purchase</LinkStyled></Typography>
          <Typography variant="h6"><LinkStyled to="/Orders">My Orders</LinkStyled></Typography>
          <Typography variant="h6"><LinkStyled to="/Sell">Sell</LinkStyled></Typography>
        </Box>
      </Toolbar>
    </Container>
  </AppBarStyled>
);