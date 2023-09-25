import React from 'react';
import ProjectCard from './ProjectCard';


export default function WebDesignWork() {
  const projects = [
    {
      title: 'Mad Man Brewery',
      technologies: ['Package Design', 'Photoshop', 'Hand-Drawn'],
      imageSrc: '/images/mad-man-brewery.png',
      caseStudyLink: 'https://www.behance.net/gallery/180659879/Mad-Man-Brewery-Beer-Labels',
      design: 'graphic',
    },
    {
      title: 'Burgersaro',
      technologies: ['Branding', 'Photoshop', 'Illustrator', 'Hand-Drawn'],
      imageSrc: '/images/burgersaro.png',
      caseStudyLink: 'https://www.behance.net/gallery/170088891/Burgersaro-Package-Design-Brand-Collateral-Material',
      design: 'graphic',
    },
    {
      title: 'Puddles',
      technologies: ['Package Design', 'Illustrator', 'Photoshop'],
      imageSrc: '/images/puddles-cover.png',
      caseStudyLink: 'https://www.behance.net/gallery/180660239/Puddles-Dog-Shampoo-Brand',
      design: 'graphic',
    },
    {
      title: 'Bohu Jo',
      technologies: ['Logo Design', 'Poly Bag Design', 'Photoshop'],
      imageSrc: '/images/bohu-jo.png',
      caseStudyLink: 'https://www.behance.net/gallery/180660021/Bohu-Jo-Coffee-Logo-and-Coffee-Package',
      design: 'graphic',
    },
    {
      title: 'Ardent Brew',
      technologies: ['Logo Design', 'Chipboard Package Design', 'Illustrator'],
      imageSrc: '/images/ardent-tea.jpg',
      caseStudyLink: 'https://www.behance.net/gallery/180660109/Ardent-Brew-Tea-Logo-and-Tea-Packaging',
      design: 'graphic',
    },
    {
      title: 'CORE Fashion',
      technologies: ['Logo Design', 'Digital & Traditional Marketing', 'Photoshop'],
      imageSrc: '/images/core-poster.png',
      caseStudyLink: 'https://www.behance.net/gallery/170345509/CORE-Fashion-DIGITAL-TRADITIONAL-MARKETING',
      design: 'graphic',
    },
  ];

  return (
    <div className='row'>
      {projects.map((project, index) => (
        <div className='col-12 col-md-6 col-lg-4'>
            <ProjectCard key={index} {...project} />
        </div>
      ))}
    </div>
  );
}