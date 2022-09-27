import styled from 'styled-components';
import { SCREENS } from '../../common/theme';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;

  align-items: center;
  justify-content: center;

  height: 930px;
  width: 100%;
  min-width: 400px;

  background-image: url('img/store/icecream.png');
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
    max-width: 390px;
    padding: 0;
    margin-bottom: 20px;
    min-height: 437px;

    background-position: 0 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 10px 46.5px;

  align-items: center;
  justify-content: space-between;

  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);

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
    max-width: 390px;
    padding: 10px 10.5px;
    max-height: 125px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  min-height: 150px;

  text-align: center;
  font-weight: 700;
  font-size: 40px;

  color: #ffffff;
  text-shadow: 5px 5px 20px #000000;

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
    max-width: 390px;
    min-height: 0;
    font-size: 30px;
  }
`;
