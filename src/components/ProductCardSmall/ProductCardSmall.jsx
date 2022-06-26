import axios from "axios";
import { useState, useEffect } from "react";

const ProductCardSmall = ({ productId }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/products/${productId}`);
      setProduct(response.data);
    };
    getProduct();
  }, []);

  return (
    <>
      {product && (
        <div
          className="d-flex flex-column align-items-center"
          style={{
            height: "17rem",
            maxHeight: "17rem",
          }}
        >
          <img
            className="flex-grow-1"
            src={product.picture[0]}
            style={{ maxWidth: "13rem", height: "12rem" }}
          ></img>

          <span
            className="tx-size-md pt-2"
            style={{ height: "4rem", width: "80%", textAlign: "center" }}
          >
            {product.name}
          </span>
        </div>
      )}
    </>
  );
};

export default ProductCardSmall;
