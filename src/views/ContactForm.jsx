const ContactForm = () => {
    return (
        <>
            <article>
                <h1>How can we help you?</h1>
            </article>
            <form action="">
                <p>Email</p>
                <input type="email" placeholder="Enter your mail here" />
                <p>Description</p>
                <input
                    type="text"
                    placeholder="Tell us more of what cake you want"
                />
            </form>
        </>
    );
};
export default ContactForm;
