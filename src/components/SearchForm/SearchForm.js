import React from 'react';
import './SearchForm.css';

const SearchForm = () =>{
  return (
    <div className='header'>
    <h2>One Sweet News App!</h2>
    <section className='search-bar'>
      <input
      type="text"
      placeholder="search for articles here"
      />
      <button>Search</button>
    </section>
    </div>
  )
}

export default SearchForm;
