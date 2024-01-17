import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardLg from './ProjectCardLg';
import ProjectHighlight from './ProjectHighlight';



export default function WebDesignWork() {
  const projects = [
    {
      title: 'Lawn Shark',
      technologies: ['MongoDB', 'Express', 'React', 'Node'],
      imageSrc: '/images/lawn-shark-color.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      liveLink: 'https://www.behance.net/gallery/188426167/LawnShark-React-Web-Application',
      repoLink: 'https://github.com/Jlausier/LawnShark',
      design: 'web',
      featured: true,
    },
    {
      title: 'Wallet Wizard',
      technologies: ['Handlebars', 'Tailwind', 'Graph.js'],
      imageSrc: '/images/wallet-wizard-color.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      liveLink: 'https://still-spire-90353-025f487cfe63.herokuapp.com',
      repoLink: 'https://github.com/Jlausier/WalletWizzard',
      design: 'web',
      featured: false,
    },
    {
      title: 'AFK',
      technologies: ['DOM Manipulation', 'Tailwind'],
      imageSrc: '/images/afk-color.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      liveLink: 'https://jlausier.github.io/AFK-Coop/',
      repoLink: 'https://github.com/Jlausier/AFK-Coop',
      design: 'web',
      featured: false,
    },
    {
      title: 'CORE Fashion',
      technologies: ['CSS', 'HTML'],
      imageSrc: '/images/core-fashion-color.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      liveLink: 'https://alfaro-matttthew.github.io/core-fashion/',
      repoLink: 'https://github.com/alfaro-matttthew/core-fashion',
      design: 'web',
      featured: false,
    },
    {
      title: 'Lobby Klink',
      technologies: ['CSS', 'HTML'],
      imageSrc: '/images/lobby-klink-color.png',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet augue dolor. Proin eleifend, tortor at dignissim efficitur, libero massa porta massa, quis semper neque velit et augue. Vivamus commodo ultricies massa, non tempus turpis tincidunt in. Sed ac lectus ultricies, commodo nunc at, pharetra diam. Quisque augue tortor, sollicitudin vel felis quis, fermentum pretium urna.',
      liveLink: 'https://alfaro-matttthew.github.io/lobby-klink/',
      repoLink: 'https://github.com/alfaro-matttthew/lobby-klink',
      design: 'web',
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