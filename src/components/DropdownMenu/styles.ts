import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  `;

export const Menu = styled.div`
    background-color: transparent;
    position: absolute;
    right: 0px;
    top: 10px;
    height: 80px;
    `;

export const ItemMenu = styled.div`
  padding: 5px;
  width: 80px;
  background-color: #414052;
  margin-bottom: 5px;
  border-radius: 20px;
  transition: filter 300ms;
  p {
    color: #f5f5f6;
    text-align: center;
    margin: 0;
  }
  :hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`

