import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator'

import  DialogCamOn  from '../dialogs/dialogCamOn';
import  DialogThongBao  from '../dialogs/dialogThongBao';
type PageFiveScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 5'>;

export default function PageFiveComponent() {
  const navigation = useNavigation<PageFiveScreenNavigationProp>();
  const [dialogCamOnVisible, setDialogCamOnVisible] = useState(false);
  const [dialogThongBaoVisible, setDialogThongBaoVisible] = useState(false);

  const showDialogCamOn = () => setDialogCamOnVisible(true);
  const hideDialogCamOn = () => setDialogCamOnVisible(false);

  const showDialogThongBao = () => setDialogThongBaoVisible(true);
  const hideDialogThongBao = () => setDialogThongBaoVisible(false);

  const handleConfirmThongBao = () => {
    hideDialogThongBao();
  };
  const handleContinue = () => {
    hideDialogCamOn();
  };


  const goToPreviousPage = () => navigation.navigate('Trang 4');
  const goToNextPage = () => navigation.navigate('Trang 6');
  const goHome = () => navigation.navigate('Trang 1');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-left" size={24} onPress={goHome} />
        <View style={styles.pageIndicator}>
          <IconButton icon="chevron-left" size={24} onPress={goToPreviousPage} />
          <Text>Trang 5/6</Text>
          <IconButton icon="chevron-right" size={24} onPress={goToNextPage} />
        </View>
        <IconButton icon="home" size={24} onPress={goHome} />
        <View style={styles.content}>
          <Button onPress={showDialogCamOn}>Show Dialog Cảm Ơn</Button>
          <Button onPress={showDialogThongBao}>Show Dialog Thông Báo</Button>
          
          <DialogCamOn visible={dialogCamOnVisible} onDismiss={hideDialogCamOn} onContinue={handleContinue} />
          <DialogThongBao 
            visible={dialogThongBaoVisible} 
            onDismiss={hideDialogThongBao}
            onConfirm={handleConfirmThongBao}
          />
        </View>
      </View>
      
      <View style={styles.content}>
        <Text>Page Five Component</Text>
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
