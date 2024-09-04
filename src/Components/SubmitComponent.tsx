import { StyleSheet, Text, View } from 'react-native';

export default function SubmitComponent() {
  return (
    <View style={styles.container}>
      <Text>Submit Component</Text>
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
