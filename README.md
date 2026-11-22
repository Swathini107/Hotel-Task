#  Hotel Explorer & Management App

Welcome to **Hotel Explorer**! This is a modern, responsive web application built with **React 19**, **Vite**, and **Redux Toolkit** that lets users discover, search, filter, and manage hotel listings with real-time interactive mapping and distance calculation.

---

##  Features at a Glance

- **Browse & Paginate**: Explore hotel listings arranged in neat, balanced cards with clear pricing, descriptions, and quick actions.
- **Search & Filter**: Search hotels by name or set custom minimum and maximum price ranges in Indian Rupees (₹).
- **Quick Price Presets**: Filter effortlessly with one-click budget pills (*Under ₹3,000*, *₹3,000 – ₹6,000*, *₹6,000+ Luxury*).
- **Smart Sorting**: Instantly order hotels from lowest-to-highest or highest-to-lowest price.
- **Full CRUD Management**:
  - Add new hotels with custom images, coordinates, and pricing.
  - Edit existing hotel listings anytime.
  - Delete listings with safe confirmation prompts.
- **Interactive Leaflet Map & Geolocation**:
  - View each hotel's exact coordinates on an OpenStreetMap view.
  - Click **"Calculate Distance from My Location"** to fetch live GPS coordinates using the browser's Geolocation API.
  - Draws a live route polyline connecting your location to the hotel, calculates exact distance in kilometers, and automatically frames both points in view.
- **Cohesive Design System**:
  - Unified light theme styled in soothing Steel Slate Blue (`#345882`).
  - Soft crimson accents reserved exclusively for deletion actions.
  - Consistent typography using **Noto Sans** across every page.
  - 100% pure external CSS with clean, topic-based organization.

---

##  Built With

- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **State Management**: [@reduxjs/toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Maps**: [Leaflet](https://leafletjs.com/) & [React-Leaflet v5](https://react-leaflet.js.org/)
- **SEO & Head Management**: [react-helmet-async](https://github.com/staylor/react-helmet-async)
- **Styling**: Pure CSS (`App.css`) with Flexbox and CSS Grid

---

##  Getting Started

Getting the project up and running on your local machine is quick and straightforward.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### Installation

1. **Clone or open the project folder**:
   ```bash
   cd "Hotel Lists Task"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL displayed in your terminal (typically `http://localhost:5173`).

---

##  Available Scripts

In the project root, you can run:

- `npm run dev` — Starts the development server with Hot Module Replacement (HMR).
- `npm run build` — Compiles and bundles production-ready assets into the `dist/` directory.
- `npm run lint` — Runs ESLint to check for code quality and syntax issues.
- `npm run preview` — Previews the production build locally before deployment.

---

##  Project Structure

```text
├── public/               # Static public assets
├── src/
│   ├── assets/           # Images and visual branding
│   ├── components/
│   │   └── HotelForm.jsx # Reusable form for Adding & Editing hotels
│   ├── data/
│   │   └── hotels.js     # Default mock dataset with seed hotels & coordinates
│   ├── pages/
│   │   ├── HotelList.jsx    # Main catalog with search, filters, sorting & cards
│   │   ├── HotelDetails.jsx # 2x2 wireframe details view, map & route calculator
│   │   ├── AddHotel.jsx     # Add new hotel listing page
│   │   └── EditHotel.jsx    # Edit hotel details page
│   ├── redux/
│   │   ├── hotelSlice.js # Centralized hotel state, CRUD reducers & actions
│   │   └── store.js      # Redux store configuration
│   ├── App.css           # Topic-wise styling system (theme, components, responsive)
│   ├── App.jsx           # Application routing setup
│   └── main.jsx          # Root application entry point
├── package.json
└── README.md
```

---

##  Page Overview

- **Hotel Catalog (`/`)**: Displays all hotels with a vertical sidebar for keyword search, min/max price inputs, quick budget badges, and price sorting.
- **Hotel Details (`/hotel/:id`)**: Features a balanced 2x2 wireframe grid containing the hotel photo, information & price, GPS coordinates & distance calculator, and live interactive Leaflet map.
- **Add / Edit Hotel (`/add-hotel`, `/edit-hotel/:id`)**: Intuitive forms with validation for hotel title, description, price, image URL, latitude, and longitude, with a handy *Back to Home* navigation button.

---

## Notes on Maps & Geolocation

To calculate distance and view the route from your location:
1. When prompted by your browser on the Hotel Details page, click **Allow** for location access.
2. If location permissions are denied or unavailable on your device, the app displays a clear notification while keeping the hotel's marker interactive on the map.

---

Happy exploring! Feel free to customize, add new hotels, and adapt this project to your needs.
