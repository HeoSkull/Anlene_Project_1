import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/RootNavigator';

import { DialogCamOn } from '../dialogs/dialogCamOn';
import { DialogThongBao } from '../dialogs/dialogThongBao';
type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Trang 1'>;

export default function WelcomeComponent() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const [dialogCamOnVisible, setDialogCamOnVisible] = useState(false);
  const [dialogThongBaoVisible, setDialogThongBaoVisible] = useState(false);

  const showDialogCamOn = () => setDialogCamOnVisible(true);
  const hideDialogCamOn = () => setDialogCamOnVisible(false);

  const showDialogThongBao = () => setDialogThongBaoVisible(true);
  const hideDialogThongBao = () => setDialogThongBaoVisible(false);

  const handleConfirmThongBao = () => {
    hideDialogThongBao();
  };

  const goToNextPage = () => navigation.navigate('Trang 2');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-left" size={24} onPress={() => {}} />
        <View style={styles.pageIndicator}>
          <IconButton icon="chevron-left" size={24} onPress={() => {}} />
          <Text>Trang 1/6</Text>
          <IconButton icon="chevron-right" size={24} onPress={goToNextPage} />
        </View>
        <IconButton icon="home" size={24} onPress={() => {}} />
      </View>
      
      <View style={styles.content}>
        <Button onPress={showDialogCamOn}>Show Dialog Cảm Ơn</Button>
        <Button onPress={showDialogThongBao}>Show Dialog Thông Báo</Button>
        
        <DialogCamOn visible={dialogCamOnVisible} onDismiss={hideDialogCamOn} />
        <DialogThongBao 
          visible={dialogThongBaoVisible} 
          onDismiss={hideDialogThongBao}
          onConfirm={handleConfirmThongBao}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
  },
  pageIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
