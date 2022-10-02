import styled from 'styled-components';
import { SCREENS } from '../../common/theme';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;

  align-items: center;
  justify-content: center;

  height: 930px;
  max-width: 400px;
  margin: 0 20px;

  background-image: url('img/store/icecream.png');
  background-color: #cccccc;
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: ${SCREENS.laptopL}) {
    width: inherit;
    margin-bottom: 20px;
    min-height: 437px;
    background-position: 0 0;
    max-width: 100%;
  }

  @media only screen and (max-width: ${SCREENS.tablet}) {
    width: inherit;
    margin-bottom: 20px;
    min-height: 437px;
    background-position: 0 0;
  }
  @media only screen and (max-width: ${SCREENS.tabletL}) {
    width: inherit;
    margin-bottom: 20px;
    min-height: 437px;
    background-position: 0 0;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}) {
    width: inherit;
    padding: 0;
    margin-bottom: 0 20px;
    min-height: 437px;
    background-position: 0 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 310px;

  padding: 10px 46.5px;

  align-items: center;
  justify-content: space-between;

  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);

  @media only screen and (max-width: ${SCREENS.laptopL}) {
    min-height: 0;
    padding: 10px 10.5px;
  }
  @media only screen and (max-width: ${SCREENS.tablet}) {
    min-height: 0;
    padding: 10px 10.5px;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}) {
    min-height: 0;
    padding: 10px 10.5px;
  }
`;

export const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${SCREENS.laptopL}) {
    flex-direction: row;
    align-items: left;
    justify-content: left;
  }
  @media only screen and (max-width: ${SCREENS.tablet}) {
    flex-direction: row;
    align-items: left;
    justify-content: left;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}) {
    flex-direction: row;
    align-items: left;
    justify-content: left;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  max-height: 310px;
  min-height: 0;

  text-align: center;
  font-weight: 700;
  font-size: 40px;

  color: #ffffff;
  text-shadow: 5px 5px 20px #000000;
  &:nth-child(1) {
    margin-right: 7px;
  }

  @media only screen and (max-width: ${SCREENS.laptopL}) {
    max-width: 950px;
    padding: 0;
    flex-direction: column;
    min-height: 0;
    font-size: 30px;
  }
  @media only screen and (max-width: ${SCREENS.tablet}) {
    max-width: 700px;
    padding: 0;
    min-height: 0;
    font-size: 30px;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}) {
    font-size: 30px;
  }
`;
