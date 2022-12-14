import React from "react";

import "./App.css";
import ChangeTheme from "./react-301/components/ChangeTheme";
import Footer from "./react-301/components/Footer";

import { ThemeContextProvider } from "./react-301/contexts/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <ChangeTheme />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
