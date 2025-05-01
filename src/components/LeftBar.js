import './leftBar.css';
export default function LeftBar({ onSectionChange }) {
  return (
    <div className="left-bar">
      <p>$ Hello! I'm <span className="firstNameColor">Artur Grodel</span>, a passionate <span className="specializationColor">Software Engineer</span> from Poland<span className="cursor"></span></p>

      <div className="projects-bar" onClick={() => onSectionChange('Projects')}>
        <h2 style={{ color: '#f38ba8', cursor: 'pointer' }}>Projects</h2>
      </div>

      <div className="experience-bar" onClick={() => onSectionChange('Experience')}>
        <h2 style={{ color: '#8be9fd', cursor: 'pointer' }}>Experience</h2>
      </div>

      <div className="education-bar" onClick={() => onSectionChange('Education')}>
        <h2 style={{ color: '#bd93f9', cursor: 'pointer' }}>Education</h2>
      </div>
      <div class="tech-box">
        <p class="credentials-first2">Tech Stack</p>
        <p class="tech-p credentials-first text-first-section text-white">
          <i class="fa-brands fa-java"></i> Java
        </p>
        <p class="tech-p credentials-first text-first-section text-white">
          <i class="fa-solid fa-leaf"></i> Spring
        </p>
        <p class="tech-p credentials-first text-first-section text-white">
          <i class="fa-solid fa-cube"></i> Hibernate
        </p>
        <p class="tech-p credentials-first text-first-section text-white">
          <i class="fa-brands fa-git-alt"></i> Git
        </p>
        <p class="tech-p credentials-first text-first-section text-white">
          <i class="fa-brands fa-php"></i> Php
        </p>
        <p class="tech-p credentials-first text-first-section text-white">
          <i class="fa-brands fa-symfony"></i> Symfony
        </p>
        <p class="tech-p credentials-first text-first-section text-white">
          <i class="fa-solid fa-database"></i> MySQL
        </p>
        <p class="tech-p credentials-first text-first-section text-white">
          <i class="fa-brands fa-html5"></i> HTML
        </p>
        <p class="tech-p credentials-first text-first-section text-white">
          <i class="fa-brands fa-css3-alt"></i> CSS
        </p>
      </div>
    </div>
  );
}

