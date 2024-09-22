import React, {useState} from 'react';
import { View, StyleSheet,Image,Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { useSelector } from 'react-redux';

import PageIndicator from '../../components/PageIndicator';
import Title from '../../components/Title';
import GradientBackground from '../../components/GradientBackground';
import SmallTextNote from '../../components/SmallTextNote';
import ButtonClick from '../../components/ButtonClick';
import ThreeImages from './ThreeImages';
import { StoreState } from '../../redux/store';
type PageFourScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 4'>;

export default function PageFour() {
  const navigation = useNavigation<PageFourScreenNavigationProp>();
  const [ShowAdditionalText, setShowAdditionalText] = useState(false);

  const { result, dataSubmit } = useSelector((state: StoreState) => state.steps);
  
  const matchedResult = dataSubmit.find(item => item.result === result) || { titleSubmit: '', textReview1: '', textReview: '', textReview3: '' };
  const img = result === "normal" 
    ? {uri: "https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/bot_anlene_xanh.png?alt=media&token=f1e33969-a64f-4b3a-89f7-406e724a769c"} 
    : {uri: "https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/bot_anlene_vang.png?alt=media&token=781f2ae8-900f-4e2b-a70c-d63b64adc303"};
  const gradientBackgrounds = {
    good: ['#0E470E', '#20680D', '#2E820D', '#13500E'],
    normal: ['#FD9500', '#FEBF00', "#FEBF00", '#FB8402'],
    bad: ["#969696"]
  };
  const resultColors = {
    good: ['#BA872C', '#E8E276', '#E1D770', '#885021'],
    normal: ["#376E48", "#187B33"],
    bad: ["#DF1E13"]
  };
  const normalLocation = [0, 0.2, 0.7, 1];
  const resultColor = result === "good" ? { gradientColors: resultColors.good } : 
                      result === 'normal' ? { gradientColors: resultColors.normal } : 
                      { color: resultColors.bad[0] };
  const backgroundProps = result === 'good' ? { gradientColors: gradientBackgrounds.good } : 
                          result === 'normal' ? { gradientColors: gradientBackgrounds.normal, location: normalLocation } : 
                          { color: gradientBackgrounds.bad[0] };

  const XemThemColor = result === "normal" ? { color: '#376E48' } : { color: '#ECD24A' };
  return (
    <GradientBackground {...backgroundProps}>
      <View style={styles.container}>
        <PageIndicator 
          page='4'
          onHomeArrowPress={() => navigation.navigate('Trang 1')}
          onPreviousPagePress={() => navigation.navigate('Trang 3')}
          onHomeButtonPress={() => navigation.navigate('Trang 1')}
        />
        <ScrollView>
          <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/anleneproject1.appspot.com/o/logo.png?alt=media&token=beb2187f-964e-44de-9b44-c51e6c892edf'}} style={styles.logo}/>  
          <Title text={matchedResult.titleSubmit} fontSize={26} {...resultColor}/ >
          <Text style={styles.text}>{matchedResult.textReview1} </Text>
          
          <ThreeImages/>

          <Text style={styles.text}> {matchedResult.textReview2} </Text>
          <Image source={img} style={styles.image}/>
          <SmallTextNote text="*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71" fontSize={6.11}/>
          <SmallTextNote text="**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation (2009). Hormones and Healthy Bones" fontSize={6.11}/>
          <Title text="LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ" fontSize={17} {...XemThemColor} />
          <Text style={styles.text}>{matchedResult.textReview3 }</Text>

          {!ShowAdditionalText ? (
            <TouchableOpacity style={styles.button} onPress={() => setShowAdditionalText(true)}>
              <Text style={[styles.buttonText, {...XemThemColor}]} >Xem thêm</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.additionalText}>
              *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
              Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
            </Text>
          )}
          <View style={styles.buttonContainer}>
            <ButtonClick text='Hoàn thành' onClick={() => navigation.navigate('Trang 5')} borderColor='#FFC200' />
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
    paddingVertical: 10
  },
  buttonText: {
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
    alignItems: 'center',
    paddingTop: 10
  }
});
