import React from "react";
import { Link } from "react-router-dom";
import SaltaPicture from "../assets/first view/salta.jpg";
import SanLorenzoPicture from "../assets/first view/san-lorenzo.jpg";

function Start() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="w-[100%] flex justify-center items-center flex-col">
        <h1 className="w-[80%] text-3xl font-medium text-center text-roboto ">
          ¡Bienvenido a Hostal El Cerrito!
        </h1>
        <h1 className="w-[60%] text-2xl font-medium text-center text-roboto mt-6">
          Elija el hostal que desea ver
        </h1>
        <div>
          <Link to="/salta/home">
            <div className="relative sombra rounded-2xl">
              <img
                className="w-[18rem] h-[13rem] object-cover rounded-2xl mt-[2rem]"
                src={SaltaPicture}
                alt="hostal el cerrito salta"
              />
              <h1
                style={{
                  top: "84%",
                  right: "4%",
                }}
                className="absolute text-2xl text-white font-roboto"
              >
                Salta capital
              </h1>
            </div>
          </Link>
          <Link to="/sanlorenzo/home">
            <div className="relative rounded-2xl sombra">
              <img
                className="w-[18rem] h-[13rem] object-cover rounded-2xl mt-[4rem]"
                src={SanLorenzoPicture}
                alt="hostal el cerrito san lorenzo"
              />
              <h1
                style={{
                  top: "84%",
                  right: "4%",
                }}
                className="absolute text-2xl text-white font-roboto"
              >
                San Lorenzo - Salta
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
