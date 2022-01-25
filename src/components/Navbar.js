import "../styles/Navbar.css";

//TODO: Finish conditional rendering for navbar
function Navbar({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#aboutMe"
                  onClick={() => handlePageChange("About Me")}
                  className={
                    currentPage === "About Me" ? "nav-link active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#myWork">
                  My Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactMe">
                  Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="./assets/CaitlinRobertsResume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
