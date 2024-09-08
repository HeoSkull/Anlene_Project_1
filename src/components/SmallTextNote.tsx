import { StyleSheet, Text } from "react-native"

type TextProps = {
    text?: string,
}

export default function SmallTextNote({text}:TextProps) {
    return (
        <Text style={[styles.text]}>{text}</Text>
    )
}
const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 10,
        fontWeight: 400,
        fontFamily: 'SVN_Gotham_Regular',
        fontStyle: 'italic',
        textAlign: 'center'
    }
})   