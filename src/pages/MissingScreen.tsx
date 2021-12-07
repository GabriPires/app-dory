import React from 'react';
import { Text } from 'react-native';
import { Box } from '../components/Box';
import { MissingPeopleCard } from '../components/MissingPeopleCard';

export const MissingScreen: React.FC = () => {
  return (
    <Box>
      <Text>Pessoas Desaparecidas</Text>
      <MissingPeopleCard
        age={24}
        location={'Guaratinguetá - SP'}
        missingDate={new Date()}
        name={'Robso Alves'}
      />
    </Box>
  );
};
