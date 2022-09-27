import React from 'react';
import * as S from './styles';

function index(props) {
  return (
    <S.Card height={props.height} width={props.width} url={props.url}>
      {props.children}
    </S.Card>
  );
}

export default index;
