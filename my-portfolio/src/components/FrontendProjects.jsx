import React from 'react';

import ProjectCard from './ProjectCard';

import FrontEndStore from '../images/frontend-online-store-thumb.png';
import MovieCardLibrary from '../images/movie-card-library-thumb.png';

function Projects() {
  return (
    <section className="web-projects-section">
      <h1 className="titles-text">_react + bootstrap projects</h1>
      <ProjectCard
        projectThumb={ FrontEndStore }
        projectDescription="É hora das compras! 🛒"
        projectURL="https://alanmdf.github.io/frontend-online-store"
      />
      <ProjectCard
        projectThumb={ MovieCardLibrary }
        projectDescription="Escolha o filme 🎬"
        projectURL="https://alanmdf.github.io/movie-card-library"
      />
    </section>
  );
}

export default Projects;
