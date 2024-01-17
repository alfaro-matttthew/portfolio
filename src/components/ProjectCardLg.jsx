import React, { useState } from 'react';
import OverlayContent from './OverlayContent';
import MobileContent from './MobileContent';

export default function ProjectCardLg({ title, technologies, imageSrc, summary, liveLink, repoLink, caseStudyLink, design }) {

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
      <div className="card border-0 site-bg">
      <div className="card-img-top bg-img gx-0 row" style={{ height: '600px' }}>
        <div
          className="col-12"
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
      <div className="card-body bg-none">
        <MobileContent {...projectInfo}/>
      </div>
      </div>
    );
}