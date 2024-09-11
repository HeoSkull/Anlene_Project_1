import React, {useState} from 'react';
import { View, StyleSheet,Image,Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';

import PageIndicator from '../../components/PageIndicator';
import Title from '../../components/Title';
import GradientBackground from '../../components/GradientBackground';
import SmallTextNote from '../../components/SmallTextNote';
import ButtonClick from '../../components/ButtonClick';
import ThreeImages from './ThreeImages';
type PageFourScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 4'>;

export default function PageFourComponent() {
  const navigation = useNavigation<PageFourScreenNavigationProp>();
  const [ShowAdditionalText, setShowAdditionalText] = useState(false);

  const goToPreviousPage = () => navigation.navigate('Trang 3');
  const goToNextPage = () => navigation.navigate('Trang 5');
  const goHome = () => navigation.navigate('Trang 1');
  const handlePress = () => {
    setShowAdditionalText(true);
  }
  const handleSubmit = () => {
    navigation.navigate('Trang 5');
  }
  return (
    <GradientBackground gradientColors={['#FD9500', '#FEBF00',"#FEBF00", '#FB8402' ]}>
      <View style={styles.container}>
        <PageIndicator 
          text='Trang 4/6'
          onHomeArrowPress={goHome}
          onPreviousPagePress={goToPreviousPage}
          onNextPagePress={goToNextPage}
          onHomeButtonPress={goToNextPage}
        />
        <ScrollView>
          <Image source={require('../../../assets/logo.png')} style={styles.logo}/>  
          <Title text="LƯU Ý MỘT CHÚT!" color='#187B33' fontSize={24}/>
          <Text style={styles.text}>Có vẻ bạn đang có sức đề kháng tốt nhưng cần chú ý đến hệ vận động hơn nhé vì sau tuổi 40 sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm: </Text>
          
          <ThreeImages/>

          <Text style={styles.text}> Rào cản vận động này có thể mang đến những cơn đau nhức mỏi không mong muốn. </Text>
          <Image source={require('../../../assets/bot_anlene_xanh.png')} style={styles.image}/>
          <SmallTextNote text="*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71" fontSize={6.11}/>
          <SmallTextNote text="**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation (2009). Hormones and Healthy Bones" fontSize={6.11}/>
          <Title text="LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ" color='#187B33' fontSize={17}/>
          <Text style={styles.text}>Ngay từ bây giờ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!</Text>

          {!ShowAdditionalText ? (
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Xem thêm</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.additionalText}>
              *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
              Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
            </Text>
          )}
          <View style={styles.buttonContainer}>
            <ButtonClick text='Hoàn thành' onClick={handleSubmit} borderColor='#FFC200' />
          </View>
        </ScrollView>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  text:{
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  image: {
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    paddingTop: 20,
  },
  buttonText: {
    color: "#187B33",
    fontSize: 13,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  additionalText: {
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
    fontWeight: '300',
    paddingHorizontal: 15,
    paddingTop: 20,
    fontStyle: 'italic'
  },
  buttonContainer: {
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: 30
  },
});
