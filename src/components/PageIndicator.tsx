import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

type PageIndicatorProps = {
    text?: string,
    onHomeArrowPress?: () => void,
    onPreviousPagePress?: () => void,
    onNextPagePress?: () => void,
    onHomeButtonPress?: () => void,
}
export default function PageIndicator({text,onHomeArrowPress,onPreviousPagePress,onNextPagePress,onHomeButtonPress,}: PageIndicatorProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <IconButton icon="arrow-left" size={24} iconColor='white' onPress={onHomeArrowPress} />
                <View style={styles.center}>
                    <IconButton icon="chevron-left" size={24} iconColor='white' onPress={onPreviousPagePress} />
                    <Text style={styles.pageIndicator}>{text}</Text>
                    <IconButton icon="chevron-right" size={24} iconColor='white' onPress={onNextPagePress} />
                </View>
                <IconButton icon="home" size={24} iconColor='white' onPress={onHomeButtonPress} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      },
    center: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      },
    pageIndicator: {
        color: 'white',
        fontSize: 16,
        marginRight: 10,
        fontWeight: 'bold',
      }
})

