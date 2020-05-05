import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className="news-article">
    <img src={props.img} alt={props.headline} />
    <section className="article-body">
    <h3>{props.headline}</h3>
    <p>{props.description}</p>
    </section>
    <a href={props.url} target='_blank'><button className="article-button">Link to Article ➡️</button></a>
    </div>
  )


}
export default NewsArticle;
