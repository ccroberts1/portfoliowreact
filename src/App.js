import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div class="container-fluid">
        <div class="row align-items-center">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
