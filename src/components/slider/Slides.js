import React from "react";
import "./Slider.css";
const slidesInfo = [
  {
    src: "https://i.imgur.com/TKYGfGe.jpg",
    alt: "Project 1",
    desc: "Project 1",
    link: "https://mern-amazona-web-app.herokuapp.com/",
    icon: "fab fa-github fa-3x",
    iconLink:
      "https://github.com/alexangria1992/MERN-E-Commerce-Web-Application",
  },

  {
    src: "https://i.imgur.com/UZdEyOe.jpg",
    alt: "Project 2",
    desc: "Project 2",
    link: "https://dolla-website.herokuapp.com/",
    icon: "fab fa-github fa-3x",
    iconLink: "https://github.com/alexangria1992/dolla-website",
  },
  {
    src: "https://i.imgur.com/gIExML4.jpg",
    alt: "Project 3",
    desc: "Project 3",
    link: "https://capture-site.herokuapp.com/",
    icon: "fab fa-github fa-3x",
    iconLink: "https://github.com/alexangria1992/react-capture",
  },
  {
    src: "https://i.imgur.com/Hux62uu.jpg",
    alt: "Project 4",
    desc: "Project 4",
    link: "https://figma-react-website.herokuapp.com/",
    icon: "fab fa-github fa-3x",
    iconLink: "https://github.com/alexangria1992/figma-website",
  },
  {
    src: "https://i.imgur.com/RztMOUF.jpg",
    alt: "Project 5",
    desc: "Project 5",
    link: "https://easybank-website.herokuapp.com/",
    icon: "fab fa-github fa-3x",
    iconLink: "https://github.com/alexangria1992/fem-easybank",
  },
  {
    src: "https://i.imgur.com/VFdQIlT.jpg",
    alt: "Project 6",
    desc: "Project 6",
    link: "https://apple-store-website.herokuapp.com/index.html",
    icon: "fab fa-github fa-3x",
    iconLink: "https://github.com/alexangria1992/apple-store-website",
  },
  {
    src: "https://i.imgur.com/Rhf38Ug.jpg",
    alt: "Project 7",
    desc: "Project 7",
    link: "https://alex-gym.netlify.app/",
    icon: "fab fa-github fa-3x",
    iconLink: "https://github.com/alexangria1992/React-Gym-App",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.link} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
      <a href={slide.iconLink} target="_blank">
        <i className={slide.icon}></i>
      </a>
    </div>
  </div>
));

export default slides;
