import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Header } from '../components/Header';

interface Params {
  id: string;
}

const HaveSeenMissingPeopleScreen: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as Params;

  return (
    <ScrollView>
      <Header />
      <Text>Vi esta pessoa {routeParams.id}</Text>
    </ScrollView>
  );
};

export default HaveSeenMissingPeopleScreen;
