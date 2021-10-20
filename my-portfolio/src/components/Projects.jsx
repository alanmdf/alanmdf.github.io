import React from 'react';

import ProjectCard from './ProjectCard';

import LessonsLearnedThumb from '../images/lessons-learned-thumb.jpeg';
import PixelsArtThumb from '../images/pixels-art-thumb.jpeg';
import ToDoListThumb from '../images/to-do-list-thumb.jpeg';
import MemeGeneratorThumb from '../images/meme-generator-thumb.jpeg';
import GuessTheColorThumb from '../images/guess-the-color-thumb.jpeg';
import MisteryLetterThumb from '../images/mistery-letter-thumb.jpeg';
import TrybewartsThumb from '../images/trybewarts-thumb.jpeg';

function Projects() {
  return (
    <section className="web-projects-section">
      <h1 className="titles-text">_web projects</h1>
      <a target="_blank" href="projects/project-lessons-learned/index.html">
        <ProjectCard
          projectThumb={ LessonsLearnedThumb }
          projectDescription="Primeiro projeto &#128517"
        />
      </a>
      <a target="_blank" href="projects/project-pixels-art/index.html">
        <ProjectCard
          projectThumb={ PixelsArtThumb }
          projectDescription="Desenhe com pixels! &#9997"
        />
      </a>
      <a target="_blank" href="projects/project-todo-list/index.html">
        <ProjectCard
          projectThumb={ ToDoListThumb }
          projectDescription="Crie uma lista dinâmica de tarefas &#128204"
        />
      </a>
      <a target="_blank" href="projects/project-meme-generator/index.html">
        <ProjectCard
          projectThumb={ MemeGeneratorThumb }
          projectDescription="Meme Generator! &#128526"
        />
      </a>
      <a target="_blank" href="projects/project-color-guess/index.html">
        <ProjectCard
          projectThumb={ GuessTheColorThumb }
          projectDescription="Adivinhe a cor &#129300"
        />
      </a>
      <a target="_blank" href="projects/project-mistery-letter/">
        <ProjectCard
          projectThumb={ MisteryLetterThumb }
          projectDescription="Carta misteriosa &#128231"
        />
      </a>
      <a target="_blank" href="projects/project-trybewarts/index.html">
        <ProjectCard
          projectThumb={ TrybewartsThumb }
          projectDescription="Inscreva-se na Trybewarts! &#129497<"
        />
      </a>
    </section>
  );
}

export default Projects;
