import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/RootNavigator'

type SubmitScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Trang 3'>;

export default function SubmitComponent() {
  const navigation = useNavigation<SubmitScreenNavigationProp>();

  const goToPreviousPage = () => navigation.navigate('Trang 2');
  const goToNextPage = () => navigation.navigate('Trang 4');
  const goHome = () => navigation.navigate('Trang 1');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-left" size={24} onPress={goHome} />
        <View style={styles.pageIndicator}>
          <IconButton icon="chevron-left" size={24} onPress={goToPreviousPage} />
          <Text>Trang 3/6</Text>
          <IconButton icon="chevron-right" size={24} onPress={goToNextPage} />
        </View>
        <IconButton icon="home" size={24} onPress={goHome} />
      </View>
      
      <View style={styles.content}>
        <Text>Submit Component</Text>
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
