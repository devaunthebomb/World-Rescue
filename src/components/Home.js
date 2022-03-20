import React from 'react';
import Wallet from './wallet_connection/WalletConnection';
import "./Home.css"
function Home() {
    return(
      <div className='container-home'>
        <div className='call-to-action'>
         <h1 className='mini-header'>What is World Rescue?</h1>
         <p className='font-link'> World Rescue is a platformer/adventure game in which you go around the world helping various animals in different locations and cleaning the surronding area!</p>
         <h4 className='section-header'> The Story:  </h4>
         <p className='font-link'> World Rescue was made because while all this new technology and the metaverse may seem exciting, sometimes we need to unplug to recharge. Let's not forget that we all live in the same world and that we should take care of our home. An issue we are currently facing is global warming. Global warming makes the temperature warmer and no one likes to sweat constantly, but more importantly global warming affects the Arctic which many animals like seals call their home. Also with the melting of the Arctic, it causes sea levels to rise endangering coastal cities such as Tokyo, Amsterdam, and New York, cities with populations in the Millions risk of flooding </p>
       </div>
       <div className='mission'>
         <h1 className='mini-header'> Mission </h1>
        <div className='mission-content'>
        <div className='test'>
           <img className='images' src='https://restore-earth.angelprotocol.io/_next/static/media/earth5.087594fe.png' alt="penguin-NFT"/>
         </div>
           <p className='font-link'> The purpose for our game was to bring more attention towards the effects of global warming and its effects on our planet. We also want to bring to light the effect it has had on the animals that live in those regions and how they suffer from losing their homes  </p>
        </div>
       </div>
       <div className='metaMask'>
         <h3 className='mini-header'> Connect Your MetaMask Wallet Now! </h3>
         <p className='font-link'> To access our token and NFTS that you earn during the game, connect your existing MetaMask account or download it to make a new account if you haven't already! </p>
         <Wallet></Wallet>
       </div>
      </div>
    )
}
export default Home; 