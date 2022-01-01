import styled from 'styled-components';

export const Container = styled.div`
  background-color: #272733;
  margin-bottom: 10px;
  border-radius: 20px;
  height: 276px;
`;
export const Content = styled.div`
  padding: 20px;
`;
export const Header = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  input[type='checkbox'] {
    appearance: none;
    background-color: 'transparent';
    margin: 0;
    color: #fff;
    width: 30px;
    height: 30px;
    border: 3px solid #AC6DDE;
    border-radius: 50%;
    margin-right: 15px;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }
  input[type="checkbox"]::before {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 30px 30px #F5F5F6;

  }
  input[type="checkbox"]:checked::before {
    transform: scale(0.5);
  }
  label {
    font-weight: 600;
    flex-grow: 1;
  }
  .contextMenu:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;
export const Description = styled.section`
  background-color: #21212B;
  height: 147px;
  margin-bottom: 20px;
  p {
    padding: 10px;
    font-weight: 400;
    color: #F5F5F6;
  }
`;
export const Footer = styled.section`
  p {
    text-align: center;
    color: #F5F5F6;
    font-weight: 300;
  }
`

