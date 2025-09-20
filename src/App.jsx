import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Results from "./components/Results/Results";
import Locations from "./components/Locations/Locations";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Results />
      <Locations />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
