import { Box, Container } from "@mui/material"
import { Footer, Header } from "components"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
      <Header/>
      <Container maxWidth="lg" component={"main"} sx={{ flex: 1 }}>
        <Outlet/>
      </Container>
      <Footer/>
    </Box>
  )
}