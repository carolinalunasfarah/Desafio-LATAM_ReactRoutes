const ContactForm = () => {
    return (
        <>
            <section className="homePage">
                <div className="contactPage">
                    <article>
                        <h2>How can we help you?</h2>
                    </article>
                    <form>
                        <p>Email</p>
                        <input
                            type="email"
                            placeholder="Enter your mail here"
                        />
                        <p>Description</p>
                        <input className="formDescription" type="text" />
                    </form>
                </div>
            </section>
        </>
    );
};
export default ContactForm;
