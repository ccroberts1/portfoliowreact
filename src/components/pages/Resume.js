import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const Resume = () => {
  return (
    <div class="col-12">
      <div class="col-12">
        <h2 class="text-center">Resume</h2>
        <p class="lead text-center">
          Click <a href="../public/CaitlinRobertsResume.pdf">here</a> for a
          downloadable PDF format of my resume
        </p>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Skills</Card.Title>
            <Card.Text>
              If you want a quick glance at what I'm skilled with, check the
              list below.
            </Card.Text>
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
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
