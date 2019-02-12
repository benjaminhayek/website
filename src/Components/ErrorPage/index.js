import React from 'react';
import './ErrorPage.css'

const ErrorPage = () => {
    return(
        <div className='error'>
            <h1 className='error-title'>Sorry that is not a valid address :(</h1>
            <a className='return-home' href='https://benjaminhayek.herokuapp.com'>Click Here To Return Home</a>
        </div>
    )
}

export default ErrorPage;
