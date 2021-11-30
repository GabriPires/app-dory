import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as S from './styles';

type HeaderProps = {
  showReturn?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ showReturn = false }) => {
  return (
    <S.Container>
      {/* <TouchableOpacity style={{ display: showReturn ? 'flex' : 'none' }}>
        <Ionicons name="arrow-undo" size={18} />
      </TouchableOpacity> */}
      <S.Logo
        source={{
          uri: 'https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-s.png',
        }}
      />
      <TouchableOpacity>
        <Ionicons name="notifications" size={18} />
      </TouchableOpacity>
    </S.Container>
  );
};
