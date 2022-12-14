import { createContext , useState} from "react";
import ChangeTheme from "../components/ChangeTheme";


const ThemeContext = createContext();


export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme =  () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light") );
    }

    const values = {
        theme,
        toggleTheme,
    }


    return <ThemeContext.Provider value={values} >
        {children}
       {/* <ChangeTheme /> */}
   
    </ThemeContext.Provider>
}

export default ThemeContext;