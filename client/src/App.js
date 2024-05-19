import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetail from "./pages/ListingDetail";
import Triplist from "./pages/Triplist";
import WishList from "./pages/WishList";
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
//5:58:00
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create_listing" element={<CreateListing />} />
          <Route
            path="/properties/details/:listingId"
            element={<ListingDetail />}
          />
          <Route path="/:userId/trips" element={<Triplist />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/:userId/properties" element={<PropertyList />} />
          <Route path="/:userId/reservation" element={<ReservationList />} />
          <Route
            path="/category/:selectedCategory"
            element={<CategoryPage />}
          />
          <Route path="/search/:searchVal" element={<SearchPage />} />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
