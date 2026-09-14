# 🧱 DevStack Builder

**DevStack Builder** is a React web app that lets you browse a curated list of modern development
technologies — frontend, backend, database, language, styling, DevOps, and tooling — and build your
own personal tech stack by adding the ones you like to a "Your Stack" panel.

## 🛠️ Tech Used

- **React 18** (Vite) — component-based UI
- **Tailwind CSS** — utility-first styling, with a single shared brand gradient (orange → pink → violet)
- **React-Toastify** — toast notifications for add / duplicate / remove / remove-all actions
- **JSON** — technology data loaded at runtime via `fetch`, not hardcoded in a component

## ✨ Features

1. **Build-your-own stack** — click "Add to Stack" on any of the 15 technology cards and it instantly
   appears in the sticky "Your Stack" sidebar, with the source card's button switching to a disabled
   "✓ Added to Stack" state.
2. **Guarded duplicates & one-click reset** — trying to add the same technology twice shows a toast
   warning instead of a duplicate entry; a single "Remove All" button clears the whole stack, and each
   stack item also has its own ✕ to remove just that one.
3. **Fully responsive, themeable UI** — a sticky navbar that collapses into a hamburger menu on mobile,
   a 3 → 2 → 1 column technology grid depending on screen size, and a whole-site gradient theme defined
   in exactly one place (`tailwind.config.js`) so re-theming the brand only ever means changing one value.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## 📁 Project Structure

```
src/
  assets/            hero illustration + logo mark
  components/        Navbar, Hero, Loader, TechnologyCard, TechnologyGrid, YourStack, Footer
  App.jsx            data fetching, loading state, stack state/logic
  main.jsx           app entry + ToastContainer
public/
  data/technologies.json   technology data, fetched at runtime
```

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly inside JavaScript. React uses
it because it's much easier to read and write UI structure this way than calling
`React.createElement(...)` by hand — JSX gets compiled down to those calls behind the scenes.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — the component receiving them can't change
them. State is data a component manages *itself* and can update over time (with `useState`), which
causes the component to re-render. In this project, `technologies` passed into `TechnologyCard` is a
prop, while `stack` inside `App` is state.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold a value that persists between renders and triggers a
re-render whenever it's updated. I used it for `technologies` (the fetched list), `loading` (whether
the data is still loading), and `stack` (the list of technologies the user has added).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs a side effect after a component renders — things like fetching data, subscriptions, or
timers, which shouldn't happen directly during render. I needed it in `App.jsx` to `fetch` the
`technologies.json` file once when the app first mounts, then store the result in state.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React tell items in a list apart between renders, so it can efficiently figure out
which items were added, removed, or reordered instead of re-rendering the whole list. Without a stable
unique key (I use each technology's `id`), React can mismatch items and cause subtle rendering bugs.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on some condition, using normal JavaScript
like `if` statements or the ternary/`&&` operators inside JSX. One example is in `YourStack.jsx`, where
an empty-state message is shown when `stack.length === 0`, and the actual list of added items is shown
otherwise.

**7. How do you pass data from a parent component to a child component, and how does a child send
something back to the parent?**
A parent passes data down to a child as props (e.g. `App` passes `technologies` and `stackIds` down to
`TechnologyGrid`, and `stackIds` down to each `TechnologyCard`). For a child to send information back
up, the parent passes down a *function* as a prop (e.g. `onAdd`), and the child calls that function
with whatever data it needs to send — this is how clicking "Add to Stack" inside `TechnologyCard`
ultimately updates the `stack` state that lives in `App`.
