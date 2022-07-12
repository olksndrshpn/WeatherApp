import React, { useState } from 'react';
const Hero = (props) => {
    return <div className='hero-container'>

    <h1 className="hero-title">Сайт</h1>
            <div className="recent-news">
                <p>{props.post.title}</p></div>       
 </div>
   
}
 export default Hero;