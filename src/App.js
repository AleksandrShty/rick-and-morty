import { Layout, Typography, Divider, Row } from 'antd';
import {makeRequest, reqAllCharacters} from '../src/service/service'
import styles from './App.module.css';

const { Header } = Layout;
const { Title } = Typography;

const App = () => {
  const getAllCharacters = async () => {
    return await makeRequest(reqAllCharacters).then(({data}) => data.characters.results);
  }

  const cards = getAllCharacters()

  console.log(cards)

  return (
    <Layout className={styles.layoutOuter}>
      <Layout className={styles.layoutInner}>
        <Header className={styles.header}>
          <Title className={styles.title}>Rick and Morty Characters</Title>
        </Header>

        <Divider />

        <Row justify="center">
          
        </Row>
      </Layout>
    </Layout>
  );
}

export default App;
