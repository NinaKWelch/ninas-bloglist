import blogService from '../services/blogs'

const reducer = (state = [], action) => {
  console.log('ACTION:', action)

  switch(action.type) {
  case 'INIT_BLOGS':
    return action.data
  case 'DELETE_BLOG':
    return state.filter(blog => blog.id !== action.data)
  case 'UPDATE_BLOG':
    var blogToChange = state.find(blog => blog.id === action.data.id)
    var changedBlog = {
      ...blogToChange,
      likes: blogToChange.likes + 1
    }

    return state.map(blog =>
      blog.id !== action.data.id ? blog : changedBlog
    )
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

export const deleteBlog = id => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: 'DELETE_BLOG',
      data: id
    })
  }
}

export const updateBlog = blog => {
  return async dispatch => {
    const updatedBlog = await blogService.update(blog)
    dispatch({
      type: 'UPDATE_BLOG',
      data: updatedBlog
    })
  }
}

export default reducer