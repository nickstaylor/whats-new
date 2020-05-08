import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Menu from './Menu';



describe('Menu', ()=>{
  it('should display a topic for users to click on', ()=>{
    const { getByText } = render(<Menu />)

    expect(getByText('Entertainment')).toBeInTheDocument();
    expect(getByText('Local')).toBeInTheDocument();
  })

  it('when a topic is clicked, the chooseCategory method should fire', ()=>{
    const mockChooseCategory = jest.fn()
    const { getByText } = render(<Menu chooseCategory={mockChooseCategory} />)
    fireEvent.click(getByText("Entertainment"))

    expect(mockChooseCategory).toHaveBeenCalled()
  })

})
