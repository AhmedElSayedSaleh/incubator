import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header, Hero } from "./layout";

const App = () => {
  return (
    <div>
      <BrowserRouter basename={"/incubator"}>
        <Header />
        <Hero />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
