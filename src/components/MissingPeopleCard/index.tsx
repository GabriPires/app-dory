import React from 'react';
import { Text } from 'react-native';
import { Button } from '../Button';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export type MissingPeopleCardProps = {
  name: string;
  age: string | number;
  missingDate: Date;
  location: string;
};

export const MissingPeopleCard: React.FC<MissingPeopleCardProps> = ({
  age,
  location,
  missingDate,
  name,
}) => {
  const navigation = useNavigation();

  const navigateToDetails = (id: string): void => {
    // @ts-expect-error err
    navigation.navigate('MissingDetails', { id: id });
  };

  return (
    <S.Container>
      <S.Avatar
        source={{
          uri: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
        }}
        resizeMode={'cover'}
      />
      <S.MissingName>{name}</S.MissingName>
      <S.Age>{age} anos</S.Age>
      <S.Title>Desaparecido desde</S.Title>
      <Text>{missingDate.toISOString()}</Text>
      <S.Title>Cidade</S.Title>
      <Text style={{ marginBottom: 8 }}>{location}</Text>
      <Button
        title={'Mais Informações'}
        onPress={() => navigateToDetails('1')}
      />
    </S.Container>
  );
};
