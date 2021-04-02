import React from 'react'
import "./About.css"
import profileImg from '../../media/img/profile.JPG'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Hello! I am Alexandre Angrignon</h3>
                 <p>
                 I am passionate about web development and have experience using HTML, CSS, Bootstrap, JavaScript, and React. 
                           
                In 2020, I completed my Bachelor's degree in computer science at Unitec focusing on a web development pathway.
                My goal is to help a company and clients to the best of my abilities and how I can provide the best possible product for them.
                I love learning new technologies, what they can be used for in a real-life, workplace scenario and how I can use them to build better and scalable products.
                 </p>
            </div>
            <div className="about-img">
                <img style={{border: "0"}}src={profileImg} alt="" className="profile-img"/>
            </div>
        </div>
    )
}

export default About
