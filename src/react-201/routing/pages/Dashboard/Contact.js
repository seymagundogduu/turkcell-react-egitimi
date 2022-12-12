import React from "react";
import { Formik, Field, Form , useFormik} from "formik";

function Contact() {
  const formik = useFormik({
    initialValues:{
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit:(values) => {
      console.log(JSON.stringify(values));
    }

  })
  return (
    <div>
      <h2>Contact</h2>
    
        <form onSubmit={formik.handleSubmit}>
          <div >
            <label style={{display:'block'}} htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" placeholder="Jane"  onChange={formik.handleChange("message")}/>
          </div>
          <hr/>

          <div>
            <label style={{display:'block'}} htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" placeholder="Doe"  onChange={formik.handleChange("message")}/>
          </div>
          <hr/>

          <div>
            <label style={{display:'block'}} htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={formik.handleChange("email")}
            />
          </div>
          <hr/>
          <div>
            <label style={{display:'block'}} htmlFor="email">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              type="text"
              onChange={formik.handleChange("message")}
            />
          </div>
          <hr/>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

    </div>
  );
}

export default Contact;
