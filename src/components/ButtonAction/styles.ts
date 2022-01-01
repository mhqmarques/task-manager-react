import styled from "styled-components";
import { ButtonActionProps} from './index'

type ContainerProps = {
  theme: ButtonActionProps
}

export const Container = styled.div(({ theme }: ContainerProps)=>(`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 48px;
  background-color: ${theme.background};
  border-radius: 20px;
  margin-right: 20px;
  p {
    color: #F5F5F6;
    font-size: 1em;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.5s;
  }
  border: ${theme.background === 'transparent' 
    ? '1px solid #414052' 
    : 'none'};
`))