import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeComponent from '../screens/Welcome';
import TestComponent from '../screens/Test';
import SubmitComponent from '../screens/Submit';
import PageFourComponent from '../screens/PageFour';
import PageFiveComponent from '../screens/PageFive';
import PageSixComponent from '../screens/PageSix';

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
      <Stack.Screen name="Trang 1" component={WelcomeComponent} />
      <Stack.Screen name="Trang 2" component={TestComponent} />
      <Stack.Screen name="Trang 3" component={SubmitComponent} />
      <Stack.Screen name="Trang 4" component={PageFourComponent} />
      <Stack.Screen name="Trang 5" component={PageFiveComponent} />
      <Stack.Screen name="Trang 6" component={PageSixComponent} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
