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
<<<<<<< HEAD
    <Box
      bgcolor="lightblue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
=======
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
>>>>>>> master
      left
    </Box>
  );
}

function RightContent() {
  return (
<<<<<<< HEAD
    <Box
      bgcolor="lightBlue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
=======
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
>>>>>>> master
      right
    </Box>
  );
}

function MainContent() {
  return (
<<<<<<< HEAD
    <Box bgcolor="lightpink" flex={4} p={2}>
=======
    <Box flex={4} p={2}>
>>>>>>> master
      main
    </Box>
  );
}

export default Body;
