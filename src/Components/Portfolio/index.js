import React, { Component } from 'react';
import MTMain from '../utils/screen1.png';
import MTLogin from '../utils/screen3.png';
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
            </div>
        )
    }
}

export default Portfolio;