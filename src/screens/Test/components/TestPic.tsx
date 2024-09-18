import React,{ useState } from "react";
import {ScrollView, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ResizeMode, Video} from 'expo-av';
import { useSelector } from "react-redux";
import { Icon } from "react-native-paper";

import { resetUser } from "../../../redux/slices/userSlice";
import { useSteps } from "../hook/Steps";
import { StoreState } from "../../../redux/store";
import ProgressBar from "./ProgressBar";
import Title from "../../../components/Title";
import SmallTextNote from "../../../components/SmallTextNote";
import ButtonClick from "../../../components/ButtonClick";
import Dialogg from "../../../components/dialog";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type TestPicProps = {
    title: string,
    img: string | any,
    isVideo?: boolean,
    textImg: string,
    textYes: string,
    textNo: string,
}

export default function TestPic ({title, img, isVideo = true, textImg, textNo, textYes}:TestPicProps) {
    const navigation = useNavigation<NavigationProp<any>>();
    const [ isOpenDialog, setOpenDialog ] = useState(false);
    const [ isButtonDisabled, setButtonDisabled ] = useState(false);
    const { steps, currentStep } = useSelector((state: StoreState)=> state.steps)
    const { handleNextStep } = useSteps();
    const allSelected = steps.every(step => step != null)

    const handleYesClick = () => {
        handleNextStep(true);
        setButtonDisabled(true);
    };

    const handleNoClick = () => {
        handleNextStep(false);
        setButtonDisabled(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false)
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

            <View style={styles.container}>
                <Text style={styles.title}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>

                <ProgressBar />

                <Title text={title} fontSize={18} color="yellow"/>

                <View style={[styles.viewImage,
                steps[currentStep] === true && styles.viewImageClickYes,
                steps[currentStep] === false && styles.viewImageClickNo]}>
                    {isVideo ? (
                        <Video
                            source={{ uri: img }}
                            rate={1.0}
                            isMuted={true}
                            shouldPlay={true} 
                            isLooping={true} 
                            resizeMode={ResizeMode.COVER}
                            style={styles.img}
                        />
                    ) : (
                        <Image source={{ uri: img }} style={styles.img} />
                    )}

                    {steps[currentStep] === true && (
                        <View style={styles.iconImg}>
                            <Icon source="check-circle" size={50} color="#73A442" />
                        </View>
                    )}
                    {steps[currentStep] === false && (
                        <View style={styles.iconImg}> 
                            <Icon source="close-circle" size={50} color="#E23F30" />
                        </View>
                    )}
                </View>

                <Text style={styles.text}>{textImg}</Text>

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={[styles.button, steps[currentStep] === true && styles.buttonSelected]}
                        onPress={handleYesClick}
                        disabled={isButtonDisabled}
                    >
                        <View style={styles.buttonIcon}>
                            <Image source={require('../../../../assets/duoc.png')}/>
                        </View>
                        <Text style={styles.textButton}>{textYes}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, steps[currentStep] === false && styles.buttonSelected]}
                        onPress={handleNoClick}
                        disabled={isButtonDisabled}
                    >
                        <View style={styles.buttonIcon}>
                            <Image source={require('../../../../assets/khongduoc.png')}/>
                        </View>
                        <Text style={styles.textButton}>{textNo}</Text>
                    </TouchableOpacity>

                </View>

                <ButtonClick
                    text='XÁC NHẬN'
                    borderColor={allSelected ? '#B70002' : '#B8B8B8'}
                    backgroundColor={allSelected ? '#B70002' : '#B8B8B8'}
                    disable={allSelected ? false : true}
                    onClick={() => setOpenDialog(true)}
                />

                <SmallTextNote text={'*Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái.\n Đảm bảo vị trí tập an toàn để không té ngã.'} fontSize={10}/>

                <Dialogg
                    visible={isOpenDialog}
                    title="CẢM ƠN"
                    text="Bạn đã tham gia bài kiểm tra sức khoẻ. Hãy tiếp tục để có thể nhận kết quả kiểm tra sức khoẻ của bạn."
                    textYes="TIẾP TỤC"
                    textNo="HỦY"
                    onDismiss={handleCloseDialog}
                    onContinue={() => {
                        resetUser();
                        setOpenDialog(false);
                        navigation.navigate('Trang 3');
                    }}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width:'100%'
    },

    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
    },

    title: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '700'
    },

    viewImage: {
        marginTop:10,
        width: 330,
        height: 317,
    },

    viewImageClickYes: {
        borderColor: '#73A442',
        borderWidth: 3,
        elevation: 15,
        borderRadius: 15
    },

    viewImageClickNo: {
        borderColor: '#C6463A',
        borderWidth: 3,
        elevation: 15,
        borderRadius: 15
    },

    img: {
        width: '100%',
        height: '100%',
        borderRadius: 12
    },

    iconImg: {
        position: 'absolute',
        top: -15,
        right: -15,
        borderRadius: 50,
        elevation: 15,
    },

    text: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '500',
        lineHeight: 21,
        paddingHorizontal: 60
    },

    containerButton: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 5,
        marginBottom: 10,
        justifyContent: 'center'
    },

    button: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#71A162',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    buttonSelected: {
        borderWidth: 1.5,
        borderColor: '#ECD24A'
    },

    textButton: {
        color: 'white',
        fontSize: 12,
        fontWeight: '700',
        marginTop: 10,
        lineHeight: 16
    },

    buttonIcon: {
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white'
    }
});