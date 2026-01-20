# Getting Started

To run this project on your computer, you'll need a few things set up first.

### 1. Prerequisites
You need **Node.js** installed. It includes `npm` (Node Package Manager), which we use to download the tools for this project.
- **Download Node.js**: [https://nodejs.org/](https://nodejs.org/) (Choose the "LTS" version).

### 2. Setup Commands
Open your terminal (PowerShell, CMD, or the terminal inside VS Code) and run these commands in the project folder:

```powershell
# 1. Install all the "building blocks" (dependencies) listed in package.json
npm install

# 2. Start the development server
npm run dev
```

### 3. Viewing the Site
Once the server starts, you'll see a link like `http://localhost:5173`. Hold `Ctrl` and click that link to open the website in your browser. Any changes you make to the code will show up instantly!

---

## The Tech Stack

- **React**: The library we use to build the user interface using "Components" (reusable blocks of code).
- **Vite**: The "engine" that powers our development server and builds the site.
- **TypeScript**: A superset of JavaScript that adds types. Helps catch errors when are typing code rather than when the app is running.
- **Tailwind CSS**: A styling tool where you write CSS shorthand directly inline with the HTML (e.g., `flex`, `text-center`, `bg-blue-500`).
- **React Router**: The tool that handles switching between pages (Home and About) without the browser needing to reload.

---

## 📂 File Structure

- **`src/`**: This is where all the actual code lives.
  - **`components/`**: Small, reusable parts of the UI (like the `Header`, `Footer`, or a `Button`).
  - **`pages/`**: The main views of the site (`Home.tsx` and `About.tsx`).
  - **`App.tsx`**: The "Traffic Controller" that decides which page to show.
  - **`main.tsx`**: The entry point that "starts" the React engine.
  - **`index.css`**: The main stylesheet where Tailwind and custom fonts are configured.
- **`index.html`**: The single HTML file that holds everything.
- **`package.json`**: The list of all tools, packages and dependencies the project needs.

---

## Understanding the Syntax

### What is `.tsx`?
Think of `.tsx` as a file that allows you to write **HTML directly inside JavaScript**. 
- In plain JS, you'd use `document.createElement()`.
- In `.tsx`, you just write `<div>Hello</div>`.

### Interfaces (Props)
In TypeScript, an `interface` is used to specify the expected structure and type requirements for an object. In React, interfaces are commonly leveraged to strictly type **Props**—the data passed into components at the type level.
```tsx

interface HeaderProps {
  title: string;   // The header text to be displayed
  isOpen: boolean; // Controls whether the header is expanded or collapsed
}

```

### Reactive Variables (`useState`)
In normal JS, if you change a variable, the HTML doesn't update automatically. In React, we use `useState` to create variables that **automatically update the UI** when they change.

```tsx
const [count, setCount] = useState(0);

// When you call setCount(1), React "re-draws" the parts of the page that use 'count'
```

### Tailwind CSS
Instead of writing separate `.css` files, we use utility classes. 
- **Traditional CSS**: `.my-button { background: blue; padding: 10px; }`
- **Tailwind**: `<button className="bg-blue-500 p-4">Click Me</button>`

---

## ➕ How to Add New Content

### To add a new Component:
1. Create a new file in `src/components/`, e.g., `MyComponent.tsx`.
2. Write your React function:
   ```tsx
   export default function MyComponent() {
     return <div className="p-4 bg-gray-100">I am a new component!</div>;
   }
   ```
3. Import and use it in any page: `import MyComponent from '../components/MyComponent';`

### To add a new Page:
1. Create a new file in `src/pages/`, e.g., `Contact.tsx`.
2. Add a new route in `src/App.tsx`:
   ```tsx
   <Route path="contact" element={<Contact />} />
   ```

