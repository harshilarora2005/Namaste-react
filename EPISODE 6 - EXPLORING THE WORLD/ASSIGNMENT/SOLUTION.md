# Chapter 06 - Exploring the World

### What is a Microservice?
A microservice is an architectural style that structures an application as a collection of small, independently deployable services. Each service performs a single business function and communicates with others through lightweight mechanisms, often using HTTP/REST.

---

### What is Monolith Architecture?
Monolith architecture is a traditional approach where an application is developed as a single, unified unit. All components, such as UI, business logic, and database management, are tightly integrated and deployed together.

---

### What is the difference between Monolith and Microservice?

| **Aspect**           | **Monolith Architecture**                 | **Microservice Architecture**          |
|-----------------------|-------------------------------------------|-----------------------------------------|
| Deployment            | Single deployable unit                   | Multiple independently deployable units |
| Scalability           | Scales as a whole                        | Scales independently                    |
| Development Speed     | Slower due to interdependencies           | Faster with smaller teams               |
| Maintenance           | Difficult due to tightly coupled components | Easier with modularity                 |
| Technology Stack      | Single stack across the application       | Different stacks for different services |

---

### Why do we need a `useEffect` Hook?
The `useEffect` Hook in React lets you perform side effects such as fetching data, subscribing to events, or manually changing the DOM. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

Example:
```jsx
import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count is: ${count}`);
    }, [count]);

    return <button onClick={() => setCount(count + 1)}>Increase Count</button>;
}
```
### What is Optional Chaining?
Optional Chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties of an object without explicitly checking if intermediate properties exist.

Example:

```javascript
const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // Alice
console.log(user?.address?.city); // undefined
```
### What is Shimmer UI?
Shimmer UI is a skeleton screen or placeholder that displays a loading animation, simulating the structure of the content while the actual data is being loaded. It improves the user experience by giving visual feedback.

### What is the difference between JS Expression and JS Statement?

| **Aspect**    | **JS Expression**             | **JS Statement**                  |
|---------------|-------------------------------|------------------------------------|
| **Definition**| Produces a value              | Performs an action                |
| **Example**   | `5 + 3`, `x * y`              | `if (x > y) { ... }`, `return x;` |
| **Usability** | Can be used where values are expected | Used for control flow or logic    |

### What is Conditional Rendering? Explain with a code example.
Conditional rendering in React allows rendering different elements or components based on a condition.

Example:

```jsx
function Greeting({ isLoggedIn }) {
    return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Sign In</h1>;
}
```
### What is CORS?
CORS (Cross-Origin Resource Sharing) is a mechanism that allows resources on a server to be accessed by web pages from a different origin. It uses additional HTTP headers to specify allowed domains, methods, and headers.

### What is async and await?
async and await are keywords in JavaScript that simplify writing asynchronous code. async marks a function as asynchronous, and await pauses execution until a promise resolves.

Example:

```javascript

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
```
### What is the use of const json = await data.json(); in getRestaurants?
const json = await data.json(); is used to parse the response body of a fetch request into a JavaScript object. data.json() returns a promise, and the await keyword waits for the promise to resolve.

Example:

```javascript
async function getRestaurants() {
    const data = await fetch('https://api.example.com/restaurants');
    const json = await data.json();
    console.log(json);
}
```