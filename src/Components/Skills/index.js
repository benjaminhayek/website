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
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills'>
            <h1 className='skills-title'>SKILLS</h1>
            <div className='skills-container'>
                <div className='skills-content'>
                    <h2 className='skill'>HTML</h2>
                    <div className='skill-holder'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;