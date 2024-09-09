import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function CardSale() {
    return (
        <View style={styles.container}>
            <View style={styles.containerWhite}>
                <Text style={styles.text1}>
                    MÃ GIẢM GIÁ
                </Text>
                <Text style={styles.text2}>
                    ANLEANMUMW88
                </Text>
            </View>
            <View style={styles.containerGreen}>
                <Text style={styles.text3}>
                    ÁP DỤNG TẠI
                </Text>
                <Image source={require('../../../assets/lazada.png')} />
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: "center",
    position:'absolute',
    top: -20,
    zIndex: 3,
    fontWeight: '700',
    fontFamily: 'SVN-Gotham Bold',
  },
  containerWhite: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 8,
  },
  containerGreen: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 12,
  },
  text1: {
    fontSize: 10.7,
    color: '#73A442',
  },
  text2: {
    fontSize: 16.81,
    color: '#478449',
  },
  text3: {
    fontSize: 15.28,
    color: '#ECD24A',
  },
});
