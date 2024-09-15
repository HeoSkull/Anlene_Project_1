import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store';

export default function ProgressBar() {
  const {steps, currentStep, stepData} = useSelector((state: StoreState) => state.steps)
  const allCompleted = steps.every(step => step !== null);
  const Icons: Array<'numeric-1-circle' | 'numeric-2-circle' | 'numeric-3-circle' | 'numeric-4-circle'> = [
    'numeric-1-circle',
    'numeric-2-circle',
    'numeric-3-circle',
    'numeric-4-circle'
  ]
  return (
    <View style={styles.container}>
      { 
        steps.map((step, index) => (
          <React.Fragment key={index}>  
            <View style={styles.stepContainer}>
              {
                !allCompleted && index == currentStep ? (
                  <View style={styles.currentStep}>
                    <Icon source="checkbox-blank-circle" size={20} color="#ECD24A" />
                  </View>
                ) : (
                  step == null ? (
                    <Icon source={Icons[index]} size={35} color='#2C7E0D'/>
                  ) : (
                    <View style= {styles.completedStep}> 
                      <Icon source = {step ? 'check-circle' : 'close-circle'} size={30} color= {step ? 'white' : '#E23F30'}/>
                    </View>
                  )
                ) 
              }
              <Text style={styles.stepLabel}>{stepData[index]?.textStep}</Text>
            </View>
            {
              index < steps.length -1 && (
                <View style={[styles.line, index < currentStep ? styles.solid : styles.dash]}></View>
              )
            }
          </React.Fragment>
        ))
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#4B9032',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 12
  },
  stepContainer: {
    width: 80,
    flexDirection: 'column',
    alignItems: 'center',
  },
  currentStep: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ECD24A',
  },
  completedStep: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    borderRadius: 15,
    padding: 0,
    margin: 0
  },
  stepLabel: {
    color: 'white',
    marginTop: 4,
    fontSize: 12,
  },
  line: {
    width: 60,
    height: 1.5,
    marginHorizontal: -25,
    marginTop: -19,
  },
  solid: {
    backgroundColor: 'white',
  },
  dash: {
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'dotted',
  },
});