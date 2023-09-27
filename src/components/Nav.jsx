import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="justify-content-start">
                <Navbar.Brand>Happy cake 🍰</Navbar.Brand>
                <Link to="/" className="text-white ms-3 text-decoration-none">
                    🏠 Home
                </Link>
                <Link
                    to="/planes"
                    className="text-white ms-3 text-decoration-none">
                    📃 Contact
                </Link>
            </Container>
        </Navbar>
    );
};
export default Nav;