import React from 'react';

function About() {
    return(
        <div class="myStyle">
            <h1 class="header">About page!</h1>
            <p class="tac"> As we previously stated, Our game is an platformer/adventure game in which we aim to raise awareness with the problem of pollution and global warming.  </p>
            <p class="tac"> Our approuch to this is to make a game with multiple stages or levels where you would be assigned different tasks such as saving animals and cleaning trash!!  </p>
            <p class="tac"> To create our game, we'll be using Phaser inside of React with Html, Css, and JavaScript </p>

            <h1 class="header"> Road Map </h1>
            <p class="tac font-link"> <strong> Phase 1: Make NTFS available for the public to mint </strong></p>
            <p  class='tac font-link'> <strong> Phase 2: Wallet Connection </strong></p>
            <p class='tac font-link'> <strong> Phase 3: Create the animation of the main character and enemies </strong></p>
            <p class='tac font-link'> <strong> Phase 3: Level Design of at least 1 level </strong></p>

            {/* <h1 class="header"> About the Developers </h1>
            <p class="tac font-link"> Both of the devs on "World Rescue" are highschool students have participated in the non-profit TXT's program SEALS which teaches young boys of color how to code blockchain and crypto games.</p> */}
        </div>


       
        
    )
    
}

export default About;