import { useState, useEffect, useMemo } from 'react'
import deleted from '../../images/icons/deleted.svg'
import './inboxContentLeft.scss';
import PostsServices from '../../services/PostsServices';
import InboxContentRight from '../inboxContentRight/InboxContentRight';

const InboxContentLeft = () => {

  const { getAllUsers, deleteMessage } = PostsServices()

  const [sort, setSort] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])
  const [activeId, setActiveId] = useState(1)


  useEffect(() => {
    getAllUsers()
      .then(onUsersData)
  }, [])


  const onUsersData = (arr) => {
    setData(arr)
  }

  function sortArray(x, y) {
    if (x.name < y.name) { return -1; }
    if (x.name > y.name) { return 1; }
    return 0;
  }

  const arrSorted = () => {
    setData(data.sort(sortArray))
  }

  const arrFilter = () => {
    if (data !== []) {
      return data.filter(el => {
        return el.name.toLowerCase().includes(inputValue.toLowerCase())
      })
    }

    return
  }

  const arrFil = arrFilter()

  const onChangeContent = (id) => {
    setActiveId(id)
  }

  const deletedItem = (value) => {
    deleteMessage(value)
      .then(setData(data.filter((item) => (item.id !== value))))
  }

  const userCards = useMemo(() =>
    data.map((el, id) => {
      return (
        <div
          onClick={() => onChangeContent(el.id)}
          key={el.id}
          style={{ border: activeId === el.id ? '1px solid red' : '1px solid #ccc' }}
          className="contentLeft-bottom__card">

          <h2 className="contentLeft-card__title">
            {el.name}
          </h2>

          <h4 className="contentLeft-card__email">
            {el.email}
          </h4>

          <h4 className="contentLeft-card__company">
            {el.website}
          </h4>

          <img
            className='contentLeft-card__deleted'
            onClick={() => deletedItem(el.id)}
            src={deleted} alt="delete" />
        </div>
      )
    }))

  const AllView = data !== [] ? userCards : null

  const View = inputValue !== '' ? arrFil.map((el, id) => {
    return (
      <div
        onClick={() => onChangeContent(id)}
        key={el.id}
        style={{ border: activeId === id ? '1px solid red' : '1px solid #ccc' }}
        className="contentLeft-bottom__card">

        <h2 className="contentLeft-card__title">
          {el.name}
        </h2>

        <h4 className="contentLeft-card__email">
          {el.email}
        </h4>

        <h4 className="contentLeft-card__company">
          {el.website}
        </h4>

        <img
          className='contentLeft-card__deleted'
          onClick={() => deletedItem(el.id)}
          src={deleted} alt="delete" />
      </div>
    )
  }) : AllView



  return (
    <div className='wrapper'>
      <div className='contentLeft'>
        <div className='contentLeft-top'>
          <div className='contentLeft-top__sorted'>
            <p>Sort:</p>
            <select
              onChange={(e) => {
                setSort(e.target.value)
                arrSorted()
              }}>
              <option>Sort Name</option>
              <option value="a">A-Z</option>
            </select>
          </div>

        </div>
        <div className='contentLeft-search'>
          <input
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
            placeholder="search"
            type="text" />
        </div>

        <div className="contentLeft-bottom">

          {View}

        </div>
      </div>
      <InboxContentRight id={activeId} />
    </div>
  )
}
export default InboxContentLeft;