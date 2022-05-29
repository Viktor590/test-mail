import { useEffect, useState, useMemo } from 'react';
import PostsServices from '../../services/PostsServices';

import './sending.scss'

const Sending = () => {

  const { getAllUsers, postMessage } = PostsServices();

  const [allContacts, setAllContacts] = useState([])
  const [select, setSelect] = useState('1')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)


  useEffect(() => {
    getAllUsers()
      .then(onUsersEmail)
  }, [])


  const onUsersEmail = (arr) => {
    setAllContacts(arr)
  }

  const selectContacts = useMemo(() =>
    allContacts.map(el => {
      return (
        <option
          key={el.id}
          value={el.id}>{el.name} : {el.email}</option>
      )
    })
  )

  const ViewSelect = allContacts !== [] ? selectContacts : null

  const showResult = () => {
    setShowMessage(true)
    setSelect('1')
    setTopic('')
    setMessage('')
    setTimeout(() => {
      setShowMessage(false)
    }, 1500)
  }

  const sendMessage = (e) => {
    e.preventDefault()
    postMessage(topic, message, select)
      .then(showResult)
  }

  return (
    <form
      onSubmit={sendMessage}
      className="sending">
      Recipient: <select
        onChange={(e) => setSelect(e.target.value)}
        autoFocus
        required
        className="sending-select">
        {ViewSelect}
      </select>


      <label htmlFor="topic">
        Topic
        <input
          onChange={(e) => setTopic(e.target.value)}
          className="sending-topic"
          id="topic"
          type="text"
          value={topic}
          required
        />
      </label>

      <p>Message</p>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        className="sending-textarea"
        type="text"
        value={message}
        cols="30"
        rows="10"
        required>
      </textarea>

      <input
        className="sending-submit"
        type="submit"
        value="Send" />
      <h2
        style={{ display: showMessage ? 'block' : 'none' }}
        className='sending-message'>Successfully sent</h2>

    </form>
  )
}
export default Sending;