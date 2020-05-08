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
      local: local,
      entertainment: entertainment,
      health: health,
      science: science,
      technology: technology,
      chosen: local,
      searchInput: '',
      filteredData: false
    }
  }

  chooseCategory = event =>{
    const { name } = event.target
    const list = [...event.target.parentNode.children]
    list.forEach(item=>{
      if (item.innerText !== event.target.innerText){
        item.style.backgroundColor = '#1f6fa8'
      } else {
      item.style.backgroundColor = 'orange'
      }
    })
    this.setState({chosen: this.state[name],
                  searchInput: '',
                  filteredData: false})
 }

 handleChange = event => {
  const { value } = event.target
  this.setState({
    searchInput: value
  })
}

  submitSearch = (event)=>{
    event.preventDefault()
    this.setState({filteredData: true})
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
        />
        <NewsContainer
          data={this.state.chosen}
          searchInput={this.state.searchInput}
          filteredData={this.state.filteredData}
        />
      </div>
    )
  }
}

export default App;
