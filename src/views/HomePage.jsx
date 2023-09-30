import { Container } from "react-bootstrap";

const HomePage = () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Welcome to <strong>Happy Cake</strong> 🍰
            </h1>
            <h6>Happiest cakes in town</h6>
            <article className="icon">🎂</article>
        </Container>
    );
};
export default HomePage;
