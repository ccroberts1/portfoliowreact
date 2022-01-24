import "../styles/Form.css";
import Form from "react-bootstrap/Form";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [validate, setValidate] = useState("false");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidate(true);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <Form noValidate validated={validate} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Form.ControlName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            onChange={handleInputChange}
            value={name}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            onChange={handleInputChange}
            value={email}
            type="email"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlMsg">
          <Form.Label>Message</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={msg}
            as="textarea"
            rows={3}
          ></Form.Control>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Form;
