import React from 'react';
import BHResume from '../utils/BenHayekResume.jpg';
import PDF from '../utils/BenHayekResume.pdf';
import './Resume.css';

const Resume = () => {
    return (
        <div className='resume'>
            <h1 className='resume-title'>RESUME</h1>
            <a className='pdf' href={PDF}>- Click Here For My PDF</a>
            <div className='resume-container'>
                <img className='bh-resume' src={BHResume} />
            </div>
        </div>
    )
}

export default Resume;