import { StyleSheet, Text } from "react-native"

type TextProps = {
    text?: string,
    fontSize?: number,
}

export default function SmallTextNote({text, fontSize}:TextProps) {
    return (
        <Text style={[styles.text, {fontSize}]}>{text}</Text>
    )
}
const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 400,
        fontFamily: 'SVN-Gotham Regular',
        fontStyle: 'italic',
        textAlign: 'center'
    }
})   