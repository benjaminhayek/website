import React from 'react';
import HTML from '../utils/html5.png';
import ReactImg from '../utils/react.png';
import CSS from '../utils/css3.png';
import SASS from '../utils/sass.png';
import Bootstrap from '../utils/bootstrap.png';
import JS from '../utils/javascript.png';
import JQuery from '../utils/jquery.png';
import NodeJS from '../utils/nodejs.png';
import Postgres from '../utils/postgresql.png';
import Github from '../utils/github.png';
import Heroku from '../utils/heroku.png';
import Jest from '../utils/jest.png';
import Enzyme from '../utils/enzyme.png';
import Mongo from '../utils/mongo.jpeg';
import Vue from '../utils/vue.png';
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills'>
            <h1 className='skills-title'>SKILLS</h1>
            <div className='skills-container'>
                <div className='skills-content'>
                    <h2 className='skill'>HTML</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={HTML} alt='sk' />
                            <h4 className='skill-name'>HTML5</h4>
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={ReactImg} alt='sk' />
                            <h4 className='skill-name'>JSX</h4>
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>CSS</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={CSS} alt='sk' />
                            <h4 className='skill-name'>CSS3</h4>
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={SASS} alt='sk' />
                            <h4 className='skill-name'>SASS</h4>
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Bootstrap} alt='sk' />
                            <h4 className='skill-name'>Bootstrap</h4>
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>FRONT-END</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={JS} alt='sk' />
                            <h4 className='skill-name'>Javascript</h4>
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={ReactImg} alt='sk' />
                            <h4 className='skill-name'>React</h4>
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={JQuery} alt='sk' />
                            <h4 className='skill-name'>JQuery</h4>
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>TESTING</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Enzyme} alt='sk' />
                            <h4 className='skill-name'>Enzyme</h4>
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Jest} alt='sk' />
                            <h4 className='skill-name'>Jest</h4>
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>BACK-END</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Postgres} alt='sk' />
                            <h4 className='skill-name'>PostgreSQL</h4>
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={NodeJS} alt='sk' />
                            <h4 className='skill-name'>NodeJS</h4>
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Mongo} alt='sk' />
                            <h4 className='skill-name'>MongoDB</h4>
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>OTHER</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Github} alt='sk' />
                            <h4 className='skill-name'>GitHub</h4>
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Heroku} alt='sk' />
                            <h4 className='skill-name'>Heroku</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;