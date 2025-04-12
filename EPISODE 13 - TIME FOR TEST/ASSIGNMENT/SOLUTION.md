# Chapter 13 - Time for the Test

## Theory

### ● What are different types of testing?
1. **Unit Testing**
   - Tests individual components or functions in isolation.
   - Example: Testing a single React component's rendering.

2. **Integration Testing**
   - Tests the interaction between multiple components or modules.
   - Example: Testing a form component along with its child inputs and validation logic.

3. **End-to-End (E2E) Testing**
   - Tests the entire application flow from the user's perspective.
   - Example: Using tools like Cypress or Selenium to simulate a user logging in.

4. **Snapshot Testing**
   - Captures a snapshot of a component's output and compares it with a saved version to detect unintended changes.
   - Example: Ensuring the UI hasn't changed unexpectedly after updates.

5. **Manual Testing**
   - Involves manually going through the application to find issues.
   - Not automated, time-consuming, and prone to human error.

---

### ● What is Enzyme?
- **Enzyme** is a JavaScript testing utility developed by Airbnb.
- It is used specifically for testing React components.
- Provides utilities for:
  - Rendering components (shallow, mount, render)
  - Traversing and manipulating component output
  - Simulating events

---

### ● Enzyme vs React Testing Library
| Feature                   | Enzyme                          | React Testing Library              |
|--------------------------|----------------------------------|------------------------------------|
| Developer                | Airbnb                          | Kent C. Dodds                      |
| Testing Style            | Implementation details focused  | User behavior focused              |
| Rendering Methods        | Shallow, Mount, Static Render   | Only full render                   |
| API Complexity           | Larger API surface              | Minimal, simple API                |
| Recommendation           | Legacy projects                 | Preferred for new React apps       |

---

### ● What is Jest and why do we use it?
- **Jest** is a testing framework developed by Facebook.
- It is used to write and run JavaScript tests.
- Commonly used with React projects.

**Key Features:**
- Zero config setup
- Built-in test runner
- Snapshot testing support
- Mocking functions and modules
- Code coverage reports

**Why use Jest?**
- Seamless integration with React
- Fast performance with intelligent test runs
- Large community and strong documentation

