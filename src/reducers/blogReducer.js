import blogService from '../services/blogs'

const reducer = (state = [], action) => {
  console.log('ACTION:', action)

  switch(action.type) {
  case 'INIT_BLOGS':
    return action.data
  case 'CREATE_BLOG':
    return state.concat(action.data)
  case 'DELETE_BLOG':
    return state.filter(blog => blog.id !== action.data)
  case 'UPDATE_BLOG': {
    // https://eslint.org/docs/rules/no-case-declarations
    let blogToChange = state.find(blog => blog.id === action.data.id)
    let changedBlog = {
      ...blogToChange,
      likes: blogToChange.likes + 1
    }

    return state.map(blog =>
      blog.id !== action.data.id ? blog : changedBlog
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
      data: { ...newBlog, user: user }
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