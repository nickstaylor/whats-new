import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NewsContainer from './NewsContainer';


describe('NewsContainer', ()=>{

  it('should display NewsArticles', ()=>{
    const { getByText } = render(<NewsContainer
                                  data={[{id: 1,
                                     description: "awesomeness",
                                     headline: "you are not cool",
                                     url: "http://uncool.com",
                                     img: "notCoolAtAll"}]} />)

    expect(getByText('you are not cool')).toBeInTheDocument()
  })

  // it('should show message if no articles are in the search', ()=>{
  //   const { getByText, getByPlaceholderText } = render(<NewsContainer
  //                                 data={[{id: 1,
  //                                    description: "awesomeness",
  //                                    headline: "you are not cool",
  //                                    url: "http://uncool.com",
  //                                    img: "notCoolAtAll"}]}
  //                                   //  searchInput="nothing"
  //                                    // filteredData={true}
  //                                     />)
  //   fireEvent.change(getByPlaceholderText('search for articles here'), {target: {value: "nothing"}})
  //   expect(getByText('So sorry. The search results are empty. Please click on a menu category to view News Articles')).toBeInTheDocument()
  // })


})
