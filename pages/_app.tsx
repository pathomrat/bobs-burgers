import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";
import "../styles/main.scss";
import { customTheme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
