import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MissingDetailsScreen } from '../pages/MissingDetailsScreen';
import { AppTabs } from './AppTabs';
import HaveSeenMissingPeopleScreen from '../pages/HaveSeenMissingPeopleScreen';

export const AppStack = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={AppTabs} />
      <Screen name="MissingDetails" component={MissingDetailsScreen} />
      <Screen
        name="HaveSeenMissingPeople"
        component={HaveSeenMissingPeopleScreen}
      />
    </Navigator>
  );
};
