import React from "react";
import ReactDOM from "react-dom/client";

const elem=<span>I am a span</span>
const Title =()=> (
    <div>
        <h1 tabIndex="5" className="head">NAMASTE REACT USING JSX</h1>
        {elem}
    </div>
);

const string1="I am a string";
const Heading=()=>(
    <div className="heading">
        <Title/>
        <h1>Using Functional Component</h1>
        <h2>WE CAN ALSO DO NORMAL JS HERE</h2>
        <ol>
            <li>{100+200}</li>
            <li>{string1}</li>
        </ol>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);