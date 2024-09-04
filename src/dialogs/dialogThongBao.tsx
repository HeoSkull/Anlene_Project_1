import { StyleSheet, Text, View } from 'react-native';
import { Dialog, Portal, Button } from 'react-native-paper';
import React from 'react';

export interface DialogCamOnProps {
  visible: boolean;
  onDismiss: () => void;
  onConfirm: () => void;
}

const _DialogThongBao = ({ visible, onDismiss, onConfirm }: DialogCamOnProps): JSX.Element => {

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <Dialog.Title style={styles.title}>THÔNG BÁO</Dialog.Title>
                <Dialog.Content>
                    <Text style={styles.message}>
                        Bạn có muốn hủy bỏ kết quả{'\n'}
                        kiểm tra sức khỏe trước đó không?{'\n'}
                    </Text>
                </Dialog.Content>
                <Dialog.Actions style={styles.actions}>
                <Button mode="outlined" onPress={onDismiss} style={styles.cancelButton}>
                    HỦY
                </Button>
                <Button mode="contained" onPress={onConfirm} style={styles.continueButton}>
                    ĐỒNG Ý
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

export const DialogThongBao = React.memo(_DialogThongBao);