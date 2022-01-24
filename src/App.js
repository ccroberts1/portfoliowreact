import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import AboutMe from "./components/AboutMe";
// import MyWork from "./components/MyWork";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row align-items-center">
          <Hero />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
