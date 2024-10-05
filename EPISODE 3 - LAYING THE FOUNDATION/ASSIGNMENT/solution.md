# _Episode 03 - LAYING THE FOUNDATION_

## 1. What is JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript commonly used with React. It allows developers to write HTML-like syntax directly inside JavaScript, making the code more readable and expressive. Although it resembles HTML, JSX gets transformed into `React.createElement()` calls before rendering to the DOM. This makes it easier to build and manage UI components in React applications.

```js
const element = React.createElement('h1', null, 'Hello, world!');
```

## 2. Superpowers of JSX

- **Declarative Syntax**: JSX allows you to write UI components in a more readable, declarative way. Instead of manipulating the DOM imperatively, you describe what the UI should look like.

- **JavaScript Expressions Inside JSX**: JSX allows embedding JavaScript expressions by wrapping them in curly braces `{}`. This provides a dynamic way to render data or call functions directly inside UI templates.

- **Prevents Injection Attacks**: React automatically escapes any values embedded in JSX before rendering them, ensuring that any injected content cannot harm the application (like preventing cross-site scripting attacks).

- **Concise**: JSX reduces verbosity by allowing developers to write HTML-like syntax inside JavaScript, simplifying the way components are constructed.

- **Supports Component Composition**: With JSX, components can be composed together easily, allowing developers to reuse smaller UI elements inside larger components.

---

## 3. Role of `type` Attribute in the `<script>` Tag
The `type` attribute specifies the type of script or resource being used within a `<script>` tag. The default type is JavaScript, but you can specify other types depending on the context.

### Common `type` Options:
- **`text/javascript`**: This is the default value and indicates the script is written in JavaScript.
  
- **`module`**: Indicates that the script is an ES module, enabling the use of `import` and `export` statements. This is useful for organizing code into reusable modules.

- **`text/babel`**: Used when working with JSX or ES6+ syntax. Babel transpiles this code into JavaScript that can be run in browsers.

- **`application/json`**: Specifies that the script contains JSON data, not executable code.

### Example:
A `<script>` tag with `type="module"` allows you to use modern JavaScript modules.

```html
<script type="module" src="main.js"></script>
```

## 4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

### `{TitleComponent}`:
- This is a reference to the component function or class itself, not a rendering of the component. You would use this when you want to refer to the component without rendering it, like passing it as a prop.

### `{<TitleComponent/>}`:
- This is the proper way to render a functional or class component in JSX. The self-closing tag is used when the component does not need any child elements. This renders the component to the UI.

### `{<TitleComponent></TitleComponent>}`:
- This is similar to the self-closing tag but used when you might want to add child elements inside the component. If no children are passed, it behaves the same as the self-closing version.

### Example Comparison:
- `{TitleComponent}`: Just referencing the component function.
- `{<TitleComponent/>}`: Renders the component without children.
- `{<TitleComponent></TitleComponent>}`: Renders the component with or without children.

```js
const Example = () => (
  <div>
    {/* Just referencing the function */}
    {TitleComponent}

    {/* Rendering the component */}
    {<TitleComponent />}

    {/* Rendering the component with the possibility of children */}
    {<TitleComponent></TitleComponent>}
  </div>
);

```
