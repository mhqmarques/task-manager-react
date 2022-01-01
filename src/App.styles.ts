import styled from 'styled-components';

export const Container = styled.div`
  background-color: #181820;
  color: #f5f5f6;
  min-height: 100vh;
`
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin: auto;
  max-width: 85vw;
  padding: 30px 10px;
`
export const Title = styled.h1`
  color: #F5F5F6;
  flex-grow: 1;
`

export const Content = styled.main`
  margin: auto;
  max-width: 85vw;
  padding: 10px;
  border-bottom: 1px solid #414052;
`

export const Greeting = styled.h2`
  color: #F5F5F6;
  font-size: 3em;
  margin: 0 0 30px 0;
  font-weight: 500;
`

export const ButtonArea = styled.section`
  display: flex;
  flex-direction: row;
  padding: 30px 0 30px 0 ;
`
export const Footer = styled.footer`
  padding: 10px;
  text-align: center;
  font-weight: 300;
`
export const Text = styled.p`
  font-weight: 600;
  color: #AC6DDE;
  font-size: 26px;
`
