import React from "react";
import "../styles/List.scss";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
const WishList = () => {
  const wishList = useSelector((state) => state.user.wishList);
  return (
    <>
      <Navbar />
      <h1 className="title-list">Your Wish List</h1>
      {wishList ? (
        <div className="list">
          {wishList?.map((listing, index) => (
            <ListingCard listing={listing} key={index} />
          ))}
        </div>
      ) : (
        <h3 className="title-list">Nothing added to wishlist !</h3>
      )}
    </>
  );
};

export default WishList;
