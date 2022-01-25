import React, { useState } from "react";
import "../styles/Form.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
  const [contactName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //FIXME: input change not functioning correctly, only works in msg
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "contactName") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMsg(inputValue);
    }
  };
  //TODO:Validation needs to be when cursor clicks away, not on submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!contactName) {
      alert("Name is required");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }
  };

  return (
    <div>
      <Form noValidate>
        <Form.Group className="mb-3" controlId="Form.ControlName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            onChange={handleInputChange}
            value={contactName}
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
            required
            onChange={handleInputChange}
            value={msg}
            as="textarea"
            rows={3}
          ></Form.Control>
        </Form.Group>
        <Button variant="dark" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
