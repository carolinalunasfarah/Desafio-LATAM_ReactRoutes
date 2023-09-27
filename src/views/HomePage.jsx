import { Container } from "react-bootstrap";

const HomePage = () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Welcome to <span className="fw-bold">Happy Cake</span> 🍰
            </h1>
            <h6>Happiest cakes in town</h6>
            <article>
                <article className="cake">🎂</article>
                <p>
                    Image 1. <strong>Home</strong> View
                </p>
                <p>Source: Desafío LATAM</p>
            </article>
        </Container>
    );
};
export default HomePage;
