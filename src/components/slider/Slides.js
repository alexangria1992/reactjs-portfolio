import React from 'react'; 
import "./Slider.css";
const slidesInfo = [
    {
        src: "https://i.imgur.com/mC8103h.jpg",
        alt: "Project 1",
        desc: "Project 1",
        link: "https://proshop-demonstration.herokuapp.com/#/"
    }, 
    {
        src: "https://i.imgur.com/qhcghIR.jpg",
        alt: "Project 2",
        desc: "Project 2",
        link: "https://boomerang-dominion.herokuapp.com/"
    },
    {
        src: "https://i.imgur.com/UZdEyOe.jpg",
        alt: "Project 3",
        desc: "Project 3",
        link: "https://dolla-website.herokuapp.com/"
    },
    {
        src: "https://i.imgur.com/gIExML4.jpg",
        alt: "Project 4",
        desc: "Project 4",
        link: "https://capture-site.herokuapp.com/"

    },
        
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <a href={slide.link} target="_blank" rel="noreferrer">
           <img src={slide.src} alt={slide.alt}   />
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;