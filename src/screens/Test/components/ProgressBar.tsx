import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

type Step = 'Cơ' | 'Xương' | 'Khớp' | 'Đề kháng';

type CustomProgressBarProps = {
  steps: Step[];
  currentStep: number;
  results: (boolean | null)[];
}

function CustomProgressBar({ steps, currentStep, results }: CustomProgressBarProps) {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <View style={styles.stepContainer}>
            {index < currentStep ? (
              <View style={styles.completedStep}>
                {results[index] ? (
                  <Icon source="check-circle" size={24} color="#478449" />
                ) : (
                  <Icon source="close-circle" size={24} color="#C6463A" />
                )}
              </View>
            ) : index === currentStep ? (
              <View style={styles.currentStep}>
                <Icon source="circle-double" size={24} color="#ECD24A" />
              </View>
            ) : (
              <View style={styles.futureStep}>
                <Text style={styles.stepText}>{index + 1}</Text>
              </View>
            )}
            <Text style={styles.stepLabel}>{step}</Text>
          </View>
          {index < steps.length - 1 && (
            <View style={[
              styles.connector,
              index < currentStep ? styles.completedConnector : styles.futureConnector
            ]} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  stepContainer: {
    alignItems: 'center',
  },
  futureStep: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentStep: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    backgroundColor: 'white',
    borderRadius: 15,
  },
  stepText: {
    color: 'white',
    fontWeight: 'bold',
  },
  stepLabel: {
    color: 'white',
    marginTop: 4,
    fontSize: 12,
  },
  connector: {
    flex: 1,
    height: 2,
    marginHorizontal: 8,
  },
  completedConnector: {
    backgroundColor: 'white',
  },
  futureConnector: {
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'dashed',
  },
});

export default CustomProgressBar;