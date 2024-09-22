import React, {useEffect, useRef} from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import { RootStackParamList } from '../../navigator/RootNavigator';
import { MapDispatch, StoreState } from '../../redux/store';
import GradientBackground from '../../components/GradientBackground';
import PageIndicator from '../../components/PageIndicator';
import TestPic from './components/TestPic';
import { resetSteps } from '../../redux/slices/stepSlice';

type TestScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 2'>;

export default function Test() {
  const navigation = useNavigation<TestScreenNavigationProp>();
  const dispatch = useDispatch<MapDispatch>();
  const flatListRef = useRef<FlatList>(null);
  const { currentStep, stepData } = useSelector((state: StoreState) => state.steps);

  useEffect(() => {
    if (flatListRef.current && currentStep >= 0 && currentStep < stepData.length) {
      flatListRef.current.scrollToIndex({ index: currentStep, animated: true });
    }
  }, [currentStep]);
  
  const { width: screenWidth } = Dimensions.get('window');
  const getItemLayout = (data: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const goHome = () => navigation.navigate('Trang 1');
  const onContinue = async () => {
    if (currentStep===0) navigation.navigate('Trang 1')
    dispatch(resetSteps());
  }

  return (
    <GradientBackground gradientColors={['#0E470E', '#20680D', '#2E820D', '#13500E']}>
      <View style={{flex: 1}}>
        <PageIndicator 
          page='  2'
          onHomeArrowPress={goHome}
          onPreviousPagePress={onContinue}
          onHomeButtonPress={goHome}
        />
        <FlatList 
          ref={flatListRef}
          data={stepData}
          renderItem={({item}) => (
            <View style={{width: screenWidth}}>
              <TestPic {...item}/>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          getItemLayout={getItemLayout}
        />
      </View>
    </GradientBackground>
  );
}