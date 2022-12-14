import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LangContext from "../contexts/LangContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  return (
    <div>
      <hr />
      Footer
      <div>Aktif Tema: {theme}</div>
      <div>Aktif Dil: {lang}</div>
      <button onClick={toggleTheme}>Temayı Değiştir </button>
    </div>
  );
}

export default Footer;
