import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'
import PropTypes from 'prop-types'

const NewsContainer = (props) => {
  // const { filteredData, searchInput, data} = props
  const { data } = props
  // let filteredArticles
  let newsArticles

  // if (filteredData){
  //     filteredArticles = data.filter(item=>{
  //     return item.headline.toLowerCase().includes(searchInput.toLowerCase())
  //     })
  // if (filteredArticles.length === 0){
  //     newsArticles =
  //     <div>
  //       <p className="empty-search">So sorry. The search results are empty. Please click on a menu category to view News Articles</p>
  //     </div>
  //   } else {
  //       newsArticles = filteredArticles.map(item=> {
  //         return (
  //           <NewsArticle
  //             key = {item.id}
  //             headline = {item.headline}
  //             img = {item.img}
  //             description = {item.description}
  //             url = {item.url}
  //             id = {item.id}
  //           />
  //         )
  //       })
  //   }
  // }

  if (!data.length){
    return newsArticles =
      <div>
        <p className="empty-search">So sorry. The search results are empty. Please click on a menu category to view News Articles</p>
      </div>
    } else {
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

NewsContainer.propTypes = {
  // filteredData: PropTypes.bool,
  // searchInput: PropTypes.string,
  data: PropTypes.array
}

export default NewsContainer;
