import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row align-items-center">
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
