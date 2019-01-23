import React from 'react';
import HTML from '../utils/html5.png';
import ReactImg from '../utils/react.png';
import Access from '../utils/accessability.png';
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
                            HTML5
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={ReactImg} alt='sk' />
                            JSX
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Access} alt='sk' />
                            Accessability
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>CSS</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={CSS} alt='sk' />
                            CSS3
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={SASS} alt='sk' />
                            SASS
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Bootstrap} alt='sk' />
                            Bootstrap
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>FRONT-END</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={JS} alt='sk' />
                            Javascript
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={ReactImg} alt='sk' />
                            React
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={JQuery} alt='sk' />
                            JQuery
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={NodeJS} alt='sk' />
                            NodeJS
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>TESTING</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Enzyme} alt='sk' />
                            Enzyme
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Jest} alt='sk' />
                            Jest
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>BACK-END</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Postgres} alt='sk' />
                            PostgreSQL
                        </div>
                    </div>
                </div>
                <div className='skills-content'>
                    <h2 className='skill'>OTHER</h2>
                    <div className='skill-holder'>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Github} alt='sk' />
                            GitHub
                        </div>
                        <div className='skill-pics'>
                            <img className='skill-img' src={Heroku} alt='sk' />
                            Heroku
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;