import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import { useContext } from "react";
import ColorModeProvider, {
  colorModeContext,
} from "../src/components/Menu/components/ColorMode";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#f0f0f0",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
    textColorP: "#000000",
    scrollBar: "rgb(0, 0, 0, 0)",
    scrollBarThumb: "#000",
    backgroundP: "#FFF",
    svgT: "#000",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
    textColorP: "#000000",
    scrollBar: "rgb(225, 225, 225, 0)",
    scrollBarThumb: "#FFF",
    backgroundP: "#FFF",
    svgT: "#FFF",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"light"}>{props.children}</ColorModeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  const contexto = useContext(colorModeContext);

  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}