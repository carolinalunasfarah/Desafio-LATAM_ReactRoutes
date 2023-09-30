import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar bg="warning">
            <Container className="navigation">
                <Link to="/" className="text-black ms-3 text-decoration-none">
                    🏠 Home
                </Link>
                <Link
                    to="/contact"
                    className="text-black ms-3 text-decoration-none">
                    📃 Contact
                </Link>
                <Link
                    to="/catalogue"
                    className="text-black ms-3 text-decoration-none">
                    📷 Catalogue
                </Link>
                <Navbar.Brand>Happy cake 🍰</Navbar.Brand>
            </Container>
        </Navbar>
    );
};
export default NavigationBar;
