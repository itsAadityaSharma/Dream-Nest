import React, { useEffect } from "react";
import "../styles/List.scss";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import { setProperties } from "../redux/state";
const PropertyList = () => {
  const properties = useSelector((state) => state.user?.propertyList);

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user?._id);

  const getPropertyList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/properties`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      dispatch(setProperties(data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPropertyList();
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="title-list"> Your Properties List</h1>
      {properties.length > 0 ? (
        <div className="list">
          {properties?.map((property, index) => (
            <ListingCard listing={property} key={index} />
          ))}
        </div>
      ) : (
        <h3 className="title-list">Nothing added to Property List !</h3>
      )}
    </>
  );
};

export default PropertyList;
