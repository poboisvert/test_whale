import styled from 'styled-components';
import { SCREENS } from '../../common/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  //height: 100%;
  height: 930px;

  justify-content: center;

  @media only screen and (max-width: ${SCREENS.laptopL}) {
    max-width: 950px;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  @media only screen and (max-width: ${SCREENS.tablet}) {
    max-width: 700px;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}) {
    max-width: 390px;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 930px;
  width: 100%;
  flex: 1;

  align-items: center;
  top: 0;
  margin: ${(props) => props.margin || 0};

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
    padding: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;

  margin: 65px;
  padding: 30px;

  align-items: center;
  justify-content: space-between;

  background-color: #3e3940;
  color: #fff;

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
    width: 294px;
    height: 262px;

    font-size: 12px;

    padding: 0 30px;
    margin: 40px;
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
    padding: 0;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: left;
  width: 100%;

  text-align: left;
  font-weight: 400;
  font-size: 40px;

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
    padding: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
`;
