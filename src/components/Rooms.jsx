import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import CardCustom from "../commons/CardCustom";
import CarouselPictures from "../commons/CarouselPictures";
import CardCarousel from "../commons/CardCarousel";

function Rooms() {
  const tabOptions = [
    {
      checked: false,

      value: "instalaciones",
      label: "Instalaciones",
      des: "Hola mundo",
      img: "",
      mappeable: "",
    },
    {
      checked: true,
      value: "habitaciones",
      label: "Habitaciones",
      des: "Hola mundo",
      img: "",
      mappeable: [
        {
          room: "Habitación A",
          description:
            "Capacidad para 1 a 2 personas. Ubicada en el 1° piso (1 escalera), con vista hacia la calle",
        },
        {
          room: "Habitación B",
          description:
            "Capacidad para 1 a 2 personas. Ubicada en el 1° piso (1 escalera), con vista hacia la calle.",
        },
        {
          room: "Habitación C",
          description:
            "Capacidad para 1 a 3 personas. Ubicada en el 1° piso (1 escalera) con balcón hacia la calle.",
        },
        {
          room: "Habitación D",
          description:
            "Capacidad para 1 a 2 personas. Ubicada en el 1° piso (1 escalera), interna con vista a pulmón.",
        },
        {
          room: "Habitación E",
          description:
            "Capacidad para 1 a 2 personas habitación interna, vista pasillo. Ubicada en el 2° piso (2 escaleras), interna.",
        },
        {
          room: "Habitación F",
          description:
            "Capacidad para 1 a 4 personas Ubicada en el 2° piso (2 escaleras), con ventilación hacia pulmón.",
        },
        {
          room: "Habitación G",
          description:
            "Capacidad para 1 a 2 personas * vista hacia pulmón Ubicada en el 2° piso (2 escaleras).",
        },
        {
          room: "Habitación H",
          description:
            "Capacidad para 1 a 4 personas * Interna, vista pasillo Ubicada en el 2° piso (2 escaleras).",
        },
        {
          room: "Loft",
          description:
            "Capacidad para 1 a 4 personas Ubicada en el 2° piso (2 escaleras), con vista hacia la Iglesia San Francisco.",
        },
      ],
    },
    {
      checked: false,

      value: "servicios",
      label: "Servicios",
      des: "Hola mundo",
      img: "",
      mappeable: "",
    },
  ];

  const pictures = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1207490255-e1615485559611.jpg",
  ];

  const services = [
    "Habitaciones matrimoniales, dobles twin, triples",
    "Desayuno",
    "Calefacción",
    "Tv cable",
    "Cobertura médica",
    "Room Service",
    "Asesoramiento en circuitos turisticos",
    "Se aceptan tarjetas de credito",
    "Aire Acondicionado",
    "TV LCD",
    "Abierto todo el año",
    "Wi -Fi",
  ];

  return (
    <div className=" z-0  ">
      <Tabs className="mt-4 z-0" value="html">
        <TabsHeader className="z-0">
          {tabOptions.map(({ value, label, checked }) => (
            <Tab
              ref={
                checked
                  ? (el) => {
                      if (!el) return;
                      el.click();
                    }
                  : (el) => {
                      if (!el) return;
                    }
              }
              className="z-0"
              value={value}
              key={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {tabOptions.map(({ value, des, mappeable }) => (
            <TabPanel
              className="flex  flex-col items-center justify-center"
              value={value}
              key={value}
            >
              {mappeable !== "" && value === "habitaciones" ? (
                mappeable.map((element, key) => (
                  <CardCustom
                    title={element.room}
                    description={element.description}
                  />
                ))
              ) : value === "instalaciones" ? (
                <>
                  <CardCarousel
                    img={[
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg",
                      "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1207490255-e1615485559611.jpg",
                    ]}
                    title={"Estar"}
                    description={
                      "Cómodos sillones nos invitan al relax y a disfrutar de un espacio para la lectura."
                    }
                  />
                  <CardCarousel
                    img={[
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg",
                      "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1207490255-e1615485559611.jpg",
                    ]}
                    title={"Desayunador"}
                    description={
                      "	Este cálido espacio esta pensado para que nuestros huéspedes puedan desayunar degustar algunas de las exquisiteces de la gastronomía regional."
                    }
                  />
                </>
              ) : (
                <>
                  <div className="mt-10"></div>
                  <CarouselPictures
                    pictures={[
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg",
                      "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1207490255-e1615485559611.jpg",
                    ]}
                  />
                  <div className="mt-6 rounded-2xl p-2 w-[20rem] flex flex-col justify-center items-center text-center bg-white sombra">
                    <Typography
                      variant="h1"
                      className="text-3xl font-medium font-roboto"
                    >
                      SERVICIOS
                    </Typography>
                    <ul>
                      {services.map((service, key) => (
                        <li key={key}>
                          <Typography
                            variant="p"
                            className="text-[1.2rem] mt-2 font-roboto"
                          >
                            • {service}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default Rooms;

/*


      <Tabs className="mt-4 z-0" value="html">
        <TabsHeader className="z-0">
          <Tab className="z-0" value="habitaciones" key="habitaciones">
            Habitaciones
          </Tab>

          <Tab className="z-0" value="servicios" key="servicios">
            Servicios
          </Tab>
          <Tab className="z-0" value="instalaciones" key="instalaciones">
            Instalaciones
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="habitaciones" key="habitaciones">
            Habitaciones grandes wachin!!
          </TabPanel>
          <TabPanel value="servicios" key="servicios">
            Aguante el pity
          </TabPanel>
          <TabPanel value="instalaciones" key="instalaciones">
            Instalación del utorrent
          </TabPanel>
        </TabsBody>
      </Tabs>


*/

/*


GOOOD:




 <div className="h-[95vh] z-0  ">
      <Tabs className="mt-4 z-0" value="html">
        <TabsHeader className="z-0">
          {tabOptions.map(({ value, label, checked }) => (
            <Tab
              defaultChecked={checked}
              className="z-0"
              value={value}
              key={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {tabOptions.map(({ value, des }) => (
            <TabPanel value={value} key={value}>
              {des}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>




*/
