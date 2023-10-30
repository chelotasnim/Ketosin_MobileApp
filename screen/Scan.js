import { StyleSheet, Dimensions } from "react-native";
import { React, Component } from "react";
import QRCodeScanner from "react-native-qrcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../Config";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Scan extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.check_auth();
  }

  async check_auth() {
    const token = await AsyncStorage.getItem("auth_token");
    if (token != null) {
      this.props.navigation.replace("home");
    };
  };

  readQr = async (data_scan) => {
    axios.post(`${BASE_URL}login`, { qr_code: data_scan.data }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(result => {
      if (result.data.token) {
        AsyncStorage.clear();
        AsyncStorage.setItem('auth_token', result.data.token);
        this.props.navigation.replace('home');
      } else if (result.data.token == null && result.data.status) {
        this.props.navigation.replace('index', {
          fail: {
            icon: 'qr-code-outline',
            message: 'QR Code Tidak Valid'
          }
        });
      };
    }).catch(err => {
      console.log('error : ', err);
      this.props.navigation.replace('index', {
        fail: {
          icon: 'radio-outline',
          message: 'Masalah Koneksi Jaringan'
        }
      });
    });
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.readQr}
        reactivate={false}
        showMarker={true}
        markerStyle={{
          borderColor: "white",
          backgroundColor: "transparent",
          borderRadius: 15,
        }}
        cameraStyle={{ height: SCREEN_HEIGHT }}
        cameraContainerStyle={{ backgroundColor: "black" }}
      />
    );
  };
};

export default Scan;

const styles = StyleSheet.create({});
