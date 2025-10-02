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
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Products Section */}
      <Products />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <AboutUs />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
