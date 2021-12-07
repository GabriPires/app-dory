import React from 'react';
import * as S from './styles';

export type ReconnectedPeopleCounterProps = {
  counter: number;
};

export const ReconnectedPeopleCounter: React.FC<ReconnectedPeopleCounterProps> =
  ({ counter }) => {
    return (
      <S.Container>
        <S.Title>Vidas Reconectadas</S.Title>
        <S.CounterBox>
          <S.Counter>{counter}</S.Counter>
        </S.CounterBox>
      </S.Container>
    );
  };
