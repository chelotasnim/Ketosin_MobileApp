import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import React, { Component } from 'react';
import Container from '../component/Container';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../Config';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Kandidat = ({ kandidat, choose, updateChoose }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={["rgb(200, 200, 230)", "rgb(200, 200, 230)"]} style={styles.card}>
            <Image style={styles.cardImage} source={require('../assets/img/kandidat.png')} />
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={["rgba(0, 0, 20, .1)", "rgba(0, 0, 20, .6)"]} style={styles.cardShade}></LinearGradient>
            <View style={styles.cardHeader}>
                <TouchableNativeFeedback onPressIn={() => updateChoose(kandidat.id_kandidat)}>
                    <Icon style={styles.radio}
                        name={choose === kandidat.id_kandidat ? "radio-button-on-outline" : "radio-button-off-outline"}
                        size={32}
                    />
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback>
                    <Text style={styles.detailBtn}>Detail Kandidat</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.cardDetail}>
                <Text style={styles.label}>Ketua</Text>
                <Text style={styles.person}>{kandidat.nama_ketua}</Text>
                <Text style={styles.label}>Wakil</Text>
                <Text style={styles.person}>{kandidat.nama_wakil}</Text>
                <Text style={styles.slogan}>"{kandidat.slogan}"</Text>
            </View>
        </LinearGradient>
    );
};

export default class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose: null,
            token: '',
            status_vote: null,
            datas: []
        };
    };

    componentDidMount() {
        this.getData();
    };

    updateChoose = e => {
        this.setState({ choose: e });
    };

    async getData() {
        const token = await AsyncStorage.getItem('auth_token');
        this.setState({ token });

        axios.get(`${BASE_URL}kandidat`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.token}`
            }
        }).then(result => {
            this.setState({ status_vote: result.data.status_vote });
            this.setState({ datas: result.data.kandidats });
        }).catch(err => console.log('error : ', err));
    };

    render() {
        return (
            <Container padding={true} start={true}>
                <TouchableWithoutFeedback onPressIn={() => { this.props.navigation.navigate("home") }}>
                    <View style={styles.header}>
                        <Icon
                            name="chevron-back-outline"
                            size={20}
                        />
                        <Text style={styles.headerContent}>Kembali</Text>
                    </View>
                </TouchableWithoutFeedback>
                <ScrollView style={styles.cardList}>
                    {
                        this.state.datas.map((data) => {
                            if (data) {
                                return <Kandidat key={data.id_kandidat} kandidat={data} choose={this.state.choose} updateChoose={this.updateChoose} />;
                            };
                        })
                    }
                </ScrollView>
                {
                    this.state.status_vote === 0 && this.state.choose != null ?
                        <TouchableWithoutFeedback onPressIn={() => { this.props.navigation.navigate('token', { choose: this.state.choose }) }}>
                            <View style={styles.sendBtn}>
                                <Text style={styles.sendBtnText}>VOTE</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        :
                        <View style={[styles.sendBtn, { opacity: .4 }]}>
                            <Text style={styles.sendBtnText}>VOTE</Text>
                        </View>
                }
            </Container>
        );
    };
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
        marginBottom: 16,
        maxHeight: SCREEN_HEIGHT / 1.2
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
        marginTop: -16,
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
        textTransform: 'capitalize',
        color: "rgba(255, 255, 255, .9)"
    },
    slogan: {
        marginTop: 8,
        fontSize: 16,
        color: "rgba(255, 255, 255, .9)"
    },
    sendBtn: {
        padding: 16,
        width: SCREEN_WIDTH / 1.2,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 12
    },
    sendBtnText: {
        textAlign: "center",
        color: "rgb(100, 100, 100)"
    }
});