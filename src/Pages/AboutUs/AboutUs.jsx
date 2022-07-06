import "./AboutUs.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footter/Footer";
import * as FaIcons from "react-icons/fa";
import { SiMongodb, SiRedux, SiJavascript } from "react-icons/si";
const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "4rem" }}>About us:</h1>
        <div className="row d-flex card-group">
          <div className="col-12 col-sm-6 col-lg-3 card-1 d-flex">
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
          <div className="col-12 col-sm-6 col-lg-3 card-1 d-flex">
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
          <div className="col-12 col-sm-6 col-lg-3 card-1 d-flex">
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
          <div className="col-12 col-sm-6 col-lg-3 card-1 d-flex">
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
          <h1 style={{ textAlign: "center", marginTop: "8rem" }}>¿Qué es Hack Music?</h1>
          <p style={{ textAlign: "center", marginTop: "4rem" }}>
            Hack Music es una aplicación web creada por estudiantes de Hack Academy con el fin de
            poner en práctica los conocimientos adquiridos para poder desarrollar un e-commerce en
            un plazo de 3 semanas de curso. Este proyecto es la entrega final de un bootcamp de
            desarrollo web full-stack, un curso de fuerte carga teórico-práctica intensivo con una
            duración de 3 meses, el cual tuvo apróximadamente 600 horas de dedicación.
          </p>
        </div>

        <h1 style={{ textAlign: "center", marginTop: "8rem", marginBottom: "4rem" }}>Process:</h1>

        <div className="d-flex mer-card row">
          <div className="col-12 col-lg-6">
            <img className="mer-img" src="https://i.postimg.cc/g0nHkFBs/mer-byn.jpg" alt="" />
          </div>

          <div className="col-12 col-lg-6">
            <h3>1 - Creación del MER</h3>
            <p className="mer-text">
              Comenzamos pensando los modelos que deberíamos crear para poder relacionar y llevar a
              cabo el proyecto. Finalmente propusimos las siguientes entidades: User, Admin,
              Category, Order, Product y Addresses. Diagramando las respectivas relaciones entre
              estas.
            </p>
            <h3>2 - Temática e inspiración </h3>
            <p className="mer-text">
              Nos inspiramos en Altomusic para obtener las imágenes y los productos. Para el diseño
              de la página nos inspiramos en Roland Y Orange para recrear una maquetación similar.
            </p>
          </div>
        </div>

        <div className="d-flex mer-card row" style={{ marginTop: "8rem" }}>
          <div className="col-12 col-lg-6">
            <h3>3 - Metodología de trabajo </h3>
            <p className="mer-text">
              Utilizamos GitHub Projects para la organización y distribución de tareas. La
              organización y creación del sitio fue hecha de forma 100% remota, utilizando Discord
              para comunicarnos entre nosotros en conjunto con la metodología Scrum.
            </p>
            <h3> 4 - Elección de tecnologías a utilizar </h3>
            <p className="mer-text">
              Analizamos el proyecto y concluímos que lo mejor era tener una base de datos no
              relacional, por lo tanto decidimos utilizar MongoDb. Para el almacenamiento de
              imágenes utilizamos un servidor en la nube llamado Supabase.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img className="mer-img" src="https://i.postimg.cc/9Fhq0Rfz/mer2byn.jpg" alt="" />
          </div>
        </div>

        <h1 style={{ textAlign: "center", marginTop: "8rem", marginBottom: "4rem" }}>
          Tecnologías utilizadas:
        </h1>
        <div className="d-flex mer-card row">
          <ul className="list-tecs col-12 col-sm-6 col-lg-4">
            <li className="mb-5">
              <FaIcons.FaReact className="tec-icon" /> React
            </li>
            <li className="mb-5">
              <SiRedux className="tec-icon" /> Redux
            </li>
            <li className="mb-5">
              <SiJavascript className="tec-icon" /> JavaScript
            </li>
          </ul>
          <ul className="list-tecs col-12 col-sm-6 col-lg-4">
            <li className="mb-5">
              <FaIcons.FaTrello className="tec-icon" /> Trello
            </li>
            <li className="mb-5">
              <FaIcons.FaNode className="tec-icon" /> Node.js
            </li>
            <li className="mb-5">
              <FaIcons.FaGithubSquare className="tec-icon" />
              GitHub
            </li>
          </ul>
          <ul className="list-tecs col-12 col-sm-6 col-lg-4">
            <li className="mb-5">
              <SiMongodb className="tec-icon" /> MongoDb
            </li>
            <li className="mb-5">
              <FaIcons.FaCss3Alt className="tec-icon" /> CSS
            </li>
            <li className="mb-5">
              <FaIcons.FaBootstrap className="tec-icon" /> Bootstrap
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
