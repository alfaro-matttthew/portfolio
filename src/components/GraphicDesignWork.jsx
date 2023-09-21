import React from 'react';
import ProjectCard from './ProjectCard';


export default function WebDesignWork() {
  const projects = [
    {
      title: 'Mad Man Brewery',
      technologies: ['Package Design', 'Photoshop', 'Hand-Drawn'],
      imageSrc: '/images/mad-man-brewery.png',
      liveLink: '#', // Replace with actual live site link
      repoLink: 'https://github.com/Jlausier/LawnShark',
    },
    {
      title: 'Burgersaro',
      technologies: ['Branding', 'Photoshop', 'Illustrator', 'Hand-Drawn'],
      imageSrc: '/images/burgersaro.png',
      liveLink: 'https://still-spire-90353-025f487cfe63.herokuapp.com',
      repoLink: 'https://github.com/Jlausier/WalletWizzard',
    },
    {
      title: 'Puddles',
      technologies: ['Package Design', 'Illustrator', 'Photoshop'],
      imageSrc: '/images/puddles-cover.png',
      liveLink: 'https://github.com/Jlausier/AFK-Coop',
      repoLink: 'https://jlausier.github.io/AFK-Coop/',
    },
    {
      title: 'Bohu Jo',
      technologies: ['Logo Design', 'Poly Bag Design', 'Photoshop'],
      imageSrc: '/images/bohu-jo.png',
      liveLink: 'https://still-spire-90353-025f487cfe63.herokuapp.com',
      repoLink: 'https://github.com/Jlausier/WalletWizzard',
    },
    {
      title: 'Ardent Brew',
      technologies: ['Logo Design', 'Chipboard Package Design', 'Illustrator'],
      imageSrc: '/images/ardent-tea.jpg',
      liveLink: 'https://github.com/Jlausier/AFK-Coop',
      repoLink: 'https://jlausier.github.io/AFK-Coop/',
    },
    {
      title: 'CORE Fashion',
      technologies: ['Logo Design', 'Digital & Traditional Marketing', 'Photoshop'],
      imageSrc: '/images/core-poster.png',
      liveLink: 'https://github.com/Jlausier/AFK-Coop',
      repoLink: 'https://jlausier.github.io/AFK-Coop/',
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