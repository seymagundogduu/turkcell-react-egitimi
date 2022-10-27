import React from "react";

function User(  ifade) {
 
  return (
    
    <div>
      User
      <div>İsim: {ifade.name}</div>
      <div>Yaş: {ifade.surname}</div>
      <div>Yaş: {ifade.age}</div>
      <hr/>
    </div>
  );
}

export default User;
