import { Layout, Typography, Divider, Row } from 'antd'
import { makeRequest } from './api/requests'
import { reqAllCharacters } from './api/queries'
import styles from './App.module.css'
import { useEffect } from 'react'

const { Header } = Layout
const { Title } = Typography

const App = () => {
  const getAllCharacters = async () => {
    return await makeRequest(reqAllCharacters)
      .then(({ data }) => data.characters.results)
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <Layout className={styles.layoutOuter}>
      <Layout className={styles.layoutInner}>
        <Header className={styles.header}>
          <Title className={styles.title}>Rick and Morty Characters</Title>
        </Header>

        <Divider />

        <Row justify="center"></Row>
      </Layout>
    </Layout>
  )
}

export default App
