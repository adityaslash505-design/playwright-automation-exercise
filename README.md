# 🧪 Playwright Automation – Automation Exercise Website

## 📌 Project Overview

This project is an **end-to-end UI automation framework** built using **Playwright** to automate and validate key functionalities of the **Automation Exercise** demo website.

The goal of this project is to demonstrate **real-world QA Automation skills**, including:

* Writing reliable UI tests
* Using Playwright test runner
* Following clean project structure
* Preparing a GitHub-ready automation framework suitable for interviews and freelance work

---

## 🌐 Application Under Test (AUT)

**Website:** Automation Exercise
**URL:** [https://automationexercise.com](https://automationexercise.com)

This site is commonly used for practicing automation testing and contains features like:

* User authentication
* Navigation menus
* Product listings
* Forms and UI interactions

---

## 🛠 Tech Stack

* **Language:** TypeScript
* **Automation Tool:** Playwright
* **Test Runner:** Playwright Test
* **Package Manager:** npm
* **Version Control:** Git & GitHub

---

## 📁 Project Structure

```
├── tests/                # All test specifications
│   ├── home.spec.ts      # Home page related tests
│   ├── login.spec.ts     # Login functionality tests
│   └── ...
│
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project dependencies & scripts
├── .gitignore            # Ignored files/folders
└── README.md             # Project documentation
```

---

## ✅ What Has Been Implemented So Far

* ✔ Playwright project setup using TypeScript
* ✔ Proper test folder structure
* ✔ Removal of default Playwright example tests
* ✔ Clean `.gitignore` configuration
* ✔ GitHub repository setup and version control
* ✔ Tests written using Playwright best practices

---

## 🧹 Git & Repository Hygiene

The following unnecessary or auto-generated files are excluded from version control:

* `node_modules/`
* Playwright reports (`playwright-report/`, `test-results/`)
* Playwright cache and auth data
* Default example test files (`example.spec.ts`, `example.test.ts`)

This keeps the repository **clean and professional**.

---

## ▶ How to Run the Tests

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run all tests

```bash
npx playwright test
```

### 3️⃣ Run tests in headed mode

```bash
npx playwright test --headed
```

### 4️⃣ View test report

```bash
npx playwright show-report
```

---

## 🎯 Purpose of This Project

This project is created to:

* Practice **Playwright automation** on a real demo website
* Build a **job-ready QA automation portfolio**
* Demonstrate understanding of test structure, Git usage, and automation best practices

---

## 🚀 Future Enhancements

* Page Object Model (POM) implementation
* Data-driven testing
* API testing integration
* CI/CD integration (GitHub Actions)
* Cross-browser execution enhancements

---

## 👤 Author

**Aditya Rathoure**
Aspiring QA Automation Engineer

---

⭐ If you find this project useful, feel free to star the repository!
