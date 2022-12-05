import axios from 'axios';
import React, {useEffect, useState} from 'react'

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .finally(() => setLoading(false))
    },[]) 

    // useEffect(() => {
    //     axios("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => setUsers(res.data))
    //         .finally(() => setLoading(false))
    // })
  return (
    <div> Users 

        {loading && <div>Yükleniyor....</div> } 
      <ul>   
           { users.map((user) => ( <li key={user.id}> {user.name} {user.username} {user.email}  </li>) )}
    
      </ul>
    </div>
  )
}

export default Users
