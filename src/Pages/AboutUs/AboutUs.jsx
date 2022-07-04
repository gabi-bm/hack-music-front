import "./AboutUs.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footter/Footer";
import * as FaIcons from "react-icons/fa";
import { SiMongodb, SiRedux, SiJavascript } from "react-icons/si";
const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>About us:</h1>
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
        <h1 style={{ textAlign: "center", marginTop: "4rem" }}>¿Qué es Hack Music?</h1>
        <p style={{ textAlign: "center", marginTop: "4rem" }}>
          Hack Music es una aplicación web creada por estudiantes de Hack Academy con el fin de
          poner en práctica los conocimientos adquiridos para poder desarrollar un e-commerce en un
          plazo de 3 semanas de curso. Este proyecto es la entrega final de un bootcamp de
          desarrollo web full-stack , un curso de fuerte carga teórico-práctica intensivo con una
          duración de 3 meses, el cual tuvo apróximadamente 600 horas de dedicación.
        </p>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "4rem", marginBottom: "4rem" }}>Process:</h1>
      <div className="d-flex mer-card container">
        <div className="col-6">
          <img className="mer-img" src="https://i.postimg.cc/g0nHkFBs/mer-byn.jpg" alt="" />
        </div>
        <div className="col-6">
          <h3>1 - Creación de MER</h3>
          <p className="mer-text">
            Comenzamos pensando los modelos que deberíamos crear oara poder relacionar y llevar a
            cabo del proyecto, proponiendo: User, Admin, Category, Order y Product
          </p>
          <h3>2 - Temática e inspiración </h3>
          <p className="mer-text">
            Nos inspiramos en Altomusic para obtener las imágenes y los productos. Para el diseño de
            la página nos inspiramos en Roland Y Orange para recrear una maquetación similar.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex mer-card" style={{ marginTop: "8rem" }}>
          <div className="col-6">
            <h3>3 - Metodología de trabajo </h3>
            <p className="mer-text">
              Utilizamos GitHub Issues para la organización y distribución de tareas. La
              organización y creación del sitio fue hecha de forma 100% remota, utilizando Discord
              para comunicarnos entre nosotros en conjunto con la metodología Scrum.
            </p>
            <h3> 4 - Elección de tecnologías a utilizar </h3>
            <p className="mer-text">
              Analizamos el proyecto y concluímos que lo mejor era tener una base de datos no
              relacional: MongoDb utilizamosMongoDb. Para el almacenamiento de imágenes utilizamos
              un servidor externo (Postimage.cc)
            </p>
          </div>
          <div className="col-6">
            <img className="mer-img" src="https://i.postimg.cc/9Fhq0Rfz/mer2byn.jpg" alt="" />
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "4rem", marginBottom: "4rem" }}>Used tecs:</h1>
      <div className="d-flex mer-card container">
        <div className="col-6 icon-container">
          <div className="d-flex">
            <FaIcons.FaReact className="tec-icon" />
            <SiMongodb className="tec-icon" />
            <SiRedux className="tec-icon" />
          </div>
          <div className="d-flex mt-5">
            <FaIcons.FaNode className="tec-icon" />
            <FaIcons.FaBootstrap className="tec-icon" />
            <FaIcons.FaTrello className="tec-icon" />
          </div>
          <div className="d-flex mt-5">
            <SiJavascript className="tec-icon" />
            <FaIcons.FaGithubSquare className="tec-icon" />
            <FaIcons.FaCss3Alt className="tec-icon" />
          </div>
        </div>
        <div className="col-6 list-tecs">
          <ul className="list-tecs">
            <li>·React</li>
            <li>·Redux</li>
            <li>·JavaScript</li>
            <li>·JWT</li>
            <li>·Node.js</li>
            <li>·Git</li>
            <li>·MongoDb</li>
            <li>·CSS</li>
            <li>·Bootstrap</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AboutUs;
