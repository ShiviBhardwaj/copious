import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { ThemeProvider, styled } from "@mui/material/styles";
import { theme } from "./theme";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));

export default function CustomStyles() {
  return <CustomCheckbox defaultChecked />;
}
