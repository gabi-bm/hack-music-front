import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function DatabaseResetSpinner() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 10000);

  return (
    <div className="container justify-content-center align-items-center">
      <Spinner animation="border" role="status" className="mt-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default DatabaseResetSpinner;
