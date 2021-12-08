import React from 'react';

import * as S from './style';

export const InformationContainer: React.FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export const InformationDetails: React.FC = ({ children }) => {
  return <S.Information>{children}</S.Information>;
};
