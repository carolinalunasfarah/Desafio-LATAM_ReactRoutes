import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar bg="warning" className="navBar">
            <section className="navigation">
                <Link to="/" className="navLink">
                    Home
                </Link>
                <Link to="/catalogue" className="navLink">
                    Catalogue
                </Link>
                <Link to="/contact" className="navLink">
                    Contact
                </Link>
            </section>
            <section className="navBrandContainer">
                <Navbar.Brand>
                    <strong className="navBrand">Happy cake 🍰</strong>
                </Navbar.Brand>
            </section>
        </Navbar>
    );
};
export default NavigationBar;
