# Chapter 04 - Talk is Cheap, Show Me the Code!

## Assignment


### 1. Is JSX mandatory for React?
No, JSX is not mandatory for React. It is just a syntactic sugar for `React.createElement()` that makes the code easier to write and understand. You can write React applications using plain JavaScript without JSX, but JSX is widely used for its simplicity and better readability.

---

### 2. Is ES6 mandatory for React?
No, ES6 is not mandatory for React. React can work with ES5 or even older versions of JavaScript. However, ES6 features like `arrow functions`, `classes`, `template literals`, and `destructuring` make the code cleaner and easier to maintain, so they are commonly used in React applications.

---

### 3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX
- `{TitleComponent}`: Refers to the `TitleComponent` variable or function itself.  
- `{<TitleComponent/>}`: Creates an instance of the `TitleComponent` using the self-closing tag syntax.  
- `{<TitleComponent></TitleComponent>}`: Another way to create an instance of the `TitleComponent`. This is used when you need to include children elements inside the component.  

---

### 4. How can I write comments in JSX?
You can write comments in JSX by wrapping them inside curly braces and using `/* */` syntax:
```jsx
{/* This is a JSX comment */}
```
### 5. What is <></ React.Fragment > and <></> ?
<React.Fragment></React.Fragment>: A component used to group a list of children without adding extra nodes to the DOM.
<></>: A shorthand for <React.Fragment></React.Fragment>.

```jsx
<React.Fragment>
  <h1>Title</h1>
  <p>Paragraph</p>
</React.Fragment>

// Shorthand:
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>
```
### 6. What is Virtual DOM?
The Virtual DOM is a lightweight JavaScript representation of the real DOM. It allows React to efficiently update and render only the parts of the DOM that have changed, instead of re-rendering the entire UI.

### 7. What is Reconciliation in React?
Reconciliation is the process through which React updates the DOM. It compares the Virtual DOM with a previous snapshot, identifies the changes, and efficiently updates the actual DOM to reflect those changes.

### 8. What is React Fiber?
React Fiber is the new reconciliation engine introduced in React 16. It allows React to break rendering work into smaller chunks, making updates more efficient and enabling features like time-slicing and suspense.

### 9. Why do we need keys in React? When do we need keys in React?
Why? Keys help React identify which items have changed, are added, or are removed, optimizing rendering.
When? Keys are needed when rendering lists of elements to help React distinguish between different components.

```jsx
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```
### 10. Can we use index as keys in React?
Using the index as a key is not recommended because it can lead to unexpected UI behavior if the list is re-ordered or updated. Instead, use unique IDs whenever possible.

### 11. What is props in React?
Props (short for "properties") are a way to pass data from a parent component to a child component. Props are immutable, meaning they cannot be changed by the child component.
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Greeting name="Harshil" />
```
### 12. What is a Config Driven UI?
A Config Driven UI is a UI built dynamically based on a configuration object or JSON. Instead of hardcoding components and layouts, the configuration defines what elements to display, their properties, and their behavior.

```jsx
{
  "type": "button",
  "label": "Click Me",
  "onClick": "handleClick"
}
function renderUI(config) {
  if (config.type === "button") {
    return <button onClick={config.onClick}>{config.label}</button>;
  }
}
```