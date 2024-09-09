import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type GradientBackgroundProps = {
    color?: string,
    gradientColors?: string[],
    children?: React.ReactNode
};

export default function GradientBackground({ color, gradientColors, children }: GradientBackgroundProps) {
    // Render solid color background
    if (color) {
        return (
            <View style={[styles.container, { backgroundColor: color }]}>
                {children}
            </View>
        );
    }

    // Render gradient background
    return (
        <LinearGradient
            colors={gradientColors || ['#0E470E', '#20680D', '#2E820D', '#13500E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.2, 0.7, 1]}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});