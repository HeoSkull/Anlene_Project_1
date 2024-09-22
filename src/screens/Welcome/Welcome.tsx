import React from 'react';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { RootStackParamList } from '../..//navigator/RootNavigator';
import WelcomePic from './component/WelcomePic';
import ButtonClick from '../../components/ButtonClick';
import SmallTextNote from '../../components/SmallTextNote';
import Title from '../../components/Title';
import { MapDispatch } from '../../redux/store';
import { resetSteps } from '../../redux/slices/stepSlice';
import { resetUser } from '../../redux/slices/userSlice';
import { logo, mienphi, page1, voucher } from '../../../img/img';
type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 1'>;

export default function Welcome() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const dispatch = useDispatch<MapDispatch>();

  return (
    <View style={styles.container}>
      <ImageBackground source={page1} style={styles.backgroundImage}>
      {/*Top Content */}
      <View style={styles.header}>
        <LinearGradient
          colors={['#0E470E', '#1F660D', 'rgba(32, 104, 13, 0.9)', 'rgba(35, 110, 13, 0.85)', 'rgba(39, 117, 13, 0.7)', 'rgba(46, 130, 13, 0)']}
          locations={[0.0102, 0.7184, 0.823, 0.8678, 0.914, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.headerGradient}
        >
          {/*Page Indicator*/}
          <View style={styles.headerContent}>
            <View style={styles.placeholder} />
            <View style={styles.centerContent}>
              <IconButton icon="chevron-left" size={24} iconColor='white'  />
              <Text style={styles.pageIndicator}>Trang 1/6</Text>
              <IconButton icon="chevron-right" size={24} iconColor='white'  />
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Trang 1')}>
              <Image source={logo} style={styles.logo}/>
            </TouchableOpacity>
          </View>
          {/*End Page Indicator*/}

          {/*Top Content*/}
          <Title 
            text={"TẾT BẬN RỘN \nCƠ-XƯƠNG-KHỚP CÓ KHOẺ \nĐỂ CHU TOÀN?"}
            fontSize={22}
            // gradientColors={['#BA872C', '#E8E276', '#E1D770', '#885021']}
            // color= 'red'
            />          
          <View style={{ paddingHorizontal: 20}}>
            <Text style={styles.text}>Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?</Text>
            <Text style={styles.text}>Ngay lúc này, hãy 
              <Text style={{ color: '#E1D770', fontWeight:'700' }}> Kiểm tra Sức khoẻ Cơ-Xương-Khớp </Text> 
              cùng Anlene để Tết này cả nhà vui khoẻ đón Tết, {'\n'} trọn vẹn niềm vui.
            </Text>
          </View>
          {/*End Top Content */}
        </LinearGradient>
      </View>

      {/*Bottom Content*/}
      <View style={styles.buttonContainer}>
        <ButtonClick 
          text='KIỂM TRA NGAY'
          fontSize={20}
          borderColor='#E1D770'
          onClick={async () => { dispatch(resetSteps()), dispatch(resetUser()), navigation.navigate('Trang 2') }}
          />
      </View>
      </ImageBackground>

      <View style={styles.footer}>
        <LinearGradient
          colors={['#0E470E', '#1F660D', 'rgba(32, 104, 13, 0.9)', 'rgba(35, 110, 13, 0.85)', 'rgba(39, 117, 13, 0.7)', 'rgba(46, 130, 13, 0)']}
          locations={[0.0102, 0.7184, 0.823, 0.8678, 0.914, 1]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.footerGradient}>

            <View style={styles.welcomepic}>
              <WelcomePic text={`MIỄN \n PHÍ`} image = {mienphi}/>
              <View style={{padding: 10}}/>
              <WelcomePic text={`CHỈ \n5 PHÚT`}/>
              <View style={{padding: 10}}/>
              <WelcomePic text={`VOUCHER \n100K`} image = {voucher}/>
            </View>

            <SmallTextNote text={"Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene"} fontSize={10}/>
            <View style={{paddingVertical: 20}}> 
              <SmallTextNote text={"Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn\n thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường"} fontSize={10}/>
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
    marginBottom: 150
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
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  pageIndicator: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
  logo: {
    width: 80,
    height: 24,
    resizeMode: 'contain',
  },
  placeholder: {
    width: 80,
  },
  containerHeader: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500'
  },
  footer: {
    width: '100%',
    height: '20%',
    position: 'absolute',
    bottom: 0,
  },
  footerGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomepic: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20
  },
  pageText: {
    color: 'white',
    fontSize: 16,
  }
});
