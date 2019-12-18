const blogs = [
  {
    id: '5d56d5b8bbf48a1c72fa8e44',
    title: "Peter's Blog",
    author: 'Peter',
    url: 'http://peter.com',
    likes: 3,
    user: {
      _id: '5d4c3fe4220c3d92e7024e32',
      username: 'root',
      name: 'Superuser'
    }
  },
  {
    id: '5d56d8fdbbf48a1c72fa8e48',
    title: "Nina's Blog",
    author: 'Nina',
    url: 'http://nina.com',
    likes: 2,
    user: {
      _id: '5d56d8a5bbf48a1c72fa8e47',
      username: 'nina',
      name: 'Nina'
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

/*
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
*/

const setToken = () => {}

export default { getAll, setToken }
