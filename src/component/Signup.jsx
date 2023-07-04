import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

const Signup = () => {

    // const [name, setname] = useState("")
    const [ale, setNale] = useState("")
    const [message, setmessage]=useState(null)
    const formik = useFormik({
      initialValues: {
        name: "",
        sex: "",
        age: "",
      },
      validationSchema: yup.object({
        name: yup
          .string()
          .required("name is required")
          .matches(/[A-Z]+[a-z]{5,}/, "Name must start with capital letter"),
        sex: yup.string().required(),
        age: yup
          .number("Must be A number").required()
          .min(17, "Number must be greater than 17")
          .max(65, " Age must be less than 65"),
      }),
      onSubmit: (values) => {
        console.log(values, "values");
      },
    });
    // const handleName =(e)=>{
    //    let inputName = e.target.value   
    //    let regex = /[A-Z]+[a-z]{5,}/;
    //     if (regex.test(inputName)){
    //         setmessage("Input Correct")
    //         setNale("success")
    //     }else{
            
    //         setmessage("Try again at some point when you're sober")
    //         setNale("danger")
    //     }
        
    // }

    // const handleSubmit =()=>{
    //     console.log("submitted")
    // }
    // console.log(formik.errors)
  return (
    <div className="p-3">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="name"
            name="name"
            required
            onChange={formik.handleChange}
            id=""
          />
          {formik.errors.name ? (
            <small className={`text-${ale}`}> {formik.errors.name}</small>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="sex"
            name="sex"
            required
            onChange={formik.handleChange}
            id=""
          />
          {formik.errors.sex ? (
            <small className={`text-${ale}`}> {formik.errors.sex}</small>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="age"
            required
            onChange={formik.handleChange}
            name="age"
            id=""
          />
          {formik.errors.age ? (
            <small className={`text-${ale}`}> {formik.errors.age}</small>
          ) : null}
        </div>
        <button className="btn btn-danger">Submit</button>
      </form>
    </div>
  );
}

export default Signup