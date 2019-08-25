import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('<Blog />', () => {
  const blog = {
    title: 'Peter\'s Blog',
    author: 'Peter',
    likes: 2,
    user: {
      username: 'root'
    }
  }

  const user = {
    username: 'root'
  }

  let component

  beforeEach(() => {
    const mockHandler = jest.fn()

    component = render(
      <Blog blog={blog} user={user} onClick={mockHandler} />
    )
  })

  test('renders the blog title and author', () => {
    expect(component.container).toHaveTextContent(
      'Peter\'s Blog, Peter'
    )
  })

  test('initially the additional information is hidden', () => {
    const div = component.container.querySelector('.blog-list-item-info')
    expect(div).toHaveStyle('display: none')
  })

  test('additional information becomes visible by clicking on the blog titile', () => {
    const listItem = component.container.querySelector('.blog-list-item')
    fireEvent.click(listItem)

    const div = component.container.querySelector('.blog-list-item-info')
    expect(div).toHaveStyle('display: block')
  })
})