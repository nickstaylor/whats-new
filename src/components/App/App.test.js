import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

describe('App', ()=>{
  it('changes news topics when a menu topic is clicked', ()=>{

    const { debug, getByAltText, getByText } = render(<App />)
    fireEvent.click(getByText('Science'))
    // debug()
      expect(getByAltText('NASA, in Reddit AMA, says Earth probably won\'t be eaten by a black hole')).toBeInTheDocument()
      expect(getByAltText(/moon/)).toBeInTheDocument()

  })

  it('should show filtered articles based on search input',() => {
      const { debug, getByPlaceholderText, getByText, getByAltText, findAllByText } = render(<App />)
      fireEvent.click(getByText('Science'))
      fireEvent.change(getByPlaceholderText('search for articles here'), {target: {value: "Lockheed"}})
      fireEvent.click(getByText('Search'))
      debug()
      expect(getByAltText(/Lockheed/)).toBeInTheDocument();
  })


})
