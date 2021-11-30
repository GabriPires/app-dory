import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from './src/pages/HomeScreen';
import { MissingScreen } from './src/pages/MissingScreen';
import { ProfileScreen } from './src/pages/ProfileScreen';
import { Header } from './src/components/Header';

export default function App() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
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
                <Ionicons
                  name="person-circle-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Navigator>
      </NavigationContainer>
      <StatusBar style={'auto'} />
    </>
  );
}
