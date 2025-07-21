# 🏋️‍♂️ Gym Project Guide

Welcome to the Gym Management Project! Follow this guide to install, run, format, test, and push your code.

---

## 📦 1. Project Setup

### ✅ Requirements
- [Node.js](https://nodejs.org/) (v20+ recommended)
- [Git](https://git-scm.com/)
- Code editor (e.g. [VS Code](https://code.visualstudio.com/))

### 📥 Install Dependencies

```bash
npm install
```

---

## 💻 2. Development Workflow

### ▶️ Start the App (after compiling)
```bash
npm run build      # Compile TypeScript to JavaScript
npm run dev        # Run the compiled JS in /dist
```

---

## 🧪 3. Run Tests

### ✅ Run all tests
```bash
npm run test
```

### 👤 Run tests assigned to you
Use your assigned name (e.g., `Bon`, `Dit`) in:

```bash
npm run test:student Bon
```

> The test runner will only run the files or test cases assigned to you in `test-assignments.json`.

---

## 🎨 4. Format Code

To keep the code clean and consistent, format before committing:

```bash
npm run formatter
```

---

## 🔁 5. Git & Version Control

### 🆕 Clone the repository
```bash
git clone <your-repo-url>
cd gym
```

### 🧪 Pull latest changes before coding
```bash
git checkout main
git pull origin main
```

### 🌿 Create a new branch for your task
```bash
git checkout -b bon/implement-user-model
```

### ✅ Add your work
```bash
git add .
git commit -m "Implement User model and tests"
```

### 📤 Push your branch
```bash
git push origin bon/implement-user-model
```

---

## 📦 6. Submitting Your Work

### 🧪 Make sure all tests pass
```bash
npm run test
```

### 🎨 Format your code
```bash
npm run formatter
```

### ✅ Push and open a Pull Request (PR)
- Go to GitHub
- Open a PR to `main`
- Assign your name and wait for review

> ✅ **You can’t merge unless all tests and format checks pass.**

---

## 🛠 Optional: VS Code Extensions
- Prettier - Code Formatter
- GitLens
- TypeScript Hero

---

## 🙋‍♂️ Need Help?

Reach out to the instructor or your team lead for:
- Git issues
- TypeScript/Vitest errors
- Test assignment updates

---

Happy coding! 💪🧠