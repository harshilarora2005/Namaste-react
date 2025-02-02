# **Yup Basics with Examples**

## **What is Yup?**
[Yup](https://github.com/jquense/yup) is a JavaScript schema validation library used to validate object structures. It works well with **Formik** to validate form fields.

## **Installing Yup**
```sh
npm install yup
```

## **Basic Usage**
```javascript
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});
```

## **Common Yup Methods**
### **1. String Validation**
```javascript
const schema = Yup.object({
  username: Yup.string()
    .min(3, "Too short!")
    .max(15, "Too long!")
    .required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().min(6).max(20).required("Required"),
});
```

### **2. Number Validation**
```javascript
const schema = Yup.object({
  age: Yup.number()
    .min(18, "Must be at least 18")
    .max(60, "Must be under 60")
    .required("Required"),
});
```

### **3. Boolean Validation**
```javascript
const schema = Yup.object({
  isAccepted: Yup.boolean().oneOf([true], "You must accept the terms"),
});
```

### **4. Array Validation**
```javascript
const schema = Yup.object({
  hobbies: Yup.array()
    .of(Yup.string())
    .min(1, "At least one hobby required")
    .required("Required"),
});
```

### **5. Object Validation**
```javascript
const schema = Yup.object({
  address: Yup.object({
    city: Yup.string().required("City is required"),
    zipCode: Yup.string().matches(/^[0-9]{5}$/, "Invalid ZIP Code"),
  }),
});
```

### **6. Conditional Validation**
```javascript
const schema = Yup.object({
  isStudent: Yup.boolean(),
  school: Yup.string().when("isStudent", {
    is: true,
    then: Yup.string().required("School is required"),
  }),
});
```

### **7. Custom Validation**
```javascript
const schema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .required("Required"),
});
```

## **Using Yup with Formik**
```javascript
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <div>
          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>
        
        <div>
          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
        </div>
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
```

## **Conclusion**
Yup provides a powerful and flexible way to validate form fields, ensuring data integrity and a better user experience. It integrates seamlessly with Formik, making form handling much easier.

Let me know if you need further explanations! 🚀

