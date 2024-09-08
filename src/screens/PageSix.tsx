import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator'

type PageSixScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 6'>;

export default function PageSixComponent() {
  const navigation = useNavigation<PageSixScreenNavigationProp>();

  const goToPreviousPage = () => navigation.navigate('Trang 5');
  const goToNextPage = () => navigation.navigate('Trang 6');
  const goHome = () => navigation.navigate('Trang 1');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-left" size={24} onPress={goHome} />
        <View style={styles.pageIndicator}>
          <IconButton icon="chevron-left" size={24} onPress={goToPreviousPage} />
          <Text>Trang 6/6</Text>
          <IconButton icon="chevron-right" size={24} onPress={goToNextPage} />
        </View>
        <IconButton icon="home" size={24} onPress={goHome} />
      </View>
      
      <View style={styles.content}>
        <Text>Page Six Component</Text>
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
