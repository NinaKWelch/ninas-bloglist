import blogService from '../services/blogs'
import commentService from '../services/comments'

const reducer = (state = [], action) => {
  // console.log('ACTION:', action)

  switch (action.type) {
    case 'INIT_BLOGS':
      return action.data
    case 'CREATE_BLOG':
      return state.concat(action.data)
    case 'DELETE_BLOG':
      return state.filter(blog => blog.id !== action.data)
    case 'UPDATE_LIKES': {
      const blogToChange = state.find(blog => blog.id === action.data.id)
      const changedBlog = {
        ...blogToChange,
        likes: blogToChange.likes + 1
      }

      return state.map(blog =>
        blog.id !== changedBlog.id ? blog : changedBlog
      )
    }
    case 'CREATE_COMMENT': {
      const blogToChange = state.find(blog => blog.id === action.data.blog)
      const changedBlog = {
        ...blogToChange,
        comments: blogToChange.comments.concat(action.data)
      }

      return state.map(blog =>
        blog.id !== changedBlog.id ? blog : changedBlog
      )
    }
    default:
      return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = (blog, user) => {
  return async dispatch => {
    const newBlog = await blogService.create(blog)
    dispatch({
      type: 'CREATE_BLOG',
      data: { ...newBlog, user }
    })
  }
}

export const deleteBlog = id => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: 'DELETE_BLOG',
      data: id
    })
  }
}

export const updateLikes = blog => {
  return async dispatch => {
    const updatedBlog = await blogService.update(blog)
    dispatch({
      type: 'UPDATE_LIKES',
      data: updatedBlog
    })
  }
}

export const createComment = (comment, id) => {
  return async dispatch => {
    const newComment = await commentService.create(comment, id)
    dispatch({
      type: 'CREATE_COMMENT',
      data: newComment
    })
  }
}

export default reducer
