import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "../store/sidebar";
import HomeIcon from "@mui/icons-material/Home";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Link, useLocation } from "react-router-dom";
function SideBar() {
  const isActive = useSelector((state) => state.sideBar);
  const dispatch = useDispatch();
  const handleSideBar = () => {
    dispatch(setSideBar(!isActive));
  };
  const variantsFather = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  const variantsSideBar = {
    initial: {
      right: -190,
    },
    animate: {
      right: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const handleClick = () => {
    dispatch(setSideBar(false));
  };
  return (
    <AnimatePresence>
      {isActive ? (
        <motion.div
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          variants={variantsFather}
          className=" h-[100%] w-[100%] z-20  fixed"
        >
          <div className=" h-[100%] w-[100%] z-20  absolute top-[0%]">
            <motion.div
              variants={variantsSideBar}
              initial="initial"
              animate="animate"
              className="h-full w-[60%] z-20 absolute bg-[#093F76] top-[0%] right-[0%] text-white"
            >
              <div className="mt-3 z-20">
                <Link
                  to={path === "salta" ? "/salta/home" : "/sanLorenzo/home"}
                >
                  <div
                    onClick={handleClick}
                    className="flex justify-start h-[4.5rem] ml-2 items-center"
                  >
                    <HomeIcon />
                    <h1 className="text-2xl font-roboto ml-3">Inicio</h1>
                  </div>
                </Link>

                <Link
                  to={path === "salta" ? "/salta/rooms" : "/sanLorenzo/rooms"}
                >
                  <div
                    onClick={handleClick}
                    className="flex justify-start h-[4.5rem] ml-2 items-center"
                  >
                    <BedroomParentIcon />
                    <h1 className="text-2xl font-roboto ml-3">Habitaciones</h1>
                  </div>
                </Link>

                <Link
                  to={
                    path === "salta"
                      ? "/salta/location"
                      : "/sanLorenzo/location"
                  }
                >
                  <div
                    onClick={handleClick}
                    className="flex justify-start h-[4.5rem] ml-2 items-center"
                  >
                    <LocationOnIcon />
                    <h1 className="text-2xl font-roboto ml-3">Ubicación</h1>
                  </div>
                </Link>

                <Link
                  to={
                    path === "salta" ? "/salta/contact" : "/sanLorenzo/contact"
                  }
                >
                  <div
                    onClick={handleClick}
                    className="flex justify-start h-[4.5rem] ml-2 items-center"
                  >
                    <ContactPhoneIcon />
                    <h1 className="text-2xl font-roboto ml-3">Contacto</h1>
                  </div>
                </Link>
              </div>
            </motion.div>
            <div
              onClick={handleSideBar}
              className="h-full w-[100%] z-10  absolute top-[0%] bg-black opacity-60"
            ></div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default SideBar;
