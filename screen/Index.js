import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";
import React, { useEffect } from "react";
import Container from "../component/Container";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Index({ navigation }) {
  let route = useRoute();
  let fail = route.params?.fail;

  useEffect(() => {
    async function checkAuth() {
      const token = await AsyncStorage.getItem('auth_token');
      if (token != null) {
        navigation.replace('home');
      };
    };
    checkAuth();
  });

  return (
    <Container padding={true}>
      <View style={Styles.cardContainer}>
        <View style={Styles.section}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../assets/img/kpo.png")}
              resizeMode={"cover"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
            />
          </View>
        </View>
        <View style={Styles.section}>
          <Text style={Styles.header}>Vote Pilihanmu</Text>
          <Text style={Styles.subHeader}>
            Masuk dengan scan QR untuk mulai memilih kandidat
          </Text>
          {
            fail &&
            <View style={{
              marginTop: -12,
              marginBottom: 24,
              flexDirection: "row",
              alignItems: "center",
              gap: 5
            }}>
              <Icon name={fail.icon} size={16} color="rgb(255, 50, 50)" />
              <Text style={{ fontSize: 12, color: "rgb(255, 50, 50)" }}>{fail.message}</Text>
            </View>
          }

          <TouchableWithoutFeedback onPressIn={() => navigation.replace("scan")}>
            <View style={Styles.btn}>
              <View style={Styles.btnFloat}></View>
              <Text style={Styles.btnText}>Scan QR</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Container>
  );
}

const Styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
  },

  section: {
    flex: 1,
    paddingHorizontal: 35,
    paddingVertical: 20,
    justifyContent: "center",
    position: "relative",
  },

  header: {
    bottom: 20,
    fontFamily: "Montserrat-Bold",
    fontSize: 28,
    color: "rgb(72,72,72)",
  },

  subHeader: {
    bottom: 20,
    paddingTop: 10,
    lineHeight: 22,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "rgb(72,72,72)",
  },

  btn: {
    position: "absolute",
    bottom: 32,
    left: 38,
    flexDirection: "row",
    alignItems: "center",
  },

  btnFloat: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
  },

  btnText: {
    fontFamily: "Montserrat-SemiBold",
    color: "rgb(72,72,72)",
    fontSize: 16,
    marginLeft: -24,
  },
});
