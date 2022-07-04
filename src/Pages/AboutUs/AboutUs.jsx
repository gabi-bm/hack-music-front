import "./AboutUs.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footter/Footer";
import * as FaIcons from "react-icons/fa";
const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>About us:</h1>
      <div className="container d-flex card-group">
        <div className="col-3 card-1 d-flex">
          <img
            className="img-card-1"
            src="https://i.postimg.cc/gkxnWsJP/Whats-App-Image-2022-05-31-at-11-48-30-PM.jpg"
            alt=""
          />
          <div className="card-text">
            <p className="card-name">Mauricio López</p>
            <p className="card-name">Full Stack Developer Jr.</p>
            <FaIcons.FaLinkedin /> <FaIcons.FaGithub />
          </div>
        </div>
        <div className="col-3 card-1 d-flex">
          <img
            className="img-card-1"
            src="https://i.postimg.cc/gkxnWsJP/Whats-App-Image-2022-05-31-at-11-48-30-PM.jpg"
            alt=""
          />
          <div className="card-text">
            <p className="card-name">Gabriel Bartesaghi</p>
            <p className="card-name">Full Stack Developer Jr.</p>
            <FaIcons.FaLinkedin /> <FaIcons.FaGithub />
          </div>
        </div>
        <div className="col-3 card-1 d-flex">
          <img
            className="img-card-1"
            src="https://i.postimg.cc/gkxnWsJP/Whats-App-Image-2022-05-31-at-11-48-30-PM.jpg"
            alt=""
          />
          <div className="card-text">
            <p className="card-name">Rodrigo Moraes</p>
            <p className="card-name">Full Stack Developer Jr.</p>
            <FaIcons.FaLinkedin /> <FaIcons.FaGithub />
          </div>
        </div>
        <div className="col-3 card-1 d-flex">
          <img
            className="img-card-1"
            src="https://i.postimg.cc/gkxnWsJP/Whats-App-Image-2022-05-31-at-11-48-30-PM.jpg"
            alt=""
          />
          <div className="card-text">
            <p className="card-name">Juan Ignacio Rodríguez</p>
            <p className="card-name">Full Stack Developer Jr.</p>
            <FaIcons.FaLinkedin /> <FaIcons.FaGithub />
          </div>
        </div>
      </div>
      <div className="desc-about">
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>¿Qué es Hack Music?</h1>
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          Hack Music es una aplicación web creada por estudiantes de Hack Academy con el fin de
          poner en práctica los conocimientos adquiridos para poder desarrollar un e-commerce en un
          plazo de 3 semanas de curso. Este proyecto es la entrega final de un bootcamp de
          desarrollo web full-stack , un curso de fuerte carga teórico-práctica intensivo con una
          duración de 3 meses, el cual tuvo apróximadamente 600 horas de dedicación.
        </p>
      </div>

      <Footer />
    </div>
  );
};
export default AboutUs;
