import React from "react";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import ProjectGallery from "./components/ProjectGallary";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <SearchBar />
      <HeroSection />
      <ContentSection />
      <ProjectGallery />
    </div>
  );
};

export default App;
