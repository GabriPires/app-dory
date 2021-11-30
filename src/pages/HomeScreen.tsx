import React from 'react';
import { View } from 'react-native';
import { ReconnectedPeopleCounter } from '../components/ReconnectedPeopleCounter';

export const HomeScreen: React.FC = () => {
  return (
    <View>
      <ReconnectedPeopleCounter counter={53} />
    </View>
  );
};
