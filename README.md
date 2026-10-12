# ✅ Task Manager — React Fundamentals Deep Dive

A modern, animated task management app built with **React (Vite)** and **Tailwind CSS**. Features include add, edit, delete, toggle complete, filter, and localStorage persistence — all with smooth CSS animations.

![Status](https://img.shields.io/badge/Status-Completed-success)
![Day](https://img.shields.io/badge/12--Week--Roadmap-Day%204-blue)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)

---

## 🌟 Features

- **Add Task** — Input field + button, Enter key support
- **Edit Task** — Double-click to edit, Enter to save, Escape to cancel
- **Toggle Complete** — Checkbox with smooth animation
- **Delete Task** — Trash icon with exit animation
- **Filter** — All / Active / Completed with active state highlight
- **Task Count** — "3 tasks left" dynamic count
- **Clear Completed** — One-click cleanup, disabled when none
- **Local Storage** — Tasks persist on page refresh
- **Empty State** — Smart messages based on filter
- **Animations** — Pop-in on add, fade-out on delete, check pop
- **Responsive** — Mobile-first, adapts to desktop
- **Keyboard Support** — Enter to add/save, Escape to cancel edit

---

## 🧠 React Concepts Practiced

| Concept | Where Used |
|---------|------------|
| **Components** | 5 separate components (Header, Input, TaskList, EmptyState, Footer) |
| **Props** | Data + functions passed from MainPage to children |
| **useState** | tasks, filter, inputValue, editingId, editText, removingId |
| **Lazy Initializer** | `useState(() => JSON.parse(localStorage...))` |
| **Functional Updates** | `setTasks(prev => ...)` everywhere |
| **useEffect** | Sync tasks to localStorage |
| **Event Handling** | onClick, onChange, onKeyDown, onDoubleClick |
| **Lists & Keys** | `tasks.map(t => <li key={t.id}>` |
| **Conditional Rendering** | EmptyState, editing mode, completed styling |
| **Controlled Inputs** | `value={inputValue}` + `onChange` |
| **Props Drilling** | setTasks passed down to children |

---

## 🛠️ Tech Stack

- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Fonts:** Libre Caslon Condensed + Quicksand (Google Fonts)
- **State:** React Hooks (useState, useEffect)
- **Persistence:** localStorage

---

## 📂 Project Structure
task-manager/
├── src/
│ ├── App.jsx
│ ├── App.css # Global styles + keyframe animations
│ ├── index.css # Tailwind imports
│ ├── main.jsx
│ ├── MainPage.jsx # Parent — state owner
│ ├── Header.jsx # Title + filter buttons
│ ├── Input.jsx # Add task form
│ ├── TaskList.jsx # Task list + edit/delete/toggle
│ ├── EmptyState.jsx # Smart empty messages
│ └── Footer.jsx # Count + clear completed
├── index.html
├── package.json
└── vite.config.js

---

## 🎨 Design Highlights

- **Color Palette:** Sage green (`#9DB89A`) + off-white (`#FEFDFB`) + soft gray (`#F1F1EF`)
- **Typography:** Libre Caslon Condensed (headings) + Quicksand (body)
- **Animations:**
  - `popIn` — task add hone par
  - `fadeOut` — task delete hone par
  - `check-enter` / `check-exit` — checkbox toggle
- **Layout:** Centered card with rounded corners, soft shadow
- **Responsive:** Filter pills wrap on mobile, "Add Task" text hides on small screens

---

## 🚀 How to Run

```bash
# Clone
git clone https://github.com/imthatrehan/task-manager.git
cd task-manager

# Install
npm install

# Dev server
npm run dev

# Build
npm run build
Open http://localhost:5173# task-manager
