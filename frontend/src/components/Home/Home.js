import React, { Fragment, useEffect } from "react";
import ProductCard from "./ProductCard";
// import "../../assets/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container } from "react-bootstrap";
import { CarouselContainer, IMGCarouse } from "../boxContainer/common";
// import "../../assets/user.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import PIC1 from "../../assets/img/GPU/ASUS TUF Gaming NVIDIA GeForce RTX 3070 Ti OC Edition 1.jpg";
import PIC2 from "../../assets/img/GPU/Radeon RX 6700 XT Gaming OC 12G 1.jpg";
import PIC3 from "../../assets/img/GPU/GIGABYTE AMD Radeon RX 6800 XT Gaming OC 16G 1.jpg";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Gaming Gear" />
          <CarouselContainer>
            <Carousel fade>
              <Carousel.Item interval={3000}>
                <IMGCarouse
                  className="d-block w-100"
                  src={PIC1}
                  alt="First slide"
                  
                />
                <Carousel.Caption>
                <div style={{backgroundColor:"black", borderRadius:"10px", padding:"15px"}}><h3>ASUS TUF Gaming NVIDIA GeForce RTX 3070 Ti OC Edition</h3>
                  <p>
                    Graphics Card (PCIe 4.0, 8GB GDDR6X, HDMI 2.1, DisplayPort
                    1.4a, Dual Ball Fan Bearings, Military-Grade Certification,
                    GPU Tweak II)
                  </p></div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <IMGCarouse
                  className="d-block w-100"
                  src={PIC2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <div style={{backgroundColor:"black", borderRadius:"10px", padding:"15px"}}><h3>
                    ASUS ROG Strix AMD Radeon RX 6700 XT OC Edition Gaming
                  </h3>
                  <p>
                    Graphics Card AMD RDNA 2, PCIe 4.0, 12GB GDDR6, HDMI 2.1,
                    DisplayPort 1.4a, Axial-tech Fan Design, 2.9-Slot, Super
                    Alloy Power II, GPU Tweak II
                  </p></div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <IMGCarouse
                  className="d-block w-100"
                  src={PIC3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                <div style={{backgroundColor:"black", borderRadius:"10px", padding:"15px"}}><h3>GIGABYTE AMD Radeon RX 6800 XT Gaming OC 16G</h3>
                  <p>
                    Graphics Card 16GB of GDDR6 Memory, Powered by AMD RDNA 2,
                    HDMI 2.1, WINDFORCE 3X Cooling System, GV-R68XTGAMING
                    OC-16GD
                  </p></div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </CarouselContainer>
          <div>
            <h2 className="homeHeading">Sản Phẩm</h2>
          </div>
          <Container>
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </Container>
        </Fragment>
      )}
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Home;
