import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { logoutUser } from "../../Redux/userSlice";
import { resetCart } from "../../Redux/cartSlice";

const OffcanvasInfo = () => {
  const dispatch = useDispatch();

  //Offcanvas state
  const [show, setShow] = useState(false);

  const [resetMsg, setResetMsg] = useState(null);

  const handleClose = () => {
    setResetMsg(null);
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleResetDB = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/reset");
      console.log(response);
      dispatch(logoutUser());
      dispatch(resetCart());
      if (response.status === 200) {
        setResetMsg(response.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button variant="custom" className="custom-btn floatingRightNavigation" onClick={handleShow}>
        Navigation guide
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <strong>Navigation guide</strong>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          HackMusic is an e-commerce site created as the final project of Hack Academy's Coding
          Bootcamp. It was developed in 3 weeks by 4 students.
          <Offcanvas.Title className="mt-4">User Login credentials:</Offcanvas.Title>
          <ul className="mt-2">
            <li>
              <strong>Email:</strong> user@user.com
            </li>
            <li>
              <strong>Password:</strong> user
            </li>
          </ul>
          <Offcanvas.Title>Admin login credentials:</Offcanvas.Title>
          <ul className="mt-2">
            <li>
              <strong>Email:</strong> admin@admin.com
            </li>
            <li>
              <strong>Password:</strong> admin
            </li>
          </ul>
          <div className="d-flex flex-column mt-4">
            <strong>Consider reseting the database for a better experience</strong>
            <Button variant="custom" className="custom-btn mt-2" onClick={handleResetDB}>
              Reset Database
            </Button>
          </div>
          {resetMsg && (
            <p className="custom-alert alert-success fs-6 mt-2" role="alert">
              {resetMsg}
            </p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasInfo;
