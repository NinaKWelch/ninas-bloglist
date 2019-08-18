import React from 'react'
import Blog from './Blog'

const BlogList = ({
  blogs,
  user,
  handleBlogUpdate,
  handleBlogDeletion
}) => {
  const sortByMostLikes = blogs => {
    blogs.sort((a, b) => b.likes - a.likes)

    return (
      blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          user={user}
          handleBlogUpdate={handleBlogUpdate}
          handleBlogDeletion={handleBlogDeletion}
        />
      )
    )
  }

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {sortByMostLikes(blogs)}
    </ul>
  )
}

export default BlogList
