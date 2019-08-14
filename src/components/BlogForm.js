import React, { useState } from 'react'

const BlogForm = ({ addNewBlog }) => {
  const [title, setTitle] = useState('') 
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = event => {
    event.preventDefault()

    const blog = {
      title,
      author,
      url
    }

    addNewBlog(blog)
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h3>Create New</h3>

      <form onSubmit={addBlog}>
        <div>
          Title:
          <label>
            <input type='text'
                   value={title}
                   name='Title'
                   onChange={({ target }) => setTitle(target.value)}
            />
          </label>
        </div>

        <div>
          Author:
          <label>
            <input type='text'
                   value={author}
                   name='Author'
                   onChange={({ target }) => setAuthor(target.value)}
            />
          </label>
        </div>

        <div>
          Url:
          <label>
          <input type='url'
                 value={url}
                 name='Url'
                 onChange={({ target }) => setUrl(target.value)}
          />
          </label>
        </div>

        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default BlogForm
