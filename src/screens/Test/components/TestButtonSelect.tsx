import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
type TestButtonSelectProps = {
    img?: number,
    text?: string,
    onClick? :() => void;   
}
export default function TestButtonSelect({img, text, onClick}: TestButtonSelectProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <Image style={styles.img} source={img}/>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#71A162",
        gap: 6,
        flex: 1
    },
    img: {
        backgroundColor: "white",
        borderRadius: 100,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'whtie',
    }
})
