import { Carousel } from "react-bootstrap";
import ProductCardSmall from "../ProductCardSmall/ProductCardSmall";
import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

function ProductsCarousel() {
  const [popularProducts, setPopularProducts] = useState(null);
  useEffect(() => {
    const getPopularProducts = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/products?premium=true");
      setPopularProducts(response.data);
    };
    getPopularProducts();
  }, []);

  return (
    <section>
      {popularProducts && (
        <div>
          <Carousel variant="dark">
            <Carousel.Item>
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "85%", margin: "0 auto", padding: "50px 0" }}
              >
                {popularProducts.slice(8, 13).map((prod, index) => {
                  return (
                    <Link to={"/product/" + prod._id}>
                      <ProductCardSmall key={prod._id} productId={prod._id} />
                    </Link>
                  );
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "85%", margin: "0 auto", padding: "50px 0" }}
              >
                {popularProducts.slice(0, 4).map((prod, index) => {
                  return (
                    <Link to={"/product/" + prod._id}>
                      <ProductCardSmall key={prod._id} productId={prod._id} />
                    </Link>
                  );
                })}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "85%", margin: "0 auto", padding: "50px 0" }}
              >
                {popularProducts.slice(4, 8).map((prod, index) => {
                  return (
                    <Link to={"/product/" + prod._id}>
                      {" "}
                      <ProductCardSmall key={prod._id} productId={prod._id} />
                    </Link>
                  );
                })}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </section>
  );
}

export default ProductsCarousel;

{
  /* <img
className="d-block w-100"
src="holder.js/800x400?text=First slide&bg=373940"
alt="First slide"
/>
<Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption> */
}

{
  /* <Carousel.Item className="d-flex justify-content-between">
<ProductCardSmall color="red" />
<ProductCardSmall color="red" />
<ProductCardSmall color="red" />
</Carousel.Item>
<Carousel.Item className="d-flex justify-content-between">
<ProductCardSmall color="blue" />
<ProductCardSmall color="blue" />
<ProductCardSmall color="blue" />
</Carousel.Item>
<Carousel.Item className="d-flex justify-content-between">
<ProductCardSmall color="yellow" />
<ProductCardSmall color="yellow" />
<ProductCardSmall color="yellow" />
</Carousel.Item> */
}
