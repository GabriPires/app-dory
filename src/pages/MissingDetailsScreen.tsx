import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

interface Params {
  id: string;
}

export const MissingDetailsScreen: React.FC = () => {
  const route = useRoute();

  const routeParams = route.params as Params;

  return (
    <View>
      <Text>Opa</Text>
      <Text>Opa</Text>
      <Text>Opa</Text>
      <Text>{routeParams.id}</Text>
    </View>
  );
};
