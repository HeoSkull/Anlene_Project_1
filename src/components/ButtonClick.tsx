import {Text, TouchableOpacity, StyleSheet} from 'react-native'
type ButtonProps = {
    text?: string,
    color?: string,
    borderColor?: string,
    fontSize?: number,
    backgroundColor?: string,
    disable?: boolean,
    onClick?: ()=> void
}

export default function ButtonClick({text, color='white', borderColor='', fontSize = 20, backgroundColor = '#B70002',disable = false, onClick}:ButtonProps) {
    return (
        <TouchableOpacity 
            style={[styles.button, {borderColor, backgroundColor}]}
            onPress={!disable ? onClick : undefined}
            disabled = {disable} 
            >
            <Text style={[styles.text, {color, fontSize}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10
    },
    text: {
        fontWeight: 'bold',
    },
})