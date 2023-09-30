import notFound from "../assets/img/notFound.svg";

const NotFound = () => {
    return (
        <section className="homePage">
            <h3 className="notFound">
                💔 The page you are looking for doesn't exist 💔
            </h3>
            <img className="notFoundImg" src={notFound} alt="Sad fake draw" />
        </section>
    );
};
export default NotFound;
