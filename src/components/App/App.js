import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      // local: [],
      // entertainment: [],
      // health: [],
      // science: [],
      // technology: [],
      local: local,
      entertainment: entertainment,
      health: health,
      science: science,
      technology: technology,
      chosen: 'local',
      topic: 'local',
      filtered: []
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     loading: true
  //   })
  //   console.log("REGULATORS!!!!...Mount up!")
  //   fetch("https://whats-new-api.herokuapp.com/api/v1/news")
  //     .then(response => response.json())
  //     .then(response => {
  //       const {
  //         entertainment,
  //         local,
  //         health,
  //         science,
  //         technology
  //       } = response
  //       this.setState({
  //         entertainment: entertainment,
  //         local: local,
  //         health: health,
  //         science: science,
  //         technology: technology,
  //         loading: false
  //       })
  //     })
  // }

  chooseCategory = event =>{
    const { name } = event.target
    // const list = [...event.target.parentNode.children]
    // list.forEach(item=>{
    //   if (item.innerText !== event.target.innerText){
    //     item.style.backgroundColor = '#1f6fa8'
    //   } else {
    //   item.style.backgroundColor = 'orange'
    //   }
    // })
    this.setState({topic: name,
                  chosen: name
                  })
 }



  submitSearch = (value)=>{
    let filteredArticles = this.state[this.state.chosen].filter(item=>item.headline.toLowerCase().includes(value.toLowerCase()))
    this.setState({ filtered: filteredArticles,
                    chosen: 'filtered'
                  })
  }

  render () {
    return (
      <div className="app">
        <SearchForm
          handleChange={this.handleChange}
          searchInput={this.state.searchInput}
          submitSearch={this.submitSearch}
         />
        <Menu
          chooseCategory={this.chooseCategory}
          topic={this.state.topic}
        />
        {this.state.loading ? <h2 className="loading">Articles Loading....</h2> :
        <NewsContainer
          data={this.state[this.state.chosen]}
          // searchInput={this.state.searchInput}
          // filteredData={this.state.filteredData}
        />}
      </div>
    )
  }
}

export default App;
