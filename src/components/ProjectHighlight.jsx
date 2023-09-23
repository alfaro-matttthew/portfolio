import React, { useState } from 'react';

export default function ProjectHighlight({ title, technologies, imageSrc, liveLink, repoLink }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const overlayStyle = {
    display: isHovered ? 'flex' : 'none',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out'
  };

  return (
    <div className='pb-5 border-0 site-bg mx-2'>
        <div className='row'>
            <div className='col-8'>
                <img
                  src={imageSrc}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
            </div>
            <div className='col-4 d-flex flex-column align-items-start'>
                <h3>{title}</h3>
                <div className="d-flex flex-column align-items-start">
                    {technologies.map((tech, index) => (
                    <span key={index} className="pe-2">
                        {tech}
                    </span>
                    ))}
                </div>
            </div>
        </div>
        <div className='row'>

        </div>
    </div>
  );
}
