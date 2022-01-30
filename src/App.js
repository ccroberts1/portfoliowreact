import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <>
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
