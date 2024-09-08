import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

type TextInputProps = {
    label: string;
    placeholder?: string;
    value: string;
    textOnChange: (value: string) => void;
    isObligatory?: boolean;
}

export default function TextInputLabel({ label, placeholder, value, textOnChange, isObligatory }: TextInputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}:{isObligatory ? <Text style={{ ...styles.label, color: '#ECD24A' }}>*</Text> : null}</Text>
            <TextInput
                style={[
                    styles.input,
                    value === '' && isObligatory ? styles.inputError : null
                ]} placeholder={placeholder}
                value={value}
                onChangeText={textOnChange}
            />

            {value === '' && isObligatory
                ? <Text style={styles.textError}>
                    Vui lòng {placeholder?.toLowerCase()}
                    </Text>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
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

