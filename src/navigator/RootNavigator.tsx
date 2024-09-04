import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeComponent from '../Components/WelcomeComponent';
import TestComponent from '../Components/TestComponent';
import SubmitComponent from '../Components/SubmitComponent';
import PageFourComponent from '../Components/PageFourComponent';
import PageFiveComponent from '../Components/PageFiveComponent';
import PageSixComponent from '../Components/PageSixComponent';

export type RootStackParamList = {
  'Trang 1': undefined;
  'Trang 2': undefined;
  'Trang 3': undefined;
  'Trang 4': undefined;
  'Trang 5': undefined;
  'Trang 6': undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
