import { Formik } from "formik"; 
import * as Yup from "yup"; 
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const schema = Yup.object().shape({
    username: Yup.string()
        .required("Username is a required field"),
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
});
    
const Login = () => {
    const navigate = useNavigate();
    const {setUserName} = useContext(UserContext);
    const {setIsLoggedIn} = useContext(UserContext);
    function handleNavigate(values) {
        alert(`Username: ${values.username}\nEmail: ${values.email}`);
        setUserName(values.username);
        setIsLoggedIn(true);
        setTimeout(() => {
            navigate("/");
        }, 0);
    }

    return (
        <>
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6">
                    <h2 className="text-3xl font-bold text-center text-white">Welcome Back</h2>
                    <p className="text-blue-100 text-center mt-1">Enter your credentials to access your account</p>
                </div>
                
                {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
                <Formik
                    validationSchema={schema}
                    initialValues={{ username: "", email: "", password: "" }}
                    onSubmit={(values) => {
                        handleNavigate(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <div className="px-8 py-6">
                            {/* Passing handleSubmit parameter to html form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                        Username
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="username"
                                            type="text"
                                            name="username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                            placeholder="Username"
                                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                        />
                                    </div>
                                    {/* If validation is not passed show errors */}
                                    {errors.username && touched.username && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.username}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder="you@example.com"
                                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                        />
                                    </div>
                                    {/* If validation is not passed show errors */}
                                    {errors.email && touched.email && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder="••••••••"
                                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                        />
                                    </div>
                                    {/* If validation is not passed show errors */}
                                    {errors.password && touched.password && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>
                                
                                <div className="text-right">
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                        Forgot password?
                                    </a>
                                </div>
                                
                                {/* Click on submit button to submit the form */}
                                <button
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                    type="submit"
                                >
                                    Sign in
                                </button>
                            </form>
                            
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Sign up now
                                    </a>
                                </p>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
        </>
    );
};

export default Login;