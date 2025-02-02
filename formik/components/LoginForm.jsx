import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});

const LoginForm = () => {
    return (
        <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("Form Submitted", values);
            setTimeout(() => {
            setSubmitting(false);
            resetForm();
            }, 2000);
        }}
        >
        {({ isSubmitting }) => (
            <Form>
            <CustomInput label="Email" name="email" type="email" />
            <CustomInput label="Password" name="password" type="password" />

            <label>
                <Field type="checkbox" name="rememberMe" /> Remember Me
            </label>

            <button type="submit" disabled={isSubmitting}>Login</button>
            </Form>
        )}
        </Formik>
    );
};

export default LoginForm;
