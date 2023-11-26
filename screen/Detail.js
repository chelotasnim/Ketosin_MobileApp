import { Dimensions, Text, StyleSheet, View, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Container from '../component/Container';
import Box from '../component/Box';
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../Config';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            kandidat: {
                id: null,
                ketua: "",
                wakil: ""
            },
            datas: {
                slogan: "",
                visi: "",
                misi: []
            }
        };
    };

    componentDidMount() {
        this.getData();
    };

    async getData() {
        const token = await AsyncStorage.getItem('auth_token');
        this.setState({ token });

        const { route } = this.props;
        const id_kandidat = route.params.id_kandidat;
        axios.get(`${BASE_URL}kandidat/detail/${id_kandidat}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.token}`
            }
        }).then(result => {
            this.setState({
                kandidat: {
                    id: id_kandidat,
                    ketua: result.data.kandidat.nama_ketua,
                    wakil: result.data.kandidat.nama_wakil
                },
                datas: {
                    slogan: result.data.kandidat.slogan,
                    visi: result.data.kandidat.visi,
                    misi: result.data.kandidat.misi
                }
            });
        }).catch(err => console.log('error : ', err));
    }

    render() {
        return (
            <Container padding={true} start={true}>
                <TouchableWithoutFeedback onPressIn={() => { this.props.navigation.navigate("vote") }}>
                    <View style={styles.header}>
                        <Icon
                            name="chevron-back-outline"
                            size={20}
                        />
                        <Text style={styles.headerContent}>Kembali</Text>
                    </View>
                </TouchableWithoutFeedback>
                {
                    this.state.kandidat.id == 1 ?
                        <View style={styles.img_container}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgb(1, 197, 235)", "rgb(4, 189, 231)"]} style={styles.img_box}>
                                <Image source={require('../assets/img/paslon-cowo.png')} style={styles.img_isset} />
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgba(1, 197, 235, .6)", "rgba(4, 189, 231, .6)"]} style={styles.fade_bg}></LinearGradient>
                                <View style={styles.profile}>
                                    <Text style={styles.label}>Ketua</Text>
                                    <Text style={styles.name}>{this.state.kandidat.ketua}</Text>
                                </View>
                            </LinearGradient>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgb(3, 137, 201)", "rgb(5, 125, 190)"]} style={styles.img_box}>
                                <Image source={require('../assets/img/paslon-cewe.png')} style={styles.img_isset} />
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgba(3, 137, 201, .6)", "rgba(5, 125, 190, .6)"]} style={styles.fade_bg}></LinearGradient>
                                <View style={styles.profile}>
                                    <Text style={styles.label}>Wakil</Text>
                                    <Text style={styles.name}>{this.state.kandidat.wakil}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                        :
                        <View style={styles.img_container}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgb(1, 197, 235)", "rgb(4, 189, 231)"]} style={styles.img_box}>
                                <Image source={require('../assets/img/no-pic.png')} style={styles.img} />
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgba(1, 197, 235, .6)", "rgba(4, 189, 231, .6)"]} style={styles.fade_bg}></LinearGradient>
                                <View style={styles.profile}>
                                    <Text style={styles.label}>Ketua</Text>
                                    <Text style={styles.name}>{this.state.kandidat.ketua}</Text>
                                </View>
                            </LinearGradient>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgb(3, 137, 201)", "rgb(5, 125, 190)"]} style={styles.img_box}>
                                <Image source={require('../assets/img/no-pic.png')} style={styles.img} />
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgba(3, 137, 201, .6)", "rgba(5, 125, 190, .6)"]} style={styles.fade_bg}></LinearGradient>
                                <View style={styles.profile}>
                                    <Text style={styles.label}>Wakil</Text>
                                    <Text style={styles.name}>{this.state.kandidat.wakil}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                }
                <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                    <Box datas={{ label: "Slogan", content: this.state.datas.slogan }} />
                    <Box datas={{ label: "Visi", content: this.state.datas.visi }} />
                    {
                        this.state.datas.misi &&
                        <Box list={true} datas={{ label: "Misi", content: this.state.datas.misi }} />
                    }
                </ScrollView>
            </Container>
        )
    }
}

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
    img_container: {
        marginTop: 24,
        flexDirection: "row",
        gap: 12
    },
    img_box: {
        height: SCREEN_HEIGHT / 2.5,
        width: SCREEN_WIDTH / 2.85,
        borderRadius: 5,
        overflow: "hidden"
    },
    img: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "75%",
        objectFit: "cover"
    },

    img_isset: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "85%",
        objectFit: "cover"
    },

    fade_bg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    },
    profile: {
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    label: {
        color: "rgba(255, 255, 255, .7)"
    },
    name: {
        lineHeight: 22,
        textTransform: "capitalize",
        fontSize: 16,
        color: "rgb(255, 255, 255)"
    },
    content: {
        width: SCREEN_WIDTH / 1.35,
        marginTop: 16,
    }
})