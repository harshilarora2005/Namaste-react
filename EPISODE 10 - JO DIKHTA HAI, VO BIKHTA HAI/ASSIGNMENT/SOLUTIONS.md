# Chapter 10 - Jo Dikhta Hai Vo Bikta Hai

## Theory

### ● Explore all the ways of writing CSS:
1. **External CSS**:
   - Write CSS in a separate `.css` file and link it in HTML or import in JS.
   - Ex: `styles.css`

2. **Inline CSS**:
   - Add CSS directly on an element via the `style` attribute.
   - Ex: `<div style={{ color: 'red' }}>Hello</div>`

3. **Internal CSS**:
   - CSS written within a `<style>` tag in HTML file.
   - Not used in component-based React apps.

4. **CSS-in-JS**:
   - Libraries like `styled-components`, `emotion`.
   - Styles are written using JavaScript.

5. **Preprocessors (SCSS/SASS/LESS)**:
   - Superset of CSS with variables, nesting, mixins etc.

6. **Utility-first CSS frameworks**:
   - Tailwind CSS: Apply prebuilt utility classes in HTML/JSX.

7. **CSS Modules**:
   - Scoped CSS files imported per component (e.g., `Component.module.css`).

---

### ● How do we configure Tailwind?

1. Install Tailwind:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure `tailwind.config.js`:
```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Add Tailwind directives to your CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Import that CSS file in your React `index.js` or `App.js`:
```js
import './index.css';
```

---

### ● In tailwind.config.js, what do the keys mean?

- **`content`**:
  - Tells Tailwind where to look for class names (purge unused CSS).
  - Example: `['./src/**/*.{js,jsx,ts,tsx}']`

- **`theme`**:
  - Default design tokens like colors, spacing, fontSizes, breakpoints.

- **`extend`**:
  - Extend or override default Tailwind theme without full replacement.

- **`plugins`**:
  - Add Tailwind plugins (forms, typography, etc).

---

### ● Why do we have `.postcssrc` file?

- PostCSS is a tool to transform CSS with JavaScript.
- Tailwind uses it internally.
- `.postcssrc` or `postcss.config.js` tells PostCSS which plugins to use (like Tailwind and Autoprefixer).

Example:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Without it, Tailwind’s processing won’t work properly.

---

