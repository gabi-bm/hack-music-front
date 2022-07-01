import "./MultiCarousel.css";
import ProductCardSmall from "../ProductCardSmall/ProductCardSmall";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MultiCarousel = ({ carouselProducts }) => {
  return (
    carouselProducts && (
      <Container>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true} //this.props.deviceType !== "mobile" ? true : false
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="transform 700ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={""} //["tablet", "mobile"]
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {carouselProducts.map((product) => {
            return (
              <Link
                to={"/product/" + product._id}
                key={product._id}
                style={{ color: "var(--first-color)" }}
              >
                <ProductCardSmall productId={product._id} />
              </Link>
            );
          })}
        </Carousel>
      </Container>
    )
  );
};

export default MultiCarousel;
