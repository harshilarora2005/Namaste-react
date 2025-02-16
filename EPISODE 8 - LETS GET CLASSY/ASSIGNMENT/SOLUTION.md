# Chapter 08 - Let's get Classy

## Theory Assignment

### How do you create Nested Routes in react-router-dom configuration?

Nested routes in `react-router-dom` allow you to define child routes within a parent route. This is useful for layouts and sub-components that depend on a higher-level route.

#### Example using `createBrowserRouter`:
```javascript
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
```
In this example, `Profile` and `Settings` are nested routes inside `Dashboard`. Inside `Dashboard.js`, we must include `<Outlet />` to render these nested routes.

### Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

- **`createHashRouter`**: Uses the hash portion of the URL (`#`) to manage navigation. It's useful when you don't have server-side control over routes.
- **`createMemoryRouter`**: Maintains navigation state in memory, without modifying the URL. Ideal for mobile apps, testing environments, or scenarios where URL persistence is unnecessary.

### What is the order of lifecycle method calls in Class-Based Components?

1. **Mounting Phase**
   - `constructor()`
   - `static getDerivedStateFromProps()`
   - `render()`
   - `componentDidMount()`

2. **Updating Phase (when props/state change)**
   - `static getDerivedStateFromProps()`
   - `shouldComponentUpdate()`
   - `render()`
   - `getSnapshotBeforeUpdate()`
   - `componentDidUpdate()`

3. **Unmounting Phase**
   - `componentWillUnmount()`

### Why do we use `componentDidMount()`?

`componentDidMount()` is used to perform side effects after the component is inserted into the DOM. Common use cases include:
- Fetching data from an API
- Setting up event listeners
- Interacting with third-party libraries

Example:
```javascript
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component mounted!");
  }
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

### Why do we use `componentWillUnmount()`? Show with example.

`componentWillUnmount()` is used to clean up resources before a component is removed from the DOM. Common use cases include:
- Removing event listeners
- Clearing timers or intervals
- Canceling API requests

Example:
```javascript
class TimerComponent extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => console.log("Running..."), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Timer cleared!");
  }
  render() {
    return <h1>Timer is running...</h1>;
  }
}
```

### (Research) Why do we use `super(props)` in constructor?

We use `super(props)` in a class constructor to:
1. Call the parent class (`React.Component`) constructor.
2. Gain access to `this.props` inside the constructor.

Without `super(props)`, `this.props` would be undefined within the constructor.

Example:
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props); // Now accessible
  }
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
```

### (Research) Why can't we have the callback function of `useEffect` async?

React does not allow `async` functions directly in `useEffect` because `useEffect` expects the callback to return a cleanup function, not a `Promise`.

If we make it `async`, it will return a `Promise` instead of a function, causing potential issues in cleanup behavior.

#### Correct approach:
```javascript
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  };
  fetchData();
}, []);
```

This way, `fetchData` is an async function inside `useEffect`, but `useEffect` itself remains synchronous.


