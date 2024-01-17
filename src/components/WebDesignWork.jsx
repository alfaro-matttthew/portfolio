import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardLg from './ProjectCardLg';
import ProjectHighlight from './ProjectHighlight';



export default function WebDesignWork() {
  const projects = [
    {
      title: 'Lawn Shark',
      technologies: ['MongoDB', 'Express', 'React', 'Node'],
      imageSrc: '/images/lawnshark-cover.png',
      summary: `As the Lead Front-End Developer for LawnShark, a pioneering networking and freelancing platform, the goal was to create a seamless user experience within the React library. The design aimed for cleanliness and professionalism, ensuring trust and credibility. Custom interfaces for customers and companies were developed, incorporating reusable React components and Bootstrap for streamlined styling. The collaborative approach between front-end and back-end teams, coupled with technologies like JavaScript, Bootstrap, and MongoDB, culminated in a sophisticated and user-friendly platform, setting a new standard in connecting users with lawn care professionals.`,
      liveLink: 'https://www.behance.net/gallery/188426167/LawnShark-React-Web-Application',
      repoLink: 'https://github.com/Jlausier/LawnShark',
      design: 'web',
      featured: true,
    },
    {
      title: 'Wallet Wizard',
      technologies: ['Handlebars', 'Tailwind', 'Graph.js'],
      imageSrc: '/images/wallet-wizard-screen.png',
      summary: ``,
      liveLink: 'https://still-spire-90353-025f487cfe63.herokuapp.com',
      repoLink: 'https://github.com/Jlausier/WalletWizzard',
      design: 'web',
      featured: false,
    },
    {
      title: 'AFK',
      technologies: ['DOM Manipulation', 'Tailwind'],
      imageSrc: '/images/afk-screen.png',
      summary: ``,
      liveLink: 'https://jlausier.github.io/AFK-Coop/',
      repoLink: 'https://github.com/Jlausier/AFK-Coop',
      design: 'web',
      featured: false,
    },
    {
      title: 'CORE Fashion',
      technologies: ['CSS', 'HTML'],
      imageSrc: '/images/core-screen.png',
      summary: ``,
      liveLink: 'https://alfaro-matttthew.github.io/core-fashion/',
      repoLink: 'https://github.com/alfaro-matttthew/core-fashion',
      design: 'web',
      featured: false,
    },
    {
      title: 'Lobby Klink',
      technologies: ['CSS', 'HTML'],
      imageSrc: '/images/lobby-klink-screen.png',
      summary: ``,
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