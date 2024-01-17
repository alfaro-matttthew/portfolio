export default function MobileContent({ title, technologies, imageSrc, summary, liveLink, repoLink, caseStudyLink, design }) {

    return (
        <div>
            <div className=" col-12">
            <div className=' mt-3 d-lg-none'>
                    <div className=" card-title text-decoration-none work-title font-san-serif fs-1  text-uppercase">
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
                    design === 'web' ? 
                    <div>
                        <div className="social-btn">
                            <a href={liveLink} target="_blank" className=" px-2 fs-5 font-serif text-decoration-none">
                                live site
                            </a>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5" stroke="#28231D"></path>
                                <polyline points="8 1 12 5 8 9" stroke="#28231D"></polyline>
                            </svg>
                        </div>
                        <div className="social-btn">
                            <a href={repoLink} target="_blank" className=" px-2 fs-5 font-serif text-decoration-none">
                                github repo
                            </a>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5" stroke="#28231D"></path>
                                <polyline points="8 1 12 5 8 9" stroke="#28231D"></polyline>
                            </svg>
                        </div>
                    </div>
                    : 
                    <div className="social-btn">
                        <a href={caseStudyLink} target="_blank" className=" px-2 fs-5 font-serif text-decoration-none">
                            case study
                        </a>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5" stroke="#28231D"></path>
                            <polyline points="8 1 12 5 8 9" stroke="#28231D"></polyline>
                        </svg>
                    </div>
                }
    
            </div>
            </div>
        </div>
    )
}
