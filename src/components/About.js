import React from 'react';
import "./About.css"

function About() {
    return(
        <div className='container-about'>
            <div className='about'>
                <h3 className='mini-header'> More About Us </h3>
                <p className='font-link'> As we previously stated, Our game is an platformer/adventure game in which we aim to raise awareness with the problem of pollution and global warming. </p>
                <p className='font-link'> We plan on using the money made from our NFTS to donate to projects that align with our mission to combat the climate crisis.  </p>
            </div>
            <div className='roadmap'>
                <h3 className='mini-header'> Our Roadmap </h3>
                <img className='roadmap-image' src='https://cdn.discordapp.com/attachments/859950676548517908/954943902463430706/Group_1.png' alt='RoadMap'/>
            </div>
        </div>


        // <div class="myStyle">
        //     <h1 class="header">About page!</h1>
        //     <p class="tac font-link"> As we previously stated, Our game is an platformer/adventure game in which we aim to raise awareness with the problem of pollution and global warming.  </p>
        //     <p class="tac font-link"> Our approuch to this is to make a game with multiple stages or levels where you would be assigned different tasks such as saving animals and cleaning trash!!  </p>
        //     <p class="tac font-link"> To create our game, we'll be using Phaser inside of React with Html, Css, and JavaScript </p>

        //     <h1 class="header"> Road Map </h1>
        //     <p class="tac font-link"> <strong> Phase 1: Add Enemies </strong></p>
        //     <p  class='tac font-link'> <strong> Phase 2: Create the animation of the main character and enemies </strong></p>
        //     <p class='tac font-link'> <strong> Phase 3: Create more levels and more variations of enemies </strong></p>
        //     <p class='tac font-link'> <strong> Phase 4: Add quests </strong></p>

        //     {/* <h1 class="header"> About the Developers </h1>
        //     <p class="tac font-link"> Both of the devs on "World Rescue" are highschool students have participated in the non-profit TXT's program SEALS which teaches young boys of color how to code blockchain and crypto games.</p> */}
        // </div>


       
        
    )
    
}

export default About;