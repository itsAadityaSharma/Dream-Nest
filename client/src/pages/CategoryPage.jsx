import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setListings } from "../redux/state";
import ListingCard from "../components/ListingCard";

const CategoryPage = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { selectedCategory } = useParams();

  const categoryList = useSelector((state) => state.listings);

  const getCategoryList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties/?category=${selectedCategory}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return loading ? (
    <Loader></Loader>
  ) : (
    <>
      <Navbar></Navbar>
      <h1 className="title-list">{selectedCategory}</h1>
      {categoryList.length > 0 ? (
        <div className="list">
          {categoryList?.map((listing, index) => (
            <ListingCard listing={listing} key={index} />
          ))}
        </div>
      ) : (
        <h3 className="title-list">
          Nothing added to this {selectedCategory} Category !
        </h3>
      )}
    </>
  );
};

export default CategoryPage;
