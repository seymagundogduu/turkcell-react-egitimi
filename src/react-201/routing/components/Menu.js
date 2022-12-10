import React from 'react'
import "./menu.css"
import {Link, useNavigate} from "react-router-dom"

function Menu() {

    const navigate = useNavigate();

  return (
    <div>
        <ul className='menu'>
        <li onClick={() => navigate(-1)}>
                Geri
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="users">Users</Link>
            </li>
            <li>
                <Link to="contact">Contact</Link>
            </li>
            <li onClick={() => navigate(+1)}>
                İleri
            </li>
        </ul>
    </div>
  )
}

export default Menu