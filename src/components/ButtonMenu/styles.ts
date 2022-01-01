import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #AC6DDE;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 15px;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`