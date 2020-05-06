import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  console.log('newscontainerprops', props)
  const { filteredData, searchInput, data} = props
  let filteredArticles
  let newsArticles

  if (filteredData){
      // props.resetFilter()
      filteredArticles = data.filter(item=>{
      return item.headline.toLowerCase().includes(searchInput.toLowerCase())
    })
    if (filteredArticles.length === 0){
        newsArticles =
        <div>
        So sorry. The search results are empty. Please click on a menu category to view newsArticles
        </div>

    } else {
        newsArticles = filteredArticles.map(item=> {
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
    }
    // props.resetFilter()
    console.log('filteredArticles', filteredArticles)
  }

  if (!filteredArticles){
    newsArticles = data.map(item=> {
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
}

  return (
    <section className="news-container">
    {newsArticles}
    </section>
  )
}

export default NewsContainer;
