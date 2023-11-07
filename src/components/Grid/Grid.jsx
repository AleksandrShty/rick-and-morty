import React from 'react'
import { Row, Col } from 'antd'
import CardItem from '../Card/Card'
import styles from '../Grid/Grid.module.css'

const Grid = ({cards, deleteCard, likeCard, removeLikeCard}) => {
  return (
    <Row className={styles.gridLayout} justify="center" gutter={[20, 20]}>
      {cards.lenght > 0 && cards.map((item) => {
        return (
          <Col key={item.id} xs={24} sm={24} md={12} lg={8} xl={6}>
        
            <CardItem data={item} likeCard={likeCard} removeLikeCard={removeLikeCard} />
          </Col>
        )
      })}
    </Row>
  )
}

export default Grid
