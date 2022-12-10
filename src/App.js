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
import Home from "./react-201/routing/pages/Home";
import Users from "./react-201/routing/pages/Users";
import Contact from "./react-201/routing/pages/Contact";
import Menu from "./react-201/routing/components/Menu";
import UserDetail from "./react-201/routing/pages/UserDetail";



function App() {

   
  return (
    <BrowserRouter>
    <Menu/>
    <Routes> 
      <Route path="/" element={<Home/> } />
      <Route path="users" element={<Users/>}/>
      <Route path="users/:id" element={<UserDetail/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
 

//react 101de kullanılan yapılar
// const user = {
//   name:"Şeyma",
//    surname:"Gündoğdu",
//     age:"23"
// }

// function App() {
//   return (
//     <>
//     {/* <User title="User"
//     name="Şeyma"
//     city="Zonguldak"
//     age={29}
//     />
//      friends={["Ahmet" , "Murat" , "Ayşe" , "Fatma"]}  */}

//      <Counter/>
//       <Form/>

//      {/* <User_2/> */}
//      {/* <Colors/> */}
//     </>
 
//   );
// }