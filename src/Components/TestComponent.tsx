import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/RootNavigator'

type TestScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Trang 2'>;

export default function TestComponent() {
  const navigation = useNavigation<TestScreenNavigationProp>();

  const goToPreviousPage = () => navigation.navigate('Trang 1');
  const goToNextPage = () => navigation.navigate('Trang 3');
  const goHome = () => navigation.navigate('Trang 1');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-left" size={24} onPress={goHome} />
        <View style={styles.pageIndicator}>
          <IconButton icon="chevron-left" size={24} onPress={goToPreviousPage} />
          <Text>Trang 2/6</Text>
          <IconButton icon="chevron-right" size={24} onPress={goToNextPage} />
        </View>
        <IconButton icon="home" size={24} onPress={goHome} />
      </View>
      
      <View style={styles.content}>
        <Text>Test Component</Text>
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
