/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import ProjectCard from './ProjectCard';

import FrontEndStore from '../images/frontend-online-store-thumb.png';
import MovieCardLibrary from '../images/movie-card-library-thumb.png';
import GhostDevsStopWatch from '../images/ghostdevs-stopwatch.png';
import TrybeWallet from '../images/trybewallet-thumb.png';
import TriviaGame from '../images/trivia-react-redux-thumb.png';
import StarWarsSearch from '../images/starwars-thumb.png';
import RecipesApp from '../images/recipes-app-thumb.png';

function Projects() {
  const [divStatus, setDivStatus] = useState(false);

  function toggleProjectsDiv() {
    setDivStatus((prevState) => !prevState);
    const div = document.getElementsByClassName('frontend-projects-section');
    if (!divStatus) {
      div[0].style.display = 'none';
    } else {
      div[0].style.display = '';
    }
  }
  return (
    <>
      <div className="section-header" onClick={ () => toggleProjectsDiv() }>
        <h1
          className="titles-text"
        >
          _react + bootstrap
        </h1>
        {divStatus
          ? <FontAwesomeIcon icon={ faAngleRight } />
          : <FontAwesomeIcon icon={ faAngleDown } />}
      </div>
      <section className="frontend-projects-section">
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
    </>
  );
}

export default Projects;
