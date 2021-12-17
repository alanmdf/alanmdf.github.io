import React from 'react';

import ProjectCard from './ProjectCard';

import FrontEndStore from '../images/frontend-online-store-thumb.png';
import MovieCardLibrary from '../images/movie-card-library-thumb.png';
import GhostDevsStopWatch from '../images/ghostdevs-stopwatch.png';
import TrybeWallet from '../images/trybewallet-thumb.png';
import TriviaGame from '../images/trivia-react-redux-thumb.png';
import StarWarsSearch from '../images/starwars-thumb.png';
import RecipesApp from '../images/recipes-app-thumb.png';

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
      <ProjectCard
        projectThumb={ GhostDevsStopWatch }
        projectDescription="Temporizador assustador 👻"
        projectURL="https://alanmdf.github.io/ghostdevs-stopwatch"
      />
      <ProjectCard
        projectThumb={ TrybeWallet }
        projectDescription="Carteira com conversor de moedas 💵💶💷"
        projectURL="https://alanmdf.github.io/trybewallet"
      />
      <ProjectCard
        projectThumb={ TriviaGame }
        projectDescription="Qual a resposta certa? 👀🤔✅"
        projectURL="https://alanmdf.github.io/trivia-react-redux/"
      />
      <ProjectCard
        projectThumb={ StarWarsSearch }
        projectDescription="Planetas de StarWars 🚀🌑"
        projectURL="https://alanmdf.github.io/starwars-planets-search/"
      />
      <ProjectCard
        projectThumb={ RecipesApp }
        projectDescription="Descubra receitas incríveis! 👨‍🍳📙 "
        projectURL="https://alanmdf.github.io/recipes-app/"
      />
    </section>
  );
}

export default Projects;
