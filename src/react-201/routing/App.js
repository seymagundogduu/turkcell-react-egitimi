import React , {useState} from "react"

import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./react-201/routing/pages/Dashboard/Home";
import Users from "./react-201/routing/pages/Dashboard/Users";
import Contact from "./react-201/routing/pages/Dashboard/Contact";
import Menu from "./react-201/routing/components/Menu";
import UserDetail from "./react-201/routing/pages/Dashboard/UserDetail";
import Login from "./react-201/routing/pages/Auth/Login";
import DashboardLayout from "./react-201/routing/layouts/Dashboard";
import AuthLayout from "./react-201/routing/layouts/Auth";
import Register from "./react-201/routing/pages/Auth/Register";
import Error404 from "./react-201/routing/pages/Error404";



function App() {

   
  return (
    <BrowserRouter>
   
    <Routes> 
      <Route path="/" element={<DashboardLayout/>}>
      <Route path="/" element={<Home/> } />
      <Route path="users" element={<Users/>}/>
      <Route path="users/:id" element={<UserDetail/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>

      <Route path="auth" element={<AuthLayout/>} >
      <Route index element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      </Route>

      <Route path="*" element={<Error404/>} />
      
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;