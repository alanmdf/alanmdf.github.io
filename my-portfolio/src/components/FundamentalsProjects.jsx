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
      <h1 className="titles-text">_html + js projects</h1>
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
  );
}

export default Projects;
