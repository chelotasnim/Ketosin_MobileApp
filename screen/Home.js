import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import Container from "../component/Container";
import Card from "../component/Card";
import { BASE_URL } from "../Config";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Home({ navigation }) {
  const [state_token, setStateToken] = useState();
  const [user_name, setUserName] = useState();
  const [user_grade, setUserGrade] = useState();

  useEffect(() => {
    async function setToken() {
      const token = await AsyncStorage.getItem('auth_token');
      if (token === null) {
        navigation.replace('index');
      };

      setStateToken(token);

      axios.get(`${BASE_URL}profile`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${state_token}`
        }
      }).then(result => {
        setUserName(result.data.peserta.nama_peserta);
        setUserGrade(result.data.peserta.kelas);
      }).catch(err => console.log('error : ', err));
    };
    setToken();
  });

  logout = () => {
    axios.get(`${BASE_URL}logout`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${state_token}`
      }
    }).then(result => {
      if (result.data.status) {
        AsyncStorage.removeItem('auth_token');
        navigation.replace('index');
      };
    }).catch(err => console.log('error : ', err));
  };

  return (
    <Container padding={true}>
      <View style={styles.top}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgb(1, 197, 235)", "rgb(4, 189, 231)"]} style={[styles.box1, { height: SCREEN_HEIGHT / 3.2 }]}>
          <Image
            source={require("../assets/img/kandidat.png")}
            style={{ width: 175, height: 175, objectFit: "contain", position: "absolute", bottom: 0 }}
            resizeMode="center"
          />
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgba(1, 197, 235, .6)", "rgba(4, 189, 231, .6)"]} style={styles.fade_bg}></LinearGradient>
          <Text style={[styles.boxTitle, { fontSize: 24 }]}>KETOSIN</Text>
        </LinearGradient>
        <View style={styles.box2}>
          <Text style={styles.vs}>VOTE</Text>
        </View>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgb(3, 137, 201)", "rgb(5, 125, 190)"]} style={[styles.box1, { height: SCREEN_HEIGHT / 4 }]}>
          <Image
            source={require("../assets/img/kandidat2.png")}
            style={{ width: 175, height: 175, objectFit: "contain", position: "absolute", bottom: 0 }}
            resizeMode="center"
          />
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["rgba(3, 137, 201, .6)", "rgba(5, 125, 190, .6)"]} style={[styles.fade_bg]}></LinearGradient>
          <Text style={[styles.boxTitle, { fontSize: 18 }]}>KETOSIN</Text>
        </LinearGradient>
      </View>
      <View style={styles.bottom}>
        <Card
          navigation={navigation}
          screen={"vote"}
          header={"Vote"}
          title={"Pilih Kandidat Disini"}
          iconUrl={require('../assets/img/vote.png')}
          margin={false}
        />
        <Card
          navigation={navigation}
          screen={"about"}
          header={"Tentang"}
          title={"Baca Seputar Ketosin"}
          iconUrl={require('../assets/img/version.png')}
          margin={true}
        />
        <Card
          header={"Keluar"}
          title={"Akhiri Sesi Akun Anda"}
          iconUrl={require('../assets/img/logout.png')}
          margin={false}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 25,
          backgroundColor: "white",
          elevation: 5,
        }}
      >
        <Text
          style={{
            color: "rgb(150,150,150)",
            textAlign: "center",
            fontSize: 12,
          }}
        >
          <Text style={{
            color: "rgb(200, 200, 200)"
          }}>Masuk Sebagai :
          </Text>
          <Text style={{ textTransform: "capitalize" }}> {user_name}</Text>
          <Text> {user_grade}</Text>
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 32,
    paddingBottom: 30
  },
  bottom: {
    flex: 1.2,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  box1: {
    position: "relative",
    width: SCREEN_WIDTH / 4.3,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start"
  },
  fade_bg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  box2: {
    height: SCREEN_HEIGHT / 4.3,
    backgroundColor: "rgb(182, 185, 241)",
    width: SCREEN_WIDTH / 4.8,
    borderRadius: 10,
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: SCREEN_HEIGHT / 8
  },
  vs: {
    transform: [{ rotate: "-90deg" }],
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: "white"
  },
  boxTitle: {
    width: "250%",
    transform: [{ rotate: "-90deg" }],
    zIndex: 999,
    letterSpacing: 2,
    textAlign: "center",
    fontFamily: "Montserrat-Light",
    color: "rgba(255, 255, 255, .5)"
  },
});