import React from 'react';
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
/* eslint-disable no-unused-vars */

import {
  faCode,
  faDatabase,
  faLaptopCode,
  faServer,
  faBug,
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

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
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
        <li>
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          TypeScript
        </li>
        <li>
          <FontAwesomeIcon icon={faCodeBranch} className="skill-icon" />
          Go (Golang)
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
          SQL (Advanced)
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          Dart (Flutter)
        </li>
      </ul>
      <h3>Frontend:</h3>
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
          <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" />
          React
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" />
          Next.js
        </li>
        <li>
          Vue.js
        </li>
        <li>
          Svelte
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          GraphQL
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          WebAssembly (Wasm)
        </li>
        <li>
          <FontAwesomeIcon icon={faPalette} className="skill-icon" />
          Tailwind CSS
        </li>
      </ul>
      <h3>Backend:</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faServer} className="skill-icon" />
          Express.js
        </li>
        <li>
          <FontAwesomeIcon icon={faServer} className="skill-icon" />
          Node.js
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
          PostgreSQL
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
          Firebase
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          GraphQL
        </li>
        <li>
          Redis
        </li>
        <li>
          Apache Kafka
        </li>
        <li>
          <FontAwesomeIcon icon={faServer} className="skill-icon" />
          Microservices Architecture
        </li>
        <li>
          ORMs (Sequelize, TypeORM)
        </li>
      </ul>
      <h3>Blockchain/Smart Contracts:</h3>
      <ul>
        <li>Solidity</li>
        <li>Web3.js / Ethers.js</li>
        <li>IPFS</li>
        <li>Truffle Suite</li>
      </ul>
      <h3>DevOps:</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCodeBranch} className="skill-icon" />
          Git
        </li>
        <li>
          <FontAwesomeIcon icon={faDocker} className="skill-icon" />
          Docker
        </li>
        <li>
          <FontAwesomeIcon icon={faTerminal} className="skill-icon" />
          Kubernetes
        </li>
        <li>GitHub CI/CD</li>
        <li>Jenkins</li>
        <li>GitLab CI</li>
        <li>CircleCI</li>
        <li>
          <FontAwesomeIcon icon={faTerminal} className="skill-icon" />
          Linux
        </li>
        <li>AWS</li>
        <li>GCP</li>
        <li>Azure</li>
        <li>Terraform</li>
        <li>Ansible</li>
      </ul>
      <h3>QA:</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faBug} className="skill-icon" />
          Jest
        </li>
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
        <li>Big Data (Apache Spark, Hadoop)</li>
      </ul>
      <h3>Others:</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faRocket} className="skill-icon" />
          Vercel
        </li>
        <li>
          <FontAwesomeIcon icon={faGlobe} className="skill-icon" />
          Web Scraping
        </li>
        <li>
          <FontAwesomeIcon icon={faDocker} className="skill-icon" />
          Docker Compose
        </li>
        <li>Figma</li>
        <li>Sketch</li>
        <li>Content Management Systems (CMS)</li>
        <li>Strapi</li>
        <li>Sanity</li>
        <li>API Documentation (Swagger, Postman)</li>
        <li>Postman</li>
      </ul>
      <h3>Proficient in:</h3>
      <ul>
        <li>Algorithmic Problem Solving</li>
        <li>Data Structures and Algorithms</li>
        <li>Competitive Programming</li>
        <li>Backend Engineering</li>
        <li>Full Stack Development</li>
        <li>Data Science</li>
      </ul>
      
      <ul>
        <li>AR/VR Development</li>
        <li>Quantum Computing</li>
      </ul>
    </div>
  );
}

export default Skills;
