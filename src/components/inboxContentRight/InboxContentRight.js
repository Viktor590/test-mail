import './inboxContentRight.scss';
import PostsServices from '../../services/PostsServices';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';

const InboxContentRight = (props) => {

  const { getUser, getPosts } = PostsServices()
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState({})

  useEffect(() => {
    getUser(props.id)
      .then(onUser)

    getPosts(props.id)
      .then(onPosts)
  }, [props])

  const onUser = (arr) => {
    setUser(arr)
  }

  const onPosts = (arr) => {
    setPosts(arr)
  }

  const contentTop = useMemo(() =>

    <h2 className='contentRight-top__name'>
      {user.name}
    </h2>

  )

  const contentBottom = useMemo(() =>
    <>
      <h2 className='contentRight-title'>
        {posts.title}
      </h2>

      <div className='contentRight-bottom'>
        <p className='contentRight-bottom__text'>
          {posts.body}
        </p>
      </div>
    </>
  )

  const ViewTop = user !== {} ? contentTop : null
  const ViewBottom = posts !== {} ? contentBottom : null



  return (
    <div className='contentRight'>
      <div className='contentRight-top'>
        {ViewTop}
      </div>
      {ViewBottom}
    </div>
  )
}

export default InboxContentRight