import styled from 'styled-components';
import { SCREENS } from '../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  justify-content: center;
  align-items: center;

  margin: 50px auto;
  max-width: 1435px;

  @media only screen and (max-width: ${SCREENS.laptopL}) {
    width: 700px;
    padding: 0;
    margin: 0 auto;
    flex-direction: column;
  }
  @media only screen and (max-width: ${SCREENS.tabletL}) {
    width: 700px;
    flex-direction: column;
    padding: 0;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}) {
    width: 350px;
    flex-direction: column;

    padding: 0;
    margin: 0 auto;
  }
`;
