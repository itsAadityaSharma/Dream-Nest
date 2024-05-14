import React, { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import ListingCard from "../components/ListingCard";

const Triplist = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user._id);
  const triplist = useSelector((state) => state.user.tripList);
  const dispatch = useDispatch();

  const getTripList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/trips`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      dispatch(setTripList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Trip List failed", err.message);
    }
  };
  useEffect(() => {
    getTripList();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Trip list</h1>
      <div className="list">
        {triplist?.map((trip) => (
          <ListingCard
            listing={trip.listingId}
            startDate={trip.startDate}
            endDate={trip.endDate}
            totalPrice={trip.totalPrice}
            booking={true}
          />
        ))}
      </div>
    </>
  );
};

export default Triplist;
