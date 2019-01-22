import React from 'react';
import Hiking from '../utils/hiking.jpg';
import Kevin from '../utils/kevin.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about-section'>
                <div className='about-left'>
                    <h1 className='about-header'>ABOUT</h1>
                    <blockquote>
                        <h2>Mission-driven front-end developer with a passion for thoughtful UI design, collaboration, and learning.</h2>
                    </blockquote>
                    <p className='about-me'>I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken a sharp turn from where i was less than a year ago — helping to run and manage a grounds staff at Denver Country Club — I've never stopped engaging my passion to help others and solve problems.</p>

                    <p className='about-me'>As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.</p>

                    <p className='current-focus'>Current Focus: <a className='focus-link' href='https://www.smashingmagazine.com/2016/10/inclusive-design-patterns/'>Accessability</a> // <a className='focus-link' href='https://vuejs.org/'>VueJS</a> // <a className='focus-link' href='https://www.techuz.com/blog/progressive-web-apps-the-future-of-mobile-web-app-development/'>PWA's</a></p>
                </div>
                <div className='main-pic'>
                    <img className='kevin' src={Kevin} />
                </div>
            </div>
            <hr />
            <div className='about-section'>
                <div className='hiking-pic'>
                    <img className='kevin' src={Hiking} />
                </div>
                <div className='about-left'>
                    <h1 className='my-story'>My Story</h1>
                    <p className='about-me'>Born and raised in Evergreen, CO I have always loved the outdoors and exploring this beautiful state we get to live in! After highschool I attended Colorado State University where I graduated with a degree in Turf Management. Through my time in college I interned at golf courses around the state getting to work outside and explore everything Colorado has to offer. After college I worked at Denver Country Club as a crew leader where I was able to broaden my horizons as a manager and train oncoming employees in various tasks, managing large teams of employees, as well as develop a fertility program that is still in use!</p>

                    <p className='about-me'>Upon much reflection with myself and my family I decided I was in need of a drastic career change. My love for technology as well as problem solving led me to pursue a career in programming. I did my research and found Turing School of Software and Design - A full time intensive coding school - where I dove in head first and fell in love with with software engineering! Looking back this was the best decision of my life, I developed a passion for coding, and an unquenchable thirst to continue to grow and learn all things programming!</p>
                </div>
            </div>
        </div>
    )
}

export default About;