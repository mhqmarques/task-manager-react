import React from 'react'

import { BiListUl } from "react-icons/bi";
import * as C from './styles'

type ButtonProp = {
  click: () => void
}

const ButtonMenu = ({click}:ButtonProp) => {
  return (
    <C.Container onClick={click}>
      <BiListUl color='white' size={'1.5em'}/>
    </C.Container>
  )
}

export default ButtonMenu
