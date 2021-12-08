import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from '../pages/HomeScreen';
import { MissingScreen } from '../pages/MissingScreen';
import { ProfileScreen } from '../pages/ProfileScreen';
import { Header } from '../components/Header';

export const AppTabs = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        header: () => <Header />,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Missing"
        component={MissingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};
