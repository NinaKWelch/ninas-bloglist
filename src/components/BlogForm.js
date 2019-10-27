import React from 'react'
import { useField } from '../hooks'

const BlogForm = ({ handleBlogCreation }) => {
  const [title, titleReset] = useField('text')
  const [author, authorReset] = useField('text')
  const [url, urlReset] = useField('text')

  const addBlog = event => {
    event.preventDefault()

    handleBlogCreation({
      title: title.value,
      author: author.value,
      url: url.value
    })

    titleReset()
    authorReset()
    urlReset()
  }

  return (
    <div>
      <h3>Create New</h3>

      <form onSubmit={addBlog} id='new-note-form'>
        <div>
          <label>
            Title:
            <input
              {...title}
              name='Title'
            />
          </label>
        </div>

        <div>
          <label>
            Author:
            <input
              {...author}
              name='Author'
            />
          </label>
        </div>

        <div>
          <label>
            Url:
            <input
              {...url}
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
