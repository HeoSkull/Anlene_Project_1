import { StyleSheet, Text } from 'react-native';
import { Dialog, Portal, Button } from 'react-native-paper';
import React from 'react';

type DialogCamOnProps = {
  visible: boolean;
  onDismiss: () => void;
  onContinue: () => void;
}

export default function DialogCamOn({ visible = false, onDismiss, onContinue }: DialogCamOnProps) {

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <Dialog.Title style={styles.title}>CẢM ƠN</Dialog.Title>
                <Dialog.Content>
                    <Text style={styles.message}>
                        Bạn đã tham gia bài kiểm tra sức khoẻ{'\n'}
                        Hãy tiếp tục để có thể nhận kết quả{'\n'}
                        kiểm tra sức khoẻ của bạn.
                    </Text>
                </Dialog.Content>
                <Dialog.Actions style={styles.actions}>
                <Button mode="outlined" onPress={onDismiss} style={styles.cancelButton}>
                    HỦY
                </Button>
                <Button mode="contained" onPress={onContinue} style={styles.continueButton}>
                    TIẾP TỤC
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