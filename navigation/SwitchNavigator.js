import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Computer from '../Screens/Computer';
import Math from '../Screens/Math';
import GK from '../Screens/GK';
import Science from '../Screens/Science';
import HomeScreen from '../Screens/HomeScreen'

export default function SwitchNavigation() {
  return <AppContainer />;
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  Science: Science,
  Math: Math,
  GK: GK,
  Computer: Computer,
});

const AppContainer = createAppContainer(AppNavigator);
