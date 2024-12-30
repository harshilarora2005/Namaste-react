# Chapter 05 - Let's Get Hooked!

## What is the difference between Named Export, Default Export, and `* as` Export?

### 1. Named Export
- Allows exporting multiple variables, functions, or classes by name.
- Requires curly braces `{}` during import.
- Example:
  ```javascript
  // Named Export
  export const greeting = "Hello!";
  export const sayHello = () => console.log("Hello, World!");

  // Import
  import { greeting, sayHello } from './module.js';
  ```
### 2. Default Export
- Allows exporting a single value, function, or class from a file.
- Does not require curly braces during import.
- You can rename the default export during import.
Example:
```javascript
// Default Export
const welcomeMessage = "Welcome to React!";
export default welcomeMessage;

// Import
import message from './module.js'; // 'message' can be any name
```
### 3. * as Export
- Allows importing all named exports from a module as a single object.
- Useful for bundling all exports together under a namespace.
Example:
```javascript
// Module File
export const greeting = "Hello!";
export const sayHello = () => console.log("Hello, World!");

// Import
import * as Utils from './module.js';
console.log(Utils.greeting); // Access named exports via 'Utils'
Utils.sayHello();
```
## What is the importance of the config.js file?
- Centralized Configuration: Holds environment-specific settings like API URLs, keys, or constants.

- Easier Maintenance: Updates are simpler as configurations are managed in a single file.

- Environment Switching: Enables dynamic switching between development, testing, and production environments.

```js
// config.js
const config = {
  apiBaseUrl: "https://api.example.com",
  apiKey: "12345-ABCDE",
};

export default config;
```
## What are React Hooks?
React Hooks are functions that let you use state and lifecycle features in functional components.
Introduced in React 16.8 to simplify component logic and avoid class components.
Common hooks:
useState: Manage state in functional components.
useEffect: Handle side effects like data fetching or subscriptions.
useContext: Access global state or context.
Example:
```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
};
```
### Why do we need the useState Hook?
- Manage State in Functional Components:
useState allows functional components to have and manage state.
- Simplified State Management:
Avoids the complexity of managing state through class components.
- State Preservation:
Preserves state between renders of a functional component.
Example:
```javascript
import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState("React");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName("World")}>Change Name</button>
    </div>
  );
};
```





