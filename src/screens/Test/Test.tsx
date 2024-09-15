import React, {useEffect, useRef} from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { RootStackParamList } from '../../navigator/RootNavigator';
import { StoreState } from '../../redux/store';
import GradientBackground from '../../components/GradientBackground';
import PageIndicator from '../../components/PageIndicator';
import TestPic from './components/TestPic';
type TestScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Trang 2'>;

export default function TestComponent() {
  const navigation = useNavigation<TestScreenNavigationProp>();

  const goHome = () => navigation.navigate('Trang 1');

  const { currentStep, stepData } = useSelector((state: StoreState) => state.steps);

  const flatListRef = useRef<FlatList>(null);
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
  return (
    <GradientBackground gradientColors={['#0E470E', '#20680D', '#2E820D', '#13500E']}>
      <View style={styles.container}>
        <PageIndicator 
          page='  2'
          onHomeArrowPress={goHome}
          onHomeButtonPress={goHome}
        />
        <FlatList 
          ref={flatListRef}
          data={stepData}
          renderItem={({item}) => (
            <View style={{width: screenWidth}}>
              <TestPic 
                title={item.title}
                img={item.img}
                textImg={item.textImg}
                textYes={item.textYes}
                textNo={item.textNo}
                isVideo={item.isVideo}
              />
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          getItemLayout={getItemLayout}
        />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
