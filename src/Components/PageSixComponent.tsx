import { StyleSheet, Text, View } from 'react-native';

export default function PageSixComponent() {
  return (
    <View style={styles.container}>
      <Text>Page Six Component</Text>
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
