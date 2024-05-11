import React from "react";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Categories from "../components/Categories";
import Listing from "../components/Listings";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <Categories />
      <Listing />
    </div>
  );
};

export default HomePage;
