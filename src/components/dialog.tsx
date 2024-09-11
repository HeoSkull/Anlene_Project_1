import { StyleSheet, Text } from 'react-native';
import { Dialog, Portal, Button } from 'react-native-paper';
import React from 'react';

type DialogCamOnProps = {
  visible: boolean,
  title?: string,
  text?: string,
  textYes?: string,
  textNo?: string,
  onDismiss: () => void,
  onContinue: () => void,
}

export default function Dialogg({ visible = false, onDismiss, onContinue, text, title, textNo, textYes }: DialogCamOnProps) {

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <Dialog.Title style={styles.title}>{title}</Dialog.Title>
                <Dialog.Content>
                    <Text style={styles.message}>
                        {text}
                    </Text>
                </Dialog.Content>
                <Dialog.Actions style={styles.actions}>
                <Button mode="outlined" onPress={onDismiss} style={styles.cancelButton}>
                    {textNo}
                </Button>
                <Button mode="contained" onPress={onContinue} style={styles.continueButton}>
                    {textYes}
                </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
    },
    message: {
        textAlign: 'center',
        fontWeight: '600'
    },
    actions: {
        justifyContent: 'space-around',
    },
    cancelButton: {
        borderColor: 'red',
        color: 'red',
        width: '40%'
    },
    continueButton: {
        backgroundColor: 'red',
        color: 'white',
        width: '40%'
    },
});