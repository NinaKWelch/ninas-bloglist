import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('renders content', () => {
  const blog = {
    title: 'Peter\'s Blog',
    author: 'Peter',
    likes: 2
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Peter\'s Blog, Peter'
  )

  const div = component.container.querySelector('.likes')
  expect(div).toHaveTextContent('blog has 2 likes')
})