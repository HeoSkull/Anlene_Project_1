import React from 'react';
import { View, StyleSheet,  Image, ScrollView, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator'

import GradientBackground from '../../components/GradientBackground';
import Title from '../../components/Title';
import PageIndicator from '../../components/PageIndicator';

type PageSixScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 6'>;
const images: { [key: string]: any } = {
  cokhoe: {uri: "https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/cokhoe.png?alt=media&token=9b7bd099-b492-428e-8035-49fb76bc88e2"},
  khoplinhhoat: {uri: "https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/khoplinhhoat.png?alt=media&token=e1f00622-a9f1-4c90-9ddf-b828af9d0b8d"},
  xuongchac: {uri: "https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/xuongchac.png?alt=media&token=d7062557-c6af-441a-981f-1fff70c2ee76"},
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
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/logo.png?alt=media&token=beb2187f-964e-44de-9b44-c51e6c892edf'}} style={styles.logo}/>
            <Title text={"THÔNG TIN SẢN PHẨM"} color='#ECD24A'/>
            <Title text={"SỮA ANLENE 3 KHỎE"} color='#ECD24A' fontSize={18}/>
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/Anlene2.png?alt=media&token=03968ab7-8070-48e4-bd42-fd4fb8d93d33'}} style={styles.img} />
            <View style={{paddingHorizontal: 10}}>
              <Text style={styles.text}>
                Uống 2 ly Anlene mỗi ngày để bổ sung dinh dưỡng, 
                tăng cường đề kháng đồng thời duy trì thói quen tập thể dục mỗi ngày để giúp hệ Cơ-Xương-Khớp chắc khoẻ, 
                thoải mái tận hưởng cuộc sống năng động, chẳng ngại “rào cản” tuổi tác.
              </Text>
            </View>
            {Object.keys(images).map((key) => (
              <Image key={key} source={images[key]} style={styles.img} />
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
