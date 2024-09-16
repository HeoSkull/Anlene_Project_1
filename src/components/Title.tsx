import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

type TitleProps = {
    text: string,
    fontSize?: number,
    color?: string,
    gradientColors?: string[]
};

export default function Title({ text, fontSize = 24, color, gradientColors =['#BA872C', '#E8E276', '#E1D770', '#885021']}: TitleProps) {
    const titleStyle = [styles.title, { fontSize }];
    // Render single color text 
    if (color) {
        return (
            <View style={styles.container}>
                <Text 
                    style={[titleStyle, { color }]} 
                    numberOfLines={3} 
                    adjustsFontSizeToFit
                    >
                    {text}
                </Text>
            </View>
        );
    }
    
    // Render gradient text
    return (
        <View style={styles.container}>
            <MaskedView
                style={styles.maskedView}
                maskElement={
                    <Text style={[titleStyle, {opacity: 1}]} adjustsFontSizeToFit>
                        {text}
                    </Text>
                }
            >
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1 }}
                >
                    <Text style={[titleStyle, {opacity: 0}]} adjustsFontSizeToFit>
                        {text}
                    </Text>
                </LinearGradient>
            </MaskedView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    maskedView: {
        flexDirection: 'row',
        marginVertical: 5
    },
    title: {
        fontWeight: 'bold',
        // fontFamily: 'SVN-Gotham Regular',
        textAlign: 'center',
        lineHeight: 30
    }
});