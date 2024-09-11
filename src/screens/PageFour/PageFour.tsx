import React from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';
import { } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';

import PageIndicator from '../../components/PageIndicator';
import Title from '../../components/Title';
import GradientBackground from '../../components/GradientBackground';
type PageFourScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 4'>;

export default function PageFourComponent() {
  const navigation = useNavigation<PageFourScreenNavigationProp>();

  const goToPreviousPage = () => navigation.navigate('Trang 3');
  const goToNextPage = () => navigation.navigate('Trang 5');
  const goHome = () => navigation.navigate('Trang 1');

  return (
    <GradientBackground color='#969696'>
      <View style={styles.container}>
        <PageIndicator 
          text='Trang 4/6'
          onHomeArrowPress={goHome}
          onPreviousPagePress={goToPreviousPage}
          onNextPagePress={goToNextPage}
          onHomeButtonPress={goHome}
        />
        <Image source={require('../../../assets/logo.png')} style={styles.logo}/>  
        <Title text="HÃY CẨN THẬN"/>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  pageIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 98,
    height: 26,
    resizeMode: 'contain',
    alignSelf: 'center'
  }, 
});
