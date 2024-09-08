import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from './src/navigator/RootNavigator';
import { theme } from './src/themes/themes';

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Simulate font loading
    const loadFonts = async () => {
      // Wait for a short time to allow fonts to load
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;