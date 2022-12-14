import React from "react";

import "./App.css";
import ChangeLang from "./react-301/components/ChangeLang";
import ChangeTheme from "./react-301/components/ChangeTheme";
import Footer from "./react-301/components/Footer";
import { LangContextProvider } from "./react-301/contexts/LangContext";

import { ThemeContextProvider } from "./react-301/contexts/ThemeContext";

function App() {
  return (
    <div>
      <LangContextProvider>
      <ThemeContextProvider>
        <ChangeTheme />
        <hr/>
        <ChangeLang />
        <Footer />
      </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
