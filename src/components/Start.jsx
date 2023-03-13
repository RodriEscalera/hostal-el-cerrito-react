import React from "react";
import { Link } from "react-router-dom";

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
                src="https://media-cdn.tripadvisor.com/media/photo-s/25/fb/8c/46/hotel-exterior.jpg"
                alt="hotel trucho"
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
                src="http://res.cloudinary.com/simpleview/image/upload/v1642787126/clients/loscabosmx/Copia_de_Copia_de_Esperanza_0010x_8dcb97e1-1c39-4cd8-8e36-326ec39d65b3.jpg"
                alt="hotel trucho"
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
