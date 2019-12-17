import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

describe('<SimpleBlog />', () => {
  let component
  let mockHandler

  const blog = {
    title: "Peter's Blog",
    author: 'Peter',
    likes: 2
  }

  beforeEach(() => {
    mockHandler = jest.fn()
    component = render(<SimpleBlog blog={blog} onClick={mockHandler} />)
  })

  test('renders content', () => {
    expect(component.container).toHaveTextContent("Peter's Blog, Peter")

    expect(component.container).toHaveTextContent(blog.title)
    expect(component.container).toHaveTextContent(blog.author)
    expect(component.container).toHaveTextContent(
      `blog has ${blog.likes} likes`
    )
  })

  test('clicking the button twice calls event handler twice', () => {
    const button = component.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})
