import React from 'react'
import { connect } from 'react-redux'
import { updateBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

import BlogComments from './BlogComments'

const Blog = props => {
  const { blog } = props

  const addLikes = blog => {
    props.updateBlog({
      ...blog,
      user: blog.user.id
    })
    props.setNotification(`New like added for ${blog.title}`)
  }

  if ( blog === undefined) {
    return null
  }

  return (
    <div>
      <h3>
        {blog.title}, {blog.author}
      </h3>

      <div>
        <p>
          <a href={blog.url}>{blog.url}</a><br/>
          {blog.likes} Likes <button onClick={() => addLikes(blog)}>Like</button><br/>
          <small>Added by {blog.user.name}</small><br/>
        </p>
      </div>

      <BlogComments comments={blog.comments} />
    </div>
  )
}

const mapDispatchToProps = {
  updateBlog,
  setNotification
}

export default connect(
  null,
  mapDispatchToProps
)(Blog)