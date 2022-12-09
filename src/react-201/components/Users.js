import axios from 'axios';
import React, {useEffect, useState} from 'react'

function Users() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    //     .finally(() => setLoading(false))
    // },[]) 

    useEffect(() => {
        // axios("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => {
        //       setUsers(res.data);

        //       axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)  //idsi verilen veriye ulaşabiliyor
        //         .then((res) => setPosts(res.data));
        //     })
        //     .finally(() => setLoading(false));

        getData();
          }, []);
         

      const getData = async () => {
          const {data: users} = await  axios("https://jsonplaceholder.typicode.com/users")
       

          const {data: posts} = await  axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
          
          setLoading(false)
          setUsers(users);
          setPosts(posts);

          console.log("users" , users);
          console.log("posts", posts);
      
        }

  return (
    <div> Users 

        {loading && <div>Yükleniyor....</div> } 
      <ul>   
           { users.map((user) => ( <li key={user.id}> {user.name}   </li>) )}
    
      </ul>
      <h2>Posts</h2>
      <ul>   
           { posts.map((posts) => ( <li key={posts.id}> {posts.title}   </li>) )}
    
      </ul>
    </div>
  )
}

export default Users
