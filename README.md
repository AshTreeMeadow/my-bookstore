📚 DevBooks Store | React Learning Project
A responsive, dark-themed online bookstore built with React and Vite. This project focuses on mastering React fundamentals like State, Props, and dynamic filtering.

🚀 Getting Started
Prerequisites
Node.js (LTS version)

npm (Package Manager)

Installation
Clone the repository or open the folder in VS Code.

Initialize and install dependencies:

Bash

npm install
Launch the development server:

Bash

npm run dev
🛠️ Tech Stack
Frontend: React.js

Build Tool: Vite (Stable)

Styling: CSS3 (Custom Dark Theme)

Logic: JavaScript (ES6+)

🌟 Key Features
Dynamic Book Catalog: Renders a collection of books using JavaScript .map().

Real-time Search: Filter books by title instantly using a search bar and .filter().

Live Shopping Cart: Tracks item count and calculates total price in real-time using React useState.

Hot Module Replacement (HMR): Updates the browser instantly when code changes are saved.

📂 Project Structure
Plaintext

my-bookstore/
├── src/
│   ├── App.jsx    # Main application logic and state management
│   ├── App.css    # Custom CSS for the bookstore UI
│   ├── main.jsx   # Entry point that connects React to the DOM
│   └── index.css  # Global styles and resets
├── index.html     # HTML Skeleton
└── package.json   # Project dependencies and scripts
📖 Lessons Learned
Component-Based Architecture: Breaking the UI into manageable pieces.

State Management: Using useState to handle user interactions like adding to a cart.

Immutability: Learning to update arrays and objects without mutating the original data.

👨‍💻 Author
Ashley Computer Science & Engineering Student

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
