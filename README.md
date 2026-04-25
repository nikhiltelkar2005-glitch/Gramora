# Gramora

Gramora is a modern, fully responsive, modular social media feed application built with React. Designed to emulate the core experience of popular photo-sharing platforms like Instagram, Gramora features a highly componentized architecture with dynamic interactions, sleek CSS styling, and seamless navigation.

## 🌟 Features

- **Modular Feed System:** 10 uniquely separated Post components (`Post1` through `Post10`), demonstrating a scalable, component-based architecture.
- **Dynamic Interactions:**
  - Double-tap or click to **Like** a post (updates like counts dynamically).
  - **Save** posts to your collection.
  - Interactive **Comments Section**: Click the comment icon to toggle a dropdown where you can add new comments and remove existing ones.
- **Responsive Layout:**
  - **Desktop:** Beautifully centered 630px feed with a fully expanded left sidebar navigation and a right sidebar for messaging and suggestions.
  - **Mobile:** The left sidebar seamlessly transforms into a fixed bottom navigation bar, ensuring a perfect mobile viewing experience.
- **Dynamic User Profiles:** Fully functioning profile routes (`/profile/:username`) populated by a centralized mock data source. Avatar images across stories, posts, and profiles are completely synchronized using the `pravatar.cc` generator.
- **Stories Bar:** Horizontal scrolling stories section mapped directly to the active users in the feed.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **Styling:** Vanilla CSS (Custom Design System, Flexbox layouts, modern gradients, and micro-animations)
- **Icons:** Custom SVG icons & Lucide React
- **Assets:** Unsplash API (for post photography) & Pravatar (for dynamic, unique user avatars)

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Comments/        # Localized comment state and UI
│   ├── Post1 - Post10/  # Modular, independent post components
│   ├── Sidebar/         # Left navigation sidebar (responsive)
│   ├── RightSidebar/    # Right messaging and suggestions sidebar
│   ├── Story/           # Horizontal stories bar
│   └── Profile/         # Profile page specific components (Grid, Header, etc.)
├── data/
│   └── mockUsers.js     # Centralized state/database for users and profiles
├── pages/
│   ├── Home.jsx         # Main feed assembly
│   └── ProfilePage.jsx  # Dynamic routing page for user profiles
├── App.jsx              # Application root and route definitions
├── App.css              # Global layout and structural styles
└── index.js             # Entry point
```

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd Gramora
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Design & UI Highlights
Gramora places a heavy emphasis on UI/UX, avoiding simple generic colors in favor of:
- Dark mode first design (`#000000` backgrounds with `#262626` borders).
- Smooth hover effects and interactive micro-animations (e.g., icons popping on hover, custom delete comment buttons).
- Dynamic offset margins to perfectly balance the feed between dual sidebars on widescreen displays.




