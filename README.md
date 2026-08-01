# 🌶️ Spices — Authentic Spice Experience

A modern, high-performance web application and online ordering platform for **Spices**, a luxury culinary establishment celebrating authentic heat, bold regional flavors, and chef-curated dining. Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Motion**.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Directory Structure](#-directory-structure)
- [🚀 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [🎨 Key Design Highlights](#-key-design-highlights)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌶️ Overview

**Spices** offers an immersive digital dining journey. From smoky Naga ghost pepper infusions to subtle Kashmiri chili warmth, the platform bridges fine-dining storytelling with functional e-commerce capabilities. 

Users can explore dish heat profiles, filter by dietary requirements, reserve tables, and place online orders through an interactive shopping cart.

---

## ✨ Key Features

### 🍽️ Digital Menu & Search Engine
* **Category Filtering**: Seamlessly toggle between Starters, Main Course, Desserts, and Drinks.
* **Instant Search**: Real-time search query matching across dish names and detailed descriptions.
* **Dietary Badges**: Clear visual tags for Vegetarian dishes (`Veg`) and Chef's Specials.

### 🔥 Custom Spice Meter
* **Interactive Heat Ratings**: Visual heat gauges rating dishes from Level 0 (Mild) to Level 4 (Inferno).
* **Spice Education**: Informative breakdowns showcasing regional spice sourcing and flavor profiles.

### 🛒 Real-time Cart & Online Ordering
* **Interactive Cart Drawer**: Full state persistence using React Context (`CartContext`), allowing users to adjust item quantities, view live subtotals, and remove items.
* **Toast Notifications**: Powered by `sonner` for crisp feedback when items are added to the cart or when checkout is initiated.
* **Dedicated Order Page**: Responsive e-commerce ordering page (`/order`) featuring sticky category sidebar and cart breakdown.

### 📅 Table Reservation System
* **Booking Form**: Dedicated reservation section with date picker, time slot selector, guest count, and special dining requests.

### 📍 Location & Interactive Mapping
* **Store Info & Hours**: Integrated Google Maps embed alongside operational schedules and contact details.

### 📱 Responsive & Accessible UI
* **Glassmorphism Aesthetic**: Warm spice-toned glassmorphism overlays, custom typography pairings, and micro-interactions powered by `motion/react`.
* **Mobile-First Experience**: Horizontally scrollable category pills, collapsible drawer menus, and touch-optimized action targets.

---

## 🛠️ Tech Stack

### Core Frontend
* **[React 19](https://react.dev/)** — UI Component Library
* **[TypeScript](https://www.typescriptlang.org/)** — Type-Safe Application Logic
* **[Vite 6](https://vitejs.dev/)** — Next-Generation Frontend Tooling & Dev Server
* **[React Router DOM v7](https://reactrouter.com/)** — Client-Side SPA Routing & Hash Navigation

### Styling & Animation
* **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-First Styling Engine with `@tailwindcss/vite`
* **[Motion (Framer Motion)](https://motion.dev/)** — Declarative Animations & Layout Transitions
* **[Lucide React](https://lucide.dev/)** — Clean Vector Icons

### State & Feedback
* **React Context API** — Global Shopping Cart State Management
* **[Sonner](https://sonner.emilkowal.ski/)** — Minimalist Toast Notifications

---

## 📁 Directory Structure

```text
├── public/
│   └── favicon.svg          # Custom fire logo favicon
├── src/
│   ├── assets/              # Static media assets & images
│   ├── components/          # Reusable UI Components
│   │   ├── BlogSection.tsx          # Culinary blog & story highlights
│   │   ├── CartDrawer.tsx           # Slide-out interactive cart drawer
│   │   ├── DishCard.tsx             # Interactive menu item card
│   │   ├── Footer.tsx               # Site footer with social links & hours
│   │   ├── Hero.tsx                 # High-impact hero header section
│   │   ├── MenuSection.tsx          # Interactive home menu grid with filters
│   │   ├── Navbar.tsx               # Header navbar with cart badge & route links
│   │   ├── ReservationSection.tsx   # Table booking form component
│   │   ├── ScrollToTop.tsx          # Route change scroll reset handler
│   │   ├── SpiceEducation.tsx       # Informational spice origin section
│   │   ├── SpiceMeter.tsx           # Heat level visualizer
│   │   └── Testimonials.tsx         # Customer reviews carousel/grid
│   ├── context/
│   │   └── CartContext.tsx          # Global cart state & actions provider
│   ├── lib/
│   │   └── utils.ts                 # Classname merge utility (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── HomePage.tsx             # Main landing page
│   │   └── OrderPage.tsx            # Standalone online ordering page
│   ├── data.ts                      # Menu dataset & dish definitions
│   ├── types.ts                     # TypeScript interfaces (Dish, CartItem, etc.)
│   ├── index.css                    # Tailwind CSS v4 directives
│   ├── main.tsx                     # Application entry point
│   └── App.tsx                      # Main app wrapper with router & providers
├── index.html                       # HTML shell with meta tags & favicon
├── metadata.json                    # Application metadata
├── package.json                     # Node dependencies & npm scripts
├── tsconfig.json                    # TypeScript compiler configuration
└── vite.config.ts                   # Vite build & plugin configuration
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher (or `pnpm` / `yarn` / `bun`)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/spices-restaurant.git
cd spices-restaurant
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The app will be available locally at `http://localhost:3000` (or `http://localhost:5173`).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches the Vite development server on port `3000` |
| `npm run build` | Compiles production assets into the `dist/` directory |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) |
| `npm run clean` | Removes the compiled `dist/` directory |

---

## 🎨 Key Design Highlights

* **Typography**: Elegant serif headings paired with clean sans-serif body copy for maximum readability and luxury dining feel.
* **Color Palette**: Deep warm spice hues (`#9a3412`, `#ea580c`, `#7c2d12`) contrasted against soft warm-cream backgrounds.
* **Micro-Interactions**: Hover scale triggers on dish images, animated cart item additions, and subtle floating decorative accents.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p center="text-center">
  Crafted with 🔥 for spice lovers & fine dining enthusiasts worldwide.
</p>
