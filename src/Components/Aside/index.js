import React, { Component } from 'react';
import profilePic from '../utils/Benjamin-Hayek.jpg';
import asideImage from '../utils/aside.jpeg'
import './Aside.css';

class aside extends Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div className='aside'>
                <img className='profile-pic' src={profilePic} />
            </div>
        )
    }
}

export default aside;