import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slides from "./components/Slides";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
    
      <Navbar />

      <h1 className="title">Welcome to my Portfolio!</h1>
      <Details />
      <p className="description"> I am a web developer with a strong background in creating dynamic and responsive web applications. 
        
      </p>
      <Slides />
      <Footer />

      </div>


    </>
  );
}

export default App;
