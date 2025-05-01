
import React from 'react';
import Home from '../Home.js';
import courseImage from '../../images/course-zdjecie.png';
import course2Image from '../../images/e-commerce.png';
import course3Image from '../../images/fiszki.png';

export default function Projects() {
  return (
    <div>
      <Home />
      <div className="section-terminal">
        <h1>Projects</h1>
        <div className="projects-container mt-10 grid h-auto grid-cols-3 content-evenly gap-3">
          <div className="w-auto m-10-auto py-4 text-white text-center rounded">
            <p className="text-2xl text-gray-100">Programming Course platform</p>
            <p className="text-sm" style={{ color: '#8be9fd' }}>Spring, Hibernate, React, PostgreSQL, AWS</p>
            <img className="w-[auto] h-[240px] object-cover rounded" src={courseImage} alt="project 1 image" />
            <a href="https://github.com/Grodelek/course_project" target="_blank" rel="noopener noreferrer" className="underline">
              View on GitHub
            </a>
          </div>
          <div className="w-auto m-10-auto py-4 text-white text-center rounded">
            <p className="text-2xl text-gray-100">E-commerce Application</p>
            <p className="text-sm" style={{ color: '#8be9fd' }}>Spring, Hibernate, Thymeleaf, MySQL</p>
            <img className="w-[auto] h-[240px] object-cover rounded" src={course2Image} alt="project 2 image" />
            <a href="https://github.com/Grodelek/Spring-e-commerce" target="_blank" rel="noopener noreferrer" className="underline">
              View on GitHub
            </a>
          </div>
          <div className="w-auto m-10-auto py-4 text-white text-center rounded">
            <p className="text-2xl text-gray-100">Programming Course platform</p>
            <p className="text-sm" style={{ color: '#8be9fd' }}>Symfony, DoctrineORM, Twig, MySQL</p>
            <img className="w-[auto] h-[240px] object-cover rounded" src={course3Image} alt="project 3 image" />
            <a href="https://github.com/Grodelek/Symfony_Flashcards" target="_blank" rel="noopener noreferrer" className="underline">
              View on GitHub
            </a>
          </div>        </div>
      </div>
    </div>
  );
}

