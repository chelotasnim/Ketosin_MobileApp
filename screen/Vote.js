import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Container from '../component/Container';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Vote({ navigation }) {
    return (
        <Container padding={true}>
            <TouchableWithoutFeedback onPressIn={() => { navigation.navigate("home") }}>
                <View style={styles.header}>
                    <Icon
                        name="chevron-back-outline"
                        size={20}
                    />
                    <Text style={styles.headerContent}>Kembali</Text>
                </View>
            </TouchableWithoutFeedback>
            <ScrollView style={styles.cardList}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgb(1, 197, 235)", "rgb(4, 189, 231)"]} style={styles.card}>
                    <Image style={styles.cardImage} source={require('../assets/img/kandidat.png')} />
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgba(1, 197, 235, .6)", "rgb(4, 189, 231)"]} style={styles.cardShade}></LinearGradient>
                    <View style={styles.cardHeader}>
                        <TouchableNativeFeedback>
                            <Icon style={styles.radio}
                                name="stop-outline"
                                size={24}
                            />
                        </TouchableNativeFeedback>
                        <TouchableWithoutFeedback>
                            <Text style={styles.detailBtn}>Detail Kandidat</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.cardDetail}>
                        <Text style={styles.label}>Ketua</Text>
                        <Text style={styles.person}>Ahmad Soebardjo</Text>
                        <Text style={styles.label}>Wakil</Text>
                        <Text style={styles.person}>Yuviar Nuzul</Text>
                        <Text style={styles.slogan}>"Bersinergi untuk kantong pribadi dan kenikmatan sesaat"</Text>
                    </View>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgb(3, 137, 201)", "rgb(5, 125, 190)"]} style={styles.card}>
                    <Image style={styles.cardImage} source={require('../assets/img/kandidat2.png')} />
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgba(3, 137, 201, .6)", "rgb(5, 125, 190)"]} style={styles.cardShade}></LinearGradient>
                    <View style={styles.cardHeader}>
                        <TouchableNativeFeedback>
                            <Icon style={styles.radio}
                                name="stop-outline"
                                size={24}
                            />
                        </TouchableNativeFeedback>
                        <TouchableWithoutFeedback>
                            <Text style={styles.detailBtn}>Detail Kandidat</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.cardDetail}>
                        <Text style={styles.label}>Ketua</Text>
                        <Text style={styles.person}>Ahmad Soebardjo</Text>
                        <Text style={styles.label}>Wakil</Text>
                        <Text style={styles.person}>Yuviar Nuzul</Text>
                        <Text style={styles.slogan}>"Bersinergi untuk kantong pribadi dan kenikmatan sesaat"</Text>
                    </View>
                </LinearGradient>
                <TouchableWithoutFeedback onPressIn={() => { navigation.navigate('token') }}>
                    <View style={styles.sendBtn}>
                        <Text style={styles.sendBtnText}>VOTE</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    header: {
        width: SCREEN_WIDTH / 1.16,
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    headerContent: {
        fontSize: 16
    },
    cardList: {
        marginTop: 20,
        marginBottom: 0
    },
    card: {
        height: SCREEN_WIDTH / 1.2,
        width: SCREEN_WIDTH / 1.2,
        marginBottom: 16,
        borderRadius: 12
    },
    cardShade: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: 12,
    },
    cardImage: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "90%"
    },
    cardHeader: {
        padding: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    radio: {
        color: "rgb(255, 255, 255)"
    },
    detailBtn: {
        color: "rgba(255, 255, 255, .8)"
    },
    cardDetail: {
        position: "absolute",
        bottom: 0,
        padding: 14,
    },
    label: {
        fontSize: 12,
        color: "rgba(255, 255, 255, .7)"
    },
    person: {
        marginBottom: 8,
        color: "rgba(255, 255, 255, .9)"
    },
    slogan: {
        marginTop: 8,
        fontSize: 16,
        color: "rgba(255, 255, 255, .9)"
    },
    sendBtn: {
        padding: 16,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 12
    },
    sendBtnText: {
        textAlign: "center",
        color: "rgb(100, 100, 100)"
    }
});