//Front interaction
import Footer from "../Footter/Footer";
import NavBar from "../Navbar/Navbar";

//Functional methods and frameworks
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Visual methods and frameworks
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";

function ItemsTable() {
  //Lista de items de lo que sea
  const [items, setItems] = useState(null);

  //Me tengo que traer al user de la store para mandar el JWT.
  const user = useSelector((state) => state.user);

  //Pido params cada tanto en las llamadas a la API
  const params = useParams();

  //Al primer render
  useEffect(() => {
    const handleGetItems = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/categories`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setItems(response.data);
      console.log(response.data);
    };

    handleGetItems();
  }, []);

  const handleDeleteItem = async () => {
    await axios.delete(process.env.REACT_APP_SERVER_URL + `/categories/` + params.id, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  };

  /* const handleDeleteItems = async () => {
    //Faltaría esta llamada explosiva! Pongo en duda si es realmente necesaria
    await axios.delete(process.env.REACT_APP_SERVER_URL + "/categories/" + params.id, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    setItems([]);
  }; */

  const handleUpdateItem = async (data) => {
    //Quizás un modal para no desarrollar un componente para esto?
    await axios.patch(
      process.env.REACT_APP_SERVER_URL + `/categories`,
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
      process.env.REACT_APP_SERVER_URL + `/categories`,
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
          <Container>
            <h1>Items</h1>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Products</th>
                  <th>Status</th>
                  <th>Total price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  return (
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <FontAwesomeIcon icon={faSearch} onClick={() => handleAddItem()} className="me-2" />
            <FontAwesomeIcon icon={faPlus} onClick={() => handleUpdateItem()} className="me-2" />
            <FontAwesomeIcon
              icon={faMinus}
              onClick={() => {
                handleDeleteItem();
              }}
            />
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <h1>Sin elementos</h1>
          </Container>
        </div>
      )}
    </div>
  );
}

export default ItemsTable;
