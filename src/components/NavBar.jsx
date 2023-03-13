import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "../store/sidebar";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
function NavBar() {
  const isActive = useSelector((state) => state.sideBar);
  const location = useLocation();

  const dispatch = useDispatch();
  const handleSideBar = () => {
    dispatch(setSideBar(!isActive));
  };
  return (
    <div className="h-[4rem] w-full bg-color2 flex justify-center items-center fixed z-30 top-0">
      <Link to="/">
        <img
          src={logo}
          alt="hostal el cerrito"
          className="w-[12rem] h-[2.5rem] object-cover"
        />
      </Link>

      <div className="absolute right-0">
        {location.pathname === "/" ? null : (
          <MenuIcon
            onClick={handleSideBar}
            sx={{ fontSize: "2.2rem", marginRight: "1rem" }}
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
