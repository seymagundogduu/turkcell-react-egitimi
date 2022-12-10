import React , {useState} from "react"
import "./App.css"
import UserList from "./react-201/user-list-app/components/UserList";
import UserDetail from "./react-201/user-list-app/components/UserDetail";



function App() {
   const [activeUserId, setActiveUserId] = useState(null);
   
  return (
    <div className="App">
      Active User ID: {activeUserId}
  
   <div> <UserList setActiveUserId={setActiveUserId}/> </div>

   <div>
    {activeUserId && (  <UserDetail  activeUserId={activeUserId}/>)}
   </div>
    </div>
 
  );
}

export default App;