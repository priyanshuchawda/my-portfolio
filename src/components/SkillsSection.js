import React from 'react';
import '../styles/SkillsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDatabase,
  faLaptopCode,
  faServer,
  faChartLine,
  faCogs,
  faBug,
  faHandshake,
  faUserTie,
  faRocket,
  faFileCode,
  faNetworkWired,
  faTerminal,
  faLanguage,
  faPalette,
  faCodeBranch,
  faCloud,
  faRobot,
  faFlask,
  faBookOpen,
  faFileAlt,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';

function SkillsSection() {
  return (
    <div className="skills">
      <h2>Technical Skills</h2>
      <h3>Basic Skills:</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faPalette} className="skill-icon" />
          HTML
        </li>
        <li>
          <FontAwesomeIcon icon={faPalette} className="skill-icon" />
          CSS
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faCodeBranch} className="skill-icon" />
          Git
        </li>
        <li>Responsive Design</li>
      </ul>
      <h3>Advanced Skills:</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" />
          React
        </li>
        <li>
          <FontAwesomeIcon icon={faServer} className="skill-icon" />
          Node.js
        </li>
        <li>
          <FontAwesomeIcon icon={faServer} className="skill-icon" />
          Express.js
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
          MongoDB
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          TypeScript
        </li>
        <li>GraphQL</li>
        <li>RESTful APIs</li>
        <li>
          <FontAwesomeIcon icon={faDocker} className="skill-icon" />
          Docker
        </li>
        <li>Cloud Services (AWS, Azure)</li>
      </ul>
      <h3>Languages:</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faLanguage} className="skill-icon" />
          C++
        </li>
        <li>
          <FontAwesomeIcon icon={faLanguage} className="skill-icon" />
          Python
        </li>
        <li>Go (Golang)</li>
        <li>Rust</li>
        <li>
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
          SQL (Advanced)
        </li>
        <li>Dart (Flutter)</li>
      </ul>
      <h3>Frontend:</h3>
      <ul>
        <li>Vue.js</li>
        <li>Svelte</li>
      </ul>
      <h3>Backend:</h3>
      <ul>
        <li>Redis</li>
        <li>Apache Kafka</li>
      </ul>
      <h3>Cloud & DevOps:</h3>
      <ul>
        <li>AWS</li>
        <li>GCP</li>
        <li>Azure</li>
        <li>Terraform</li>
        <li>Ansible</li>
        <li>Jenkins</li>
        <li>GitLab CI</li>
        <li>CircleCI</li>
      </ul>
      <h3>Blockchain/Smart Contracts:</h3>
      <ul>
        <li>Solidity</li>
        <li>Web3.js / Ethers.js</li>
      </ul>
      <h3>QA:</h3>
      <ul>
        <li>Jest</li>
        <li>Chai</li>
        <li>Cypress</li>
        <li>Mocha</li>
        <li>Test-Driven Development (TDD)</li>
      </ul>
      <h3>Data Science:</h3>
      <ul>
        <li>Numpy</li>
        <li>Pandas</li>
        <li>Jupyter Notebooks</li>
        <li>SQL</li>
        <li>Machine Learning (scikit-learn, TensorFlow, PyTorch)</li>
        <li>Data Visualization (Matplotlib, Seaborn, Plotly)</li>
        <li>Seaborn</li>
        <li>Plotly</li>
        <li>Big Data (Apache Spark, Hadoop)</li>
        <li>Hadoop</li>
      </ul>
      <h3>Other Tools & Skills:</h3>
      <ul>
        <li>Docker Compose</li>
        <li>Figma</li>
        <li>Sketch</li>
        <li>Content Management Systems (CMS)</li>
        <li>Strapi</li>
        <li>Sanity</li>
        <li>API Documentation (Swagger, Postman)</li>
        <li>Postman</li>
      </ul>
      <h3>Bonus Skills:</h3>
      <ul>
        <li>AR/VR Development</li>
        <li>Quantum Computing</li>
      </ul>
    </div>
  );
}

export default SkillsSection;
