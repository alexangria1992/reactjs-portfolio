import React from 'react'; 
import "./Slider.css";
const slidesInfo = [
    {
        src: "https://i.imgur.com/mC8103h.jpg",
        alt: "Project 1",
        desc: "Project 1",
        link: "https://proshop-demonstration.herokuapp.com/#/",
        icon: "fab fa-github fa-3x",
        iconLink: "https://github.com/alexangria1992/django-react-pro-shop"
    }, 
    {
        src: "https://i.imgur.com/qhcghIR.jpg",
        alt: "Project 2",
        desc: "Project 2",
        link: "https://boomerang-dominion.herokuapp.com/",
        icon: "fab fa-github fa-3x",
        iconLink: "https://github.com/alexangria1992/Boomerang-Website"

    },
    {
        src: "https://i.imgur.com/UZdEyOe.jpg",
        alt: "Project 3",
        desc: "Project 3",
        link: "https://dolla-website.herokuapp.com/",
        icon: "fab fa-github fa-3x",
        iconLink: "https://github.com/alexangria1992/dolla-website"

    },
    {
        src: "https://i.imgur.com/gIExML4.jpg",
        alt: "Project 4",
        desc: "Project 4",
        link: "https://capture-site.herokuapp.com/",
        icon: "fab fa-github fa-3x",
        iconLink: "https://github.com/alexangria1992/react-capture"


    },
    {
        src: "https://i.imgur.com/VsVEQaz.jpg?1",
        alt: "Project 5",
        desc: "Project 5",
        link: "https://employee-mui-app.herokuapp.com/",
        icon: "fab fa-github fa-3x",
        iconLink: "https://github.com/alexangria1992/react-mui-system"


    },
    {
        src: "https://i.imgur.com/RztMOUF.jpg",
        alt: "Project 6",
        desc: "Project 6",
        link: "https://easybank-website.herokuapp.com/",
        icon: "fab fa-github fa-3x",
        iconLink: "https://github.com/alexangria1992/fem-easybank"


    },
        
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <a href={slide.link} target="_blank" rel="noreferrer">
           <img src={slide.src} alt={slide.alt}   />
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
            <a href={slide.iconLink} target="_blank">
                <i className={slide.icon}></i>
            </a>
        </div>
    </div>
))

export default slides;