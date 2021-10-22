import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ projectThumb, projectDescription, projectURL }) {
  return (
    <a target="_blank" href={ projectURL } rel="noreferrer">
      <div className="project-card">
        <div className="thumb-img-div">
          <img src={ projectThumb } alt="" />
        </div>
        <p>{projectDescription}</p>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  projectThumb: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectURL: PropTypes.string.isRequired,
};

export default ProjectCard;
