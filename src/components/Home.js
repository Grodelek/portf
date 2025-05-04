
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Home() {
  return (
    <div className="home-terminal bg-black text-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl text-green-400 mb-4">Hello! My name is Artur!</h1>
      <h2 className="subtitle text-xl text-gray-400 mb-6">I'm a Software Engineer</h2>

      <p className="hover-effect mb-3">
        <span className="label text-teal-400">Name:</span> Artur Grodel
      </p>
      <p className="hover-effect mb-3">
        <span className="label text-teal-400">Education:</span> Third year Computer Science Student
      </p>
      <p className="hover-effect mb-3">
        <span className="label text-teal-400">Email:</span> a.grodel55@gmail.com
      </p>
      <p className="hover-effect mb-3">
        <span className="label text-teal-400">Location:</span> Elbląg, Poland
      </p>

      <a href="https://github.com/Grodelek" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className="text-white hover:text-gray-400 mr-4" />
      </a>

      <a href="https://www.linkedin.com/in/artur-grodel-91aabb279/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-blue-400" />
      </a>
      <div className="bg-gray-900 p-6 mt-8 rounded-lg shadow-md">
        <h3 className="text-2xl text-green-400 mb-4">My Tech Stack</h3>
        <p className="text-sm sm:text-base text-gray-300 mb-4">
          I'm passionate about the following technologies:
        </p>
        <ul className="text-gray-200 space-y-2">
          <li><strong className="text-green-400">Spring</strong> - A powerful framework for building Java-based applications.</li>
          <li><strong className="text-green-400">Hibernate</strong> - A Java ORM for efficient database management.</li>
          <li><strong className="text-green-400">Java</strong> - A robust language for building scalable, high-performance applications.</li>
          <li><strong className="text-green-400">Git</strong> - A version control system for collaboration and code management.</li>
          <li><strong className="text-green-400">SQL</strong> - A language for querying and manipulating relational databases.</li>
          <li><strong className="text-green-400">Symfony</strong> - A PHP framework for building efficient web applications.</li>
        </ul>
      </div>
    </div>
  );
}

