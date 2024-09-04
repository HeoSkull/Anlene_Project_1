import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { DialogCamOn } from './src/dialogs/dialogCamOn';
import { DialogThongBao } from './src/dialogs/dialogThongBao';

export default function App() {
  const [dialogCamOnVisible, setDialogCamOnVisible] = useState(false);
  const [dialogThongBaoVisible, setDialogThongBaoVisible] = useState(false);

  const showDialogCamOn = () => setDialogCamOnVisible(true);
  const hideDialogCamOn = () => setDialogCamOnVisible(false);

  const showDialogThongBao = () => setDialogThongBaoVisible(true);
  const hideDialogThongBao = () => setDialogThongBaoVisible(false);

  const handleConfirmThongBao = () => {
    // Handle the confirmation action here
    hideDialogThongBao();
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Button title="Show Dialog Cảm Ơn" onPress={showDialogCamOn} />
          <Button title="Show Dialog Thông Báo" onPress={showDialogThongBao} />
          
          <DialogCamOn visible={dialogCamOnVisible} onDismiss={hideDialogCamOn} />
          <DialogThongBao 
            visible={dialogThongBaoVisible} 
            onDismiss={hideDialogThongBao}
            onConfirm={handleConfirmThongBao}
          />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
