import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from './src/navigator/RootNavigator';

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;