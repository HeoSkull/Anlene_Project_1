import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome/Welcome';
import Test from '../screens/Test/Test';
import Submit from '../screens/Submit/Submit';
import Submit1 from '../screens/Submit/Submit1';
import PageFour from '../screens/PageFour/PageFour';
import PageFive from '../screens/PageFive/PageFive';
import PageSix from '../screens/PageSix/PageSix';

export type RootStackParamList = {
  'Trang 1': undefined;
  'Trang 2': undefined;
  'Trang 3': undefined;
  'Trang 4': undefined;
  'Trang 5': undefined;
  'Trang 6': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false // Hide the default header
      }}
    >
      <Stack.Screen name="Trang 1" component={Welcome} />
      <Stack.Screen name="Trang 2" component={Test} />
      <Stack.Screen name="Trang 3" component={Submit1} />
      <Stack.Screen name="Trang 4" component={PageFour} />
      <Stack.Screen name="Trang 5" component={PageFive} />
      <Stack.Screen name="Trang 6" component={PageSix} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
