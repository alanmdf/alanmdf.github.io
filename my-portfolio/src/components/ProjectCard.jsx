import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ projectThumb, projectDescription }) {
  return (
    <div className="project-card">
      <div className="thumb-img-div">
        <img src={ projectThumb } alt="" />
      </div>
      <p>{projectDescription}</p>
    </div>
  );
}

ProjectCard.propTypes = {
  projectThumb: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
};

export default ProjectCard;
