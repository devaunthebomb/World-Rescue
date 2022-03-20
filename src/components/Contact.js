import React from 'react';
import "./Contact.css"

function Contact() {
    return(
        <div className='container-contact'>
            <div className='developers'>
                <h1 className='mini-header'> About The Developers </h1>
                <p className='font-link'> Both of the devs on "World Rescue" are highschool students have participated in the non-profit TXT's program SEALS which teaches young boys of color how to code blockchain and crypto games </p>
            </div>
            <div className='info'>
                <h3 className='mini-header'> Devaun Nicholson (Lead Programmer) </h3>
                <img className='dev-image' src='https://ca.slack-edge.com/T17R4TFAM-U022RTW1403-0a11ec6215b9-512' alt='Devaun Nicholson'/>
                <a href='https://github.com/devaunthebomb'>
                    <img className='github-image' src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png' alt='GitHub Logo'/>
                </a>
                <a href='https://www.linkedin.com/in/devaun-nicholson-3a0048233/'>
                    <img className='linkedin-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="linkedinlogo"/>
                </a>
            </div>
                <div className='info'>
                    <h3 className='mini-header'> Daniel Amador (Lead Designer/Programmer) </h3>
                    <img className='dev-image' src='https://ca.slack-edge.com/T17R4TFAM-U022RQA0SHH-563fd8e42cf8-512' alt="Daniel Amador"/>
                    <a href='https://github.com/Artixisthebest'>
                        <img className='github-image' src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png' alt='GitHub Logo'/>
                    </a>
                </div>
        </div>
        //     <h3 class="mini-header">Daniel Amador (Lead Designer/Programmer)</h3>
        //     <img class="Contact-Image" src='https://ca.slack-edge.com/T17R4TFAM-U022RQA0SHH-563fd8e42cf8-512' alt="Daniel"/>
        //     <a href='https://github.com/Artixisthebest'>
        //         <img class="" style={{height: 100}}src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" alt="githublogo"/>
        //     </a>
        //     <a href=''>
        //         <img  style={{height: 100, float: 'right'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png' alt="linkedinlogo"/>
        //     </a>
        // </div>
    )
    
}

export default Contact; 