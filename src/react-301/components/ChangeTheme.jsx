import React, {useContext} from 'react'
import ThemeContext from '../contexts/ThemeContext'

function ChangeTheme() {

    const {theme, toggleTheme} = useContext(ThemeContext);

   // console.log(data);
  return (
    <div>
       <div>Aktif Tema: {theme}</div>

        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ChangeTheme;