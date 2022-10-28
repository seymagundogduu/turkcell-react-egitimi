import React from "react";
import PropTypes from "prop-types";

function User({title,name,age,city}) {
 


  return (
    
    <div>
    <strong>{title}</strong>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>City: {city}</div>

      <hr/>
      {/* <h3>Arkadaşlar</h3>
      {
        friends.map((friend,id)  => <div key={id} >{friend}</div>)
      }
      <hr/> */}
    </div>
  );
}

User.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
   age: PropTypes.number,
}
User.defaultProps = {
  
  title:"User"
}
export default User;
