import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator'

import GradientBackground from '../../components/GradientBackground';
import PageIndicator from '../../components/PageIndicator';

type TestScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 2'>;

export default function TestComponent() {
  const navigation = useNavigation<TestScreenNavigationProp>();

  const goToPreviousPage = () => navigation.navigate('Trang 1');
  const goToNextPage = () => navigation.navigate('Trang 3');
  const goHome = () => navigation.navigate('Trang 1');

  return (
    <GradientBackground gradientColors={['#0E470E', '#20680D', '#2E820D', '#13500E']}>
      <View style={styles.container}>
        <PageIndicator 
          text='Trang 2/6'
          onHomeArrowPress={goHome}
          onPreviousPagePress={goToPreviousPage}
          onNextPagePress={goToNextPage}
          onHomeButtonPress={goHome}
        />
        <View style={styles.content}>
          <Text>Test Component</Text>
        </View>
      </View>
    </GradientBackground>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
