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
          className="d-flex flex-column align-items-center justify-content-end"
          style={{
            height: "20rem",
            minHeight: "20rem",
            width: "100%",
          }}
        >
          <img
            src={product.picture[0]}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "70%",
              maxHeight: "calc(85% - 4rem)",
            }}
            alt={product.name}
          ></img>

          <span
            className="tx-size-md pt-2"
            style={{ height: "4rem", width: "80%", textAlign: "center", textDecoration: "none" }}
          >
            {product.name}
          </span>
        </div>
      )}
    </>
  );
};

export default ProductCardSmall;
