import React from "react";
import Navbar from "./components/Navbar";
import BannerSlider from "./components/Banner";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerSlider />
      <Services />
    </div>
  );
}

export default App;
