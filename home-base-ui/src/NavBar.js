import * as React from "react";
import {
  styled,
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Avatar,
} from "@mui/material";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationIcon from "@mui/icons-material/Notifications";
import BasicMenu from "./BasicMenu";
import CitySelect from "./CitySelect";

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

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Home Space
          </Typography>
          <HolidayVillageIcon sx={{ display: { xs: "block", sm: "none" } }} />
          {/* <SearchBar>
            {
              //<InputBase placeholder="Search..." />
            }
          </SearchBar> */}
          <CitySelect />
          <IconsBar>
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
