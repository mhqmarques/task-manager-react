import React from 'react'

import * as C from './styles'

export type ButtonActionProps= {
  background: string,
  title: string,
  action: ()=>void,
  isSelected?: boolean
}

const ButtonAction = (theme: ButtonActionProps) => {
  return (
    <C.Container theme={theme} onClick={theme.action}>
      <p>{theme.title}</p>
    </C.Container>
  )
}

export default ButtonAction
