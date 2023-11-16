import React from 'react'
import { Button, Card, Image, Space } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import CloseBtn from '../CloseBtn/CloseBtn'
import { useDispatch } from 'react-redux'
import { LIKES_FROM_LOCALSTORAGE } from '../../constants/constants'
import { addLike, removeLike } from '../../actions/likes'
import styles from '../Card/Card.module.css'
import { stylesCard } from './styles'

const CardItem = ({ data, likes }) => {
  const dispatch = useDispatch()

  const toggleLike = () => {
    LIKES_FROM_LOCALSTORAGE?.includes(data.id) ||
    likes?.includes(data.id)
      ? dispatch(removeLike(data.id))
      : dispatch(addLike(data.id))
  }

  return (
    <Card
      className={styles.card}
      title={data.name}
      extra={<CloseBtn id={data.id} />}
      bodyStyle={stylesCard.bodyStyle}
      headStyle={stylesCard.headStyle}
    >
      <Space direction="vertical">
        <Image width={200} src={data.image} />

        <div className={styles.cardBottomWrapper}>
          <div>
            <div className={styles.info}>Gender: {data.gender}</div>
            <div className={styles.info}>Status: {data.status}</div>
          </div>

          <Button
            onClick={toggleLike}
            className={
              JSON.parse(localStorage.getItem('likes'))?.includes(data.id) ||
              likes?.includes(data.id)
                ? styles.filledHeart
                : null
            }
          >
            <HeartOutlined />
          </Button>
        </div>
      </Space>
    </Card>
  )
}

export default CardItem
