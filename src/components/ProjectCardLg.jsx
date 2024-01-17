import React, { useState } from 'react';

export default function ProjectCardLg({ title, technologies, imageSrc, liveLink, repoLink, caseStudyLink, design }) {

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
          <div className="h-100 w-100 black-transparent d-none d-lg-flex justify-content-center align-items-center " style={overlayStyle}>
            {
              designStatus === 'web' ? 
              <div>
                <a href={liveLink} target="_blank" className="px-2 fs-5 font-serif-w text-decoration-none">
                  live site
                </a>
                <a href={repoLink} target="_blank" className="px-2 fs-5 border-start font-serif-w text-decoration-none">
                  github repo
                </a>
              </div>
              : 
              <div>
                <a href={caseStudyLink} target="_blank" className="px-2 fs-5 font-serif-w text-decoration-none">
                  case study
                </a>
              </div> 
            }
          </div>
        </div>
      </div>
      <div className="card-body bg-none">
        <div className=" col-12">
          {/* <a className="card-title text-decoration-none mt-2 work-title font-san-serif fs-1 lh-1 text-uppercase">
            {title}
          </a>
          <div className="card-text body-font lh-sm">
            {technologies.map((tech, index) => (
              <span key={index} className="pe-2">
                {tech}
              </span>
            ))}
          </div> */}
          {/* <div className='mt-3 d-lg-none'>
           
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
 
          </div> */}
        </div>
      </div>
      </div>
    );
}