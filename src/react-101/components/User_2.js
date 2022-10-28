import React, {useState} from 'react'

function User_2() {
    const [user, setUser] = useState({name: "Osman" , surname: "Sırakaya"});
  return (
    <div>
      <h1>User</h1>
      {user.name} {user.surname}
 <br/>
    <div>
    <button onClick={() => setUser({...user, name: "Şeyma", })}>Name Change</button>
  
      <button onClick={() => setUser({...user, surname:"Gündoğdu"})}>Surname Change</button>
    </div>
    
    </div>
  )
}

export default User_2
