import React, { useEffect, useState, } from 'react';
import './Main.css'

function Main() {
 
    useEffect(()=>{
        const psuedo = document.querySelector('.main-name-ctn');
        window.addEventListener('scroll', () => {
            setScroll(psuedo.getBoundingClientRect().bottom);

        })
 
    })

    const [scroll, setScroll] = useState(365);

    return (
        <div id='home' className='main'>
            <div className='main-name-ctn' style={{width: scroll}}>
                <h1 id='scrollhandle' className='main-name'>Neil Juanillo</h1>
            </div>
            <h2 className='main-text'>Front-End Developer</h2>
            <a className='contact-btn' href='#contact'>
                Contact
            </a>
            <a href='./resume/neiljresume.pdf' download="Neil's Resume" className='main-resume'>
                <p>Download Resume</p>
            </a>
        </div>
    )
}

export default Main
