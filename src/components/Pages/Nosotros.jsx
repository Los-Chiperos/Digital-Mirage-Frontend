import React from "react";
import Nicolas from "../../images/nicolas.jpeg";
import David from "../../images/david.jpeg";
import Cristian from "../../images/cristian.png";
import Gonzalo from "../../images/gonzalo.jpeg";
import Juan from "../../images/juan.jpeg";
import Agustin from "../../images/agustin.jpeg";
import Angelo from "../../images/angelo.jpeg";
import Leonardo from "../../images/leonardo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const teamMembers = [
  {
    name: "Cristian Alderete",
    role: "Tecnico en Programcion",
    description: "Backend Developer Api Rest  MySQL JAVA",
    imgSrc: Cristian,
    twitterUrl: "https://twitter.com/cristian",
    linkedinUrl: "https://www.linkedin.com/in/calderete/",
    githubUrl: "https://github.com/catastones",
  },
  {
    name: "Gonzalo Araya",
    role: "Tecnico en Programcion",
    description: "Fullstack Developer React Nodejs MongoDB",
    imgSrc: Gonzalo,
    twitterUrl: "https://twitter.com/cristian",
    linkedinUrl: "https://www.linkedin.com/in/gonzalo-araya-416a6520b/",
    githubUrl: "https://github.com/gonzalo991",
  },
  {
    name: "Juan Schallmoser",
    role: "Tecnico en Programcion",
    description: "FullStack Developer UX-UI React HTML CSS",
    imgSrc: Juan,
    twitterUrl: "https://twitter.com/SchallmoserJuan",
    linkedinUrl: "https://www.linkedin.com/in/juanschallmoser/",
    githubUrl: "https://github.com/SchallmoserJuan",
  },
  {
    name: "Agustin Gomez Aranda",
    role: "Tecnico en Programcion",
    description: "Frontend Developer React Html CSS JavaScript",
    imgSrc: Agustin,
    twitterUrl: "https://twitter.com/cristian",
    linkedinUrl: "https://www.linkedin.com/in/agustin-gomez-aranda/",
    githubUrl: "https://github.com/Chelito2014",
  },
  {
    name: "Nicolas Zelarayan",
    role: "Tecnico en Programcion",
    description: "DevOps especializado en infraestructura cloud",
    imgSrc: Nicolas,
    twitterUrl: "https://twitter.com/zelarayanFN?t=oaYtXi2vCvVboZCf51hahQ&s=09",
    linkedinUrl: "https://www.linkedin.com/in/fernando-nicolas-zelarayan/",
    githubUrl: "https://github.com/NicolasZelarayan",
  },
  {
    name: "David Mercado",
    role: "Tecnico en Programcion",
    description: "Frontend Developer React Html JavaScript",
    imgSrc: David,
    twitterUrl: "https://twitter.com/DeividMercad2?t=D3KzeA3BNF1L29VZQFY8Kg&s=08",
    linkedinUrl: "https://www.linkedin.com/in/david-mercado-510721176/",
    githubUrl: "https://github.com/dav1dM3rcado",
  },
  {
    name: "Angelo Pertus",
    role: "Tecnico en Programcion",
    description: "WEB Developer React Nodejs MongoDB",
    imgSrc: Angelo,
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/in/angelo-pertus-234795201/",
    githubUrl: "https://github.com/Angelopertus",
  },
  {
    name: "Leonardo Valdez",
    role: "Tecnico en Programcion",
    description: "SysAdmin especializado en desarrollo web",
    imgSrc: Leonardo,
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/in/leonardo-javier-valdez-19106326a/",
    githubUrl: "https://github.com/Leonardo-Valdez",
  },
  // Agrega el resto de los miembros del equipo aquí
  // ...
];

function ProfileCard({ member }) {
    return (
      <div className="card bg-amber-100 rounded-lg p-4 text-center w-64 h-85 mx-4">
        <br />
        <img
          src={member.imgSrc}
          className="w-24 h-24 rounded-full transition duration-200 hover:scale-110 mx-auto"
        />
        <div className="text-gray-900 text-lg font-bold">{member.name}</div>
        <div className="text-green-600 font-semibold">{member.role}</div>
        <div className="text-gray-600">
          {member.description}
        </div>
        <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
          <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="fa-lg cursor-pointer transition duration-200 hover:text-green-600" />
          </a>
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fa-lg cursor-pointer transition duration-200 hover:text-green-600" />
          </a>
          <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="fa-lg cursor-pointer transition duration-200 hover:text-green-600" />
          </a>
        </div>
      </div>
    );
  }
  

function Nosotros() {
    const teamMembersPerRow = 4; // Cambia este valor si deseas mostrar un número diferente de tarjetas por fila.
  
    return (
      <div className="flex flex-col min-h-screen"
        style={{
          backgroundImage:
            "url('https://www.ecovidrio.es/sites/default/files/2019-10/background-home-1.png')",
        }}
      >
        <main className="flex-grow">
          <div className="container mx-auto py-8 bg-cover">
            <div className="container flex justify-center mx-auto pt-16">
              <div>
                <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                  ¿Quiénes Somos?
                </h1>
                <p className="text-gray-500 text-lg text-center font-normal pb-3">
                  {/* Tu texto aquí */}
                </p>
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-2 px-12 mb-4">
              {teamMembers.map((member, index) => (
                <ProfileCard key={index} member={member} />
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
  

export default Nosotros;