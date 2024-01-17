import React, { useState } from 'react';
import OverlayContent from './OverlayContent';
import MobileContent from './MobileContent';

export default function ProjectCard({ title, technologies, imageSrc, summary, liveLink, repoLink, caseStudyLink, design }) {

  const projectInfo = {
    title: title,
    technologies: technologies,
    imageSrc: imageSrc,
    summary: summary,
    liveLink: liveLink,
    repoLink: repoLink,
    caseStudyLink: caseStudyLink,
    design: design,
  }

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

  const designStatus = design
  const web = 'A'
  const graphic = 'B'
  console.log(designStatus);

  return (
    <div className="border-0 site-bg mb-4 display-card-style">
      <div className=" card-img-top bg-img gx-0 mb-4 mb-md-1 mb-lg-0 row" style={{ height: '400px' }}>
        <div
          className="col-12 aspect-ratio-style"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className=" h-100 w-100 black-transparent d-none d-lg-flex justify-content-center align-items-center " style={overlayStyle}>
              <OverlayContent {...projectInfo}/>
          </div>
        </div>
      </div>
      <div className=" bg-none">
        <MobileContent {...projectInfo}/>
      </div>
    </div>
  );
}
