
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
        <h1 className="text-3xl sm:text-4xl text-center text-white">Projects</h1>
        <div className="projects-container mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          <div className="project-item p-4 text-white text-center rounded ">
            <p className="text-lg sm:text-2xl text-gray-100">Programming Course platform</p>
            <p className="text-xs sm:text-sm text-teal-400">Spring, Hibernate, React, PostgreSQL, AWS</p>
            <img className="w-full h-[240px] object-cover rounded mt-4" src={courseImage} alt="project 1 image" />
            <a
              href="https://github.com/Grodelek/course_project"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-300 mt-4 block"
            >
              View on GitHub
            </a>
          </div>
          <div className="project-item p-4 text-white text-center rounded ">
            <p className="text-lg sm:text-2xl text-gray-100">E-commerce Application</p>
            <p className="text-xs sm:text-sm text-teal-400">Spring, Hibernate, Thymeleaf, MySQL</p>
            <img className="w-full h-[240px] object-cover rounded mt-4" src={course2Image} alt="project 2 image" />
            <a
              href="https://github.com/Grodelek/Spring-e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-300 mt-4 block"
            >
              View on GitHub
            </a>
          </div>
          <div className="project-item p-4 text-white text-center rounded ">
            <p className="text-lg sm:text-2xl text-gray-100">Programming Course platform</p>
            <p className="text-xs sm:text-sm text-teal-400">Symfony, DoctrineORM, Twig, MySQL</p>
            <img className="w-full h-[240px] object-cover rounded mt-4" src={course3Image} alt="project 3 image" />
            <a
              href="https://github.com/Grodelek/Symfony_Flashcards"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-300 mt-4 block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

