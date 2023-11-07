import React from 'react'
import { Button, Card, Image, Space } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import CloseBtn from '../CloseBtn/CloseBtn'
import styles from '../Card/Card.module.css'
import { stylesCard } from './styles'

const CardItem = ({ data, deleteCard }) => (
  <Card
    className={styles.card}
    title={data.name}
    extra={
      <CloseBtn id={data.id} deleteCard={deleteCard} />
    }
    bodyStyle={stylesCard.bodyStyle}
    headStyle={stylesCard.headStyle}
  >
    <Space direction={'vertical'}>
      <Image width={200} src={data.image} />

      <div className={styles.cardBottomWrapper}>
        <div>
          <div className={styles.info}>Gender: {data.gender}</div>
          <div className={styles.info}>Status: {data.status}</div>
        </div>

        <Button>
          <HeartOutlined />
        </Button>
      </div>
    </Space>
  </Card>
)

export default CardItem
