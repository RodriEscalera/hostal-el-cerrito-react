import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardFooter,
  CardBody,
} from "@material-tailwind/react";

function CardCustom({ title, description, img }) {
  return (
    <div className="flex mt-10 justify-center items-center w-full">
      <Card className="w-[20rem]">
        <CardHeader
          floated={false}
          color="brown"
          className="relative h-[12rem] "
        >
          <img
            src={
              "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
            }
            alt="hostal el cerrito"
            className="relative h-[12rem]"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
          {description ? <Typography>{description}</Typography> : null}
        </CardBody>
        <CardFooter divider className="flex items-center justify-center py-3">
          <Typography variant="small">RESERVAR</Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardCustom;
