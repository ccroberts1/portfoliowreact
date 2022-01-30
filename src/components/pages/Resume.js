import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import "../../styles/Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center">
      <h2 className="text-center">Resume</h2>
      <p className="lead text-center p-3">
        <FontAwesomeIcon icon={faFilePdf} />
        <a
          id="resume"
          href="https://drive.google.com/file/d/1uotFTH18Y3UuEJEUNWM9yQj72BbLoAeu/view?usp=sharing"
        >
          Resume
        </a>
      </p>
      <Card className="text-center my-3">
        <Card.Body>
          <Card.Title>Skills</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>HTML5/CSS3</ListGroup.Item>
          <ListGroup.Item>Bootstrap and Bulma frameworks </ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>Node.js</ListGroup.Item>
          <ListGroup.Item>Express.js</ListGroup.Item>
          <ListGroup.Item>MySQL and MongoDB</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
          <ListGroup.Item>Website Design</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Resume;
