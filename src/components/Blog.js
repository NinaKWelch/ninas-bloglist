import React, { useState } from 'react'

const Blog = ({
  blog,
  user,
  handleBlogUpdate,
  handleBlogDeletion
}) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const addLikes = blog => {
    const updatedBlog = {
      ...blog,
      likes: blog.likes + 1,
      user: blog.user.id
    }

    handleBlogUpdate(updatedBlog)
  }

  const showWhenVisible = {
    display: visible ? '' : 'none',
    lineHeight: '1.5em',
    backgroundColor: '#efefef',
    padding: '5px 20px',
    border: '1px solid #ccc'
  }

  const listItemStyle = {
    marginTop: 10,
    padding: 7,
    border: '1px solid #ccc',
  }

  const buttonStyle = {
    display: blog.user.username === user.username ? '' : 'none'
  }

  return (
    <li>
      <div onClick={toggleVisibility} style={listItemStyle}>
        {blog.title}, {blog.author}
      </div>

      <div style={showWhenVisible}>
        <p>
          <strong>{blog.title}</strong><br/>
          <a href={blog.url}>{blog.url}</a><br/>
          {blog.likes} Likes <button onClick={() => addLikes(blog)}>Like</button><br/>
          <small>Added by {blog.author}</small><br/>
          <button onClick={() => handleBlogDeletion(blog)} style={buttonStyle}>Remove</button>
        </p>
      </div>
    </li>
  )
}

export default Blog