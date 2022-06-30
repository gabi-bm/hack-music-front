//Front interaction
import Footer from "../Footter/Footer";
import NavBar from "../Navbar/Navbar";

//Functional methods and frameworks
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Visual methods and frameworks
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify"; 



function ItemsTable() {

  //Lista de items de lo que sea 
  const [items, setItems] = useState([]);

  //Me tengo que traer al user de la store para mandar el JWT. 
  const user = useSelector((state) => state.user);

  //Pido params cada tanto en las llamadas a la API
  const params = useParams();

  //Al primer render
  useEffect(() => {
    const handleGetItems = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/categories", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setItems(response.data);
    };
    handleGetItems();
  }, []);

  const handleDeleteItem = async () => {
    await axios.delete(process.env.REACT_APP_SERVER_URL + "/categories/" + params.id, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    setItems(items.filter((i) => i === item));
  };

  const handleDeleteItems = async () => {
    //Faltaría esta llamada explosiva! Pongo en duda si es realmente necesaria
    await axios.delete(process.env.REACT_APP_SERVER_URL + "/categories/" + params.id, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    setItems([]);
  };

  const handleUpdateItem = async (data) => {
    //Quizás un modal para no desarrollar un componente para esto?
    await axios.patch(
      process.env.REACT_APP_SERVER_URL + "/categories",
      { data },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );
  };

  const handleAddItem = async (data) => {
    //Quizás un modal para no desarrollar un componente para esto?
    await axios.post(
      process.env.REACT_APP_SERVER_URL + "/categories",
      { data },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );
  };

  return (
    <div>
      {items ? (
        <div>
          <NavBar />
          <ToastContainer />
          <Container>
            <h1>Items</h1>
            <FontAwesomeIcon icon={faSearch} onClick={() => handleAddItem()} className="me-2" />
            <Row className="p-3">
              <Col xs={8} className="border rounded shadow p-3">
                <ul>
                  {items.items.map((i) => {
                    return (
                      <li key={i._id} className="border rounded ">
                        <Row>
                          <Col xs={3} className="p-3  me-3">
                            <img src={i.img} alt={i.name} />
                          </Col>
                          <Col className="p-3 pt-5">
                            <div>
                              <h6>{i.name}</h6>
                            </div>
                            <Col>
                              <div>
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  onClick={() => handleUpdateItem(i)}
                                  className="me-2"
                                />
                                <FontAwesomeIcon
                                  icon={faMinus}
                                  onClick={() => {
                                    handleDeleteItem(i);
                                  }}
                                />
                              </div>
                            </Col>
                          </Col>
                        </Row>
                      </li>
                    );
                  })}
                  <Button size="sm" onClick={handleDeleteItems} className="mt-2">
                    DANGER ZONE : Delete everything
                  </Button>
                </ul>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      ) : (
        <div>
          <NavBar />
          <Container>
            <h1>Sin elementos</h1>
          </Container>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ItemsTable;
