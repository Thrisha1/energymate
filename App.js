// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import BillScreen from './screens/BillScreen';
import AvailableDevicesScreen from './screens/AvailableDevicesScreen';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AvailableDevices" component={AvailableDevicesScreen}/>
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} /> */}
        <Stack.Screen name="Dashboard" component={DashboardScreen}  />
        <Stack.Screen name="Bill" component={BillScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;