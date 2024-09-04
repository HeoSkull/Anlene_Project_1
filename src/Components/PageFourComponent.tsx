import { StyleSheet, Text, View } from 'react-native';

export default function PageFourComponent() {
  return (
    <View style={styles.container}>
      <Text>Page Four Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});