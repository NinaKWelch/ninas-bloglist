import React from 'react'
import { render,  waitForElement } from '@testing-library/react'

jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  let component

  const user = {
    username: 'tester',
    token: '1234567890',
    name: 'Donald Tester'
  }

  test('blogs are not rendered, if user is not logged in', async () => {
    component = render(
      <App />
    )
    await waitForElement(
      () => component.getByText('Login')
    )

    expect(component.container).toHaveTextContent( 'Login to Bloglist')

    const blogs = component.container.querySelectorAll('.blog-list-item')
    expect(blogs.length).toBe(0)
  })

  describe('logged in user', () => {
    beforeEach(() => {
      localStorage.setItem('loggedBloglistUser', JSON.stringify(user))
    })

    test('blogs are rendered, if user is logged in', async () => {
      component = render(
        <App />
      )
      await waitForElement(
        () => component.container.querySelector('.blog-list-item')
      )

      expect(component.container).toHaveTextContent('Blogs')

      const blogs = component.container.querySelectorAll('.blog-list-item')
      expect(blogs.length).toBe(2)

      expect(component.container).toHaveTextContent(
        'Peter\'s Blog'
      )
      expect(component.container).toHaveTextContent(
        'Nina\'s Blog'
      )
    })
  })
})