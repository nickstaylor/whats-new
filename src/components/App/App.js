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
      chosen: local
    }
  }

  chooseCategory = (event) =>{
  const { name } = event.target
   this.setState({chosen: this.state[name]})
 }


  render () {
    return (
      <div className="app">
        <SearchForm />
        <Menu chooseCategory={this.chooseCategory}/>
        <NewsContainer data={this.state.chosen} />
      </div>
    )
  }
}

export default App;
