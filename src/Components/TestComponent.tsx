import { StyleSheet, Text, View } from 'react-native';

export default function TestComponent() {
  return (
    <View style={styles.container}>
      <Text>Test Component</Text>
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
