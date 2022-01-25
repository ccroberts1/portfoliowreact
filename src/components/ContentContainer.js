import React from "react";

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
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );
};

export default ContentContainer;
