import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from '../utils/Benjamin-Hayek.jpg';
import './Aside.css';

class aside extends Component {
    constructor() {
        super()
        this.state = {
            selected: ''
        }
    }

    handleSubmit = async (name) => {
        this.setState({ selected: name });
      }

    render(){
        return (
            <div className='aside'>
                <div className='pic-holder'>
                    <img className='profile-pic' alt='prof' src={profilePic} />
                    <h1 className='name'>BEN HAYEK</h1>
                    <h2 className='title'>FRONT-END DEVELOPER</h2>
                </div>
                <div className='links'>
                    <NavLink
                        onClick={() => this.handleSubmit('aboutSelected')}
                        style={{ textDecoration: 'none' }}
                        to="/about"
                        className={ this.state.selected === 'aboutSelected' ? 'aboutSelected' : 'about info-links' }
                        >ABOUT <i className="fas fa-chevron-right"></i>
                    </NavLink>
                    <NavLink
                        onClick={() => this.handleSubmit('portfolioSelected')}
                        style={{ textDecoration: 'none' }}
                        to="/portfolio"
                        className={ this.state.selected === 'portfolioSelected' ? 'portfolioSelected' : 'porfolio info-links' }
                        >PORTFOLIO <i className="fas fa-chevron-right"></i>
                    </NavLink>
                    <button className='skills info-links'>SKILLS <i className="fas fa-chevron-right"></i></button>
                    <button className='contact info-links'>CONTACT ME <i className="fas fa-chevron-right"></i></button>
                    <NavLink
                        onClick={() => this.handleSubmit('resumeSelected')}
                        style={{ textDecoration: 'none' }}
                        to="/resume"
                        className={ this.state.selected === 'resumeSelected' ? 'resumeSelected' : 'resume info-links' }
                        >RESUME <i className="fas fa-chevron-right"></i>
                    </NavLink>
                </div>
                <div className='social'>
                    <a href='https://github.com/benjaminhayek' className='github social-btn' ><i className="fab fa-github-square"></i></a>
                    <a href='https://www.linkedin.com/in/benjamin-hayek/' className='linked-in social-btn'><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        )
    }
}

export default aside;