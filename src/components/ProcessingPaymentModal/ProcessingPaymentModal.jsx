import { Modal, Button } from "react-bootstrap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";

function ProcessingPaymentModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Oval className="spinner" color="#00BFFF" height={80} width={80} />
    </Modal>
  );
}

export default ProcessingPaymentModal;
