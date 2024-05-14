import React, { useState } from "react";
import "../styles/ListingCard.scss";
import { MdArrowBackIosNew } from "react-icons/md";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ListingCard = ({ listing, startDate, endDate, totalPrice, booking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = (listingPhotoPaths) => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
    );
  };

  const goToNextSlide = (listingPhotoPaths) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
  };

  return (
    <div className="listing-card">
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {listing.listingPhotoPaths?.map((photo, index) => (
            <div className="slide" key={index}>
              {!booking ? (
                <Link to={`/properties/${listing._id}`}>
                  <img
                    src={`http://localhost:3001${photo.replace("public", "")}`}
                    alt={`photo ${index + 1}`}
                  ></img>
                </Link>
              ) : (
                <img
                  src={`http://localhost:3001${photo.replace("public", "")}`}
                  alt={`photo ${index + 1}`}
                ></img>
              )}
              <div
                className="prev-button"
                onClick={() => goToPrevSlide(listing.listingPhotoPaths)}
              >
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </div>
              <div
                className="next-button"
                onClick={() => goToNextSlide(listing.listingPhotoPaths)}
              >
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3>
        {listing.city},{listing.province},{listing.country}
      </h3>
      <p>{listing.category}</p>

      {!booking ? (
        <>
          <p>{listing.type}</p>
          <p>
            <span>${listing.price}</span> per night
          </p>
        </>
      ) : (
        <>
          <p>
            {startDate} - {endDate}
          </p>
          <p>
            <span>$ {totalPrice} total</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListingCard;
