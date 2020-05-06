import React from 'react';
import './SearchForm.css';

const SearchForm = (props) =>{
  return (
    <div className='header'>
    <h2>One Sweet News App!</h2>
    <section className='search-bar'>
      <input
      type="text"
      placeholder="search for articles here"
      value={props.searchInput}
      onChange={props.handleChange}
      />
      <button onClick={props.submitSearch}>Search</button>
    </section>
    </div>
  )
}

export default SearchForm;
