import React from 'react';
import ProjectCard from './ProjectCard';


export default function WebDesignWork() {
  const projects = [
    {
      title: 'Lawn Shark',
      technologies: ['MongoDB', 'Express', 'React', 'Node'],
      imageSrc: '/images/lawn-shark.png',
      liveLink: '#', // Replace with actual live site link
      repoLink: 'https://github.com/Jlausier/LawnShark',
    },
    {
      title: 'Wallet Wizard',
      technologies: ['Handlebars', 'Tailwind', 'Graph.js'],
      imageSrc: '/images/wallet-wizard.png',
      liveLink: 'https://still-spire-90353-025f487cfe63.herokuapp.com',
      repoLink: 'https://github.com/Jlausier/WalletWizzard',
    },
    {
      title: 'AFK',
      technologies: ['DOM Manipulation', 'Tailwind'],
      imageSrc: '/images/afk.png',
      liveLink: 'https://jlausier.github.io/AFK-Coop/',
      repoLink: 'https://github.com/Jlausier/AFK-Coop',
    },
    {
      title: 'CORE Fashion',
      technologies: ['CSS', 'HTML'],
      imageSrc: '/images/core-fashion.png',
      liveLink: 'https://alfaro-matttthew.github.io/core-fashion/',
      repoLink: 'https://github.com/alfaro-matttthew/core-fashion',
    },
    {
      title: 'Lobby Klink',
      technologies: ['CSS', 'HTML'],
      imageSrc: '/images/lobby-kink.png',
      liveLink: 'https://alfaro-matttthew.github.io/lobby-klink/',
      repoLink: 'https://github.com/alfaro-matttthew/lobby-klink',
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