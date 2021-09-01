import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form', values);
      alert ('Login Successful');
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) errors.emailField = "Field Required";
      if(!values.pswField) errors.pswField = "Username should be an email";
      return errors;
    }
     
  });

  return (
    <div>
      <p>
        <form onSubmit={formik.handleSubmit}>
          <div>Email</div>
          <input name="emailField" type="text" placeholder="Email" onChange={formik.handleChange} value={formik.values.emailField}/>
          {formik.errors.emailField ? <div> {formik.errors.emailField} </div>: null}
          
          <div>Password</div>
          <input name="pswField" type="text" placeholder="Password" onChange={formik.handleChange} value={formik.values.pswField}/>
          {formik.errors.pswField ? <div>{formik.errors.pswField}</div>: null}
          <button id="submitBtn" type="submit"> Submit </button>

        </form>
      </p>
    </div>
  );
}

export default App;
