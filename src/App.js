import { useState, useEffect } from 'react'
import { Layout, Typography, Divider, Button } from 'antd'
import Grid from './components/Grid/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from './asyncActions/cards'
import { deleteCardById } from './actions/cards'
import { addLike, removeLike } from './actions/likes'
import styles from './App.module.css'

const { Header } = Layout
const { Title } = Typography

const App = () => {
  const dispatch = useDispatch()
  const likes = useSelector((state) => state.likedCards)
  const cards = useSelector((state) => state.cards.cards)
  const [stateSort, setStateSort] = useState(false)
  
  const likeCard = (id) => {
    console.log(likes, 'likes')
    dispatch(addLike(id))
  }

  const removeLikeCard = (id) => {
    console.log(likes, 'likes')
    dispatch(removeLike(id))
  }

  const deleteCard = (id) => {
    dispatch(deleteCardById(id))
  }

  // const sortLiked = () => {
  //   if (!stateSort) {
  //     setStateSort(true)
  //     setCards(cards.filter((card) => likes.includes(card.id)))
  //   } else {
  //     setStateSort(false)
  //     setCards(cards)
  //   }
  // }

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
          <Button type="primary">All cards</Button>
        </div>

        <Grid
          cards={cards}
          deleteCard={deleteCard}
          likeCard={likeCard}
          removeLikeCard={removeLikeCard}
        />
      </Layout>
    </Layout>
  )
}

export default App
