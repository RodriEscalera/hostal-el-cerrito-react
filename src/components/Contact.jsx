import { Button, Input, Textarea } from "@material-tailwind/react";
import React from "react";

function Contact() {
  return (
    <div className="w-full justify-center flex items-center flex-col">
      <div className="bg-white sombra w-[20rem] h-[27rem] mt-10 rounded-2xl flex justify-center">
        <form action="submit" className="flex flex-col  items-center w-[90%]">
          <h1 className="text-3xl text-words font-medium mt-10">CONTACTO</h1>
          <div className="mt-3 w-full ">
            <Input
              className="w-[90%]"
              variant="outlined"
              label="Nombre y Apellido"
            />
          </div>
          <div className="mt-3 w-full">
            <Input className="w-[90%]" variant="outlined" label="E-Mail" />
          </div>
          <div className="mt-3 w-full">
            <Input className="w-[90%]" variant="outlined" label="Teléfono" />
          </div>
          <div className="mt-3 w-full">
            <Textarea className="w-[90%]" label="Consulta" />
          </div>
          <Button className="w-[100%] mt-3">ENVIAR</Button>
        </form>
      </div>
      <div className="bg-white w-[20rem] h-[15rem] sombra rounded-2xl mt-10 flex justify-center flex-col items-center">
        <h1 className="text-3xl text-words">Datos de contacto:</h1>
        <div className="text-start mt-5">
          <p className="text-1xl text-words">
            • Domicilio : Avenida Belgrano 457
          </p>
          <p className="text-1xl text-words">• Teléfono : +54-0387 4212861</p>
          <p className="text-1xl text-words">
            • E-mail : info@hostalelcerrito.com.ar
          </p>

          <p className="text-1xl text-words">• Localidad : Salta</p>
          <p className="text-1xl text-words">• Provincia : Salta</p>
          <p className="text-1xl text-words">• País : Argentina</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
