import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import NewsContainer from '../NewsContainer/NewsContainer'

describe('App', ()=>{
  it.skip('changes news topics when a menu topic is clicked', () => {

    const { getByAltText, getByText } = render(<App />)
    fireEvent.click(getByText('Science'))

      expect(getByAltText('NASA, in Reddit AMA, says Earth probably won\'t be eaten by a black hole')).toBeInTheDocument()
      expect(getByAltText(/moon/)).toBeInTheDocument()

  })

  it.skip('should show filtered articles based on search input', async () => {
      const { getByPlaceholderText, getByText, getByAltText, findAllByText } = render(<App />)
      fireEvent.click(getByText('Science'))
      fireEvent.change(getByPlaceholderText('search for articles here'), {target: {value: "Lockheed"}})
      fireEvent.click(getByText('Search'))
      // had to do only one return because multiple returns created an array and I didn't know
      //how to test that I tried to use findAllByText
      const result = await waitFor(() => getByAltText(/Lockheed/))
      expect(result).toBeInTheDocument()
  })

  it.skip('should show message if no articles are in the search', ()=>{
    const { getByText, getByPlaceholderText } = render(<NewsContainer
                                  data={[{id: 1,
                                     description: "awesomeness",
                                     headline: "you are not cool",
                                     url: "http://uncool.com",
                                     img: "notCoolAtAll"}]}
                                    //  searchInput="nothing"
                                     // filteredData={true}
                                      />)
    fireEvent.change(getByPlaceholderText('search for articles here'), {target: {value: "nothing"}})
    expect(getByText('So sorry. The search results are empty. Please click on a menu category to view News Articles')).toBeInTheDocument()
  })


})
