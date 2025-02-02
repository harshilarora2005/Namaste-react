import React from "react";
import { Field, ErrorMessage } from "formik";

const CustomInput = ({ label, name, type }) => {
    return (
        <div>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} type={type} />
        <ErrorMessage name={name} component="div" style={{ color: "red" }} />
        </div>
    );
};

export default CustomInput;