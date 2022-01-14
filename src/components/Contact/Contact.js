import React from 'react'
import './Contact.css'

function Contact() {
    return (
        
        <div id='contact' className='contact-ctn'>
            <h2 className='contact-title'>Contact</h2>
            <div className='contact'>
                <div className='contact-feild contact-name'>
                    {/* <label htmlFor='name'>Name</label> */}
                    <input id='name' type='text' placeholder='Name'/>
                </div>

                <div className='contact-feild contact-email'>
                    {/* <label htmlFor='email'>Email</label> */}
                    <input id='email' type='email' placeholder='Email'/>
                </div>

                <div className='contact-feild contact-phone'>
                    {/* <label htmlFor='phone'>Phone</label> */}
                    <input id='phone' type='tel' placeholder='Phone'/>
                </div>

                <div className='contact-feild contact-message'>
                    {/* <label htmlFor='message'>message</label> */}
                    <input id='message' type='text' placeholder='Message'/>
                </div>
            </div>
            <a href='/'><button className='submit-btn'>Submit</button></a>
        </div>
    )
}

export default Contact
