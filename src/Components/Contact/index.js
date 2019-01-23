import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-top'>
                <h1 className='contact-header'>CONTACT ME</h1>
                <h3 className='availability'>- I am available to hire and open to any ideas of cooperation.</h3>
                <div className='contact-card'>
                    <dl className='dl'>
                        <dt className='dt dt-email'>Email:</dt>
                        <dd className='dd dd-email'><a className='dd-email a-link' href='bhayek12@gmail.com'><i class="fas fa-envelope-square"></i> bhayek12@gmail.com</a></dd>
                        <dt></dt>
                        <dd></dd>
                        <dt className='dt'>Linked-In:</dt>
                        <dd className='dd'><a className='dd-linkedin a-link' href='https://www.linkedin.com/in/benjamin-hayek/'><i class="fab fa-linkedin"></i> benjamin-hayek</a></dd>
                        <dt className='dt'>GitHub:</dt>
                        <dd className='dd'><a className='dd-github a-link' href='https://github.com/benjaminhayek'><i class="fab fa-github-square"></i> benjaminhayek</a></dd>
                        <dt className='dt'>Twitter:</dt>
                        <dd className='dd'><a className='dd-twitter a-link' href='https://twitter.com/hayek_ben'><i class="fab fa-twitter-square"></i> hayek_ben</a></dd>
                    </dl>
                </div>
            </div>
            <div className='contact-bottom'></div>
        </div>
    )
}

export default Contact;