import ContactForm from "../partials/ContactForm.js";
const ContactMe = () => {
  return (
    <div className="col-12 d-flex justify-content-center flex-column">
      <h2 className="text-center">Contact Me</h2>
      <p className="lead text-center">
        If you have a project you'd like to collaborate on, please feel free to
        reach out!
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactMe;
