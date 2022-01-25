import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import Resume from "./pages/Resume";

const ContentContainer = () => {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    if (currentPage === "About Me") {
      return <AboutMe />;
    } else if (currentPage === "My Work") {
      return <MyWork />;
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
    </>
  );
};

export default ContentContainer;
