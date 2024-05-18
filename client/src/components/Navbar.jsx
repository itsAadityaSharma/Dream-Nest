import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import { setLogout } from "../redux/state";
import { grey } from "@mui/material/colors";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const dispatch = useDispatch();
  const onSearchInput = (e) => {
    const val = e.target.value;
    setSearchVal(val);
  };

  return (
    <>
      <div className="navbar">
        <a href="/">
          <img src="/assets/logo.png" alt="logo" />
        </a>
        <div className="navbar_search">
          <input
            type="text"
            placeholder="search"
            name="search"
            value={searchVal}
            id=""
            onChange={(e) => {
              onSearchInput(e);
            }}
          />
          <Link to={`/search/${searchVal}`}>
            <IconButton>
              <Search sx={{ color: variables.pinkred }} />
            </IconButton>
          </Link>
        </div>
        <div className="navbar_right">
          {user ? (
            <a href="/create_listing" className="host">
              Become A Host
            </a>
          ) : (
            <a href="/login" className="host">
              Become A Host
            </a>
          )}
          <button
            className="navbar_right_account"
            onClick={() => {
              setDropdownMenu(!dropdownMenu);
            }}
          >
            <Menu sx={{ color: variables.darkgrey }} />
            {!user ? (
              <Person sx={{ color: variables.darkgrey }} />
            ) : (
              <img
                src={`http://localhost:3001/${user.profileImagePath.replace(
                  "public",
                  ""
                )}`}
                alt="Profile Photo"
                style={{ objectFit: "cover", borderRadius: "50%" }}
              ></img>
            )}
          </button>

          {dropdownMenu && !user && (
            <div className="navbar_right_accountmenu">
              <Link to="/login">Log In</Link>
              <Link to="/register">Sign Up</Link>
            </div>
          )}
          {dropdownMenu && user && (
            <div className="navbar_right_accountmenu">
              <Link to={`/${user._id}/trips`}>Trip List</Link>
              <Link to="/wishlist">Wish List</Link>
              <Link to={`/${user._id}/properties`}>Property List</Link>
              <Link to={`/${user._id}/reservation`}>Reservation List</Link>
              {/* <Link to="/">Become A Host</Link> */}

              <Link
                to="/login"
                onClick={() => {
                  dispatch(setLogout());
                }}
              >
                Log out
              </Link>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
