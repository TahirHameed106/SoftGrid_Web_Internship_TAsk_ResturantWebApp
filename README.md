# Restaurant Website (MERN) - Implementation Outline

This repository now contains a **MERN-based project outline** for the Restaurant Website task.
You can implement the actual code on top of this structure.

## 1) Suggested Folder Structure

```text
restaurant-webapp/
├─ client/                         # React frontend
│  ├─ public/
│  └─ src/
│     ├─ assets/
│     │  ├─ images/
│     │  └─ icons/
│     ├─ components/
│     │  ├─ layout/
│     │  │  ├─ Navbar.jsx
│     │  │  └─ Footer.jsx
│     │  ├─ home/
│     │  │  ├─ HeroSection.jsx
│     │  │  ├─ FeaturedDishes.jsx
│     │  │  ├─ WhyChooseUs.jsx
│     │  │  └─ Testimonials.jsx
│     │  ├─ menu/
│     │  │  ├─ MenuGrid.jsx
│     │  │  ├─ MenuCard.jsx
│     │  │  ├─ CategoryFilter.jsx
│     │  │  └─ SearchBar.jsx
│     │  ├─ about/
│     │  │  ├─ CompanyStory.jsx
│     │  │  ├─ MissionVision.jsx
│     │  │  ├─ TeamSection.jsx
│     │  │  └─ StatsSection.jsx
│     │  └─ contact/
│     │     ├─ ContactForm.jsx
│     │     ├─ ContactInfo.jsx
│     │     └─ MapEmbed.jsx
│     ├─ pages/
│     │  ├─ HomePage.jsx
│     │  ├─ MenuPage.jsx
│     │  ├─ AboutPage.jsx
│     │  └─ ContactPage.jsx
│     ├─ services/
│     │  ├─ api.js
│     │  ├─ menuService.js
│     │  └─ contactService.js
│     ├─ styles/
│     │  ├─ globals.css
│     │  ├─ variables.css
│     │  └─ responsive.css
│     ├─ App.jsx
│     └─ main.jsx
│
├─ server/                         # Node + Express backend
│  ├─ src/
│  │  ├─ config/
│  │  │  └─ db.js
│  │  ├─ controllers/
│  │  │  ├─ menuController.js
│  │  │  └─ contactController.js
│  │  ├─ models/
│  │  │  ├─ MenuItem.js
│  │  │  └─ ContactMessage.js
│  │  ├─ routes/
│  │  │  ├─ menuRoutes.js
│  │  │  └─ contactRoutes.js
│  │  ├─ middleware/
│  │  │  └─ errorHandler.js
│  │  ├─ validations/
│  │  │  └─ contactValidation.js
│  │  ├─ app.js
│  │  └─ server.js
│  └─ .env.example
│
└─ README.md
```

## 2) Page-Level Requirements Mapping

### Home Page
- Responsive navbar (logo + brand name + links)
- Hero section (headline + CTA)
- Featured dishes
- Why choose us
- Testimonials
- Footer (social links + contact info)

### Menu Page
- Menu cards/grid with image, item name, description, price
- Optional categories: Fast Food, BBQ, Pizza, Burgers, Drinks, Desserts
- Bonus: search + category filtering

### About Page
- Restaurant introduction
- Company story
- Mission & vision
- Team section
- Restaurant images
- Statistics (years of service, customers served, etc.)

### Contact Page
- Contact form (name, email, subject, message)
- Contact information (address, phone, email)
- Optional embedded map
- Client + server-side validation

## 3) Suggested MongoDB Models

### `MenuItem`
- `name` (string, required)
- `description` (string, required)
- `price` (number, required)
- `category` (string, enum: Fast Food/BBQ/Pizza/Burgers/Drinks/Desserts)
- `imageUrl` (string)
- `isFeatured` (boolean, default: false)

### `ContactMessage`
- `name` (string, required)
- `email` (string, required)
- `subject` (string, required)
- `message` (string, required)
- `createdAt` (date, default: now)

## 4) Suggested API Endpoints

### Menu
- `GET /api/menu` -> list all menu items
- `GET /api/menu?category=Pizza&search=pepperoni` -> filter/search
- `GET /api/menu/featured` -> featured dishes

### Contact
- `POST /api/contact` -> submit contact form with validation

## 5) Frontend Implementation Plan

1. Setup React app with React Router.
2. Create shared layout components: `Navbar`, `Footer`.
3. Build page components (Home, Menu, About, Contact).
4. Build reusable cards, filter and search components.
5. Connect frontend to backend APIs via service layer.
6. Add form validation and user feedback states.
7. Ensure responsiveness for mobile/tablet/desktop.
8. Add smooth scrolling, hover effects, and basic animations.

## 6) Bonus Features (Any Two)

- Dark mode
- Food search
- Menu filtering
- Scroll animations
- Back-to-top button
- Loading screen
- Image gallery
- Online reservation form

## 7) Quality Checklist

- Semantic HTML structure
- Clean reusable CSS
- Consistent naming conventions
- Optimized image assets
- Responsive navigation menu
- Mobile/tablet/desktop compatibility
- Professional and modern UI