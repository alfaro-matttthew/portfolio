import React, { useState } from 'react';
import OverlayContent from './OverlayContent';

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
    <div className="card site-bg mb-4 display-card-style">
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
        <div className=" col-12">
          <div className=' mt-3 d-lg-none'>
                  <div className=" card-title text-decoration-none work-title font-san-serif fs-1 lh-1 text-uppercase">
                    {title}
                  </div>
                  <div className="card-text body-font pb-2 lh-sm">
                    {technologies.map((tech, index) => (
                      <span key={index} className="pe-2">
                        {tech}
                      </span>
                    ))}
                  </div>
              {
                designStatus === 'web' ? 
                <div>
                  <a href={liveLink} target="_blank" className="me-2 pt-1 px-3 rounded-pill fs-6 border border-dark text-dark font-serif-w text-decoration-none">
                    live site
                  </a>
                  <a href={repoLink} target="_blank" className="me-2 pt-1 px-3 rounded-pill fs-6 border text-dark border-dark font-serif-w text-decoration-none">
                    github repo
                  </a>
                </div>
                : 
                <div>
                  <a href={caseStudyLink} target="_blank" className="me-2 pt-1 px-3 rounded-pill fs-6 border border-dark text-dark font-serif-w text-decoration-none">
                    case study
                  </a>
                </div> 
              }
 
          </div>
        </div>
      </div>
    </div>
  );
}
