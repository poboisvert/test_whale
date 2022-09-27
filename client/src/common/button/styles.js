import styled from 'styled-components';
import { SCREENS } from '../theme';

export const Button = styled.button`
  background: ${(props) => props.bgcolor || '#222323'};
  color: ${(props) => (props.text ? props.text : '#FFF')};

  border: ${(props) => (props.border ? `1px solid ${props.bgborder}` : 0)};
  border-radius: ${(props) => (props.totalradius ? props.totalradius : 0)};
  border: 4px solid;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 15px 30px;
  margin: 25px;

  font-size: 1rem;
  font-weight: 700;

  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hover || '#222323'};
  }

  @media only screen and (max-width: ${SCREENS.laptopL}) {
    width: ${(props) => (props.width ? '160px' : '450px')};
  }
  @media only screen and (max-width: ${SCREENS.tablet}) {
    width: ${(props) => (props.width ? '140px' : '250px')};
  }
  @media only screen and (max-width: ${SCREENS.mobileL}) {
    width: ${(props) => (props.width ? '100px' : '130px')};
  }
`;
