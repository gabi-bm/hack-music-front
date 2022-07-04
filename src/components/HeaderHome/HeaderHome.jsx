import React from "react";
import { Carousel } from "react-bootstrap";

const HeaderHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 home-carousel-img"
          src="https://static.roland.com/assets/promos/jpg/billboard_aira_compact.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to HackMusic</h3>
          <p>Bring music to life with our selected products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home-carousel-img"
          src="https://static.roland.com/assets/promos/jpg/billboard_fantom-0.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Welcome to HackMusic</h3>
          <p>Bring music to life with our selected products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home-carousel-img"
          src="https://static.roland.com/assets/promos/jpg/billboard_td-07_series.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Welcome to HackMusic</h3>
          <p>Bring music to life with our selected products.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderHome;

{
  /* <div className="header">
      <h1 className="titulo-header">Hack Music</h1>
    </div> */
}
