
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { Activity } from "lucide-react";

import Home from "./pages/Home";
import SnakeDetails from "./pages/SnakeDetails";

import "./index.css";

// NAVBAR
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Activity size={22} />

        SNAKE<span>INDEX</span>
      </Link>

      <Link to="/#collection">
        EXPLORE
      </Link>
    </nav>
  );
}

// MAIN APP
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOMEPAGE */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* SNAKE DETAILS */}
        <Route
          path="/snake/:id"
          element={<SnakeDetails />}
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}
