import React from "react";
import iconoIn from "../../assets/Linkedin.png";
import iconoGit from "../../assets/github.png";
import iconoCv from "../../assets/iconCv.png";
import { SiTailwindcss, SiRedux, SiVite, SiFirebase, SiMercadopago, SiReact, SiHtml5, SiCss3, SiJavascript, SiGit, SiGithub, SiTrello, SiFigma, SiNodedotjs, SiPostgresql, SiSequelize } from "react-icons/si";
import { Link } from "react-router-dom";


const About = () => {
  const teamMembers = [
    {
      name: "Andrea Buldorini",
      photoUrl:
        "https://media.licdn.com/dms/image/D4D03AQGKIzp5GhUl-g/profile-displayphoto-shrink_800_800/0/1678901643227?e=1692230400&v=beta&t=CxwIqvhiqya1GdljGQkd6Dp7CG-cMbMt7kYRh49aIyY",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl:
        "https://www.linkedin.com/in/andrea-soledad-buldorini-462690113/",
      githubUrl: "https://github.com/abuldori",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
    },
    {
      name: "Sebastian Toranzo",
      photoUrl: "https://avatars.githubusercontent.com/u/112722971?v=4",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl: "https://www.linkedin.com/in/sebatora/",
      githubUrl: "https://github.com/sebatora",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
    },
    {
      name: "Camila Manita",
      photoUrl:
        "https://media.licdn.com/dms/image/D4D03AQGQUVM2i61pCw/profile-displayphoto-shrink_800_800/0/1682895122336?e=1692230400&v=beta&t=UixsofLje0HAhkFtN-B_9Vah2IWBjN1DjnIMIzAxeDw",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl: "https://www.linkedin.com/in/camila-manita/",
      githubUrl: "https://github.com/CamilaManita",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
    },
    {
      name: "Mauricio Monzón",
      photoUrl: "https://avatars.githubusercontent.com/u/104470486?v=4",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl: "https://www.linkedin.com/in/mauricio-monzon/",
      githubUrl: "https://github.com/majomon",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
    },
    {
      name: "Franco Bogado",
      photoUrl: "https://avatars.githubusercontent.com/u/117310486?v=4",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl: "https://www.linkedin.com/in/franco-bogado-a5b18216a/",
      githubUrl: "https://github.com/FrancoNat",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
    },
    {
      name: "Percy Huanca",
      photoUrl: "https://avatars.githubusercontent.com/u/114317876?v=4",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl: "https://www.linkedin.com/in/percydh673002/",
      githubUrl: "https://github.com/PercyH67",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
    },
    {
      name: "Jorge Daza Vega",
      photoUrl:
        "https://media.licdn.com/dms/image/C4D03AQFQuUm9Ck0QRg/profile-displayphoto-shrink_800_800/0/1586558878461?e=1692230400&v=beta&t=48pm35lheuNerRcaMalixqnrazf9Goi8j3XO1TNsCLA",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl: "https://www.linkedin.com/in/jorge-daza-vega-35904b177/",
      githubUrl: "https://github.com/GeorgeDaz",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
    },
    {
      name: "Matías Medina",
      photoUrl:
        "https://media.licdn.com/dms/image/D4E03AQFt14oZoKyyjw/profile-displayphoto-shrink_800_800/0/1681848452759?e=1692230400&v=beta&t=PTQaXC5vfRnqvA7NCeRI5sNbse5rvoqmlVvIS2bp8Jo",
      description: "Full Stack web developer.",
      contacto: "Contáctame:",
      linkedinUrl: "https://www.linkedin.com/in/mat%C3%ADas-medina-844181242/",
      githubUrl: "https://github.com/MatiasMedina02",
      linkedinIcon: iconoIn,
      githubIcon: iconoGit,
      iconoCv: iconoCv,
    },
  ];

  const teamMemberCards = teamMembers.map((member) => (
    <div key={member.name} className="w-1/2 sm:w-2/4 md:w-1/3 lg:w-1/4 p-2 ">
      <div className="bg-gray-200 rounded-lg shadow-md p-4 transition duration-300 transform-gpu hover:scale-105 hover:shadow-custom">
        <img
          src={member.photoUrl}
          alt={member.name}
          className="mx-auto w-24 h-24 rounded-full mt-4"
        />
        <div className="text-center py-4">
          <h2 className="text-lg font-semibold dark:text-black">{member.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-600">{member.description}</p>
        </div>
        <div className="flex justify-center space-x-2 pb-4">
          <a className="hover:scale-110" href={member.linkedinUrl} target="_blank">
            <img src={member.linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a className="hover:scale-110" href={member.githubUrl} target="_blank">
            <img src={member.githubIcon} alt="Github" className="w-6 h-6" />
          </a>
          <a className="hover:scale-110" href={member} target="_blank">
            <img src={member.iconoCv} alt="Curriculum Vitae" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-full mt-28">
      <h1 className="mb-6 text-4xl font-semibold text-center text-gray-700">¿QUIENES SOMOS?</h1>
      <p className="mx-40 text-justify text-gray-600">
        Somos un grupo de estudiantes en la etapa final del bootcamp de Henry, un programa intensivo de desarrollo de software. Nuestro equipo está comprometido en aplicar los conocimientos y habilidades adquiridas a lo largo del bootcamp para desarrollar una aplicación innovadora. Nos enfocamos en crear soluciones prácticas y eficientes que aborden las necesidades de los usuarios. Estamos emocionados de trabajar juntos y poner en práctica todo nuestro aprendizaje para ofrecer un producto sobresaliente en el mundo de la tecnología.
      </p>
      <div className="w-4/5 mx-auto mt-8">
        <div className="flex flex-wrap justify-center">
          {teamMemberCards}
        </div>
      </div>
      <div className="w-full mt-1 font-medium text-gray-500 text-lg">
      <p className="mt-10 text-xl text-center">Tecnologías utilizadas</p>
      <div className="flex items-center justify-center my-5">
        <Link to="https://es.react.dev" target="_blank"><SiReact className="text-3xl hover:scale-110 mr-6 hover:text-blue-700" /> </Link>
        <Link to="https://redux.js.org" target="_blank" ><SiRedux className="text-3xl hover:scale-110 mr-6 hover:text-indigo-800" /> </Link>
        <Link to="https://nodejs.org/es" target="_blank"><SiNodedotjs className="text-3xl hover:scale-110 mr-6 hover:text-green-600" /> </Link>
        <Link to="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank"><SiHtml5 className="text-3xl hover:scale-110 mr-6 hover:text-orange-600" /> </Link>
        <Link to="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank"><SiCss3 className="text-3xl hover:scale-110 mr-6 hover:text-blue-700" /> </Link>
        <Link to="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank"><SiJavascript className="text-3xl hover:scale-110 mr-6 hover:text-yellow-400" /> </Link>
        <Link to="https://git-scm.com" target="_blank"><SiGit className="text-3xl hover:scale-110 mr-6 hover:text-orange-600"/> </Link>
        <Link to="https://www.postgresql.org" target="_blank"><SiPostgresql className="text-3xl hover:scale-110 mr-6 hover:text-blue-700"/> </Link>
        <Link to="https://sequelize.org" target="_blank"><SiSequelize className="text-3xl hover:scale-110 mr-6 hover:text-blue-700"/> </Link>
        <Link to="https://github.com" target="_blank"><SiGithub className="text-3xl hover:scale-110 mr-6 hover:text-gray-600"/> </Link>
        <Link to="https://vitejs.dev" target="_blank"><SiVite className="text-3xl hover:scale-110 mr-6 hover:text-yellow-400"/> </Link>
        <Link to="https://firebase.google.com/?hl=es" target="_blank"><SiFirebase className="text-3xl hover:scale-110 mr-6 hover:text-orange-500"/> </Link>
        <Link to="https://tailwindcss.com" target="_blank"><SiTailwindcss className="text-3xl hover:scale-110 mr-6 hover:text-blue-500"/> </Link>
        <Link to="https://trello.com" target="_blank"><SiTrello className="text-3xl hover:scale-110 mr-6 hover:text-blue-800"/> </Link>
        <Link to="https://www.figma.com/" target="_blank"><SiFigma className="text-3xl hover:scale-110 mr-6 hover:text-purple-700"/> </Link>
        <Link to="https://www.mercadopago.com.ar" target="_blank"><SiMercadopago className="text-3xl hover:scale-110 mr-6 hover:text-blue-500"/> </Link>
      </div>
    </div>
  </div>
  );
};

export default About;
