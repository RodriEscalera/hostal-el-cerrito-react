import React from "react";
import CarouselPictures from "../commons/CarouselPictures";
import desayuno1 from "../assets/pictures/temporal/desayuno1.jpg";
import desayuno2 from "../assets/pictures/temporal/desayuno2.jpg";
import desayuno3 from "../assets/pictures/temporal/desayuno3.jpg";
import habitacionA1 from "../assets/pictures/temporal/habitacionA1.jpg";
import habitacionA2 from "../assets/pictures/temporal/habitacionA2.jpg";
import habitacionB1 from "../assets/pictures/temporal/habitacionB1.jpg";
import habitacionB2 from "../assets/pictures/temporal/habitacionB2.jpg";
import habitacionB3 from "../assets/pictures/temporal/habitacionB3.jpg";
import habitacionB4 from "../assets/pictures/temporal/habitacionB4.jpg";

function SaltaHome() {
  const pictures = [
    habitacionA1,
    habitacionA2,
    habitacionB1,
    habitacionB2,
    habitacionB3,
    habitacionB4,
    desayuno1,
    desayuno2,
    desayuno3,
  ];
  return (
    <div className="h-[95vh] w-full flex flex-col items-center">
      <CarouselPictures pictures={pictures} />
      <div className="mt-6 rounded-2xl p-2 w-[20rem] flex flex-col justify-center items-center text-center bg-white ">
        <h1 className="text-3xl font-medium font-roboto">
          Hostal El Cerrito Salta
        </h1>
        <h1 className="w-[90%] text-[1.2rem] mt-2 font-roboto">
          Nuestro hostal se ubica a solo una cuadra de Plaza 9 de Julio, en
          pleno centro de la histórica y siempre colonial ciudad de Salta y a
          pasos de los más importantes edificios antiguos, iglesias y museos,
          los espera Hostal El Cerrito. Sus cómodas instalaciones conjugan la
          funcionalidad con el confort y el buen gusto.
        </h1>
      </div>
    </div>
  );
}

export default SaltaHome;
