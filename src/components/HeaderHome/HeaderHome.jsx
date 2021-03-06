import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Carousel } from "react-bootstrap";

const HeaderHome = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 home-carousel-img"
            src="https://static.roland.com/assets/promos/jpg/billboard_td-07_series.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: "2.5rem" }}>Welcome to HackMusic</h3>
            <p style={{ fontSize: "1.1rem" }}>Bring music to life with our selected products.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-carousel-img"
            src="https://static.roland.com/assets/promos/jpg/billboard_fantom-0.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontSize: "2.5rem" }}>Welcome to HackMusic</h3>
            <p style={{ fontSize: "1.1rem" }}>Bring music to life with our selected products.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-carousel-img"
            src="https://static.roland.com/assets/promos/jpg/billboard_aira_compact.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontSize: "2.5rem" }}>Welcome to HackMusic</h3>
            <p style={{ fontSize: "1.1rem" }}>Bring music to life with our selected products.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="caption-small-size">
        <h3>Welcome to HackMusic</h3>
        <p>Bring music to life with our selected products.</p>
      </div>
      <div style={{ height: "91px" }} className="d-flex flex-column justify-content-center">
        <span
          className="tx-third-color tracking-in-expand find-your-instrument"
          style={{
            fontWeight: "300",
            display: "block",
            paddingBottom: "0",
            letterSpacing: "0.2rem",
          }}
        >
          Find your instrument{" "}
        </span>
        <FontAwesomeIcon
          className="tx-third-color rotate-center"
          icon={faAngleDown}
          style={{ fontWeight: "100", fontSize: "2rem", margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default HeaderHome;
