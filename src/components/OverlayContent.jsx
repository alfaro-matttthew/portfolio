export default function OverlayContent({ title, technologies, imageSrc, summary, liveLink, repoLink, caseStudyLink, design }) {

    return (
        <div className='w-75'>
            <h2 className="card-title text-decoration-none mt-2 work-title font-san-serif-w fs-1 lh-1 text-uppercase">
                {title}
            </h2>
            <div className="card-text body-font-w lh-sm">
                {technologies.map((tech, index) => (
                <span key={index} className="pe-2">
                    {tech}
                </span>
                ))}
            </div>
            <hr className="font-san-serif-w" />
            <p className='body-font-w'>
                {summary}
            </p>
            { design === 'web' ?
                <div>
                    <div className="social-btn">
                        <a href={liveLink} target="_blank" className="social-btn px-2 fs-5 font-serif-w text-decoration-none">
                            live site
                        </a>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </div>
                    <div className="social-btn">
                        <a href={repoLink} target="_blank" className="social-btn px-2 fs-5 font-serif-w text-decoration-none">
                            github repo
                        </a>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </div>
                </div>
                :
                <div className="social-btn">
                    <a href={caseStudyLink} target="_blank" className="social-btn px-2 fs-5 font-serif-w text-decoration-none">
                        case study
                    </a>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </div>
            }

        </div>
    )
}
