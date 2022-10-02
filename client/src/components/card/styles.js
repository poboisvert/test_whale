import styled from 'styled-components';
import { SCREENS } from '../../common/theme';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: flex-end;

  margin: 0 20px;

  min-height: ${(props) => props.height || '400px'};

  background-image: url(${(props) => props.url || 'img/store/icecream.png'});
  background-color: #cccccc;
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: ${SCREENS.laptopL}) {
    margin-bottom: 20px;
    width: inherit;
  }

  @media only screen and (max-width: ${SCREENS.tabletL}) {
    margin-bottom: 20px;
    width: inherit;
  }

  @media only screen and (max-width: ${SCREENS.tablet}) {
    margin-bottom: 20px;
    width: inherit;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}) {
    margin-bottom: 20px;
    width: inherit;
  }
`;
