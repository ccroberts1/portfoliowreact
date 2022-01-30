import "../../styles/MyWork.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({ projectsArray }) {
  return (
    <div className="col-12 d-flex flex-wrap justify-content-center" id="myWork">
      {projectsArray.map((project) => (
        <div className="card col-10 col-lg-5 m-3">
          <img
            src={project.imgUrl}
            className="card-img-top"
            alt={project.imgAlt}
          />
          <div className="card-body">
            <h4 className="card-title">{project.cardTitle}</h4>
            <h5 className="card-text">{project.cardTech}</h5>
            <div>
              <Button
                variant="outline-light"
                href={project.gitHubBtn}
                className="btn-card fw-bold m-1"
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </Button>
              <Button
                variant="outline-light"
                href={project.deployedBtn}
                className="btn-card fw-bold m-1"
              >
                Deployed Application
              </Button>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
}
