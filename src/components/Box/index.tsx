import React from 'react';
import { ScrollView } from 'react-native';
import * as S from './styles';

export const Box: React.FC = ({ children }) => {
  return (
    <ScrollView>
      <S.Box>{children}</S.Box>
    </ScrollView>
  );
};
