import React from "react";
import validationSchema from "./validations"
import { Formik, Field, Form , useFormik} from "formik";
import './style.css'

function Contact() {

  const {handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched} = useFormik({
    initialValues:{
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, bag) => {
     await new Promise((r) => setTimeout(r, 1000))
    //  console.log(values);

    if(values.email === 'test@test.com'){
      return bag.setErrors({email: "Bu mail adresi zaten kullanılmaktadır."})
    }
     
      bag.resetForm();
    },
     validationSchema,

  })
 // console.log(touched);
  return (
    <div>
      <h2>Contact</h2>
    
        <form onSubmit={handleSubmit}>
          <div >
            <label style={{display:'block'}} htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" placeholder="Jane" onBlur={handleBlur('firstName')}  onChange={handleChange("message")}/>
            {errors.firstName && touched.firstName && <div className="errors">{errors.firstName}</div>}
          </div>
          <hr/>

          <div>
            <label style={{display:'block'}} htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" placeholder="Doe"  onChange={handleChange("message")}/>
            {errors.lastName && <div className="errors">{errors.lastName}</div>}
          </div>
          <hr/>

          <div>
            <label style={{display:'block'}} htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange("email")}
            />
             {errors.email && <div className="errors">{errors.email}</div>}
          </div>
          <hr/>
          <div>
            <label style={{display:'block'}} htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              type="text"
            
              onChange={handleChange("message")}
            />
             {errors.message && <div className="errors">{errors.message}</div>}
          </div>
          <hr/>

          <div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </div>
        </form>

    </div>
  );
}

export default Contact;
