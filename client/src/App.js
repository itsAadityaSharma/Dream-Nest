import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetail from "./pages/ListingDetail";
//5:03:00
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create_listing" element={<CreateListing />} />
          <Route path="/properties/:listingId" element={<ListingDetail />} />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
