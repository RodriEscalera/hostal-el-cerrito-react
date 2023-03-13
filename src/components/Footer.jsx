import React from "react";
import logoFooter from "../assets/logo-footer.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <div className="w-full h-[7rem] flex justify-between bg-[#475569] items-center bottom-0">
      <img
        className="w-[6rem] ml-[1rem] h-[6rem] object-cover "
        src={logoFooter}
        alt="hostal el cerrito"
      />
      <div className="flex justify-center items-center flex-col mr-3">
        <h1 className="text-[1.2rem]  text-white"> Avenida Belgrano 457</h1>
        <div className="text-white mt-2 w-[10rem] flex justify-between  ">
          <a
            href="https://www.facebook.com/hostalelcerritosalta"
            target="_blank"
          >
            <FacebookIcon style={{ fontSize: "2.2rem" }} />
          </a>
          <a href="https://www.instagram.com/hostalelcerrito/" target="_blank">
            <InstagramIcon style={{ fontSize: "2.2rem" }} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5493874770330"
            target="_blank"
          >
            <WhatsAppIcon style={{ fontSize: "2.2rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
