import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

describe('App', ()=>{
  it('changes news topics when a menu topic is clicked', ()=>{

    const { getByAltText, getByText } = render(<App />)
    fireEvent.click(getByText('Science'))

      expect(getByAltText('NASA, in Reddit AMA, says Earth probably won\'t be eaten by a black hole')).toBeInTheDocument()
      expect(getByAltText(/moon/)).toBeInTheDocument()

  })

  it('should show filtered articles based on search input',() => {
      const { getByPlaceholderText, getByText, getByAltText, findAllByText } = render(<App />)
      fireEvent.click(getByText('Science'))
      fireEvent.change(getByPlaceholderText('search for articles here'), {target: {value: "Lockheed"}})
      fireEvent.click(getByText('Search'))
      // had to do only one return because multiple returns created an array and I didn't know
      //how to test that I tried to use findAllByText
      expect(getByAltText(/Lockheed/)).toBeInTheDocument();
  })


})
