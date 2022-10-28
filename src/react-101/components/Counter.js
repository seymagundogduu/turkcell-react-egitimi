import {useState} from 'react'

function Counter() {
    const [add, setAdd] = useState(0)
  return (
    <div>
      <h1>{add}</h1>
      <button onClick={() => setAdd((prev) => prev -1)}>Decrease</button>
      <button onClick={() => setAdd(add+1)}>Increase</button>
     
    </div>
  )
}

export default Counter
