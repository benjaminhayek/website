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
                    <h1 className='name'>Ben Hayek</h1>
                    <h2 className='title'>Front-end Developer</h2>
                </div>
            </div>
        )
    }
}

export default aside;