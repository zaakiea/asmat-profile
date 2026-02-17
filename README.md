# ASMAT Profile Website

This is the official profile website for ASMAT, built with modern web technologies to showcase the organization's vision, structure, programs, and activities.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build)
- **UI Library:** [React](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Components:** [Radix UI](https://www.radix-ui.com/) / shadcn-like components
- **Icons:** [Lucide React](https://lucide.dev)
- **Animation:** Tailwind CSS Animate

## ✨ Key Features

- **Modern & Responsive Design:** Fully responsive layout that works seamlessly across all devices.
- **Theme Toggle:** Built-in Dark and Light mode support.
- **Interactive Components:**
  - **Structure Visualization:** detailed organizational chart.
  - **Gallery:** Image gallery with lightbox functionality.
  - **Programs & Divisions:** Dedicated sections for organizational activities.
- **Performance:** Optimized static build with Astro's island architecture.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd asmat-profile
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

Open your browser and navigate to `http://localhost:4321` to see the site running.

## 📂 Project Structure

```text
/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # React components (Top-level)
│   │   ├── ui/          # Reusable UI components (Buttons, Dialogs, etc.)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Vision.tsx
│   │   ├── Structure.tsx
│   │   ├── Divisions.tsx
│   │   ├── Programs.tsx
│   │   ├── Gallery.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── layouts/         # Astro layouts (Layout.astro)
│   └── pages/           # Application pages (index.astro, etc.)
├── package.json         # Project dependencies and scripts
├── tailwind.config.mjs  # Tailwind CSS configuration
└── astro.config.mjs     # Astro configuration
```

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Astro development server. |
| `npm run build` | Builds the production-ready site to `./dist`. |
| `npm run preview` | Previews the production build locally. |
| `npm run astro` | Runs the Astro CLI directly. |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT](LICENSE)
