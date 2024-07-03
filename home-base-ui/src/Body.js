import { Box, Stack } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

function Body() {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <LeftContent />
      <MainContent />
      <RightContent />
    </Stack>
  );
}

function LeftContent() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      left
    </Box>
  );
}

function RightContent() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      right
    </Box>
  );
}

function MainContent() {
  return (
    <Box flex={4} p={2}>
      main
    </Box>
  );
}

export default Body;
