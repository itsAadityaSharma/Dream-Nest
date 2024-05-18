import React, { useEffect } from "react";
import "../styles/List.scss";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import { useParams } from "react-router-dom";
import { setListings } from "../redux/state";
import Footer from "../components/Footer";
const SearchPage = () => {
  const { searchVal } = useParams();
  const dispatch = useDispatch();

  const searchListing = useSelector((state) => state.listings);

  const getSearchListing = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties/search/${searchVal}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      dispatch(setListings({ listings: data }));
    } catch (err) {
      console.log("Can not find search data", err.message);
    }
  };

  useEffect(() => {
    getSearchListing();
  }, [searchVal]);
  return (
    <>
      <Navbar />
      <h1 className="title-list">Your Search List</h1>
      {searchListing?.length > 0 ? (
        <div className="list">
          {searchListing?.map((listing, index) => (
            <ListingCard listing={listing} key={index} />
          ))}
        </div>
      ) : (
        <h3 className="title-list"> Nothing found in the search List !</h3>
      )}
      <Footer />
    </>
  );
};

export default SearchPage;
