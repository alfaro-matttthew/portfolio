import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardLg from './ProjectCardLg';



export default function WebDesignWork() {
  const projects = [
    {
      title: 'CORE Fashion',
      technologies: ['Logo Design', 'Digital & Traditional Marketing', 'Photoshop'],
      imageSrc: '/images/core-poster.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      caseStudyLink: 'https://www.behance.net/gallery/170345509/CORE-Fashion-DIGITAL-TRADITIONAL-MARKETING',
      design: 'graphic',
      featured: true,
    },
    {
      title: 'Mad Man Brewery',
      technologies: ['Package Design', 'Photoshop', 'Hand-Drawn'],
      imageSrc: '/images/mad-man-brewery.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      caseStudyLink: 'https://www.behance.net/gallery/180659879/Mad-Man-Brewery-Beer-Labels',
      design: 'graphic',
      featured: false,
    },
    {
      title: 'Burgersaro',
      technologies: ['Branding', 'Photoshop', 'Illustrator', 'Hand-Drawn'],
      imageSrc: '/images/burgersaro.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      caseStudyLink: 'https://www.behance.net/gallery/170088891/Burgersaro-Package-Design-Brand-Collateral-Material',
      design: 'graphic',
      featured: false,
    },
    {
      title: 'Puddles',
      technologies: ['Package Design', 'Illustrator', 'Photoshop'],
      imageSrc: '/images/puddles-cover.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      caseStudyLink: 'https://www.behance.net/gallery/180660239/Puddles-Dog-Shampoo-Brand',
      design: 'graphic',
      featured: false,
    },
    {
      title: 'Bohu Jo',
      technologies: ['Logo Design', 'Poly Bag Design', 'Photoshop'],
      imageSrc: '/images/bohu-jo.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      caseStudyLink: 'https://www.behance.net/gallery/180660021/Bohu-Jo-Coffee-Logo-and-Coffee-Package',
      design: 'graphic',
      featured: false,
    },
    {
      title: 'Ardent Brew',
      technologies: ['Logo Design', 'Chipboard Package Design', 'Illustrator'],
      imageSrc: '/images/ardent-tea.jpg',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      caseStudyLink: 'https://www.behance.net/gallery/180660109/Ardent-Brew-Tea-Logo-and-Tea-Packaging',
      design: 'graphic',
      featured: false,
    },
  ];

  return (
    <div className='row'>
      {projects.map((project, index) => (       
             projects[index].featured ? (
              <div className='col-12'>
                <ProjectCardLg key={index} {...project} />
              </div>
            ) : (
              <div className='col-12 col-md-6'>
                <ProjectCard key={index} {...project} />
                </div>
            )
      ))}
    </div>
  );
}