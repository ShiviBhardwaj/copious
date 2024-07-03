import * as React from "react";
import {
  styled,
  AppBar,
  Toolbar,
  Typography,
  Box,
<<<<<<< HEAD
  InputBase,
=======
>>>>>>> master
  Avatar,
} from "@mui/material";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationIcon from "@mui/icons-material/Notifications";
<<<<<<< HEAD
import BasicMenu from "./BasicMenu";
import CitySelect from "./CitySelect";
=======
import Switch from "@mui/material/Switch";
import BasicMenu from "./BasicMenu";
import CitySelect from "./CitySelect";
import { alpha } from "@mui/material/styles";
import { common } from "@mui/material/colors";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const label = { inputProps: { "aria-label": "Switch demo" } };
>>>>>>> master

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconsBar = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

<<<<<<< HEAD
export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
=======
const StyledSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: common.white,
    "&:hover": {
      backgroundColor: alpha(common.white, theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: common.white,
  },
}));

export default function NavBar({ mode, setMode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{ flexGrow: 1 }}
      bgcolor={"background.default"}
      color={"text.primary"}
    >
>>>>>>> master
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Home Space
          </Typography>
          <HolidayVillageIcon sx={{ display: { xs: "block", sm: "none" } }} />
<<<<<<< HEAD
          {/* <SearchBar>
            {
              //<InputBase placeholder="Search..." />
            }
          </SearchBar> */}
          <CitySelect />
          <IconsBar>
=======
          <CitySelect />

          <IconsBar>
            <DarkModeIcon />
            <Switch
              defaultChecked
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
>>>>>>> master
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="primary">
              <NotificationIcon />
            </Badge>
            <Avatar
              sx={{
                width: 30,
                height: 30,
              }}
              src="https://images.pexels.com/photos/4339929/pexels-photo-4339929.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              onClick={() => setOpen(!open)}
            />
          </IconsBar>
          <UserBox>
            <Avatar
              sx={{
                width: 30,
                height: 30,
              }}
              src="https://images.pexels.com/photos/4339929/pexels-photo-4339929.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              onClick={() => setOpen(!open)}
            />
            <Typography variant="span">Rebecca</Typography>
          </UserBox>
        </StyledToolbar>
        <BasicMenu openMenu={open} setOpenMenu={setOpen} />
      </AppBar>
    </Box>
  );
}
