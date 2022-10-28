import React, { useState } from "react";

function Form() {

    const [form, setForm] = useState({name: " " , surname: " " , gender: " 0"});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    }
//   const [name, setName] = useState("Şeyma");
//   const [surname, setSurname] = useState("Gündoğdu");
//   const [gender,setGender] = useState("0");
  return (
    <div>
      <div>
        <div> İsim </div>
        <input
          placeholder="isim"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          placeholder="soyisim"
          name="surname"
          value={form.surname}
          onChange={handleChange}
        />
       
       <div>  
          <div>Cinsiyet</div>
        <select value={form.gender} onChange={handleChange} name="gender">
          <option value="0">Erkek</option>
          <option value="1">Kadın</option>
        </select>  
         </div>
        

        <div>  
            İsim:
        <hr />
        <strong>
          {form.name} {form.surname}
        </strong>
      </div>
      Cinsiyet:
      <strong>{form.gender === "0" ? "Erkek" : "Kadın"}</strong>
    </div>
        </div>

      
  );
}

export default Form;
