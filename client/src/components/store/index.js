import React from 'react';
import * as S from './styles';
import dynamic from 'next/dynamic';
import Button from '../../common/button';

const Card = dynamic(() => import('../card'), {
  suspense: true,
});

function index() {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Card url='img/store/icecream_ube.png'>
            <Button
              totalradius='30px'
              bgcolor='#7D63B9'
              bgborder='#FFF0E5'
              href='#'
            >
              Get it
            </Button>
          </Card>

          <Card url='img/store/icecream_avocado.png'>
            <Button
              totalradius='30px'
              bgcolor='#206C00'
              bgborder='#FFF0E5'
              href='#'
            >
              Get it
            </Button>
          </Card>
        </S.Container>
        <S.Container margin='20px 0 0 0'>
          <Card totalwidth='841px' url='img/store/icecream_more.png'>
            <S.Box>
              <S.Title>Our Ice Cream Philosophy</S.Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </S.Box>
          </Card>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default index;
