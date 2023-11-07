import { useState, useEffect } from 'react'
import { Layout, Typography, Divider } from 'antd'
import { makeRequest } from './api/requests'
import { reqAllCharacters } from './api/queries'
import Grid from './components/Grid/Grid'
import styles from './App.module.css'

const { Header } = Layout
const { Title } = Typography

const App = () => {
  const [cards, setCards] = useState([])

  const deleteCard = (id) => {
    setCards((cards) => cards.filter((item) => item.id !== id))
  }

  const getAllCharacters = async () => {
    return await makeRequest(reqAllCharacters)
      .then(({ data }) => data.characters.results)
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    (async () => {
      setCards(await getAllCharacters())
    })()
  }, [])

  return (
    <Layout className={styles.layoutOuter}>
      <Layout className={styles.layoutInner}>
        <Header className={styles.header}>
          <Title className={styles.title}>Rick and Morty Characters</Title>
        </Header>

        <Divider />

        <Grid cards={cards} deleteCard={deleteCard} />
      </Layout>
    </Layout>
  )
}

export default App
