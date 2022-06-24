import axios from "axios";
import { useState, useEffect } from "react";

const ProductCardSmall = ({ productId }) => {
  console.log(productId);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/products/${productId}`);
      console.log(response);
      setProduct(response.data);
    };
    getProduct();
  });

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        maxWidth: "15rem",
        height: "17rem",
        maxHeight: "17rem",
        border: "10px solid rgba(202, 202, 202, 0.2)",
      }}
    >
      <img
        src={"https://i.postimg.cc/yNB1LV2h/percussion-santana-front.jpg"}
        style={{ width: "80%" }}
      ></img>

      <span className="tx-size-md" style={{ width: "80%", textAlign: "center" }}>
        {/* {product.name} */}name
      </span>
    </div>
  );
};

export default ProductCardSmall;
