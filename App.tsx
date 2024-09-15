import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from './src/navigator/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { StepProvider } from './src/screens/Test/hook/StepProvider';

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StepProvider>
            <RootNavigator />
          </StepProvider>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;