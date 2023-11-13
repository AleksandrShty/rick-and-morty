import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Spin, Empty } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import CardItem from '../Card/Card'
import styles from '../Grid/Grid.module.css'

const Grid = ({ cards, likes }) => {
  const isLoading = useSelector((state) => state.cards.isLoading)

  return (
    <Row className={styles.gridLayout} justify="center" gutter={[20, 20]}>
      {isLoading ? (
        <Spin indicator={<LoadingOutlined className={styles.spin} spin />} />
      ) : (
        cards.length > 0 &&
        typeof cards === 'object' &&
        cards.map((item) => {
          return (
            <Col key={item.id} xs={24} sm={24} md={12} lg={8} xl={6}>
              <CardItem data={item} likes={likes} />
            </Col>
          )
        })
      ) || <Empty className={styles.emptyList} />}
    </Row>
  )
}

export default Grid
