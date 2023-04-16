import React, { createContext, useState } from "react";

export const colorModeContext = createContext({
  mode: "",
  setMode: () => {
    alert("Me Configure Primeiro");
  },
  toggleMode: () => {
    alert("Me Configure Primeiro");
  },
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }

  return (
    <colorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
      {props.children}
    </colorModeContext.Provider>
  );
}
