import "../../styles/MyWork.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MyWork = () => {
  return (
    <div className="col-12 d-flex flex-wrap justify-content-center" id="myWork">
      <div className="card col-10 col-lg-5 m-3">
        <img
          src="images/happycamperScreenshot.png"
          className="card-img-top"
          alt="screenshot of deployed Happy Camper application"
        />
        <div className="card-body">
          <h4 className="card-title">Happy Camper</h4>
          <h5 className="card-text">Bulma/MySQL/Express/Handlebars</h5>
          <div>
            <Button
              variant="outline-light"
              href="https://github.com/afarr002/TrailTrack"
              className="btn-card fw-bold m-1"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </Button>
            <Button
              variant="outline-light"
              href="https://floating-shelf-98484.herokuapp.com/home"
              className="btn-card fw-bold m-1"
            >
              Deployed Application
            </Button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="card col-10 col-lg-5 m-3">
        <img
          src="images/venuefinderScreenshot.png"
          className="card-img-top"
          alt="screenshot of deployed Venue Finder application"
        />
        <div className="card-body">
          <h4 className="card-title">Venue Finder</h4>
          <h5 className="card-text">Bootstrap/Javascript</h5>
          <div>
            <Button
              variant="outline-light"
              href="https://github.com/mattgrogandev/venuefinder"
              className="btn-card fw-bold m-1"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </Button>
            <Button
              variant="outline-light"
              href="https://mattgrogandev.github.io/venuefinder/"
              className="btn-card fw-bold m-1"
            >
              Deployed Application
            </Button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="card col-10 col-lg-5 m-3">
        <img
          src="images/dayPlannerScreenshot.png"
          className="card-img-top"
          alt="Screenshot of deployed Day Planner application"
        />
        <div className="card-body">
          <h4 className="card-title">Day Planner</h4>
          <h5 className="card-text">Bootstrap/jQuery/Moment.js</h5>
          <div>
            <Button
              variant="outline-light"
              href="https://github.com/ccroberts1/day-planner"
              className="btn-card fw-bold m-1"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </Button>
            <Button
              variant="outline-light"
              href="https://ccroberts1.github.io/day-planner/"
              className="btn-card fw-bold m-1"
            >
              Deployed Application
            </Button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="card col-10 col-lg-5 m-3">
        <img
          src="images/screenshotCLI.png"
          className="card-img-top"
          alt="screenshot of Employee Manager CLI app"
        />
        <div className="card-body">
          <h4 className="card-title">Employee Manager</h4>
          <h5 className="card-text">Node.js/Jest/Inquirer/MySQL2</h5>
          <div>
            <Button
              variant="outline-light"
              href="https://github.com/ccroberts1/employee-manager"
              className="btn-card fw-bold m-1"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </Button>
            <Button
              variant="outline-light"
              href="https://www.youtube.com/watch?v=FZ2DXaF0smM"
              className="btn-card fw-bold m-1"
            >
              Deployed Application
            </Button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="card col-10 col-lg-5 m-3">
        <img
          src="images/weatherdashboard.png"
          className="card-img-top"
          alt="Screenshot of the weather dashboard"
        />
        <div className="card-body">
          <h4 className="card-title">Weather Dashboard</h4>
          <h5 className="card-text">
            JavaScript/Bootstrap/Open Weather Map API
          </h5>
          <div>
            <Button
              variant="outline-light"
              href="https://github.com/ccroberts1/weather-dashboard"
              className="btn-card fw-bold m-1"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </Button>
            <Button
              variant="outline-light"
              href="https://ccroberts1.github.io/weather-dashboard/"
              className="btn-card fw-bold m-1"
            >
              Deployed Application
            </Button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="card col-10 col-lg-5 m-3">
        <img
          src="images/fantasyQuizScreenshot.png"
          className="card-img-top"
          alt="screenshot of deployed fantasy quiz application"
        />
        <div className="card-body">
          <h4 className="card-title">Fantasy Quiz</h4>
          <h5 className="card-text">JavaScript/HTML/CSS</h5>
          <div>
            <Button
              variant="outline-light"
              href="https://github.com/ccroberts1/fantasy-quiz"
              className="btn-card fw-bold m-1"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </Button>
            <Button
              variant="outline-light"
              href="https://ccroberts1.github.io/fantasy-quiz/"
              className="btn-card fw-bold m-1"
            >
              Deployed Application
            </Button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default MyWork;
