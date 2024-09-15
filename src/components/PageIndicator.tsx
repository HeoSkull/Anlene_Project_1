import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

type PageIndicatorProps = {
    page?: string,
    onHomeArrowPress?: () => void,
    onPreviousPagePress?: () => void,
    onHomeButtonPress?: () => void,
    onNextPagePress?: () => void
}
export default function PageIndicator({page,onHomeArrowPress,onPreviousPagePress,onHomeButtonPress,onNextPagePress}: PageIndicatorProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <IconButton icon="arrow-left" size={24} iconColor='white' onPress={onHomeArrowPress} />
                <View style={styles.center}>
                    <IconButton icon="chevron-left" size={24} iconColor='white' onPress={onPreviousPagePress} />
                    <Text style={styles.pageIndicator}> Trang {page}/6</Text>
                    <IconButton icon="chevron-right" size={24} iconColor='white'onPress={onNextPagePress}/>
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

