// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//     div with class “title”)
//     ○ Create the same element using JSX
//     ○ Create a functional component of the same with JSX
//     ○ Pass attributes into the tag in JSX
//     ○ Composition of Component(Add a component inside another)
//     ○ {TitleComponent} vs {<TitleComponent/>} vs
//     {<TitleComponent></TitleComponent>} in JSX

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",
    {className:"title"},
    [
        React.createElement("h1",{},"Heading 1"),
        React.createElement("h2",{},"Heading 2"),
        React.createElement("h3",{},"Heading 3"),
    
    ]
);
const jsxheading = (
    <div className="title">
        <h1>Heading 1 using JSX</h1>
        <h2>Heading 1 using JSX</h2>
        <h3>Heading 1 using JSX</h3>
    </div>
);

const TitleComponent = () =>(
    <div className="title">
        <h1>Heading 1 using JSX Component</h1>
        <h2>Heading 2 using JSX Component</h2>
        <h3>Heading 3 using JSX Component</h3>
    </div>
);

const Jsxcomponent1 = () => (
    <div className="title" id="main-title">
        <h1 style={{ color: "blue" }}>Heading 1</h1>
        <h2 style={{ color: "red" }}> Heading 2</h2>
        <h3 style={{ color: "green" }}>Heading 3</h3>
    </div>
);

const HeaderComponent = () => (
    <div>
        <TitleComponent />
        <p>This is a paragraph inside the HeaderComponent.</p>
    </div>
);


const App = () => {
    return (
        <div>
        {/* Reference only, will not render */}
        {TitleComponent}

        {/* Self-closing tag to render component */}
        {<TitleComponent />}

        {/* Open and close tag to render component */}
        {<TitleComponent></TitleComponent>}
        </div>
    );
};

