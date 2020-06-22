import React from 'react';
import './Menu.css'
import entertainment from './images/entertainment.svg';
import health from './images/health.svg';
import science from './images/science.svg';
import local from './images/local.svg';
import technology from './images/technology.svg';
import PropTypes from 'prop-types'


const Menu = ({chooseCategory, topic})=> {

// style={{backgroundColor: 'orange'}} 
  return (
    <div className="menu-bar">
    <button name="local" className={topic === 'local' ? "active": "inactive"}   rel="noopener noreferrer" onClick={chooseCategory}><img src={local} alt="local-logo"/>Local</button>
    <button name="entertainment" className={topic === 'entertainment' ? "active" : "inactive"} rel="noopener noreferrer" onClick={chooseCategory}><img src={entertainment} alt="entertainment-logo"/>Entertainment</button>
    <button name="science"  className={topic === 'science' ? "active" : "inactive"} rel="noopener noreferrer" onClick={chooseCategory}><img src={science} alt="science-logo"/>Science</button>
    <button name="technology"  className={topic === 'technology' ? "active" : "inactive"} rel="noopener noreferrer" onClick={chooseCategory}><img src={technology} alt="technology-logo"/>Technology</button>
    <button name="health"  className={topic === 'health' ? "active" : "inactive"}rel="noopener noreferrer" onClick={chooseCategory}><img src={health} alt="health-logo"/>Health</button>
    </div>
  )
}

Menu.propTypes = {
  chooseCategory: PropTypes.func,
  topic: PropTypes.string
}

export default Menu;
