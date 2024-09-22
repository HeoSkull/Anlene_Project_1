import React from 'react';
import { View, StyleSheet,  Image, ScrollView, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator'

import GradientBackground from '../../components/GradientBackground';
import Title from '../../components/Title';
import PageIndicator from '../../components/PageIndicator';
import { logo, imagePage6, suaAnlene } from '../../../img/img';

type PageSixScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 6'>;


export default function PageSix() {
  const navigation = useNavigation<PageSixScreenNavigationProp>();

  const goToPreviousPage = () => navigation.navigate('Trang 5');
  const goHome = () => navigation.navigate('Trang 1');

  return (
    <GradientBackground gradientColors={['#0E470E', '#20680D', '#2E820D', '#13500E']}>
      <View style={styles.container}>
        {/*Page indicator */}
        <PageIndicator 
            page='6'
            onHomeArrowPress={goHome}
            onPreviousPagePress={goToPreviousPage}
            onHomeButtonPress={goHome}
          />
        {/*Content*/}
        <ScrollView>
          <View style={styles.content}>
            <Image source={logo} style={styles.logo}/>
            <Title text={"THÔNG TIN SẢN PHẨM"} color='#ECD24A'/>
            <Title text={"SỮA ANLENE 3 KHỎE"} color='#ECD24A' fontSize={18}/>
            <Image source={suaAnlene} style={styles.img} />
            <View style={{paddingHorizontal: 10}}>
              <Text style={styles.text}>
                Uống 2 ly Anlene mỗi ngày để bổ sung dinh dưỡng, 
                tăng cường đề kháng đồng thời duy trì thói quen tập thể dục mỗi ngày để giúp hệ Cơ-Xương-Khớp chắc khoẻ, 
                thoải mái tận hưởng cuộc sống năng động, chẳng ngại “rào cản” tuổi tác.
              </Text>
            </View>
            {Object.keys(imagePage6).map((key) => (
              <Image key={key} source={imagePage6[key]} style={styles.img} />
            ))}
          </View>
        </ScrollView>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'SVN-Gotham Black'
  },
  
  pageIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 98,
    height: 26,
    resizeMode: 'contain',
  },
  img: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
    marginVertical: 8
  },
  text: {
    fontSize: 14, 
    color:'white',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 18.23,
  },
  image: {
    marginVertical: 20
  }
});
