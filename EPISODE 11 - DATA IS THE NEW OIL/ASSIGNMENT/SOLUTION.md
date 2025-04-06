
# Chapter 11 - Data is the new Oil

## 📌 Theory

### ✅ What is prop drilling?

**Prop Drilling** refers to the process of passing data from a parent component to a deeply nested child component **through multiple layers** of intermediate components. Even if those intermediate components don't need the data themselves, they still have to receive and forward it.

#### 🔽 Example:
```jsx
<Parent>
  <Child>
    <GrandChild someData={data} />
  </Child>
</Parent>
```
This can lead to:
- Hard-to-read code
- Unnecessary re-renders
- Difficult maintenance

---

### ✅ What is lifting the state up?

**Lifting the state up** is a technique used in React when two or more components need to **share data** or **stay in sync**. Instead of maintaining local state in each component, the common state is moved to their **closest common ancestor**, and then **passed down** via props.

#### 🔽 Example:
If `ChildA` and `ChildB` need to share the same data:
- Move the state to `Parent`
- Pass the state and update function to both `ChildA` and `ChildB`

```jsx
function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <ChildA value={value} setValue={setValue} />
      <ChildB value={value} />
    </>
  );
}
```

---

### ✅ What is Context Provider and Context Consumer?

#### 🧠 Context API:
The Context API in React provides a way to **pass data deeply through the component tree** without prop drilling.

#### 👉 Context Provider:
The **Provider** is used to wrap a part of the component tree and **provide a value** that can be accessed by any child component.

```jsx
<UserContext.Provider value={{ username: "Haru" }}>
  <App />
</UserContext.Provider>
```

#### 👀 Context Consumer:
The **Consumer** is used to **access the value provided** by the nearest Provider above in the component tree.

```jsx
<UserContext.Consumer>
  {(value) => <h1>Hello {value.username}</h1>}
</UserContext.Consumer>
```

In modern React, `useContext()` hook is commonly used instead of Consumer:

```jsx
const { username } = useContext(UserContext);
```

---

### ✅ If you don’t pass a value to the provider, does it take the default value?

**Yes.**

If you create a context like this:

```js
const UserContext = createContext({ username: "Guest" });
```

And use it **without** a provider:

```js
const { username } = useContext(UserContext); // username === "Guest"
```

Then React will use the **default value** defined inside `createContext()`.

However, if a `Provider` is used without a `value`, the context will be `undefined`, which can lead to bugs or errors.

---

### ✅ Summary

| Concept | Description |
|--------|-------------|
| **Prop Drilling** | Passing data through multiple layers unnecessarily |
| **Lifting State Up** | Moving shared state to a common parent component |
| **Context Provider** | Provides data to all child components |
| **Context Consumer / useContext** | Accesses the context data |
| **Default Value** | Used if no Provider is present in the tree |

---
