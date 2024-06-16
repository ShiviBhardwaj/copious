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
    <Box
      bgcolor="lightblue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      left
    </Box>
  );
}

function RightContent() {
  return (
    <Box
      bgcolor="lightBlue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      right
    </Box>
  );
}

function MainContent() {
  return (
    <Box bgcolor="lightpink" flex={4} p={2}>
      main
    </Box>
  );
}

export default Body;
