import React from 'react'
import { Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

const CloseBtn = ({id, deleteCard}) => {
  return (
    <Button onClick={() => deleteCard(id)}>
      <CloseOutlined />
    </Button>
  )
}

export default CloseBtn
