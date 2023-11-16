import { useState, useEffect, useMemo } from 'react'
import { Layout, Typography, Divider, Button } from 'antd'
import Grid from '../Grid/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { LIKES_FROM_LOCALSTORAGE } from '../../constants/constants'
import { fetchCards } from '../../asyncActions/cards'
import styles from './App.module.css'

const { Header } = Layout
const { Title } = Typography

const App = () => {
  const dispatch = useDispatch()
  const likes = useSelector((state) => state.likes.likedCards)
  const cards = useSelector((state) => state.cards.cards)
  const [isFilter, setIsFilter] = useState(false)

  const filterLiked = () => {
    if (!isFilter) {
      setIsFilter(true)
    } else {
      setIsFilter(false)
    }
  }

  const filteredCards = useMemo(() => {
    const filteredArr = cards.filter(
      (card) =>
      LIKES_FROM_LOCALSTORAGE?.includes(card.id) ||
        likes.includes(card.id),
    )
    return LIKES_FROM_LOCALSTORAGE?.length > 0 ||
      filteredArr.length > 0
      ? filteredArr
      : 'Список пуст'
  }, [isFilter, cards])

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  return (
    <Layout className={styles.layoutOuter}>
      <Layout className={styles.layoutInner}>
        <Header className={styles.header}>
          <Title className={styles.title}>Rick and Morty Characters</Title>
        </Header>

        <Divider />

        <div className={styles.sortBtnWrapper}>
          <Button onClick={filterLiked} type="primary">
            {isFilter ? 'Liked cards' : 'All cards'}
          </Button>
        </div>

        <Grid cards={isFilter ? filteredCards : cards} likes={likes} />
      </Layout>
    </Layout>
  )
}

export default App
