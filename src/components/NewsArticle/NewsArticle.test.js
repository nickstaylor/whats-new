import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NewsArticle from './NewsArticle'


describe('NewsArticle', () => {
  it('can display correct info', ()=> {
    const { getByText, getByAltText, getByRole } = render(<NewsArticle
                                  headline='fakeHeadline'
                                  img='fakeImg'
                                  description='fakeDesc'
                                  url='fakeUrl'
                                  alt='fakeHeadline'
                                />);
    expect(getByText('fakeHeadline')).toBeInTheDocument();
    expect(getByText('fakeDesc')).toBeInTheDocument();
    expect(getByRole('img', {alt: 'fakeHeadline'}))

  })

})
