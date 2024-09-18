import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from './src/navigator/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { StepProvider } from './src/screens/Test/hook/Steps';
import { UserProvider } from './src/screens/Submit/hook/users';

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StepProvider>
            <UserProvider>
              <RootNavigator />
            </UserProvider>
          </StepProvider>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;