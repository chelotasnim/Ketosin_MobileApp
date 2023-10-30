import { Dimensions, Text, StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';
import React, { Component } from 'react';
import Container from '../component/Container';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Notif extends Component {
    render() {
        const { route } = this.props;
        const status = route.params.status;
        const message = route.params.message

        return (
            <Container>
                <View style={styles.card}>
                    <Image source={status === true ? require('../assets/img/vote.png') : require('../assets/img/fail.png')} style={styles.img} />
                    <Text style={styles.title}>{status === true ? "Berhasil" : "Gagal"}</Text>
                    <Text style={styles.subtitle}>{message}</Text>
                    {
                        status === true ?
                            <TouchableWithoutFeedback onPressIn={() => this.props.navigation.replace('home')}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Beranda</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            :
                            <TouchableWithoutFeedback onPressIn={() => this.props.navigation.replace('vote')}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Coba Lagi</Text>
                                </View>
                            </TouchableWithoutFeedback>
                    }
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 64,
        width: SCREEN_WIDTH / 1.2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 8
    },
    img: {
        width: "40%",
        objectFit: "contain"
    },
    title: {
        marginTop: 12,
        fontSize: 24
    },
    subtitle: {
        marginTop: 5,
        marginBottom: 32,
        maxWidth: "85%",
        lineHeight: 22,
        textAlign: "center",
        fontSize: 15
    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 32,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 5,
        elevation: 2
    }
});