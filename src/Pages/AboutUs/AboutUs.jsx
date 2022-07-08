import "./AboutUs.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footter/Footer";
import * as FaIcons from "react-icons/fa";
import { SiMongodb, SiRedux, SiJavascript } from "react-icons/si";
import { Parallax} from "react-parallax"
const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="container w-100">
        <div className="desc-about">
          <h1
            className="p-3"
            style={{ textAlign: "center", marginTop: "7rem", marginBottom: "3rem" }}
          >
            ¿What is Hack Music?
          </h1>
          <p className="p-3" style={{ textAlign: "justify" }}>
            Hack Music is a web application done under the MERN stack as a final project of a Coding
            Bootcamp in Hack Academy, an educational institution founded in 2016 in Montevideo,
            Uruguay, specialized in programming courses. The bootcamp is a full-time course that
            prepares young professionals as Full Stack Jr Devs. The purpose of the final project
            being to put in practice adquired knowledge using diverse technologies. The project was
            developed in three weeks by four people, accounting a total of 480 hours.
          </p>
        </div>
      </div>
      {/* <div className="parallax bg"></div> */}
      <div className="container w-100">
        <h1 style={{ textAlign: "center", marginTop: "7rem", marginBottom: "3rem" }}>Planning:</h1>

        <div className="d-flex mer-card row">
          <div className="col-12 col-lg-6 col-left">
            <img className="mer-img" src="https://i.postimg.cc/g0nHkFBs/mer-byn.jpg" alt="" />
          </div>

          <div className="col-12 col-lg-6 col-right">
            <h4>1 - Project conception and ERD</h4>
            <p className="mer-text">
              One of our first milestones of our project was the development of a carefully thinked
              Entity-Relations Diagram. Here we defined the main relations between the following
              entities: User, Admin, Category, Order, Product and Address.
            </p>
            <h4 className="pt-4">2 - Design & Inspiration </h4>
            <p className="mer-text">
              We inspire our website template with that of Roland, a carefully designed music retail
              website. We nurtue our database using pictures, descriptions, names and prices of
              Altomusic, another prestigious retailer.
            </p>
          </div>
        </div>

        <div className="d-flex mer-card row">
          <div className="col-12 col-lg-6 col-left">
            <h4>4 - Work methodology </h4>
            <p className="mer-text">
              We organized our work using an Agile Methodology with three sprints. Every sprint had
              tasks that were organized and developed individually, or in groups, using Github
              Projects to determine tasks completion. Every interaction within its developers, and
              by extension, the whole project, was done online online using Discord.
            </p>
            <h4 className="pt-4"> 4 - Frameworks & Technologies </h4>
            <p className="mer-text">
              We used the MERN stack. Meaning that our project used a non-relational database, and
              that we worked with Mongo, MongoDB, Mongo Atlas, Mongo Compass, and Mongoose, plus
              Supabase for image imports. Express, React, and Node as our application frameworks. In
              the development, we used known technologies that sorround this stack, such as React
              Bootstrap, Hooks, Formidable, etc.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-right">
            <img className="mer-img" src="https://i.postimg.cc/9Fhq0Rfz/mer2byn.jpg" alt="" />
          </div>
        </div>

        <h1 style={{ textAlign: "center", marginTop: "6rem", marginBottom: "4rem" }}>
          Used Technologies:
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
            <a href="https://www.linkedin.com/in/mauricio-lopez-freccero" target={"_blank"}>
              <img
                className="img-card-1"
                src="https://i.postimg.cc/0jHLnfRn/Perfil-Mauricio-Lopez.jpg"
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
            <a href="https://www.linkedin.com/in/gabriel-bartesaghi-monza" target={"_blank"}>
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
            <a href="https://www.linkedin.com/in/rodrigo-moraes-554536225" target={"_blank"}>
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
            <a href="https://www.linkedin.com/in/juanrgaudin" target={"_blank"}>
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
