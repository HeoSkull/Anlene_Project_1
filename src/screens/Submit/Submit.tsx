import React, {useState} from 'react';
import { View, StyleSheet, Image, Text,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import CheckBox from 'expo-checkbox';
import { useSelector } from 'react-redux';

import Title from '../../components/Title';
import PageIndicator from '../../components/PageIndicator';
import GradientBackground from '../../components/GradientBackground'; 
import TextInputLabel from '../../components/TextInput';
import SmallTextNote from '../../components/SmallTextNote';
import ButtonClick from '../../components/ButtonClick';
import Dialogg from '../../components/dialog';
import { useUser } from './hook/users'; 
import { StoreState } from '../../redux/store';

type SubmitScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 3'>;

export default function Submit() {
  const navigation = useNavigation<SubmitScreenNavigationProp>();   
  const { user, setUser, full, handleSubmit } = useUser()
  const { result, dataSubmit } = useSelector((state: StoreState) => state.steps);
  const [dialoggVisible, setDialoggVisible] = useState(false);
  
  const matchedResult = dataSubmit.find(item => item.result === result) || { titleSubmit: '', textSubmit: '' };

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
  const resultColor = result === "good" ? { gradientColors: resultColors.good } : 
                      result === 'normal' ? { gradientColors: resultColors.normal } : 
                      { color: resultColors.bad[0] };
  const backgroundProps = result === 'good' ? { gradientColors: gradientBackgrounds.good } : 
                          result === 'normal' ? { gradientColors: gradientBackgrounds.normal } : 
                          { color: gradientBackgrounds.bad[0] };
                      

  const onDismiss = () => {
    setDialoggVisible(false);
  }

  const onContinue = () => {
    navigation.navigate('Trang 1');
    setDialoggVisible(false);
  }

  const goHome = () => navigation.navigate('Trang 1');
  const goToPreviousPage = () => setDialoggVisible(true);
  const goNextPage = () => navigation.navigate('Trang 4')

  return (
    <GradientBackground {...backgroundProps}>
      <View style={styles.container}>
        <PageIndicator 
          page='3'
          onHomeArrowPress={goToPreviousPage}
          onPreviousPagePress={goToPreviousPage}
          onNextPagePress={goNextPage}
          onHomeButtonPress={goHome}
        />
        <ScrollView>
          <Image source={require('../../../assets/logo.png')} style={styles.logo}/>  
          <Title text="HOÀN THÀNH BÀI KIỂM TRA" fontSize={13} {...resultColor} />
          <Title text={matchedResult.titleSubmit} fontSize={26} {...resultColor}/>
          <Text style={[styles.text, {textAlign:'center', paddingHorizontal: 10}]}>{matchedResult.textSubmit}</Text>

          <View style={{padding: 10}}>
            <Text style={[styles.text, {fontSize: 15, textAlign:'center'}]}>
              Điền thông tin bên dưới để xem đầy đủ kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene.
            </Text>
          </View>

          <View style = {{paddingHorizontal: 24}}> 
            {['Họ tên', 'Số điện thoại', 'Email'].map((label, index) => (
              <TextInputLabel 
                key={index}
                label={label} 
                placeholder={`Nhập ${label.toLowerCase()}`} 
                value={user[label === 'Họ tên' ? 'fullName' : label === 'Số điện thoại' ? 'phone' : 'email']} 
                textOnChange={(text) => setUser({ ...user, [label === 'Họ tên' ? 'fullName' : label === 'Số điện thoại' ? 'phone' : 'email']: text })}  
                mustFill={label !== 'Email'}
                result={result}
              />
            ))}
            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 20}}>
              <CheckBox 
                value={user.isChecked} 
                onValueChange={(value) => setUser({ ...user, isChecked: value })}
                style={styles.checkbox} 
                color={user.isChecked ? 'abc'/*blank color*/ : 'white'}/>
              <Text style={styles.text}>
                Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ chương trình quảng cáo sản phẩm hay khuyến mãi nào
              </Text>
            </View>

            <View style={{padding: 10}}></View>
            <SmallTextNote text='Bằng cách điền bảng thông tin này, tôi đồng ý với việc thông tin của mình để xử lý dựa trên chính sách bảo mật của Anlene' fontSize={11}/>
            <View style={styles.buttonContainer}>
              <ButtonClick 
                text='Hoàn thành' 
                borderColor={full ? '#B70002' :'#B8B8B8'}
                backgroundColor={full ? '#B70002' :'#B8B8B8'}
                disable={!full}
                onClick={handleSubmit} />
            </View>
          </View>
        </ScrollView>
        <Dialogg 
          visible={dialoggVisible}  
          onDismiss={onDismiss} 
          onContinue={onContinue} 
          text='Bạn có muốn huỷ bỏ kết quả kiểm tra sức khoẻ trước đó không?' 
          title='THÔNG BÁO!' 
          textNo='HỦY' 
          textYes='ĐỒNG Ý'
        />
      </View>
    </GradientBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  logo: {
    width: 98,
    height: 26,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'SVN-Gotham Bold',
    lineHeight: 18,
    color: 'white',
  },
  checkbox: {
    borderRadius: 5,
    marginRight: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 30
  },
});
