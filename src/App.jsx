import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Collection />
        <Contact />
      </main>

      <Footer />

    </div>
  );
};

export default App;