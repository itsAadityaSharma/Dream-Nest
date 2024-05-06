import React from "react";
import "../styles/CreateListing.scss";
import Navbar from "../components/Navbar";
import { categories } from "../data";
import { types, facilities } from "../data";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import variables from "../styles/variables.scss";

const CreateListing = () => {
  return (
    <>
      <Navbar />
      <div className="create-listing">
        <h1>Publish Your Place</h1>
        <form action="">
          <div className="create-listing_step1">
            <h2>Step 1 : Tell us about your place</h2>
            <hr />
            <h3>Which of these categories best describes your place?</h3>
            <div className="category-list">
              {categories.map((item, index) => (
                <div className="category" key={index}>
                  <div className="category_icon">{item.icon}</div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
            <h3>What type of place will guests have ?</h3>
            <div className="type-list">
              {types?.map((item, index) => (
                <div className="type">
                  <div className="type_text">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="type_icon">{item.icon}</div>
                </div>
              ))}
            </div>
            <h3>Where's your location?</h3>
            <div className="full">
              <div className="location">
                <p>Street Address</p>
                <input
                  type="text"
                  placeholder="Street Address"
                  name="streetAddress"
                  required
                />
              </div>
            </div>
            <div className="half">
              <div className="location">
                <p>Apartment , Suite, etc. (if applicable)</p>
                <input
                  type="text"
                  placeholder="Apartment , Suite, etc. (if applicable)"
                  name="aptSuite"
                />
              </div>
              <div className="location">
                <p>City</p>
                <input type="text" placeholder="City" name="city" />
              </div>
            </div>
            <div className="half">
              <div className="location">
                <p>Province</p>
                <input type="text" placeholder="Province" name="province" />
              </div>
              <div className="location">
                <p>Country</p>
                <input type="text" placeholder="Country" name="country" />
              </div>
            </div>

            <h3>Share some basics about your place</h3>
            <div className="basics">
              <div className="basic">
                <p>Guests</p>
                <div className="basic_count">
                  <RemoveCircleOutline
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: variables.pinkred },
                    }}
                  />
                  <p>1</p>
                  <AddCircleOutline
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: variables.pinkred },
                    }}
                  />
                </div>
              </div>
              <div className="basic">
                <p>Bedrooms</p>
                <div className="basic_count">
                  <RemoveCircleOutline
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: variables.pinkred },
                    }}
                  />
                  <p>1</p>
                  <AddCircleOutline
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: variables.pinkred },
                    }}
                  />
                </div>
              </div>
              <div className="basic">
                <p>Beds</p>
                <div className="basic_count">
                  <RemoveCircleOutline
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: variables.pinkred },
                    }}
                  />
                  <p>1</p>
                  <AddCircleOutline
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: variables.pinkred },
                    }}
                  />
                </div>
              </div>
              <div className="basic">
                <p>Bathrooms</p>
                <div className="basic_count">
                  <RemoveCircleOutline
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: variables.pinkred },
                    }}
                  />
                  <p>1</p>
                  <AddCircleOutline
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: variables.pinkred },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="create-listing_step2">
            <h2>Step 2: Make your place stand out</h2>
            <hr />
            <h3>Tell guests what your place has to offer</h3>
            <div className="amenities">
              {facilities?.map((item, index) => (
                <div className="facility" key={index}>
                  <div className="facility_icon">{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <h3>Add some photos of your place</h3>
            <input type="file" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateListing;
