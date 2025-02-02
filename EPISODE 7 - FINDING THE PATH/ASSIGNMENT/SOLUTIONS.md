# Chapter 07 - Finding the Path

## Assignment

### 1. What are various ways to add images into our App? Explain with code examples

There are multiple ways to add images into a React app:

#### **A. Using `import` for local images**
```jsx
import React from "react";
import myImage from "./assets/image.jpg";

const ImageComponent = () => {
  return <img src={myImage} alt="Local Image" width={300} />;
};

export default ImageComponent;
```
- The image is bundled during the build process.
- Best for static images that don’t change dynamically.

#### **B. Using `require()` for local images**
```jsx
const ImageComponent = () => {
  return <img src={require("./assets/image.jpg")} alt="Local Image" width={300} />;
};
```
- Useful for dynamic imports.
- Not recommended in modern React projects.

#### **C. Using the `public` folder**
```jsx
const ImageComponent = () => {
  return <img src="/images/image.jpg" alt="Public Folder Image" width={300} />;
};
```
- Image is served as a static asset.
- Not bundled by Webpack, so it remains as-is.

#### **D. Using an external URL**
```jsx
const ImageComponent = () => {
  return <img src="https://example.com/image.jpg" alt="External Image" width={300} />;
};
```
- Loads an image from an external server.
- Can be slower depending on network conditions.

### 2. What would happen if we do `console.log(useState())`?

If we log `useState()` directly in a React component, it will throw an error:

```js
const MyComponent = () => {
  console.log(useState());
  return <div>Check the console</div>;
};
```

#### **Error:**
```
React Hook "useState" cannot be called at the top level.
React Hooks must be called inside a functional component or a custom Hook.
```

#### **Explanation:**
- `useState()` **must be called inside a functional component or a custom hook**.
- It returns an **array with two elements**: `[state, setState]`.
- Correct way to log:
```js
const [count, setCount] = useState(0);
console.log(count, setCount);
```

### 3. How will `useEffect` behave if we don't add a dependency array?

If we **do not** pass a dependency array, `useEffect` will run **after every render**.

```jsx
import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
  }); // No dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

#### **Behavior:**
- Runs **after every render** (initial + re-renders).
- Can cause performance issues if an expensive computation is inside `useEffect`.

#### **Correct Usage for Specific Cases:**
- **Run only once (on mount):** `useEffect(() => { ... }, [])`
- **Run only when `count` changes:** `useEffect(() => { ... }, [count])`

### 4. What is SPA?

**SPA (Single Page Application)** is a web application that **loads a single HTML page** and dynamically updates content without refreshing the page.

#### **Features of SPA:**
- Uses **JavaScript** (React, Angular, Vue) to update UI dynamically.
- **Faster performance** as only necessary data is fetched.
- Uses **Client-Side Routing** to update the URL without a full-page reload.

#### **Example:**
```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
```
- Clicking links updates the page **without full reload**.

### 5. What is the difference between Client-Side Routing and Server-Side Routing?

| Feature              | Client-Side Routing | Server-Side Routing |
|---------------------|--------------------|---------------------|
| **Navigation**      | Handled by JavaScript | Handled by the server |
| **Page Reloads**    | No full reload | Full page reloads occur |
| **Performance**     | Faster after initial load | Slower, depends on server response |
| **SEO**            | Requires pre-rendering for SEO | Better for SEO |
| **Example**        | React, Angular, Vue | Traditional websites (PHP, Django, Rails) |

#### **Client-Side Routing Example (React)**
```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/home" element={<h1>Home Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
    </Routes>
  </BrowserRouter>
);
```
- No full page reloads; React updates the UI dynamically.

#### **Server-Side Routing Example (Traditional Approach)**
```html
<a href="/about">About Us</a>
```
- Clicking reloads the entire page from the server.

### **Conclusion**
- **SPA with Client-Side Routing** is **faster** but needs **SEO optimization**.
- **Server-Side Routing** is better for **SEO** but can be slower due to page reloads.


