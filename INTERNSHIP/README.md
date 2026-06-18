# SoftGrid_Web_Internship_TAsk_ResturantWebApp

A modern, responsive Restaurant Website built using React, HTML, CSS, and JavaScript as part of the SoftGrid Web Internship Task.


🔥 Ember & Oak — Restaurant Website
A fully responsive, modern restaurant website built with React + Vite.

⚡ Quick Start

bash# 1. Create Vite project
npm create vite@latest restaurant-website -- --template react
cd restaurant-website

# 2. Install dependencies
npm install react-router-dom

# 3. Replace src/ with the provided files
# Replace index.css, App.jsx, main.jsx
# Add all folders: pages/, components/, context/, data/, hooks/

# 4. Run
npm run dev


## 📌 Project Overview

This project is a frontend-only restaurant website designed to showcase modern UI/UX principles, responsive layouts, reusable React components, and clean code architecture.

The website consists of four main pages:

* Home
* Menu
* About
* Contact

The primary focus is on the Home Page, which includes an engaging Hero Section, Featured Dishes, Why Choose Us section, Testimonials, and a responsive Footer.
 ---> OtherFeatures :
✅ Dark Mode
✅ Food Search
✅ Menu Filtering
✅ Scroll Animations
✅ Back to Top Button
✅ Image Gallery (Lightbox)

---

## 🚀 ✅ Features Implemented


4 Pages: Home, Menu, About, Contact
--Dark / Light Mode with localStorage persistence

--Menu Search — live filter by name/description
--Menu Category Filtering — pill buttons per category

--Scroll Animations — every section fades in on scroll
--Animated Stats Counter — numbers count up when visible
--Image Gallery + Lightbox — click to enlarge on About page
--Contact Form Validation — live errors on blur, full check on submit

--Back to Top Button — appears after 400px scroll
--Fully Responsive — 375px → 1440px+

---
 ---
🎨 Design Tokens (in index.css)

  Token                      Light           Dark           --color-bg                 #faf8f4         #18140f
  --color-gold               #c9952a         #d4a24e
  --color-ember              #a6402f         #c05540
  --color-sage               #6b8f5a         #8fa677
 ---

## 🛠️ Tech Stack

* React
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite

---

## 📁 Project Structure

```text
INTERNSHIP/
├── public/
│   └── images/
src/
├── context/
│   └── ThemeContext.jsx        ← Dark/Light mode
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx        ← Responsive navigation bar
│   │   └── Navbar.css
│   ├── Footer/
│   │   ├── Footer.jsx        ← Responsive footer
│   │   └── Footer.css
│   └── BackToTop/
│       ├── BackToTop.jsx   ← Back to top button (icon click 
|                                                       scrolls to top)
│       └── BackToTop.css
├── pages/
│   ├── Home.jsx                ← (from Day 1)
│   ├── Menu.jsx  + Menu.css      ← (from Day 2)
│   ├── About.jsx + About.css    ← (from Day 3)
│   └── Contact.jsx + Contact.css  ← (from Day 4)
├── data/
│   ├── dishes.js               ← Featured dishes (Home)
│   ├── menuItems.js            ← Full menu data
│   ├── testimonials.js         ← Customer reviews
│   └── aboutData.js            ← Team, stats, gallery
├── hooks/
│   ├── useScrollReveal.js      ← Scroll-triggered animations
│   └── useCounter.js           ← Animated number counter
├── App.jsx
├── main.jsx
└── index.css                   ← All design tokens + global styles
```

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

| Device  | Width           |
| ------- | --------------- |
| Mobile  | 375px - 480px   |
| Tablet  | 768px           |
| Laptop  | 1024px - 1366px |
| Desktop | 1440px+         |

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/TahirHameed106/SoftGrid_Web_Internship_TAsk_ResturantWebApp.git
```

Navigate to the project folder:

```bash
cd SoftGrid_Web_Internship_TAsk_ResturantWebApp
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 🎯 Project Objectives

* Build reusable React components
* Implement responsive layouts
* Follow modern frontend development practices
* Create an attractive restaurant landing page
* Demonstrate clean project organization

---

## 📧 Author

**Tahir Hameed**

SoftGrid Web Internship Task

---

## 📄 License

This project is created for internship evaluation purposes.If you wish to use or modify this code, please contact me on the   ( *tahirdev47@gmail.com* ) email address for permission.
