import React from 'react'
import { useField } from '../hooks'

const BlogForm = ({ handleBlogCreation }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('url')

  const addBlog = event => {
    event.preventDefault()

    const blog = {
      title: title.field.value,
      author: author.field.value,
      url: url.field.value
    }

    handleBlogCreation(blog)
    title.reset()
    author.reset()
    url.reset()
  }

  return (
    <div>
      <h3>Create New</h3>

      <form onSubmit={addBlog} id='new-note-form'>
        <div>
          <label>
            Title:
            <input
              {...title.field}
              name='Title'
            />
          </label>
        </div>

        <div>
          <label>
            Author:
            <input
              {...author.field}
              name='Author'
            />
          </label>
        </div>

        <div>
          <label>
            Url:
            <input
              {...url.field}
              name='Url'
            />
          </label>
        </div>

        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default BlogForm
