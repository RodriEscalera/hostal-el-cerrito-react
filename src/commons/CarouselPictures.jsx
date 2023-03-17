import React from "react";
import Carousel from "react-material-ui-carousel";

function CarouselPictures({ pictures }) {
  return (
    <div>
      <Carousel
        navButtonsAlwaysVisible={true}
        interval={4000}
        animation="slide"
        className="w-[18rem] "
      >
        {pictures.map((pic, key) => (
          <img
            key={key}
            style={{
              height: "12rem",
              width: "20rem",
              objectFit: "cover",
            }}
            src={pic}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselPictures;

{
  /* <div className="mt-[2rem]">
<Carousel
  navButtonsAlwaysVisible={true}
  interval={4000}
  animation="slide"
  className="w-[20rem] border-solid border-slate-700 "
>
  <img
    style={{ height: "12rem", width: "100%", objectFit: "cover" }}
    src="https://img.freepik.com/foto-gratis/genial-figura-triangular-geometrica-luz-laser-neon-ideal-fondos-fondos-pantalla_181624-9331.jpg?w=2000"
  />
  <img
    style={{ height: "12rem", width: "100%", objectFit: "cover" }}
    src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"
  />
  <img
    style={{ height: "12rem", width: "100%", objectFit: "cover" }}
    src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
  />
</Carousel>
</div> */
}
