import React from "react";
import LoginForm from "./components/LoginForm";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div className="app-container">
        <h1>Login Page</h1>
        <LoginForm />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
