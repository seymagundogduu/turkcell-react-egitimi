import {useState, useEffect} from 'react'

function Counter() {
    const [add, setAdd] = useState(0);

    // useEffect(()=> {
    //   console.log("bir state değişti");
    // })
    // useEffect(() => {
    //   console.log("component mount edildi");
    // } , []);
  //   useEffect(()=> {
  // console.log("add sürekli değişti")
  //   }, [add])

useEffect(() => {
  setInterval(() => {
setAdd((prev) => prev+1)
  },1000)
},[])

  return (
    <div>
      <h1>{add}</h1>
      <button onClick={() => setAdd((prev) => prev -1)}>Decrease</button>
      <button onClick={() => setAdd(add+1)}>Increase</button>
     
    </div>
  )
}

export default Counter
