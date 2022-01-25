import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import AboutMe from "./components/AboutMe";
// import MyWork from "./components/MyWork";
// import ContactMe from "./components/ContactMe";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row align-items-center">
          <Hero />
          <ContentContainer />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
