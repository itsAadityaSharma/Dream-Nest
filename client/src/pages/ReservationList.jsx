import React, { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setReservationList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";

const ReservationList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user._id);
  const reservationList = useSelector((state) => state.user.reservationList);
  const dispatch = useDispatch();

  const getReservationList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/reservation`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      dispatch(setReservationList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Reservation List failed", err.message);
    }
  };
  useEffect(() => {
    getReservationList();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Reservation list</h1>
      <div className="list">
        {reservationList?.map((reservation) => (
          <ListingCard
            listing={reservation.listingId}
            startDate={reservation.startDate}
            endDate={reservation.endDate}
            totalPrice={reservation.totalPrice}
            booking={true}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ReservationList;
