import React from 'react'
import { connect } from 'react-redux'
import { deleteBlog, updateBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import Blog from './Blog'

const BlogList = (props/*{
  blogs,
  user
}*/) => {

  const handleBlogDeletion = blog => {
    const confirmRemoveBlog = window.confirm(
      `Remove '${blog.title}?' by ${blog.author}`
    )

    if (confirmRemoveBlog) {
      props.deleteBlog(blog.id)
      props.setNotification(`'${blog.title}' has been removed`)
    }
  }

  const handleBlogUpdate = blog => {
    props.updateBlog(blog)
    props.setNotification(`New like added for ${blog.title}`)
  }

  const sortByMostLikes = blogs => {
    blogs.sort((a, b) => b.likes - a.likes)

    return (
      props.blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          user={props.user}
          handleBlogUpdate={handleBlogUpdate}
          handleBlogDeletion={handleBlogDeletion}
        />
      )
    )
  }

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {sortByMostLikes(props.blogs)}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = {
  deleteBlog,
  updateBlog,
  setNotification
}

const ConnectedBlogList  = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList)

export default ConnectedBlogList


