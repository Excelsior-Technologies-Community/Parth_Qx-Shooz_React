# Qx-Shooz

Qx-Shooz is a modern, fully responsive e-commerce web application built to deliver a premium shopping experience. This project meticulously replicates and enhances the design and functionality of a high-end Shopify footwear store.

## 🚀 Technologies Used

- **React.js**: Front-end library used for building modular, reusable UI components.
- **Vite**: Next-generation frontend tooling used for fast compilation and hot module replacement.
- **React Router DOM**: Used for seamless client-side routing across multiple pages (Home, Shop, Contact, FAQs, Blog).
- **Lucide React**: Providing clean, scalable SVG icons throughout the application.
- **Vanilla CSS**: Custom styling architecture centered around `index.css`, employing advanced CSS Grid and Flexbox for pixel-perfect, responsive layouts without relying on heavy CSS frameworks.

## 🛠️ Project Structure & Features

- **Component-Based Architecture**: Core components like `Header`, `Footer`, `TopBar`, and `AnnouncementBar` are abstracted for global reuse.
- **Dynamic Routing**: Includes multiple uniquely designed pages:
  - **Home**: Features promotional banners, product showcases, and interactive elements.
  - **Shop**: Implements a robust product grid alongside a comprehensive filter sidebar (Brand, Price, Size, Color).
  - **Contact**: Includes customized contact forms, a Google Maps embed, and business information grids.
  - **FAQs**: Features interactive, state-driven accordion menus for order and shipping questions.
  - **Blog**: Showcases article grids and featured blog post sliders.
- **Responsive Design**: Carefully crafted media queries ensure the application looks perfect on desktops, tablets, and mobile devices.
- **State Management**: Utilizes React Hooks (`useState`, `useEffect`) for managing interactive UI elements like dropdowns, accordions, and mobile navigation.

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/parth-trivedi-12/Qx-Shooz.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd Qx-Shooz
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
   
## 🎨 Design Philosophy

The focus of this build was achieving a **pixel-perfect replication** of a premium e-commerce design. Special attention was paid to typography, harmonious color palettes, subtle hover micro-animations, and ensuring the footer and navigation layouts were precisely aligned. We explicitly avoided generic Bootstrap/Tailwind templates to ensure absolute control over the custom CSS architecture.
