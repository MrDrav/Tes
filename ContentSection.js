import React from "react";
import "../styles.css";

const ContentSection = () => {
  const articles = [
    {
      title: "Ondel-ondel",
      description:
        "Ondel-ondel are iconic figures of Jakarta that were originally used to ward off evil spirits or wandering souls. However, their function has now shifted to entertainment during celebrations or thanksgiving events.",
      imgSrc: "ondel.jpg",
      imgAlt: "Ondel-ondel",
    },
    // Add other articles similarly
  ];

  return (
    <div className="wrapper">
      {articles.map((article, index) => (
        <article key={index} className={`article article-${index + 1}`}>
          <figure className={`featured-image-${index + 1}`}>
            <img src={article.imgSrc} alt={article.imgAlt} />
          </figure>
          <div className={`number-${index + 1}`}>{index + 1}</div>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </article>
      ))}
    </div>
  );
};

export default ContentSection;
