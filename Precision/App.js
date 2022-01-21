import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import React from 'react';
import DrawerStack from './src/navigators/DrawerStack';
import MyStack from './src/navigators/MyStack';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <DrawerStack />
    </NavigationContainer>
  );
}
