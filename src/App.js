import React , {useState} from "react"
import Counter from "./react-101/components/Counter";
import Users from "./react-201/components/Users";
import "./App.css"
import UserList from "./react-201/user-list-app/components/UserList";
import UserDetail from "./react-201/user-list-app/components/UserDetail";



function App() {
   const [activeUserId, setActiveUserId] = useState(null);
   
  return (
    <div className="App">
      Active User ID: {activeUserId}
   {/* <Users/> */}
   <div> <UserList setActiveUserId={setActiveUserId}/> </div>

   <div>
    {activeUserId && (  <UserDetail  activeUserId={activeUserId}/>)}
   </div>
    </div>
 
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