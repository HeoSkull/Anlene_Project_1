import React, {useState} from 'react';
import { View, StyleSheet, Image, Text,ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import CheckBox from 'expo-checkbox';
import { useDispatch } from 'react-redux';

import Title from '../../components/Title';
import PageIndicator from '../../components/PageIndicator';
import GradientBackground from '../../components/GradientBackground'; 
import TextInputLabel from '../../components/TextInput';
import SmallTextNote from '../../components/SmallTextNote';
import ButtonClick from '../../components/ButtonClick';
import Dialogg from '../../components/dialog';
import { MapDispatch } from '../../redux/store';
import { resetSteps } from '../../redux/slices/stepSlice';
import { resetUser } from '../../redux/slices/userSlice';
type SubmitScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 3'>;

export default function SubmitComponent() {
  const navigation = useNavigation<SubmitScreenNavigationProp>();
  const dispatch = useDispatch<MapDispatch>();
  const [checked, setChecked] = useState(false);
  const [dialoggVisible, setDialoggVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const onDismiss = () => {
    setDialoggVisible(false);
  }
  const onContinue = () => {
    dispatch(resetSteps()), 
    dispatch(resetUser()),
    navigation.navigate('Trang 2');
    setDialoggVisible(false);
  }
  const goToPreviousPage = () => navigation.navigate('Trang 2');
  const goHome = () => navigation.navigate('Trang 1');
  const goNextPage = () => navigation.navigate('Trang 4')
  const handleSubmit = () => {
    setDialoggVisible(true);
  }
  return (
    <GradientBackground color='#969696'>
      <View style={styles.container}>
        <PageIndicator 
          page='3'
          onHomeArrowPress={handleSubmit}
          onPreviousPagePress={goToPreviousPage}
          onNextPagePress={goNextPage}
          onHomeButtonPress={goHome}
        />
        <ScrollView>
          <Image source={require('../../../assets/logo.png')} style={styles.logo}/>  
          <Title text="HOÀN THÀNH BÀI KIỂM TRA" color='#DF1E13' fontSize={13}/>
          <Title text="LƯU Ý MỘT CHÚT" color='#DF1E13' fontSize={26}/>
          <Text style={styles.text}>Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần</Text>
          <Text style={styles.text}>quan tâm đến hệ vận động nhiều hơn nhé,</Text>
          <Text style={styles.text}>bởi sau tuổi 40,...</Text>
          <View style={{padding: 10}}>
            <Text style={[styles.text, {fontSize: 15}]}>Điền thông tin bên dưới để xem đầy đủ</Text>
            <Text style={[styles.text, {fontSize: 15}]}>kết quả và nhận ngay Voucher ưu đãi lên</Text>
            <Text style={[styles.text, {fontSize: 15}]}>đến 100.000đ từ Anlene.</Text>
          </View>
          <View style = {{paddingHorizontal: 24}}> 
            <TextInputLabel label="Họ tên" placeholder="Nhập họ và tên" value={name} textOnChange={setName}  mustFill={true}/>
            <View style={{padding: 5}}></View>
            <TextInputLabel label="Số điện thoại" placeholder="Nhập số điện thoại" value={phone} textOnChange={setPhone}  mustFill={true}/>
            <View style={{padding: 5}}></View>
            <TextInputLabel label="Email" placeholder="Nhập email" value={email} textOnChange={setEmail}  mustFill={false}/>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 20}}>
              <CheckBox value={checked} onValueChange={setChecked} style={styles.checkbox} color={checked ? '#DF1E13' : 'white'}/>
              <Text style={styles.text}>Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ chương trình quảng cáo sản phẩm hay khuyến mãi nào</Text>
            </View>
            <View style={{padding: 10}}></View>
            <SmallTextNote text='Bằng cách điền bảng thông tin này, tôi đồng ý với việc thông tin của mình để xử lý dựa trên chính sách bảo mật của Anlene' fontSize={11}/>
            <View style={styles.buttonContainer}>
              <ButtonClick text='Hoàn thành' onClick={goNextPage} />
            </View>
          </View>
        </ScrollView>
        <Dialogg visible={dialoggVisible}  onDismiss={onDismiss} onContinue={onContinue} text='Bạn có muốn huỷ bỏ kết quả kiểm tra sức khoẻ trước đó không?' title='THÔNG BÁO!' textNo='HỦY' textYes='ĐỒNG Ý'/>
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
  text: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'SVN-Gotham Bold',
    lineHeight: 18,
    color: 'white',
    alignSelf: 'center'
  },
  checkbox: {
    borderRadius: 5,
    marginRight: 5,
  },
  buttonContainer: {
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: 30
  },
});
