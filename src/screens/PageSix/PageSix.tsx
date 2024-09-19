import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator'

import GradientBackground from '../../components/GradientBackground';
import Title from '../../components/Title';
import PageIndicator from '../../components/PageIndicator';

type PageSixScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 6'>;
const images: { [key: string]: any } = {
  cokhoe: require('../../../assets/cokhoe.png'),
  khoplinhhoat: require('../../../assets/khoplinhhoat.png'),
  xuongchac: require('../../../assets/xuongchac.png'),
};

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
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <Title text={"THÔNG TIN SẢN PHẨM"} color='#ECD24A'/>
            <Title text={"SỮA ANLENE 3 KHỎE"} color='#ECD24A' fontSize={18}/>
            <Image source={require('../../../assets/Anlene2.png')} />
            <Text style={styles.text}>
              Uống 2 ly Anlene mỗi ngày để bổ sung dinh dưỡng, 
              tăng cường đề kháng đồng thời duy trì thói quen tập thể dục mỗi ngày để giúp hệ Cơ-Xương-Khớp chắc khoẻ, 
              thoải mái tận hưởng cuộc sống năng động, chẳng ngại “rào cản” tuổi tác.
            </Text>
            {/* <Image source={require('../../../assets/cokhoe.png')} style={styles.image}/>
            <Image source={require('../../../assets/khoplinhhoat.png')} style={styles.image}/>
            <Image source={require('../../../assets/xuongchac.png')} style={styles.image}/>
             */}
            {Object.keys(images).map((key) => (
              <Image key={key} source={images[key]} style={styles.image} />
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
