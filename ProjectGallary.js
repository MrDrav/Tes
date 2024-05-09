import React, { useEffect, useState } from "react";
import "../styles.css";

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        imageSrc:
          "https://images.unsplash.com/photo-1519415382585-a4aa237f4292?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Nature Photography",
        title: "Forest Views",
        link: "forest-views.html",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Urban Landscapes",
        title: "City Nights",
        link: "city-nights.html",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Architectural Designs",
        title: "Modern Structures",
        link: "modern-structures.html",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Wildlife Captures",
        title: "Into The Wild",
        link: "into-the-wild.html",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Ocean Depths",
        title: "Sea Adventures",
        link: "sea-adventures.html",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1540205082-e56e180508a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Tech Innovations",
        title: "Gadgets and Gizmos",
        link: "gadgets-gizmos.html",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Artistic Expressions",
        title: "Canvas Creations",
        link: "canvas-creations.html",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Historical Journeys",
        title: "Ancient Times",
        link: "ancient-times.html",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1530915368198-2a4c364f6164?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Floral Beauty",
        title: "Garden Explorations",
        link: "garden-explorations.html",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Aerial Shots",
        title: "Sky High",
        link: "sky-high.html",
      },
    ]);
  }, []);

  return (
    <div id="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img
            className="project__image"
            src={project.imageSrc}
            alt={project.title}
          />
          <p>{project.category}</p>
          <h3 className="grid__title">{project.title}</h3>
          <button onClick={() => (window.location.href = project.link)}>
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;