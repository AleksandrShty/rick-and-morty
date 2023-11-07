import { useState, useEffect } from 'react'
import { Layout, Typography, Divider, Button } from 'antd'
import { makeRequest } from './api/requests'
import { reqAllCharacters } from './api/queries'
import Grid from './components/Grid/Grid'
import { useDispatch, useSelector } from 'react-redux'
import styles from './App.module.css'

const { Header } = Layout
const { Title } = Typography

const App = () => {
  const [characters, setCharacters] = useState([])
  const dispatch = useDispatch()
  const likes = useSelector((state) => state.likedCards)
  const cards = useSelector((state) => state.cards)
  const [stateSort, setStateSort] = useState(false)

  const likeCard = (id) => {
    dispatch({ type: 'ADD_LIKE', payload: id })
  }

  const removeLikeCard = (id) => {
    dispatch({ type: 'REMOVE_LIKE', payload: id })
  }

  // const deleteCard = (id) => {
  //   setCards((cards) => cards.filter((item) => item.id !== id))
  // }

  // const sortLiked = () => {
  //   if (!stateSort) {
  //     setStateSort(true)
  //     setCards(cards.filter((card) => likes.includes(card.id)))
  //   } else {
  //     setStateSort(false)
  //     setCards(cards)
  //   }
  // }

  const getAllCharacters = async () => {
    return await makeRequest(reqAllCharacters)
      .then(({ data }) => data.characters.results)
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    (async () => {
      setCharacters(await getAllCharacters())
    })()
    dispatch({ type: 'ADD_CARDS', payload: characters })
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
          // deleteCard={deleteCard}
          likeCard={likeCard}
          removeLikeCard={removeLikeCard}
        />
      </Layout>
    </Layout>
  )
}

export default App
