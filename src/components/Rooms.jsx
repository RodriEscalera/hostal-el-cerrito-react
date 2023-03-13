import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
function Rooms() {
  const tabOptions = [
    {
      checked: true,
      value: "habitaciones",
      label: "Habitaciones",
      des: "Hola mundo",
      img: "",
      mappeable: [1, 2, 3, 4, 5, 6],
    },
    {
      checked: false,

      value: "instalaciones",
      label: "Instalaciones",
      des: "Hola mundo",
      img: "",
      mappeable: "",
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
              {mappeable !== ""
                ? mappeable.map((element, key) => (
                    <div
                      key={key}
                      className="w-[90%] mt-3 h-[7.5rem] bg-indigo-200 rounded-3xl"
                    ></div>
                  ))
                : null}
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
