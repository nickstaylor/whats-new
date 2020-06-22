import React, { Component } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types'

class SearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: ''
    }
  }

   handleChange = event => {
     const { value } = event.target
     this.setState({
       searchInput: value
     })
   }

   searchSubmit = event => {
     event.preventDefault()
     this.props.submitSearch(this.state.searchInput)
    this.setState({searchInput: ''})
   }

  render() {
  return (
    <div className='header'>
      <h2>One Sweet News App!</h2>
      <form className='search-bar'>
        <input
          type="text"
          placeholder="search for articles here"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
        <button onClick={this.searchSubmit}>Search</button>
      </form>
    </div>
  )
}
}

SearchForm.propTypes = {
  submitSearch: PropTypes.func
}

export default SearchForm;
