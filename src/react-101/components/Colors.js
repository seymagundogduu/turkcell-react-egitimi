import React, {useState} from 'react'

function Colors() {
    const [colors, setColors] = useState(["red" , "green", "blue"]);


    const handleClick = () => {
      setColors([...colors,"grey" , "purple" , "pink", Math.random()])
    } 
  return (
    <div>
      <h2>Colors</h2>
      {
        colors.map((color, i) => <ul key={i}><li>{color}</li></ul>)
      }

      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Colors
