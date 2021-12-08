import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppStack } from './src/routes/AppStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      <StatusBar style={'auto'} />
    </>
  );
}
