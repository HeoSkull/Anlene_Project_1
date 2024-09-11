import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

type WelcomePicProps = {
    text?: string;
    image?: any;
}

export default function WelcomePic({text, image}: WelcomePicProps) {
    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={["#FFC200", "#F1ED86", "#ECD24A", "#ECD24A", "#FFC200"]}
                start={{x: 1, y: 1}}
                end={{x:0, y: 1}}
                style={styles.gradient}
            >
                <ImageBackground source={image} style={styles.image} resizeMode="contain">
                    <Text style={styles.text}>{text}</Text>
                </ImageBackground>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 85.52,
        height: 57,
        borderRadius: 18,
        overflow: 'hidden',
        borderWidth: 1.4,
        borderColor: '#478449',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '92%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#478449',
        fontSize: 13,
        fontFamily: 'SVN-Gotham Regular',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
