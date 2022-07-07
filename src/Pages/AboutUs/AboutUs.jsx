import "./AboutUs.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footter/Footer";
import * as FaIcons from "react-icons/fa";
import { SiMongodb, SiRedux, SiJavascript } from "react-icons/si";
const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="container w-75">
        <div className="desc-about">
          <h1 style={{ textAlign: "center", marginTop: "7rem", marginBottom: "3rem" }}>
            ¿Qué es Hack Music?
          </h1>
          <p style={{ textAlign: "left" }}>
            Hack Music es una aplicación web creada por estudiantes de Hack Academy con el fin de
            poner en práctica los conocimientos adquiridos para poder desarrollar un e-commerce en
            un plazo de 3 semanas de curso. Este proyecto es la entrega final de un bootcamp de
            desarrollo web full-stack, un curso de fuerte carga teórico-práctica intensivo con una
            duración de 3 meses, el cual tuvo apróximadamente 600 horas de dedicación.
          </p>
        </div>

        <h1 style={{ textAlign: "center", marginTop: "7rem", marginBottom: "3rem" }}>
          Planificación:
        </h1>

        <div className="d-flex mer-card row">
          <div className="col-12 col-lg-6 col-left">
            <img className="mer-img" src="https://i.postimg.cc/g0nHkFBs/mer-byn.jpg" alt="" />
          </div>

          <div className="col-12 col-lg-6 col-right">
            <h4>1 - Creación del MER</h4>
            <p className="mer-text">
              Comenzamos pensando los modelos que deberíamos crear para poder relacionar y llevar a
              cabo el proyecto. Finalmente propusimos las siguientes entidades: User, Admin,
              Category, Order, Product y Addresses. Diagramando las respectivas relaciones entre
              estas.
            </p>
            <h4 className="pt-4">2 - Temática e inspiración </h4>
            <p className="mer-text">
              Nos inspiramos en Altomusic para obtener las imágenes y los productos. Para el diseño
              de la página nos inspiramos en Roland Y Orange para recrear una maquetación similar.
            </p>
          </div>
        </div>

        <div className="d-flex mer-card row">
          <div className="col-12 col-lg-6 col-left">
            <h4>3 - Metodología de trabajo </h4>
            <p className="mer-text">
              Utilizamos GitHub Projects para la organización y distribución de tareas. La
              organización y creación del sitio fue hecha de forma 100% remota, utilizando Discord
              para comunicarnos entre nosotros en conjunto con la metodología Scrum.
            </p>
            <h4 className="pt-4"> 4 - Elección de tecnologías a utilizar </h4>
            <p className="mer-text">
              Analizamos el proyecto y concluímos que lo mejor era tener una base de datos no
              relacional, por lo tanto decidimos utilizar MongoDb. Para el almacenamiento de
              imágenes utilizamos un servidor en la nube llamado Supabase.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-right">
            <img className="mer-img" src="https://i.postimg.cc/9Fhq0Rfz/mer2byn.jpg" alt="" />
          </div>
        </div>

        <h1 style={{ textAlign: "center", marginTop: "6rem", marginBottom: "4rem" }}>
          Tecnologías utilizadas:
        </h1>
        <div className="d-flex mer-card row list-tecs mx-auto w-75">
          <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center align-items-center">
            <FaIcons.FaReact className="tec-icon mb-2" /> React
          </div>
          <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center align-items-center">
            <SiRedux className="tec-icon mb-3" /> Redux
          </div>
          <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center align-items-center">
            <SiJavascript className="tec-icon mb-3" /> JavaScript
          </div>
          <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center align-items-center">
            <FaIcons.FaTrello className="tec-icon mb-3" /> Trello
          </div>
          <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center align-items-center">
            <FaIcons.FaNode className="tec-icon mb-3" /> Node.js
          </div>
          <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center align-items-center">
            <FaIcons.FaGithubSquare className="tec-icon mb-3" />
            GitHub
          </div>
          <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center align-items-center">
            <SiMongodb className="tec-icon mb-3" /> MongoDb
          </div>
          <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center align-items-center">
            <FaIcons.FaCss3Alt className="tec-icon mb-3" /> CSS
          </div>
          <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-5 d-flex flex-column justify-content-center align-items-center">
            <FaIcons.FaBootstrap className="tec-icon mb-3" /> Bootstrap
          </div>
        </div>
        <div className="row d-flex card-group pb-5">
          <h1 style={{ textAlign: "center", marginTop: "3rem", marginBottom: "4rem" }}>Team:</h1>

          <div className="col-12 col-sm-6 col-xl-3 card-1 d-flex mb-5">
            <a href="https://www.linkedin.com/in/mauricio-lopez-freccero">
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
            </a>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 card-1 d-flex mb-5">
            <a href="https://www.linkedin.com/in/gabriel-bartesaghi-monza">
              <img
                className="img-card-1"
                src="https://i.postimg.cc/NfZLhwvk/Whats-App-Image-2022-06-04-at-11-46-43-AM-14-18-36.jpg"
                alt=""
              />
              <div className="card-text">
                <p className="card-name">Gabriel Bartesaghi</p>
                <p className="card-name">Full Stack Developer Jr.</p>
                <FaIcons.FaLinkedin /> <FaIcons.FaGithub />
              </div>
            </a>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 card-1 d-flex mb-5">
            <a href="https://www.linkedin.com/in/rodrigo-moraes-554536225">
              <img
                className="img-card-1"
                src="https://i.postimg.cc/7ZnX1CZ5/rodricaripelabyn2.jpg"
                alt=""
              />
              <div className="card-text">
                <p className="card-name">Rodrigo Moraes</p>
                <p className="card-name">Full Stack Developer Jr.</p>
                <FaIcons.FaLinkedin /> <FaIcons.FaGithub />
              </div>
            </a>
          </div>

          <div className="col-12 col-sm-6 col-xl-3 card-1 d-flex mb-5">
            <a href="https://www.linkedin.com/in/juanrgaudin">
              <img
                className="img-card-1"
                src="https://i.postimg.cc/mg5QPn9d/Juan-Rodri-guez-Foto.jpg"
                alt=""
              />
              <div className="card-text">
                <p className="card-name">Juan Ignacio Rodríguez</p>
                <p className="card-name">Full Stack Developer Jr.</p>
                <FaIcons.FaLinkedin /> <FaIcons.FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
