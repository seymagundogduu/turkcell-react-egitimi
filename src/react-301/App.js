import React from "react";

import "./react-301/styles.css";

import { LangContextProvider } from "./react-301/contexts/LangContext";

import { ThemeContextProvider } from "./react-301/contexts/ThemeContext";
import Container from "./react-301/Container";

const App = () => (
    < >
      <LangContextProvider>
      <ThemeContextProvider>
      <Container/>
      </ThemeContextProvider>
      </LangContextProvider>
      
    </>
  );


export default App;
