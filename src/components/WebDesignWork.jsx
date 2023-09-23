import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectHighlight from './ProjectHighlight';



export default function WebDesignWork() {
  const projects = [
    {
      title: 'Lawn Shark',
      technologies: ['MongoDB', 'Express', 'React', 'Node'],
      imageSrc: '/images/lawn-shark-color.png',
      liveLink: 'https://gentle-wildwood-36558-193385005281.herokuapp.com/',
      repoLink: 'https://github.com/Jlausier/LawnShark',
      design: 'web',
    },
    {
      title: 'Wallet Wizard',
      technologies: ['Handlebars', 'Tailwind', 'Graph.js'],
      imageSrc: '/images/wallet-wizard-color.png',
      liveLink: 'https://still-spire-90353-025f487cfe63.herokuapp.com',
      repoLink: 'https://github.com/Jlausier/WalletWizzard',
      design: 'web',
    },
    {
      title: 'AFK',
      technologies: ['DOM Manipulation', 'Tailwind'],
      imageSrc: '/images/afk-color.png',
      liveLink: 'https://jlausier.github.io/AFK-Coop/',
      repoLink: 'https://github.com/Jlausier/AFK-Coop',
      design: 'web',
    },
    {
      title: 'CORE Fashion',
      technologies: ['CSS', 'HTML'],
      imageSrc: '/images/core-fashion-color.png',
      liveLink: 'https://alfaro-matttthew.github.io/core-fashion/',
      repoLink: 'https://github.com/alfaro-matttthew/core-fashion',
      design: 'web',
    },
    {
      title: 'Lobby Klink',
      technologies: ['CSS', 'HTML'],
      imageSrc: '/images/lobby-klink-color.png',
      liveLink: 'https://alfaro-matttthew.github.io/lobby-klink/',
      repoLink: 'https://github.com/alfaro-matttthew/lobby-klink',
      design: 'web',
    },
  ];

  return (
    <div className='row'>
      {projects.map((project, index) => (
        <div className='col-4'>
            <ProjectCard key={index} {...project} />
        </div>
      ))}
    </div>
  );
}