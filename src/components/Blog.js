import React from 'react'
import { connect } from 'react-redux'
import { updateLikes, createComment } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

import BlogComments from './BlogComments'

const Blog = props => {
  const { blog } = props

  const addLikes = () => {
    props.updateLikes({
      ...blog,
      user: blog.user.id
    })

    props.setNotification(`New like added for ${blog.title}`)
  }

  const addComment = comment => {
    props.createComment(comment, blog.id)
    props.setNotification(`New comment added for ${blog.title}`)
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
          {blog.likes} Likes <button onClick={() => addLikes()}>Like</button><br/>
          <small>Added by {blog.user.name}</small><br/>
        </p>
      </div>

      <BlogComments comments={blog.comments} handleCommentCreation={addComment} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = {
  updateLikes,
  createComment,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)