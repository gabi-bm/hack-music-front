import "./ProcessingPaymentModal.css";
import { Modal } from "react-bootstrap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";

function ProcessingPaymentModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="d-flex align-items-center border-none"
    >
      <div
        style={{ width: "20rem", backgroundColor: "#f2f2f2" }}
        className="d-flex flex-column align-items-center border-nonde p-5"
      >
        <h5 className="pb-4" style={{ fontWeight: "200" }}>
          Processing payment...
        </h5>
        <Oval
          className="spinner"
          color="#ff5a00"
          secondaryColor="#f2f2f2"
          height={80}
          width={80}
          id="spinner"
          style={{ margin: "0 auto" }}
        />
      </div>
    </Modal>
  );
}

export default ProcessingPaymentModal;
