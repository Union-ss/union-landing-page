import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Navbar from "./components/sections/Navbar";
import Products from "./components/sections/Products";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/sections/Footer";
import AboutUs from "./components/sections/AboutUs";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />

      <Features />

      <Products />

      <Pricing />

      <Testimonials />

      <AboutUs />

      <Contact />

      <Footer />
    </div>
  );
};

export default App;
