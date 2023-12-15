import React from 'react'
import IMG from "../../images/IMGpng.png";


const Banner = () =>{
  return (
    <div className='banner'>
        <img src={IMG} className='img-banner' alt='banner'></img>
        <div className='banner-text'>
        <h1>Chez vous partout et ailleurs</h1>
        </div>
    </div>
  );
}

export default Banner