import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import * as S from './styles';

export type ReconnectedPeopleCounterProps = {
  counter: number;
};

export const ReconnectedPeopleCounter: React.FC<ReconnectedPeopleCounterProps> =
  ({ counter }) => {
    const [found, setFound] = useState<number>();

    useEffect(() => {
      api.get('/encontrados').then((response) => {
        setFound(response.data);
      });
    }, []);

    return (
      <S.Container>
        <S.Title>Vidas Reconectadas</S.Title>
        <S.CounterBox>
          <S.Counter>{found}</S.Counter>
        </S.CounterBox>
      </S.Container>
    );
  };
