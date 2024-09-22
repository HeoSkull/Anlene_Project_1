import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../..//navigator/RootNavigator';

import ButtonClick from '../../components/ButtonClick';
import SmallTextNote from '../../components/SmallTextNote';
import Title from '../../components/Title';
import PageIndicator from '../../components/PageIndicator';
import CardSale from './Card';
type PageFiveScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 5'>;

export default function PageFive() {
  const navigation = useNavigation<PageFiveScreenNavigationProp>();
  
  const goToPreviousPage = () => navigation.navigate('Trang 4');
  const goHome = () => navigation.navigate('Trang 1');
  
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/page5.png?alt=media&token=43d3a04d-2352-4090-804c-23899ced4c05'}} style={styles.backgroundImage}>
      {/*Top Content */}
        <View style={styles.header}>
          <LinearGradient
            colors={['#0E470E', '#1F660D', 'rgba(32, 104, 13, 0.9)', 'rgba(35, 110, 13, 0.85)', 'rgba(39, 117, 13, 0.7)', 'rgba(46, 130, 13, 0)']}
            locations={[0.0102, 0.7184, 0.823, 0.8678, 0.914, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.headerGradient}
          >
            <PageIndicator 
              page='5'
              onHomeArrowPress={goHome}
              onPreviousPagePress={goToPreviousPage}
              onHomeButtonPress={goHome}
            />
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/logo.png?alt=media&token=beb2187f-964e-44de-9b44-c51e6c892edf'}} style={styles.logo}/>          
            <Title text={"CHĂM SÓC CƠ-XƯƠNG-KHỚP\nNHẬN LỘC SỨC KHỎE TỪ ANLENE"} fontSize={20}/>
            <View style={{ paddingHorizontal: 20}}>
              <Text style={[styles.text, {fontWeight: '500'}]}>ANLENE LÌ XÌ NGAY 100.000đ KHI ĐẶT MUA HÔM NAY!</Text>
              <Text style={styles.text}>Hạn sử dụng: 25/07/2021 - 31/07/2021 </Text>
            </View>
            {/*End Top Content */}
          </LinearGradient>
        </View>

        {/*Bottom Content*/}
        
      </ImageBackground>

      <View style={styles.cardSale}>
        <CardSale/>
      </View>

      <View style={styles.footer}>
        <LinearGradient
          colors={['#0E470E', '#1F660D', 'rgba(32, 104, 13, 0.9)', 'rgba(35, 110, 13, 0.85)', 'rgba(39, 117, 13, 0.7)', 'rgba(46, 130, 13, 0)']}
          locations={[0.0102, 0.7184, 0.823, 0.8678, 0.914, 1]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.footerGradient}>
            <ButtonClick text='MUA NGAY' color='white' borderColor='#B70002' fontSize={20}/>
            <ButtonClick text='Tìm hiểu ngay' color='#73A442' borderColor='#73A442' backgroundColor='white' fontSize={16} onClick={()=> navigation.navigate('Trang 6')}/>
            <SmallTextNote text={"* Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X,\nAnlene Gold 5X tại gian hàng Fonterra Official Retail Store trên Lazada"}fontSize={9}/>
            <View style={{paddingTop: 10}}> 
              <SmallTextNote text={"* Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ"}fontSize={9}/>
            </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: -1
  },
  container: {
    flex: 1,
    fontFamily: 'SVN-Gotham Black'
  },
  header: {
    width: '100%',
    height: '42%',
  },
  headerGradient: {
    width: '100%',
    paddingVertical: 10,
  },
  logo: {
    width: 98,
    height: 26,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  text: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16.14
  },
  footer: {
    width: '100%',
    height: '26%',
    position: 'absolute',
    bottom: 0,
  },
  footerGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSale: {
    position: 'absolute',
    bottom: '32%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1, 
  }
});
