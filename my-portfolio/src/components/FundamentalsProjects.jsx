/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import ProjectCard from './ProjectCard';

import LessonsLearnedThumb from '../images/lessons-learned-thumb.jpeg';
import PixelsArtThumb from '../images/pixels-art-thumb.jpeg';
import ToDoListThumb from '../images/to-do-list-thumb.jpeg';
import MemeGeneratorThumb from '../images/meme-generator-thumb.jpeg';
import GuessTheColorThumb from '../images/guess-the-color-thumb.jpeg';
import MisteryLetterThumb from '../images/mistery-letter-thumb.jpeg';
import TrybewartsThumb from '../images/trybewarts-thumb.jpeg';

function Projects() {
  const [divStatus, setDivStatus] = useState(false);

  function toggleProjectsDiv() {
    setDivStatus((prevState) => !prevState);
    const div = document.getElementsByClassName('web-projects-section');
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
          _html + js
        </h1>
        {divStatus
          ? <FontAwesomeIcon icon={ faAngleRight } />
          : <FontAwesomeIcon icon={ faAngleDown } />}
      </div>
      <section className="web-projects-section">
        <ProjectCard
          projectThumb={ LessonsLearnedThumb }
          projectDescription="Primeiro projeto 😅"
          projectURL="https://alanmdf.github.io/lessons-learned"
        />
        <ProjectCard
          projectThumb={ PixelsArtThumb }
          projectDescription="Desenhe com pixels! ✍"
          projectURL="https://alanmdf.github.io/pixels-art"
        />
        <ProjectCard
          projectThumb={ ToDoListThumb }
          projectDescription="Crie uma lista dinâmica de tarefas 📌"
          projectURL="https://alanmdf.github.io/todo-list"
        />
        <ProjectCard
          projectThumb={ MemeGeneratorThumb }
          projectDescription="Meme Generator! 😎"
          projectURL="https://alanmdf.github.io/meme-generator"
        />
        <ProjectCard
          projectThumb={ GuessTheColorThumb }
          projectDescription="Adivinhe a cor 🤔"
          projectURL="https://alanmdf.github.io/color-guess"
        />
        <ProjectCard
          projectThumb={ MisteryLetterThumb }
          projectDescription="Carta misteriosa 📬"
          projectURL="https://alanmdf.github.io/mistery-letter"
        />
        <ProjectCard
          projectThumb={ TrybewartsThumb }
          projectDescription="Inscreva-se na Trybewarts! 🧙"
          projectURL="https://alanmdf.github.io/trybewarts"
        />
      </section>
    </>
  );
}

export default Projects;
