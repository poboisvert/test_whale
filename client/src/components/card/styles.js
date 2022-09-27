import styled from 'styled-components';
import { SCREENS } from '../../common/theme';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  align-items: center;
  justify-content: flex-end;

  margin: 0 20px;

  min-height: ${(props) => props.height || '400px'};
  min-width: ${(props) => props.width || '400px'};

  background-image: url(${(props) => props.url || 'img/store/icecream.png'});
  background-color: #cccccc;
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: ${SCREENS.laptopL}) {
    max-width: 950px;
    padding: 0;
    flex-direction: column;
  }
  @media only screen and (max-width: ${SCREENS.tablet}) {
    max-width: 700px;
    padding: 0;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}) {
    width: 390px !important;
    padding: 0;
    margin-bottom: 20px;
  }
`;
