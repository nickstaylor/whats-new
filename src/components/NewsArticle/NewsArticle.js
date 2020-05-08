import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';



const NewsArticle = (props) => {
  return (
    <div className="news-article">
      <img className="article-image" src={props.img} alt={props.headline} />
      <div className="article-body">
        <h3>{props.headline}</h3>
        <p>{props.description}</p>
      </div>
      <a href={props.url} target='_blank' rel="noopener noreferrer"><button className="article-button">Link to Article ➡</button></a>
    </div>
  )
}


NewsArticle.propTypes = {
  img: PropTypes.string,
  headline: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
}


export default NewsArticle;
