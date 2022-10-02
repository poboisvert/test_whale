import React from 'react';
import * as S from './styles';

function index() {
  return (
    <S.Sidebar>
      <S.Container>
        <S.Highlight>
          <S.Text>Top 10</S.Text>
          <S.Text>Hottest Flavours</S.Text>
        </S.Highlight>
        <br />
        <S.Text>Summer 2021</S.Text>
      </S.Container>
    </S.Sidebar>
  );
}

export default index;
