import { Typography } from "@material-tailwind/react";
import React from "react";
import Map from "../commons/Map";
import ChurchIcon from "@mui/icons-material/Church";
import MuseumIcon from "@mui/icons-material/Museum";
import ParkIcon from "@mui/icons-material/Park";
function LocationSalta() {
  const referencias = [
    {
      text: "Iglesia Catedral de Salta",
      icon: () => <ChurchIcon className="mr-1" />,
    },
    {
      text: "Museo de Alta Montaña",
      icon: () => <MuseumIcon className="mr-1" />,
    },
    { text: "Cabildo Histórico", icon: () => <MuseumIcon className="mr-1" /> },
    {
      text: "Plaza Principal de Salta 9 de Julio",
      icon: () => <ParkIcon className="mr-1" />,
    },
  ];

  /*
  
   - Iglesia Catedral de Salta
 - Museo de Alta Montaña
 - Cabildo Histórico
 - Plaza Principal de Salta 9 de Julio
  */
  return (
    <div className="flex justify-center items-center z-10 flex-col">
      <div className="z-10 w-[94%] h-[20rem] overflow-hidden mt-10 sombra">
        <Map />
      </div>
      <div className="z-10 w-[94%] mt-3 flex justify-center flex-col items-center">
        <a
          href="https://www.google.com/maps/place/Hostal+El+Cerrito/@-24.7875994,-65.4084014,18.44z/data=!4m9!3m8!1s0x941bc3bcecdaaa8f:0xc12f7a2713b9a7ec!5m2!4m1!1i2!8m2!3d-24.7877003!4d-65.4088208!16s%2Fg%2F1thzp_30?hl=es"
          target="_blank"
        >
          <p className="text-words">Abrir en Google Maps</p>
        </a>

        <hr className="w-[70%] h-[0.1rem] border-none bg-[#9c9c9c]" />
      </div>
      <div className="text-center mt-7 flex justify-center items-center flex-col bg-white sombra h-[13rem] w-[90%] rounded-2xl">
        <Typography className="text-words" variant="h2">
          Ubicación
        </Typography>
        <Typography className="text-words w-[80%]" variant="p">
          Ubicado a solo una cuadra de Plaza 9 de Julio; en pleno centro de la
          histórica y siempre colonial ciudad de Salta.
        </Typography>
      </div>

      <div className="text-center mt-7 flex justify-center items-center flex-col bg-white sombra h-[15rem] w-[90%] rounded-2xl">
        <Typography className="text-words" variant="h2">
          Referencias:
        </Typography>
        <div className="flex justify-center items-start flex-col pl-4 pr-4">
          {referencias.map((reference, key) => (
            <Typography
              variant="p"
              className="text-[1.2rem] text-left text-words mt-2 font-roboto"
            >
              {reference.icon()}
              {reference.text}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationSalta;
