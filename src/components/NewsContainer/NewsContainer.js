import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  console.log('newscontainerprops', props)
  let category = props.data
  const newsArticles = category.map(item=> {
    return (
      <NewsArticle
      key = {item.id}
      headline = {item.headline}
      img = {item.img}
      description = {item.description}
      url = {item.url}
      id = {item.id}
      />
    )
  })

  return (
    <section className="news-container">
    {newsArticles}
    </section>
  )
}

export default NewsContainer;
