import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

type TextInputProps = {
    label: string;
    placeholder?: string;
    value: string;
    mustFill?: boolean;
    textOnChange: (text: string) => void;
    result?: string | null,
}

export default function TextInputLabel({ label, placeholder ='', value, mustFill = false, textOnChange, result }: TextInputProps) {
    const colorResult = result === 'normal' ? "#187B33" : '#ECD24A'
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}:{mustFill && <Text style={{ ...styles.label, color: colorResult }}>*</Text>}</Text>
            <TextInput
                style={[styles.input, value === '' && mustFill ? styles.inputError : null]} 
                placeholder={placeholder}
                value={value}
                onChangeText={textOnChange}
            />
            {value === '' && mustFill && <Text style={{ ...styles.textError, color: colorResult }}>Vui lòng {placeholder?.toLowerCase()}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        paddingVertical: 5,
        justifyContent: 'center',
    },
    label: {
        fontSize: 14,
        color: 'white',
        fontWeight: '400',
    },
    input: {
        height: 45,
        paddingLeft: 20,
        color: 'black',
        backgroundColor:'white',
        borderRadius: 5,
    },
    inputError: {
        borderColor: '#ECD24A',
        borderWidth: 1.5
    },
    textError: {
        fontSize: 12, 
        color: '#ECD24A', 
        top: 3
    }
})

