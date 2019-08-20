import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

describe('<SimpleBlog />', () => {
  const blog = {
    title: 'Peter\'s Blog',
    author: 'Peter',
    likes: 2
  }

  test('renders content', () => {
    const component = render(
      <SimpleBlog blog={blog} />
    )

    expect(component.container).toHaveTextContent(
      'Peter\'s Blog, Peter'
    )

    const div = component.container.querySelector('.likes')
    expect(div).toHaveTextContent('blog has 2 likes')
  })

  test('clicking the button twice calls event handler twice', () => {
    const mockHandler = jest.fn()

    const { getByText } = render(
      <SimpleBlog blog={blog} onClick={mockHandler} />
    )

    const button = getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})