import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchForm from './SearchForm';




describe("SearchForm", ()=>{
  it('should sumbit a search', ()=>{
    const mockSubmitSearch = jest.fn()
    const { debug, getByText, getByPlaceholderText } = render(<SearchForm submitSearch={mockSubmitSearch}/>);

    fireEvent.change(getByPlaceholderText('search for articles here'), {target: {value: 'Moon'}})
    fireEvent.click(getByText('Search'));
    expect(mockSubmitSearch).toHaveBeenCalled()
  })

  it('has a placeholder in the search input', () => {
       const { getByPlaceholderText } = render(<SearchForm />)

       expect(getByPlaceholderText('search for articles here')).toBeInTheDocument()
   })

   it('displays the title of the App', ()=>{
     const { getByText } = render(<SearchForm />)

     expect(getByText('One Sweet News App!')).toBeInTheDocument();
   })
})
