import { Box } from "@mui/material";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar setMode={setMode} mode={mode} />
        <Header />
        <Body />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
