import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardLg from './ProjectCardLg';



export default function WebDesignWork() {
  const projects = [
    {
      title: 'CORE Fashion',
      technologies: ['Logo Design', 'Digital & Traditional Marketing', 'Photoshop'],
      imageSrc: '/images/core-poster.png',
      summary: "CORE Fashion aimed to carve its identity among teenagers and young adults by blending youthful edge with high-end sophistication. Through a strategic design process, a distinctive color scheme and taglines were developed, contributing to the creation of a logo, website mock-up, and diverse marketing materials. The cohesive use of vibrant yet restrained colors, along with a balance of maximalist techniques, reinforced the brand's message of self-confidence and the fusion of youth and adulthood. Utilizing Adobe Photoshop, Illustrator, and Premiere Pro, the project seamlessly integrated hand-drawn elements into the digital realm.",
      caseStudyLink: 'https://www.behance.net/gallery/170345509/CORE-Fashion-DIGITAL-TRADITIONAL-MARKETING',
      design: 'graphic',
      featured: true,
    },
    {
      title: 'Mad Man Brewery',
      technologies: ['Package Design', 'Photoshop', 'Hand-Drawn'],
      imageSrc: '/images/mad-man-brewery.png',
      summary: `Tasked with crafting labels for a stout and porter beer brand, the goal was to captivate local grocer customers. Balancing a dark palette with expressiveness, I opted for black and white designs with hand-drawn typography and unique "mad man" illustrations. Executed in Adobe Photoshop, the project seamlessly blended analog and digital elements.`,
      caseStudyLink: 'https://www.behance.net/gallery/180659879/Mad-Man-Brewery-Beer-Labels',
      design: 'graphic',
      featured: false,
    },
    {
      title: 'Burgersaro',
      technologies: ['Branding', 'Photoshop', 'Illustrator', 'Hand-Drawn'],
      imageSrc: '/images/burgersaro-02.png',
      summary: "Burgersaro, a concept college town burger start-up targeting rebellious college students, sought a brand identity and marketing materials. Utilizing a black and white palette with orange accents, the project included wordmark and emblem logos, menu designs, collateral for cups and bags, stickers, and wrapping paper. The grunge-inspired style, achieved through hand-drawn sketches and digital integration in Adobe Photoshop and Illustrator, delivers a distinctive and rebelliously unique brand.",
      caseStudyLink: 'https://www.behance.net/gallery/170088891/Burgersaro-Package-Design-Brand-Collateral-Material',
      design: 'graphic',
      featured: false,
    },
    {
      title: 'Puddles',
      technologies: ['Package Design', 'Illustrator', 'Photoshop'],
      imageSrc: '/images/puddles-cover.png',
      summary: "The client sought a logo, cylindrical shampoo bottle packaging, and social media posts for a pet grooming brand. Balancing high-end aesthetics with cuteness, the emblem logo features a dog in boots, complemented by a bubbly color scheme mimicking human product designs. Social media posts, created with Adobe Photoshop and Illustrator, utilize minimalist images and vibrant colors for product emphasis.",
      caseStudyLink: 'https://www.behance.net/gallery/180660239/Puddles-Dog-Shampoo-Brand',
      design: 'graphic',
      featured: false,
    },
    {
      title: 'Bohu Jo',
      technologies: ['Logo Design', 'Poly Bag Design', 'Photoshop'],
      imageSrc: '/images/bohu-jo-medium.png',
      summary: "A concept coffee company, the project involved crafting dynamic designs for whole bean and ground coffee bags. Reflecting the exhilarating experience of Bohu Jo coffee, the black palette with warm accents and hand-drawn doodles creates a visually stimulating package. Emphasizing wakefulness, eyes are highlighted in the figures. Adobe Photoshop was used for digital integration after hand-sketching each element.",
      caseStudyLink: 'https://www.behance.net/gallery/180660021/Bohu-Jo-Coffee-Logo-and-Coffee-Package',
      design: 'graphic',
      featured: false,
    },
    {
      title: 'Ardent Brew',
      technologies: ['Logo Design', 'Chipboard Package Design', 'Illustrator'],
      imageSrc: '/images/ardent-tea-assorted-01a.jpg',
      summary: `The tea company rebrand focused on a monogram logo, incorporating the letter "A" to convey a sense of flourishing life and refinement. Each variety box, representing different tea flavors, featured a minimal design with carefully chosen colors. The illustrative logo, depicting vines growing from the center, symbolized vitality and was strategically placed to command attention. The entire project was executed in Adobe Illustrator.`,
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