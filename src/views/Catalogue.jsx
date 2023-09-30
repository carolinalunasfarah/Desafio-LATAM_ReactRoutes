import Carousel from "react-bootstrap/Carousel";
// images
import cake1 from "../assets/img/1cake.jpg";
import cake2 from "../assets/img/2cake.jpg";
import cake3 from "../assets/img/3cake.jpg";
import cake4 from "../assets/img/4cake.jpg";
import cake5 from "../assets/img/5cake.jpg";
import cake6 from "../assets/img/6cake.jpg";
import cake7 from "../assets/img/7cake.jpg";
import cake8 from "../assets/img/8cake.jpg";
import cake9 from "../assets/img/9cake.jpg";
import cake10 from "../assets/img/10cake.jpg";

function UncontrolledExample() {
    return (
        <Carousel className="carouselContainer">
            <Carousel.Item className="carouselItem">
                <img src={cake1} className="carouselImg" alt="Pistachio cake" />
                <Carousel.Caption className="carouselCaption">
                    <h3>Pistachio</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    src={cake2}
                    className="carouselImg"
                    alt="Fruits of forest cake"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>Fruits of the forest</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    src={cake9}
                    className="carouselImg"
                    alt="Fruits of forest mini cakes"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>Fuits of the forest mini cakes</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img src={cake3} className="carouselImg" alt="Fruity cake" />
                <Carousel.Caption className="carouselCaption">
                    <h3>Summer vibes</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    src={cake5}
                    className="carouselImg"
                    alt="Pomegranate and chia seeds cake"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>Pomegranate and chia seeds</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img src={cake6} className="carouselImg" alt="Carrot cake" />
                <Carousel.Caption className="carouselCaption">
                    <h3>Carrot</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img src={cake7} className="carouselImg" alt="Fruity pie" />
                <Carousel.Caption className="carouselCaption">
                    <h3>Fuity pie</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    src={cake4}
                    className="carouselImg"
                    alt="Chocolate and peanut butter cupcake"
                />
                <Carousel.Caption className="carouselCaption">
                    <h3>Chocolate and peanut butter cupcake</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img src={cake10} className="carouselImg" alt="Brownie" />
                <Carousel.Caption className="carouselCaption">
                    <h3>Brownie</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img src={cake8} className="carouselImg" alt="Wedding cake" />
                <Carousel.Caption className="carouselCaption">
                    <h3>Wedding cake</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
