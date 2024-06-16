import { Box, Container, Stack } from "@mui/material";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import NavBar from "./NavBar";

function App() {
  return (
    <Box>
      <NavBar />
      <Header />
      <Body />
      <Footer />
    </Box>
  );
}

export default App;
