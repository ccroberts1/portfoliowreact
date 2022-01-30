import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Project from "./pages/Project";
import Resume from "./pages/Resume";

import projectsArray from "../projectsArray.js";

const ContentContainer = () => {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    if (currentPage === "About Me") {
      return <AboutMe />;
    } else if (currentPage === "Project") {
      return <Project projectsArray={projectsArray} />;
    } else if (currentPage === "Contact Me") {
      return <ContactMe />;
    } else {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
};

export default ContentContainer;
