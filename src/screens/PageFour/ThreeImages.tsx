import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import GradientBackground from "../../components/GradientBackground";
import { khopthoaihoa, loangxuong, matco } from "../../../img/img";

type data = {
    id: number,
    upperContent: string,
    lowerContent: string,
    image: any,
    percentage?: string,
}

const list: data[] = [
    {
        id: 1,
        upperContent: "KHỐI CƠ",
        lowerContent: "MẤT ĐI",
        image: matco,
        percentage: "29%",
    },
    {
        id: 2,
        upperContent: "MẬT ĐỘ XƯƠNG",
        lowerContent: "SUY GIẢM",
        image: loangxuong,
        percentage: "20%",
    },
    {
        id: 3,
        upperContent: "KHỚP",
        lowerContent: "THOÁI HÓA",
        image: khopthoaihoa,
    }
]

function RenderItem({item}: {item: data}) {
    return (
        <View key={item.id} style={styles.containerRender}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image}/>
            </View>
            <View style={styles.containerText}>
                <GradientBackground gradientColors={['#0E470E', '#20680D', '#2E820D', '#13500E']}>
                    <View style={styles.textWrapper}>
                        <Text style={[styles.text, styles.upperText]}>{item.upperContent}</Text>
                        <Text style={[styles.text, styles.lowerText]}>{item.lowerContent}</Text>
                    </View>
                </GradientBackground>
            </View>
        </View>
    )
}

export default function ThreeImages() {
    return (
        <View style={styles.container}>
            {list.map((item) => <RenderItem key={item.id} item={item}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    containerRender: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    imageContainer: {
        position: 'relative',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    containerText: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        width: 100,  
        height: 50,  
        overflow: 'hidden', 
    },
    text: {
        fontSize: 12,
        fontWeight: '900',
        textAlign: 'center',
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upperText: {
        color: '#FFFFFF',
    },
    lowerText: {
        color: '#ECD24A',
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 10,
        marginVertical: 20,
    },
})