import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className="mb-4 d-flex justify-content-center">
        <a
          href="https://github.com/ccroberts1"
          className="btn btn-outline-light btn-floating m-3"
          role="button"
        >
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/caitlincoyroberts/"
          className="btn btn-outline-light btn-floating m-3"
          role="button"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          href="https://twitter.com/caitlincroberts"
          className="btn btn-outline-light btn-floating m-3"
          role="button"
        >
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
      </section>
    </footer>
  );
};

export default Footer;
