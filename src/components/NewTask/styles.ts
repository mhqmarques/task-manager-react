import styled from "styled-components";

export const Container = styled.div`
  height: 597px;
  width: 576px;
  background-color: #21212B;
  border-radius: 20px;
  padding: 10px;
  .close {
    padding-right: 10px;
  }
  .close:hover  {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.5s;
}
`
export const ContainerClose = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Content = styled.div`
  padding: 36px 38px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #F5F5F6;
  margin: 0 0 40px 0;
  text-align: left;
`
export const ContainerInput = styled.div`
    display: flex;
    flex: 1;
    justify-content: start;
    align-items: center;
    background-color: #272733;
    border-radius: 20px;
    margin-bottom: 20px;
    min-height: 40px;
    border: 0;
    input, textarea {
      display: flex;
      flex: 1;
      padding: 10px;
      background-color: transparent;
      border: 0;
      outline: 0;
      color: #F5F5F6;
      font-size: 18px;
      resize: none;
  }
`
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

