import React, { Component } from 'react';
import MTMain from '../utils/screen1.png';
import MTLogin from '../utils/screen3.png';
import WOFHome from '../utils/wof-home.png';
import WOFLogin from '../utils/wof-login.png';
import './Portfolio.css';

class Portfolio extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='portfolio-page'>
                <div className='title-holder'>
                    <h1 className='portfolio-title'>PORTFOLIO</h1>
                    <h2 className='description'>- See my projects below. All projects were done by me or in partnership with my fellow classmates.</h2>
                </div>
                <hr/>
                <div className='movie-tracker'>
                    <h1 className='mt-title'>Movie Tracker</h1>
                    <div className='mt-info'>
                        <div className='mt-left'>
                            <h2 className='description-title'>DESCRIPTION:</h2>
                            <h3 className='mt-description'>Movie Tracker is an app based on Netflix's web design that allows users to sign-up and favorite movies based on a description and short preview. The app query's the Movie-DB API and uses this information to query Youtube for a short trailer of the film. A major challenge when building this app was tricking the youtube player into thinking it was playing on site, and fitting the trailers into a small component that hid the players controls.</h3>
                            <h2 className='tech-used-title'>TECHNOLOGIES:</h2>
                            <div className='tech-holder'>
                                <a className='tech-links' href='https://reactjs.org/'>React</a>
                                <a className='tech-links' href='https://redux.js.org/'>Redux</a>
                                <a className='tech-links' href='https://reacttraining.com/react-router/'>React-Router</a>
                                <a className='tech-links' href='https://nodejs.org/en/'>NodeJS</a>
                                <a className='tech-links' href='https://airbnb.io/enzyme/'>Enzyme</a>
                                <a className='tech-links' href='https://jestjs.io/'>Jest</a>
                            </div>
                            <h2 className='deployed-links'>LINKS:</h2>
                            <div className='deployed-container'>
                                <a href='https://next-flix.herokuapp.com' className='heroku'>Link to Deployed App</a>
                                <a href='https://github.com/benjaminhayek/movieTracker' className='heroku'>Link to GitHub</a>
                            </div>
                        </div>
                        <div className='mt-right'>
                            <img className='mt-home' src={MTMain} />
                            <img className='mt-login' src={MTLogin} />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='world-of-flags'>
                    <h1 className='mt-title'>World of Flags</h1>
                    <div className='mt-info'>
                        <div className='mt-left'>
                                <h2 className='description-title'>DESCRIPTION:</h2>
                                <h3 className='mt-description'>World of flags is a mobile app designed to help users teach themselves the flags of the world. Its underlying goal is to stimulate users’ curiosity about the world by familiarizing them with different countries’ flags.When interacting with World of Flags, users are shown a randomly generated flag from one of the world’s 193 countries and then can choose between 4 country options. If they get stuck, users can request up to 2 hints about the country whose flag they are guessing. These hints consist of facts about the country or an image of the country’s outline. By viewing these hints, users can grow to associate different flags with facts about their countries. As users correctly guess different flags, they will accumulate points. In this way, World of Flags aims to make learning about the world a fun and enjoyable process.</h3>
                                <h2 className='tech-used-title'>TECHNOLOGIES:</h2>
                                <div className='tech-holder'>
                                    <a className='tech-links' href='https://reactjs.org/'>React</a>
                                    <a className='tech-links' href='https://redux.js.org/'>Redux</a>
                                    <a className='tech-links' href='https://reacttraining.com/react-router/'>React-Router</a>
                                    <a className='tech-links' href='https://nodejs.org/en/'>NodeJS</a>
                                    <a className='tech-links' href='https://airbnb.io/enzyme/'>Enzyme</a>
                                    <a className='tech-links' href='https://jestjs.io/'>Jest</a>
                                    <a className='tech-links' href='https://tavis-ci.org/'>Travis CI</a>
                                    <a className='tech-links' href='http://www.nightmarejs.org/'>NightmareJS</a>
                                </div>
                                <h2 className='deployed-links'>LINKS:</h2>
                                <div className='deployed-container'>
                                    <a href='https://world-of-flags.herokuapp.com/' className='heroku'>Link to Deployed App</a>
                                    <a href='https://github.com/benjaminhayek/world-of-flags' className='heroku'>Link to GitHub</a>
                                </div>
                            </div>
                            <div className='mt-right'>
                                <img className='wof-home' src={WOFHome} />
                                <img className='wof-login' src={WOFLogin} />
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;