// Import Css File
import "./App.css";

// Import Components
import Home from "./components/home/Home";
import Feature from "./components/features/Feature";
import About from "./components/about/About";
import OurMenu from "./components/menu/OurMenu";
import OurGallery from "./components/gallery/OurGallery";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Feature />
      <About />
      <OurMenu />
      <OurGallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
