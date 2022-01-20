// import {LogBox} from 'react-native';
// LogBox.ignoreLogs(['Reanimated 2']);
import React from 'react';
import DrawerStack from './src/navigators/DrawerStack'
import MyStack from './src/navigators/MyStack';

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <DrawerStack />
    // <MyStack />
  );
}
