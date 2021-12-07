import React from 'react';
import { ButtonProps } from 'react-native';
import * as S from './style';

export const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};
