import React from 'react';
import './Menu.css'
import entertainment from './images/entertainment.svg';
import health from './images/health.svg';
import science from './images/science.svg';
import local from './images/local.svg';
import technology from './images/technology.svg';


const Menu = ({chooseCategory})=> {

  return (
    <div className="menu-bar">
    <button name="entertainment" onClick={chooseCategory}><img src={entertainment} alt="entertainment-logo"/>Entertainment</button>
    <button name="science" onClick={chooseCategory}><img src={science} alt="science-logo"/>Science</button>
    <button name="technology" onClick={chooseCategory}><img src={technology} alt="technology-logo"/>Technology</button>
    <button name="local" onClick={chooseCategory}><img src={local} alt="local-logo"/>Local</button>
    <button name="health" onClick={chooseCategory}><img src={health} alt="health-logo"/>Health</button>
    </div>
  )
}

export default Menu;
