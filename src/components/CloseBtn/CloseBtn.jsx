import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { deleteCardById } from '../../actions/cards'

const CloseBtn = ({ id }) => {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(deleteCardById(id))}>
      <CloseOutlined />
    </Button>
  )
}

export default CloseBtn
