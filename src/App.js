import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header, Hero } from "./layout";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Hero />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
