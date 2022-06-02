import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import breakpoints from "./breakpoints";

const options: ThemeOptions = {
    palette,
    breakpoints,
}

export const customTheme = createTheme(options);