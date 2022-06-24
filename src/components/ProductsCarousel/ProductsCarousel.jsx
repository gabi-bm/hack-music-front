import { Carousel } from "react-bootstrap";
import ProductCardSmall from "../ProductCardSmall/ProductCardSmall";

import axios from "axios";
import { useState, useEffect } from "react";

function ProductsCarousel() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const getPopularProducts = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/products?premium=true");
      setPopularProducts(response.data);
    };
    getPopularProducts();
  }, []);

  return (
    <section>
      {console.log(popularProducts[0])}
      <h2>POPULAR PRODUCTS</h2>
      <Carousel variant="dark">
        <Carousel.Item>
          <div
            className="d-flex justify-content-evenly"
            style={{ width: "85%", margin: "0 auto", padding: "50px 0" }}
          >
            {/* <ProductCardSmall productId={popularProducts[0]._id} /> */}
            {/* <ProductCardSmall product={popularProducts[1]} />
            <ProductCardSmall product={popularProducts[2]} />
            <ProductCardSmall product={popularProducts[3]} /> */}
          </div>
        </Carousel.Item>
        {/* <Carousel.Item>
          <div
            className="d-flex justify-content-evenly"
            style={{ width: "85%", margin: "0 auto", padding: "50px 0" }}
          >
            <ProductCardSmall product={popularProducts[0]} />
            <ProductCardSmall product={popularProducts[0]} />
            <ProductCardSmall product={popularProducts[0]} />
            <ProductCardSmall product={popularProducts[0]} />
          </div>
        </Carousel.Item> */}
      </Carousel>
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
