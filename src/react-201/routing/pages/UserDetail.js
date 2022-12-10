import React , {useState, useEffect} from 'react'
import { json, Link, useParams, useLocation } from 'react-router-dom'

function UserDetail() {
    const {id} = useParams();
    const location =useLocation();
    const [user,setUser] = useState(null);

    console.log(location);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) =>setUser(data))
    }, [id])
    
  return (
    <div>
        <h2>Users Detail</h2>
        <pre> {
         user && JSON.stringify(user, null, 2)
        }</pre>

        <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
       
    </div>
  )
}

export default UserDetail