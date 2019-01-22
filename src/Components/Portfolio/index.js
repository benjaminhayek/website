import React, { Component } from 'react';
import MTMain from '../utils/screen1.png';
import MTLogin from '../utils/screen3.png';
import WOFHome from '../utils/wof-home.png';
import WOFLogin from '../utils/wof-login.png';
import EYOEHome from '../utils/eyoe-home.png';
import EYOECompare from '../utils/eyoe-compare.png';
import WeatherlyHome from '../utils/weather-home.png';
import AutoFill from '../utils/autofill.png';
import TenDay from '../utils/ten-day.png';
import SWHome from '../utils/SWHome.png';
import SWPeople from '../utils/SWPeople.png';
import SWFavorites from '../utils/SWFavorite.png';
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
                <hr/>
                <div className='world-of-flags'>
                    <h1 className='mt-title'>Educate Yourself on Education!</h1>
                    <div className='mt-info'>
                        <div className='mt-left'>
                                <h2 className='description-title'>DESCRIPTION:</h2>
                                <h3 className='mt-description'>For this project I was asigned the ProPublica API and early education teachers as a target audience. Educate Yourself on Education filters bills and legislations based on an education criteria to allow users to decide who to vote on. Users can also get more in depth information on all bills queried.</h3>
                                <h2 className='tech-used-title'>TECHNOLOGIES:</h2>
                                <div className='tech-holder'>
                                    <a className='tech-links' href='https://reactjs.org/'>React</a>
                                    <a className='tech-links' href='https://redux.js.org/'>Redux</a>
                                    <a className='tech-links' href='https://reacttraining.com/react-router/'>React-Router</a>
                                    <a className='tech-links' href='https://airbnb.io/enzyme/'>Enzyme</a>
                                    <a className='tech-links' href='https://jestjs.io/'>Jest</a>
                                </div>
                                <h2 className='deployed-links'>LINKS:</h2>
                                <div className='deployed-container'>
                                    <a href='https://github.com/benjaminhayek/learn-to-vote' className='heroku'>Link to GitHub</a>
                                </div>
                            </div>
                            <div className='mt-right'>
                                <img className='eyoe-home' src={EYOEHome} />
                                <img className='eyoe-compare' src={EYOECompare} />
                            </div>
                        </div>
                </div>
                <hr/>
                <div className='world-of-flags'>
                    <h1 className='mt-title'>Swapi-Box</h1>
                    <div className='mt-info'>
                        <div className='mt-left'>
                                <h2 className='description-title'>DESCRIPTION:</h2>
                                <h3 className='mt-description'>Search your favorite Star Wars lore with the click of a button! This application query's the Star Wars API using asynchronous fetch calls in order to create cards with info on people, planets,and vehicles. The user can favorite cards which are stored in the favorites component to view upon later use. Local storage is taken advantage of to minimize calls to the API and increase loading time.</h3>
                                <h2 className='tech-used-title'>TECHNOLOGIES:</h2>
                                <div className='tech-holder'>
                                    <a className='tech-links' href='https://reactjs.org/'>React</a>
                                    <a className='tech-links' href='https://reacttraining.com/react-router/'>React-Router</a>
                                    <a className='tech-links' href='https://airbnb.io/enzyme/'>Enzyme</a>
                                    <a className='tech-links' href='https://jestjs.io/'>Jest</a>
                                </div>
                                <h2 className='deployed-links'>LINKS:</h2>
                                <div className='deployed-container'>
                                    <a href='https://github.com/benjaminhayek/swapi-box' className='heroku'>Link to GitHub</a>
                                </div>
                            </div>
                            <div className='mt-right'>
                                <img className='sw-home' src={SWHome} />
                                <img className='sw-people' src={SWPeople} />
                                <img className='sw-favorites' src={SWFavorites} />
                            </div>
                        </div>
                </div>
                <hr/>
                <div className='world-of-flags'>
                    <h1 className='mt-title'>Weathrly!</h1>
                    <div className='mt-info'>
                        <div className='mt-left'>
                                <h2 className='description-title'>DESCRIPTION:</h2>
                                <h3 className='mt-description'>Weathrly is a web application that allows users to display the current weather in the location the user searches for. The default location will be the current location of the user. Weather data provided by Wunderland API and search functionality utlizied with Prefix Trie to provide lightning fast recommendations we created and published as an NPM module which can be found <a className='wetherly-link' href='https://www.npmjs.com/package/@lkshamus/completeme'>here</a></h3>
                                <h2 className='tech-used-title'>TECHNOLOGIES:</h2>
                                <div className='tech-holder'>
                                    <a className='tech-links' href='https://reactjs.org/'>React</a>
                                    <a className='tech-links' href='https://airbnb.io/enzyme/'>Enzyme</a>
                                    <a className='tech-links' href='https://jestjs.io/'>Jest</a>
                                </div>
                                <h2 className='deployed-links'>LINKS:</h2>
                                <div className='deployed-container'>
                                    <a href='https://github.com/benjaminhayek/Weathrly/' className='heroku'>Link to GitHub</a>
                                </div>
                            </div>
                            <div className='mt-right'>
                                <img className='weather-home' src={WeatherlyHome} />
                                <img className='weather-autofill' src={AutoFill} />
                                <img className='weather-tenday' src={TenDay} />
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;