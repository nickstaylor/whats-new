import React from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types'

const SearchForm = (props) =>{
  return (
    <div className='header'>
      <h2>One Sweet News App!</h2>
      <form className='search-bar'>
        <input
          type="text"
          placeholder="search for articles here"
          value={props.searchInput}
          onChange={props.handleChange}
        />
        <button onClick={props.submitSearch}>Search</button>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  handleChange: PropTypes.func,
  searchInput: PropTypes.string,
  submitSearch: PropTypes.func
}

export default SearchForm;
