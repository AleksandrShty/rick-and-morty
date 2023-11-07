import { useState, useEffect } from 'react'
import { Layout, Typography, Divider, Row, Col } from 'antd'
import { makeRequest } from './api/requests'
import { reqAllCharacters } from './api/queries'
import CardItem from './components/Card/Card'
import styles from './App.module.css'

const { Header } = Layout
const { Title } = Typography

const App = () => {
  const [cards, setCards] = useState()

  const deleteCard = (id) => {
    setCards((cards) => cards.filter(item => item.id !== id))
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

  console.log(cards)

  return (
    <Layout className={styles.layoutOuter}>
      <Layout className={styles.layoutInner}>
        <Header className={styles.header}>
          <Title className={styles.title}>Rick and Morty Characters</Title>
        </Header>

        <Divider />

        <Row className={styles.gridLayout} justify="center" gutter={[20, 20]}>
          {cards &&
            cards.map((item) => {
              return (
                <Col key={item.id} xs={24} sm={24} md={12} lg={8} xl={6}>
                  <CardItem data={item} deleteCard={deleteCard} />
                </Col>
              )
            })
          }
        </Row>
      </Layout>
    </Layout>
  )
}

export default App
