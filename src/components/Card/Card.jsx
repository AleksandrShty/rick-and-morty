import React from 'react'
import { Button, Card, Image, Space } from 'antd'
import { CloseOutlined, HeartOutlined } from '@ant-design/icons'
import styles from '../Card/Card.module.css'

const CardItem = ({ data, deleteCard }) => {
  return (
    <Card
      className={styles.card}
      title={data.name}
      extra={
        <Button onClick={() => deleteCard(data.id)}>
          <CloseOutlined />
        </Button>
      }
      bodyStyle={{display: 'flex', justifyContent: 'center'}}
      headStyle={{maxWidth: '100%'}}  
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
}

export default CardItem
