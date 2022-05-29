import Api from '../utils/Api';

const PostsServices = () => {

  const GETBASE = 'https://jsonplaceholder.typicode.com';


  const getAllUsers = async () => {
    const res = await Api(`${GETBASE}/users`)
    return res.map(_allUsersTransform)
  }

  const getUser = async (id) => {
    const res = await Api(`${GETBASE}/users/${id}`)
    return res
  }


  const getPosts = async (id) => {
    const res = await Api(`${GETBASE}/posts/${id}?userId=${id}`)
    return res
  }

  const postMessage = async (topic, text, id) => {
    const res = await Api(`${GETBASE}/posts`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          title: topic,
          body: text,
          userId: id,
        }),
      }

    )
    return res
  }

  const deleteMessage = async (id) => {
    const res = await Api(`${GETBASE}/posts/${id}`, {
      method: 'DELETE'
    })
    return res
  }



  const _allUsersTransform = (arr) => {
    return {
      id: arr.id,
      name: arr.name,
      email: arr.email,
      website: arr.website
    }
  }



  return {
    getAllUsers,
    getUser,
    getPosts,
    postMessage,
    deleteMessage
  }


}

export default PostsServices;


