import React from "react";
import { ErrorMessage, useField } from "formik";
const TextField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field, meta);
  return (
    <div className='md-4'>
      <label htmlFor={field.name}> {label} </label>
      <input
        style={{
          width: "200px",
          padding: "10px",
          marginBottom: "15px",
          fontSize: "12px",
        }}
        placeholder={placeholder}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        } `}
        autoComplete='off'
        {...field}
        {...props}
      />
      <ErrorMessage className='mt-4' name={field.name} />
    </div>
  );
};

export default TextField;
