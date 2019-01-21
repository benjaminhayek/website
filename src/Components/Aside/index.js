import React, { Component } from 'react';
import profilePic from '../utils/Benjamin-Hayek.jpg';
import './Aside.css';

class aside extends Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div className='aside'>
                <div className='pic-holder'>
                    <img className='profile-pic' src={profilePic} />
                    <h1 className='name'>BEN HAYEK</h1>
                    <h2 className='title'>FRONT-END DEVELOPER</h2>
                </div>
                <div className='links'>
                    <button className='about info-links'>ABOUT <i className="fas fa-chevron-right"></i></button>
                    <button className='portfolio info-links'>PORTFOLIO <i className="fas fa-chevron-right"></i></button>
                    <button className='skills info-links'>SKILLS <i className="fas fa-chevron-right"></i></button>
                    <button className='contact info-links'>CONTACT ME <i className="fas fa-chevron-right"></i></button>
                    <button className='resume info-links'>RESUME <i className="fas fa-chevron-right"></i></button>
                </div>
                <div className='social'>
                    <button className='github social-btn'><i className="fab fa-github-square"></i></button>
                    <button className='linked-in social-btn'><i className="fab fa-linkedin"></i></button>
                </div>
            </div>
        )
    }
}

export default aside;