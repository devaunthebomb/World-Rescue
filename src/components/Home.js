import React from 'react';
import Wallet from './wallet_connection/WalletConnection';

function Home() {
    return(
        <body class="myStyle">
        <div>
          <h1 class="header"> World Rescue </h1>
            {/* <img id="Q_Image" src='https://www.poynter.org/wp-content/uploads/2021/09/shutterstock_1563012205.png' alt="question"/> */}
            <h3 className='mini-header'>What is World Rescue?</h3>
            <p class="home-font-link tac">
              World Rescue is a platformer/adventure game in which you go around the world helping various animals in different locations and cleaning the surronding area!</p>
          </div>
          <div>
            <h3 class="mini-header">Our Purpose</h3>
            <img id='M_Image' src='https://arcoro.com/wp-content/uploads/2020/09/mission-04-scaled.jpg' alt="Mission"/>
            <p class="home-font-link tac"> 
            The purpose for our game was to bring more attention towards the effects of global warming 
            <br/> 
             and its effects on our planet</p>
            <p class="home-font-link tac">We also want to bring to light the effect it has had on the animals that live in those 
             <br/>
             regions and how they suffer from losing their homes </p>
             <h3 class="mini-header">Connect Your MetaMask Wallet Now!</h3>
             <p class="home-font-link tac"> To access our token and NFTS that you earn during the game, connect your 
              <br/>
              existing MetaMask account or download it to make a new account if you haven't already! </p>
             <Wallet></Wallet>
          </div>
</body>
    )
}
export default Home; 