# Chapter 12 - Let's Build our Store

## useContext vs Redux

- **useContext** is a React hook used to pass data deeply through the component tree without manually passing props at every level. It's good for small to medium-sized applications with simple state management needs.
- **Redux** is a predictable state container for JavaScript apps, ideal for large-scale applications. It offers centralized state management, middleware for side effects, dev tools support, and more powerful debugging capabilities.

| Feature        | useContext             | Redux                          |
|----------------|-------------------------|----------------------------------|
| Scope          | Limited to React        | Can be used outside React       |
| Middleware     | Not supported           | Supported (redux-thunk, etc.)   |
| DevTools       | No                      | Yes                             |
| Async Logic    | Manual setup            | Better handled with middleware  |

---

## Advantage of using Redux Toolkit over Redux

- **Simplified setup** with built-in configuration
- **Less boilerplate** thanks to `createSlice` and `configureStore`
- Built-in support for **immer.js** for immutable updates
- **Good defaults** like dev tools and thunk middleware pre-configured
- Encourages **best practices** out of the box

---

## Explain Dispatcher

- In Redux, **dispatchers** are functions used to send actions to the Redux store.
- It is used to **notify the reducer** to update the state based on the action.

```js
store.dispatch({ type: "INCREMENT" });
```

---

## Explain Reducer

- A **reducer** is a pure function that takes the current state and an action as arguments and returns a new state.
- It determines how the state changes in response to an action.

```js
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
```

---

## Explain Slice

- A **slice** is a collection of reducer logic and actions for a single feature in your app.
- Created using `createSlice` from Redux Toolkit.
- Helps organize state logic better and reduce code repetition.

---

## Explain Selector

- A **selector** is a function used to extract specific pieces of state from the Redux store.
- Keeps component logic clean and reusable.

```js
const selectCartItems = (state) => state.cart.items;
```

---

## Explain createSlice and the configuration it takes

`createSlice` is a function from Redux Toolkit that helps:
- Automatically generate action creators and action types
- Organize reducers by feature

### Configuration Options:
- `name`: A string name for the slice
- `initialState`: The initial state of the slice
- `reducers`: An object of reducer functions

```js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
```
