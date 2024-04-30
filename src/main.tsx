import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Event from "./Event";
import "./index.css";
import GuestPage from "./GuestPage";
import LoginPage from "./LoginPage";
import CheckoutPage from "./CheckoutPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/event" element={<Event />} />
      <Route path="/guest" element={<GuestPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  </Router>
);
